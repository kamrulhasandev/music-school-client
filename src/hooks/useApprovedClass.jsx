import { useQuery } from "@tanstack/react-query";

const useApprovedClass = () => {
  const { isLoading, data: approvedClasses = [], refetch } = useQuery({
    queryKey: ["approvedClasses"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/approvedClasses");
      return response.json();
    },
  });
  return [approvedClasses, isLoading, refetch]
};
export default useApprovedClass;
