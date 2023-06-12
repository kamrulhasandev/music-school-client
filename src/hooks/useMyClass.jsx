import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useMyClass = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, data: myClasses = [], refetch } = useQuery({
    queryKey: ['myClasses', user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }

      try {
        const response = await fetch(`https://school-server-gamma.vercel.app/classesByInstructorEmail?email=${user.email}`);
        return response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  });

  return [myClasses, isLoading, refetch];
};

export default useMyClass;
