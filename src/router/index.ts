const home = "/";
const signIn = "/signin";
const guilds = "/guilds";
export const routesRoot = {
    home,
    signIn,
    guilds,
};

const routerAuth = {
    signIn: signIn,
};

const routerGuilds = {
    guilds: guilds,
};

const routerApp = {
    home: home,
    auth: routerAuth,
    guilds: routerGuilds,
};

export default routerApp;
