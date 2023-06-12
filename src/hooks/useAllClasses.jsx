import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const { isLoading, data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const response = await fetch("https://school-server-gamma.vercel.app/allClasses");
      return response.json();
    },
  });
  return [allClasses, isLoading, refetch]
};
export default useAllClasses;
