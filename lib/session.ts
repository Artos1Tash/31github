import { User, getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoker from 'jsonwebtoken';
import {JWT} from 'next-auth/jwt';
import { truncate } from "fs";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    // jwt: {
    //     encode: ({secret, token}) => {

    //     },
    //     decode : ({secret, token}) => {

    //     }
    // },
    theme: {
        colorScheme: 'light',
        logo: '/logo.png'
    },
    callbacks: {
        async session({ session }){
            return session;
        },
        async signIn({ user }: {user: AdapterUser | User}){
            try{

                return true
            } catch (error: any){
                console.log(error);
                return false
            }
        }
    }
}