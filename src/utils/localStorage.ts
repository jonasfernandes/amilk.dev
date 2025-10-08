export class LocalStorage {
  static isBrowser = typeof window !== 'undefined'

  static get(key: string) {
    if (!this.isBrowser) return
    return JSON.parse(localStorage.getItem(key) || '{}')
  }

  static set(key: string, value: any) {
    if (!this.isBrowser) return
    localStorage.setItem(key, JSON.stringify(value))
  }

  static remove(key: string) {
    if (!this.isBrowser) return
    localStorage.removeItem(key)
  }
}
