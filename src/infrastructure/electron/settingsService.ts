import * as settings from 'electron-settings';

interface JsonObject {
  [x: string]: JsonValue;
}

interface JsonArray extends Array<JsonValue> {}

type JsonValue = string | number | boolean | null | JsonArray | JsonObject;

export class ElectronSettingService {
  public static has(keyPath: string): boolean {
    return settings.has(keyPath);
  }

  public static set<T>(keyPath: string, value: JsonValue | T | any, options?): void {
    settings.set(keyPath, value, options);
  }

  public static setAll(obj: JsonValue, options?): void {
    settings.setAll(obj, options);
  }

  public static get<T>(keyPath: string, defaultValue?: any, options?): T | any {
    return settings.get(keyPath, defaultValue, options);
  }

  public static getAll(): JsonValue {
    return settings.getAll();
  }

  public static delete(keyPath: string, options?): void {
    settings.delete(keyPath, options);
  }

  public static deleteAll(options?): void {
    settings.deleteAll(options);
  }

  public static file(): string {
    return settings.file();
  }

  public static setPath(filePath: string): void {
    settings.setPath(filePath);
  }

  public static clearPath(): void {
    settings.clearPath();
  }
}
