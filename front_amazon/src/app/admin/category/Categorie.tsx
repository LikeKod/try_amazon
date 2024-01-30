'use client'


import AdminList from "@/components/ui/admin/admin-list/AdminList";
import Heading from "@/components/ui/Heading";
import { FC } from "react";
import { useAdminCategory } from "./useAdminCategories";


const Categories: FC = () => {
    const {data, isFetching, mutate} = useAdminCategory()

    return (
        <>
            <Heading className="mb-7">Categories</Heading>
            <AdminList
            isLoading={isFetching}
            listItems={data}
            removeHandler={mutate} />
        </>
    )
}

export default Categories