import { BehaviorSubject } from 'rxjs';

export type Level = 'error' | 'success';

export interface FlashMessage {
  message: string;
  level: Level;
}

export const flashMessages$ = new BehaviorSubject<FlashMessage>(null);

export function flashRandomSuccessMessage(ttl: number = 5000) {
  const messages = [
    'Yippie-kay-yay, Mr. Falcon!',
    'Hey-o! It worked!',
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  flashSuccessMessage(randomMessage, ttl);
}

export function flashSuccessMessage(message: string, ttl: number = 5000): void {
  flashMessage(message, 'success', ttl);
}

export function flashErrorMessage(message: string, ttl: number = 5000): void {
  flashMessage(message, 'error', ttl);
}

function flashMessage(message: string, level: Level, ttl: number): void {
  flashMessages$.next({ message, level });
  setTimeout(() => flashMessages$.next(null), ttl);
}
