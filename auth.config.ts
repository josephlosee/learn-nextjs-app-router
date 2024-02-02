import type { NextAuthConfig} from 'next-auth';

export const authConfig = {
    pages: { 
        signIn: '/login' // Use the login form rather than NextJS Auth's default
    },
    callbacks: {
        authorized({auth, request: {nextUrl}} ) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard){
                if (isLoggedIn) return true;
                return false; //Redirect unauthenticated to login
            } else if(isLoggedIn){
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers: [],

} satisfies NextAuthConfig;

