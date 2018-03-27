import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MessagingService } from '../messaging.service';
import { DataService } from '../data.service';
import { CreateConversationDialogComponent } from '../create-conversation-dialog/create-conversation-dialog.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  constructor(private ms: MessagingService, private ds: DataService, private router: Router, public dialog: MatDialog) { }

  buildConversationsArray(conversations) {
    let array = [];

    for (let conversation in conversations) {
      array.push(conversations[conversation]);
    }

    return array
  }

  ngOnInit() {
    if (!this.ds.app) {
      this.router.navigate(['/']);
    } else {
      this.ds.app.getConversations().then(conversations => {
        this.userConversations = conversations;
        this.conversations = this.buildConversationsArray(conversations)
        this.allConversations = []
        this.ms.getConversations().then(conversations => {
          for (let i = 0; i < conversations.length; i++) {
            this.ms.getConversation(conversations[i].uuid).then(
              (conversation) => {
                if (!this.userConversations[conversation.uuid]) {
                  this.allConversations.push(conversation)
                }
              }
            )

          }
        })
      })
      this.ms.getUsers().then(users => this.users = users)

    }
  }

  selectConversation(conversationId: string) {
    this.ds.app.getConversation(conversationId).then(conversation => {
      this.selectedConversation = conversation

      Observable.from(conversation.events.values()).subscribe(
        event => {
          this.events.push(event)
        }
      )

      this.selectedConversation.on("text", (sender, message) => {
        this.events.push(message)

      })
      console.log("Selected Conversation", this.selectedConversation)
    }
    )
  }

  createConversation(): void {
    let dialogRef = this.dialog.open(CreateConversationDialogComponent, {
      width: '300px',
      data: this.ds.app.me
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed")
      this.ds.app.getConversations().then((conversations) => {
        this.conversations = this.buildConversationsArray(conversations)
      })
    });
  }


  sendText(text: string) {
    this.selectedConversation.sendText(text).then(() => this.text = "")
  }

  private nameToImage(name) {
    var hash = this.hashStr(name);
    var index = hash % 200;
    if (index < 100) {
      return {
        prefix: "",
        index: index
      }
    } else {
      return {
        prefix: "wo",
        index: index - 100
      }
    }
  }

  private hashStr(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      hash += charCode;
    }
    return hash;
  }

  conversations: any
  allConversations: any
  userConversations: any
  users: any
  selectedConversation: any
  text: string
  events: Array<any> = []
}
