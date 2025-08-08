import { loveStore } from "./loveStore";

export const useLove = () => {
  return {
    show: loveStore.show,
    clear: loveStore.clear,
  };
};
