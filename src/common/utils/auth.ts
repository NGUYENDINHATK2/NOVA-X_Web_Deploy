import { cookies } from "next/headers";
 
export async function getAuthFromCookie() {
  const cookieStore = cookies();
  const cookieName = encodeURIComponent("persist:auth");
  const authCookie = (await cookieStore).get(cookieName);
 
  try {
    if (!authCookie?.value) return null;
 
    const rawAuth = decodeURIComponent(authCookie.value);
    if (!rawAuth) return null;
 
    const auth = JSON.parse(rawAuth);
    if (!auth?.token) return null;
 
    const token = JSON.parse(auth.token);
    auth.token = token;
    return auth;
  } catch (error) {
    console.error("Error parsing auth cookie:", error);
    return null;
  }
}
 