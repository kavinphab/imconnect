import { options } from "@/app/utils/auth"
import NextAuth from "next-auth";

// eslint-disable-next-line new-cap
const handler = NextAuth(options);
export { handler as GET, handler as POST };