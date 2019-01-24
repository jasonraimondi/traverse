import { BehaviorSubject, Subject } from 'rxjs';

export type Level = 'error' | 'success';

export interface FlashMessage {
  message: string;
  level: Level;
  isSuccess: boolean;
  isError: boolean;
}

export interface FlashMessageList {
  [id: number]: FlashMessage;
}

export class FlashMessageService {
  constructor(readonly messageList$: BehaviorSubject<FlashMessageList>) {
  }

  static create() {
    return new FlashMessageService(
      new BehaviorSubject<FlashMessageList>({}),
    );
  }

  success(message: string, ttl?: number) {
    this.flashMessage(message, 'success', ttl);
  }

  error(message: string, ttl?: number) {
    this.flashMessage(message, 'error', ttl);
  }

  private flashMessage(message: string, level: Level, ttl: number = 2750): void {
    const randomId = this.addMessageToList({
      message,
      level,
      isSuccess: level === 'success',
      isError: level === 'error',
    });
    setTimeout(() => this.removeMessageFromList(randomId), ttl);
  }

  private addMessageToList(message: FlashMessage): number {
    const randomId = Date.now() + Math.floor(Math.random() * 10);
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

export const flashMessage = FlashMessageService.create();
