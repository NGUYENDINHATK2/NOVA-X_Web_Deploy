import { apiSlice } from '@/lib/services/api';
import type {
  ILoginPayload,
  ILoginResponse,
} from './type';

const auth = '/auth';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ILoginResponse, ILoginPayload>({
      query: (body) => ({
        url: `${auth}/login`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = authApi;
