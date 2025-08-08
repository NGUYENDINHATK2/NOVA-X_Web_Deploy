import { loadingEvents } from './loading-events';

const loadingState = {
  loadingIds: new Set<string | number>(),

  show(id: string | number = 'global') {
    this.loadingIds.add(id);
    loadingEvents.emit();
  },

  hide(id: string | number = 'global') {
    this.loadingIds.delete(id);
    loadingEvents.emit();
  },

  reset() {
    this.loadingIds.clear();
    loadingEvents.emit();
  },

  isVisible() {
    return this.loadingIds.size > 0;
  },

  async promise<T>(
    promise: Promise<T>,
    opts?: {
      id?: string | number;
      onSuccess?: (data: T) => void;
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      onError?: (err: any) => void;
    }
  ): Promise<T> {
    const id = opts?.id ?? 'global';
    this.show(id);

    try {
      const result = await promise;
      opts?.onSuccess?.(result);
      return result;
    } catch (err) {
      opts?.onError?.(err);
      throw err;
    } finally {
      this.hide(id);
    }
  },
};

export const loading = loadingState;
