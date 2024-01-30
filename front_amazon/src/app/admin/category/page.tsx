
import { NO_INDEX_PAGE } from "@/constants/app.constants";
import Categories from "./Categorie";


export const metadata = {
    title: 'Categories',
    ...NO_INDEX_PAGE
}

export default function CategoriesPage() {
    return <Categories />
}