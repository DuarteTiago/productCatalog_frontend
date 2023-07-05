import api from "./api";
import { ProductType } from "./productService";

export type CategoryType = {
  id: number;
  name: string;
  position: number;
  products?: ProductType[];
};
const categoriesService = {
  getCategories: async () => {
    const res = await api.get("/categories").catch((error) => {
      return error.response;
    });
    return res;
  },

  getProducts: async (id: number) => {
    const res = await api.get(`categories/${id}`).catch((error) => {
      return error.response;
    });
    return res;
  },
};

export default categoriesService;
