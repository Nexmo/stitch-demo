var express = require('express');
var router = express.Router();
var Nexmo = require('nexmo');
var config = require('../config');

var nexmo = new Nexmo({apiKey: config.API_KEY, apiSecret: config.API_SECRET, applicationId: config.APP_ID, privateKey: config.PRIVATE_KEY});

const adminAcl = {
  "paths": {
    "/v1/sessions/**": {},
    "/v1/users/**": {},
    "/v1/conversations/**": {}
  }
}

const nonAdminAcl = {
  "paths": {
    "/v1/sessions/**": {
      "methods": ["GET"]
    },
    "/v1/users/*": {
      "methods": ["GET"]
    },
    "/v1/conversations/*": {
      "methods": ["GET", "POST", "PUT"]
    }
  }
}

router.get('/createjoin/:user', function(req, res, next) {
  var admin = req.query.admin
  nexmo.users.get({}, (error, response) => {
    if (error) {
      res.json(error)
    } else {
      var filteredUsers = response.filter(user => user.name == req.params.user)
      if (filteredUsers.length === 0) {
        nexmo.users.create({
          name: req.params.user
        }, (error, response) => {
          if (error) {
            res.json(error)
          } else {
            nexmo.conversations.members.add(config.CONVERSATION_ID, {
              "action": "join",
              "user_id": response.id,
              "channel": {
                "type": "app"
              }
            }, (error, response) => {
              if (error) {
                res.json(error)
              } else {
                res.json({
                  user_jwt: Nexmo.generateJwt(config.PRIVATE_KEY, {
                    application_id: config.APP_ID,
                    sub: req.params.user,
                    exp: new Date().getTime() + 86400,
                    acl: admin
                      ? adminAcl
                      : nonAdminAcl
                  })
                });
              }
            })
          }
        })
      } else {
        res.json({
          user_jwt: Nexmo.generateJwt(config.PRIVATE_KEY, {
            application_id: config.APP_ID,
            sub: req.params.user,
            exp: new Date().getTime() + 86400,
            acl: admin
              ? adminAcl
              : nonAdminAcl
          })
        });
      }
    }
  });
});

module.exports = router;
