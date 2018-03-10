import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ConversationsComponent } from '../conversations/conversations.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
      path: 'conversations',
      component: ConversationsComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }