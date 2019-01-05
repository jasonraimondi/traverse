import { ClearErrorMessageAction } from '@/infrastructure/redux/actions/ClearErrorMessage.action';
import { SetErrorMessageAction } from '@/infrastructure/redux/actions/SetErrorMessage.action';
import { store } from '@/renderer';

export function flashErrorMessage(message: string, ttl: number = 5000): void {
  store.dispatch(SetErrorMessageAction(message));
  setTimeout(() => store.dispatch(ClearErrorMessageAction()), ttl);
}
