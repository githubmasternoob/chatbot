import { Component, OnDestroy, OnInit } from '@angular/core';

import { CometChat } from '@cometchat-pro/chat';

const listenerId = 'ChatScreenListener';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent{
  selectedUser: CometChat.UserObj;
  messages: CometChat.TextMessage[] | null = null;

  constructor() {
  }


}
