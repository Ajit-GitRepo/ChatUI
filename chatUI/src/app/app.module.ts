import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileOptionComponent } from './profile-option/profile-option.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatCardComponent } from './chat-list/chat-card/chat-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileOptionComponent,
    ChatListComponent,
    ChatWindowComponent,
    ChatCardComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
