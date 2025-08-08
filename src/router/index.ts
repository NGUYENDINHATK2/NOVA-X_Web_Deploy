const home = "/";
const signIn = "/signin";
export const routesRoot = {
    home,
    signIn,
};

const routerAuth = {
    signIn: signIn,
};

const routerApp = {
    home: home,
    auth: routerAuth,
};

export default routerApp;
