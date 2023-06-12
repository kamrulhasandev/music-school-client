import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const useSelectClass = () => {
    const {user} = useContext(AuthContext)
    const {isLoading,refetch, data: selectClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://school-server-gamma.vercel.app/selectedClass?email=${user.email}`)
            return response.json();
        }
        
    })
    return [selectClass, refetch, isLoading]


}
export default useSelectClass;