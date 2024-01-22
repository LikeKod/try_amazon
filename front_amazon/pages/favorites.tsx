import Catalog from "@/components/ui/catalog/Catalog";
import Layout from "@/components/ui/layout/Layout";
import Meta from "@/components/ui/Meta";
import { useProfile } from "@/hooks/useProfile";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";



const FavoritesPage: NextPageAuth = () => {
    const {profile} = useProfile()

    return (
        <Meta title='Favorites'>
            <Layout>
                <Catalog products={profile?.favorites || [] } title='Favorites' />
            </Layout>
        </Meta>
    )
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage