import ErrorPage from "@/app/error";
import { store } from "@/lib/services/store";
import type { ComponentType } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function withErrorHandling<T extends { data: Record<string, any> }>(
  Component: ComponentType<T>,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  apiCalls: { key: string; call: any }[]
) {
  return async function WrappedComponent(props: Omit<T, "data">) {
    try {
      const responses = await Promise.all(
        apiCalls.map(({ call }) => store.dispatch(call.initiate()))
      );

      if (responses.some((res) => res.isError)) {
        return (
          <ErrorPage
            reset={() => {
              apiCalls.forEach(({ call }) => store.dispatch(call.initiate()));
            }}
          />
        );
      }

      const data = responses.reduce((acc, res, index) => {
        acc[apiCalls[index].key] = res.data;
        return acc;
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      }, {} as Record<string, any>);

      return <Component {...(props as T)} data={data} />;
    } catch (_error) {
      return <ErrorPage reset={() => window.location.reload()} />;
    }
  };
}
