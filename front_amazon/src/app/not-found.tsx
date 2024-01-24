import Heading from "@/components/ui/Heading";
import Layout from "@/components/ui/layout/Layout";
import Link from "next/link";



export default function NotFound() {
    return (
        <Layout>
            <Heading>Not Found</Heading>
            <p>Could not finde requested resource</p>
            <p>
                View{' '}
                <Link href='/explorer' className="text-primary">
                    all products
                </Link>
            </p>
        </Layout>
    )
}