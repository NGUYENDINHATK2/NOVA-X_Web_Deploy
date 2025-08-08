"use client";
import { useSafeExecute } from "@/common/hooks";
import useAppNavigation from "@/common/hooks/useAppNavigation";
import { Button } from "@/core/adnui/components/ui/button";
import { useLove } from "@/core/ui/UILove/useLove";
import {  useMutationWithGlobalLoading } from "@/lib/hooks";
import { useLoginMutation } from "@/lib/services/modules";

const SignInPage: React.FC = () => {
    const safeExecute = useSafeExecute();
    const [login] = useMutationWithGlobalLoading(useLoginMutation);
    const { show } = useLove();
    const { goToHome } = useAppNavigation();
    const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        await safeExecute(() => {
            return login({
                email: 'mo2chen1208@gmail.com',
                password: '12345678Cop@',
            }).unwrap();
        },
            (data) => {
                goToHome()
            },
            (error) => {
                console.log(error);
            },
            // () => {}
        );
    };


    return (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div className="w-screen h-screen flex flex-col items-center justify-center text-black px-2"
            onClick={(e) => {
                show(e.clientX, e.clientY);
            }}
        >

            <h1 className="text-2xl font-bold">Sign In</h1>
            <p className="text-gray-600">Please enter your credentials to sign in.</p>
            <Button
                className="mt-6"
                onClick={handleSignIn}
            >
                Sign In
            </Button>
        </div>
    )
};

export default SignInPage;