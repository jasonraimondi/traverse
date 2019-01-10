import { BehaviorSubject } from 'rxjs';

export type Level = 'error' | 'success';

export interface FlashMessage {
  message: string;
  level: Level;
}

export interface FlashMessageList {
  [id: number]: FlashMessage;
}

class Flash {
  readonly messageList$: BehaviorSubject<FlashMessageList>;

  constructor(messageList: FlashMessageList = {}) {
    this.messageList$ = new BehaviorSubject(messageList);
  }

  success(message: string, ttl?: number) {
    this.flashMessage(message, 'success', ttl);
  }

  error(message: string, ttl?: number) {
    this.flashMessage(message, 'error', ttl);
  }

  private flashMessage(message: string, level: Level, ttl: number = 2750): void {
    const randomId = this.addMessageToList({message, level});
    setTimeout(() => this.removeMessageFromList(randomId), ttl);
  }

  private addMessageToList(message: FlashMessage): number {
    const randomId = Date.now();
    const messageList = {
      ...this.messageList$.value,
      [randomId]: message,
    };
    this.messageList$.next(messageList);
    return randomId;
  }

  private removeMessageFromList(id: number): void {
    const existing = this.messageList$.value;
    delete existing[id];
    this.messageList$.next(existing);
  }
}

export const flashMessage = new Flash();
