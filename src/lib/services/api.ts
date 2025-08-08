import {
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { REHYDRATE } from "redux-persist";
import type { RootState } from "./store";
import type { Action } from "@reduxjs/toolkit";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_URL}/api`,
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = (getState() as RootState).auth.token;
    headers.set("current-version", "1.00");
    headers.set("client-type", "web");
    headers.set("Content-Type", "application/json");
    if (token?.accessToken) {
      headers.set("Authorization", `Bearer ${token.accessToken}`);
    }
    return headers;
  },
});

const mutex = new Mutex();

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && (result.error.status === 401 || result.error.status === 403) && (api.endpoint !== "login" && api.endpoint !== "register")) {
    if (mutex.isLocked()) {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    } else {
      // const release = await mutex.acquire();
      // const refreshToken = TokenService.getToken();
      // try {
      //   interface RefreshResult {
      //     access_token: string;
      //   }
      //   const refreshResult = (await baseQuery(
      //     {
      //       url: "/auth/refresh",
      //       method: "POST",
      //       body: {
      //         refresh_token: refreshToken?.refreshToken,
      //       },
      //     },
      //     api,
      //     extraOptions,
      //   )) as { data: RefreshResult };

      //   if (refreshResult.data) {
      //     api.dispatch({
      //       type: UPDATE_ACCESS_TOKEN,
      //       payload: refreshResult.data?.access_token,
      //     });
      //     result = await baseQuery(args, api, extraOptions);
      //   } else {
      //     api.dispatch({ type: USER_LOGOUT });
      //   }
      // } catch (_e) {
      //   api.dispatch({ type: USER_LOGOUT });
      // } finally {
      //   release();
      // }
    }
  }
  return result;
};


function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string
  payload: RootState
  err: unknown
} {
  return action.type === REHYDRATE
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [],
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      if (action.key === 'key used with redux-persist') {
        return action.payload
      }
      return undefined
    }
  },
  endpoints: (_build) => ({}),
});
