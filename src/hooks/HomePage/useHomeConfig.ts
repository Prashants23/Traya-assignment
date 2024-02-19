import { useQuery } from "@tanstack/react-query";
import ky from "ky";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type HomePageConfigTypes = Array<Todo>;

const fetchHomePageConfig = async () => {
  const response = await ky.get("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data as HomePageConfigTypes;
};

const useHomeConfig = () => {
  return useQuery<
    HomePageConfigTypes,
    unknown,
    HomePageConfigTypes,
    ["home-page-config"]
  >({
    queryKey: ["home-page-config"],
    queryFn: fetchHomePageConfig,
  });
};

export default useHomeConfig;
