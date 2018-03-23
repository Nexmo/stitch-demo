import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { MessagingService } from './messaging.service';
import { DataService } from './data.service';
import { KeysPipe } from './keys.pipe';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import { CreateConversationDialogComponent } from './create-conversation-dialog/create-conversation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConversationsComponent,
    KeysPipe,
    MapToIterablePipe,
    CreateConversationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [MessagingService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [CreateConversationDialogComponent]
})
export class AppModule { }
