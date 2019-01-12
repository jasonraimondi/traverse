export interface IActionResponse<T = any> {
  type: string;
  payload: T;
}
