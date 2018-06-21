import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var ConversationClient: any;
const GATEWAY_URL = "http://nexmo-in-app-demo.herokuapp.com/api/";

@Injectable()
export class MessagingService {


  constructor(private http: HttpClient) {

  }

  initialize() {
    this.client = new ConversationClient(
      {
        debug: false
      }
    )
  }

  public client: any

  public getUserJwt(username: string): Promise<any> {
    return this.http.get(GATEWAY_URL + "jwt/" + username + "?admin=true").toPromise().then((response: any) => response.user_jwt)
  }

  public createUser(username: string): Promise<any> {
    return this.http.post(GATEWAY_URL + "users/", { username: username, admin: true }).toPromise().then((response: any) => response.user_jwt)
  }

  public createConversation(displayName: string): Promise<any> {
    return this.http.post(GATEWAY_URL + "conversations/", { displayName: displayName }).toPromise()
  }

  public joinConversation(conversationId: string, userId: string) {
    return this.http.put(GATEWAY_URL + "conversations/", { conversationId: conversationId, userId: userId, action: "join" })
  }

  public getUsers(): Promise<any> {
    return this.http.get(GATEWAY_URL + "users/").toPromise()
  }

  public getConversations(): Promise<any> {
    return this.http.get(GATEWAY_URL + "conversations/").toPromise().then((response: any) => response._embedded.conversations)
  }

  public getConversation(conversationId): Promise<any> {
    return this.http.get(GATEWAY_URL + "conversations/" + conversationId).toPromise()
  }

}
