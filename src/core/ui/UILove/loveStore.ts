// loveStore.ts
type Listener = () => void;

let hearts: { id: number; x: number; y: number }[] = [];
const listeners = new Set<Listener>();

export const loveStore = {
  getHearts: () => hearts,

  show: (x: number, y: number) => {
    const id = Date.now();
    hearts.push({ id, x, y });
    notify();

    setTimeout(() => {
      hearts = hearts.filter(h => h.id !== id);
      notify();
    }, 800);
  },

  clear: () => {
    hearts = [];
    notify();
  },

  subscribe: (cb: Listener) => {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
};

function notify() {
  listeners.forEach(cb => cb());
}
