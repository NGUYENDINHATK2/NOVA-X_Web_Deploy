import SignInPage from "@/modules/Auth/SignIn/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sign In',
    description: 'Sign In',
};


export default async function SignIn() {
    return <SignInPage />;
}
