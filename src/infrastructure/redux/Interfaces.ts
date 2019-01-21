export interface ActionResponse<T = any> {
  type: string;
  payload: T;
}

export interface RemoteSource {
  loaded: boolean;
  loading: boolean;
  error?: string;
}
