import type { Storage } from 'redux-persist';
import Cookies from 'js-cookie';

const cookieStorage: Storage = {
  getItem(key: string) {
    if (typeof window === 'undefined') {
      return Promise.resolve(null);
    }
    const value = Cookies.get(key) || null;
    return Promise.resolve(value);
  },
  setItem(key: string, value: string) {
    if (typeof window === 'undefined') {
      return Promise.resolve();
    }
    Cookies.set(key, value, { expires: 7, path: '/' });
    return Promise.resolve();
  },
  removeItem(key: string) {
    if (typeof window === 'undefined') {
      return Promise.resolve();
    }
    Cookies.remove(key, { path: '/' });
    return Promise.resolve();
  },
};

export default cookieStorage;
