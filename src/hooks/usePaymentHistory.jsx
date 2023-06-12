import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const usePaymentHistory = () => {
    const {user} = useContext(AuthContext)
    console.log(user.email);
    const {isLoading,refetch, data: historyData = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://school-server-gamma.vercel.app/payments?email=${user.email}`)
            return response.json();
        }
        
    })
    return [historyData, refetch, isLoading]


}
export default usePaymentHistory;