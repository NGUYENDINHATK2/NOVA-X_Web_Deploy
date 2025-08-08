import routerApp from '@/router';
import { useRouter } from 'next/navigation';

const useAppNavigation = () => {
  const router = useRouter();

  const goToHome = () => {
    router.replace(routerApp.home);
    router.refresh();
  };

  const goToLogin = () => {
    router.push(routerApp.auth.signIn);
    router.refresh();
  };

  const navigate = (url: string, params: Record<string, string> = {}, query: Record<string, string> = {}) => {
    const routerWithParams = Object.keys(params).reduce((acc, key) => {
      return acc.replace(`:${key}`, params[key]);
    }, url);

    const routerWithQuery = Object.keys(query).reduce((acc, key, index) => {
      return `${acc}${index === 0 ? "?" : "&"}${key}=${query[key]}`;
    }, routerWithParams);
    router.push(routerWithQuery);
  };

  const goBack = () => {
    router.back();
  };

  return {
    goToHome,
    goToLogin,
    navigate,
    goBack,
  };
};

export default useAppNavigation;
