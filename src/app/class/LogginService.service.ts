import { Injectable } from '@angular/core';
@Injectable()
export class LogginService {

  sendMessageToConsole(message: string): void {
    console.log(message);
  }
}
