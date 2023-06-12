import { useQuery } from "@tanstack/react-query";

const useApprovedClass = () => {
  const { isLoading, data: approvedClasses = [], refetch } = useQuery({
    queryKey: ["approvedClasses"],
    queryFn: async () => {
      const response = await fetch("https://school-server-gamma.vercel.app/approvedClasses");
      return response.json();
    },
  });
  return [approvedClasses, isLoading, refetch]
};
export default useApprovedClass;
