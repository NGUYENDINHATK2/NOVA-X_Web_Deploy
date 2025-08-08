import { redirect } from "next/navigation";
import { getAuthFromCookie } from "../utils/auth";
import routerApp from "@/router";
 
interface AuthGuardProps {
    children: React.ReactNode;
}
 
export default async function AuthGuard({ children }: AuthGuardProps) {
    const auth = await getAuthFromCookie();
    console.log("AuthGuard", auth);
    if (!auth || !auth.token?.accessToken) {
        redirect(routerApp.auth.signIn);
    }
    return <>{children}</>;
}
 