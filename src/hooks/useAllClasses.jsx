import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const { isLoading, data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/allClasses");
      return response.json();
    },
  });
  return [allClasses, isLoading, refetch]
};
export default useAllClasses;
