import { UserService } from "@/assets/styles/services/user.service";
import { useProfile } from "@/hooks/useProfile";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useMutation, useQueryClient } from "react-query";




const FavoriteButton: FC<{productId: number}> = ({productId}) => {


    const {profile} = useProfile()

    
    const queryClient = useQueryClient()
    
    const {mutate} = useMutation(['toggle favorite'], () => UserService.toggleFavorite(productId), {
        onSuccess() {
            queryClient.invalidateQueries(['get profile'])
        }
    })
    
    if(!profile) return null
    
    const isExist = profile.favorites.some(
        favorite => favorite.id === productId
        )

        
    return (
        <div>
            <button className="text-primary"
                onClick={() => mutate()}
                >
                    {isExist ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
        </div>
    )
}

export default FavoriteButton