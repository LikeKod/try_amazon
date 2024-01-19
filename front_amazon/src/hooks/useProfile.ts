import { errorCatch } from "@/assets/styles/api/api.helper"
import { UserService } from "@/assets/styles/services/user.service"
import { useQuery } from "react-query"


export const useProfile = () => {
    const {data} = useQuery(['get profile'], () => 
    UserService.getProfile(), { 
        select: ({data}) => data,
        onError: (error) => {
            console.log(errorCatch(error))
        }
    }
    ) 

    return {profile: data}
}