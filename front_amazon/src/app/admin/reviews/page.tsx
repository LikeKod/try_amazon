
import { NO_INDEX_PAGE } from "@/constants/app.constants";
import Reviews from "./Reviews";


export const metadata = {
    title: 'Reviews',
    ...NO_INDEX_PAGE
}

export default function ReviewsPage() {
    return <Reviews />
}