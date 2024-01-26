import { CategoryService } from "@/assets/styles/services/category.service"
import { useQuery } from "react-query"




export const useCategories = () => {
    const { data, isLoading } = useQuery(
        ['get category'],
        () => CategoryService.getAll(),
        {
            select: ({ data }) => data,
        },
    )

    return {data, isLoading}
}