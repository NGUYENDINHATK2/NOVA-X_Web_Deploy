import { toast } from "sonner";

export const useSafeExecute = () => {
  return async <T>(
    fn: () => Promise<T>,
    onSuccess?: (data: T) => void,
    onError?: (error: unknown) => void,
    onEnd?: () => void
  ) => {
    try {
      const data = await fn();
      onSuccess?.(data);
    } catch (error) {
      onError?.(error);
      toast.error("An error occurred");
    } finally {
      onEnd?.();
    }
  };
};
