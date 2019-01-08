import { BehaviorSubject } from 'rxjs';

export type Level = 'error' | 'success';

export interface FlashMessage {
  message: string;
  level: Level;
}

export interface FlashMessageList {
  [id: number]: FlashMessage;
}

export const flashMessageList$ = new BehaviorSubject<FlashMessageList>([]);

export function flashSuccessMessage(message: string, ttl?: number): void {
  flashMessage(message, 'success', ttl);
}

export function flashErrorMessage(message: string, ttl?: number): void {
  flashMessage(message, 'error', ttl);
}

function flashMessage(message: string, level: Level, ttl: number = 2750): void {
  const randomId = addMessageToList({message, level});
  setTimeout(() => removeMessageFromList(randomId), ttl);
}

function addMessageToList(message: FlashMessage): number {
  const randomId = Date.now();
  const messageList = {
    ...flashMessageList$.value,
    [randomId]: message,
  };
  flashMessageList$.next(messageList);
  return randomId;
}

function removeMessageFromList(id: number): void {
  const existing = flashMessageList$.value;
  delete existing[id];
  flashMessageList$.next(existing);
}
