import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessagingService } from '../messaging.service';


@Component({
  selector: 'app-create-conversation-dialog',
  templateUrl: './create-conversation-dialog.component.html',
  styleUrls: ['./create-conversation-dialog.component.css']
})
export class CreateConversationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateConversationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public ms: MessagingService) { }

  display_name: string = ""

  onCreateConversation() {
    this.ms.createConversation(this.display_name).then((conversation) => {
      console.log(conversation, this.data);
      
      this.ms.joinConversation(conversation.id, this.data.id).subscribe(() => {
        this.dialogRef.close()
      })
    })
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

   ngOnInit() {
   }

}
