import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessagingService } from '../messaging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  constructor(private ms: MessagingService, private ds: DataService, private router: Router) { }

  ngOnInit() {
    if (!this.ds.app) {
      this.router.navigate(['/']);
    } else {
      this.ds.app.getConversations().then(conversations => this.conversations = conversations)
      this.ms.getUsers().then(users => this.users = users)
    }
  }

  selectConversation(conversationId: string) {
    this.ds.app.getConversation(conversationId).then(conversation => {
      this.selectedConversation = conversation
      // this.events = []
      // for (let event in conversation.events) {
      //   this.events.push(conversation.events[event])
      // }
      // this.selectedConversation.on("text", (sender, message) => {
      //   this.events.push(message)
      // })
      console.log("Selected Conversation", this.selectedConversation)
    }
    )
  }

  createConversation(displayName: string) {
    this.ms.createConversation(displayName)
  }

  sendText(text:string) {
    this.selectedConversation.sendText(text);
    this.text = "";
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
  users: any
  selectedConversation: any
  text: string
  events: Array<any> = []
}
