import { errorCatch } from "@/assets/styles/api/api.helper"
import { UserService } from "@/assets/styles/services/user.service"
import { useQuery } from "react-query"
import { useAuth } from "./useAuth"


export const useProfile = () => {
    const {user} = useAuth()

    const {data} = useQuery(['get profile'], () => 
    UserService.getProfile(), { 
        select: ({data}) => data,
        onError: (error) => {
            console.log(errorCatch(error))
        },
        enabled: !!user
    }
    ) 

    return {profile: data}
}