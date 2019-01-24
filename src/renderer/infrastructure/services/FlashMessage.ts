import { BehaviorSubject } from 'rxjs';

export type Level = 'error' | 'success';

export interface FlashMessage {
  id: number;
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

  remove(id: number): void {
    const existing = this.messageList$.value;
    delete existing[id];
    this.messageList$.next(existing);
  }

  private flashMessage(message: string, level: Level, ttl: number = 2750): void {
    const id = Date.now() + Math.floor(Math.random() * 10);
    this.addMessageToList({
      id,
      message,
      level,
      isSuccess: level === 'success',
      isError: level === 'error',
    });
    setTimeout(() => this.remove(id), ttl);
  }

  private addMessageToList(message: FlashMessage): void {
    const messageList = {
      ...this.messageList$.value,
      [message.id]: message,
    };
    this.messageList$.next(messageList);
  }
}

export const flashMessage = FlashMessageService.create();
