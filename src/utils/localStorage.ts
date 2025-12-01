export class LocalStorage {
  static get(key: string) {
    const item = localStorage.getItem(key) || '{}';

    try {
      return JSON.parse(item);
    } catch (error) {
      return item;
    }
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}
