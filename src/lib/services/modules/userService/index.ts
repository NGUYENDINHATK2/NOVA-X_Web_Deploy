import type { IUser } from '@/common/types';
import { apiSlice } from '../../api';

const user = '/users';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getListUser: build.query<IUser[], void>({
      query: () => user,
    }),
  }),
});

export const { 
  useGetListUserQuery,
  useLazyGetListUserQuery,
 } = userApi;
