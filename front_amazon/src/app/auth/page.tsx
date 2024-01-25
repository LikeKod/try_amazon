import Auth from "@/app/auth/auth";
import { NO_INDEX_PAGE } from "@/constants/app.constants";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Auth',
    ...NO_INDEX_PAGE
}

export default function AuthPage() {
    
    
    return <Auth />

}