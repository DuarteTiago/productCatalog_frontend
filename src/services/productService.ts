import api from "./api";

export type ProductType = {
  id: number;
  name: string;
  productPrice: string;
  productImage: string;
  description: string;
  productCode: number;
};
const productService = {
  getNewestProducts: async () => {
    const res = await api.get("/products/newest").catch((error) => {
      return error.response;
    });
    return res;
  },

  getProduct: async (id: number | string) => {
    const res = await api
      .get(`/products/${id}`)

      .catch((error) => {
        return error.response;
      });
    return res;
  },

  getProductAuth: async (id: number | string) => {
    const token = sessionStorage.getItem("G&M-token");
    const res = await api
      .get(`/products/auth/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  getAllProducts: async () => {
    const res = await api.get("/products").catch((error) => {
      return error.response;
    });
    return res;
  },
  addToFav: async (productId: number | string) => {
    const token = sessionStorage.getItem("G&M-token");
    const res = await api
      .post(
        "/favorites",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  removeFav: async (productId: number | string) => {
    const token = sessionStorage.getItem("G&M-token");

    const res = await api
      .delete(`/favorites/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  getFavProducts: async () => {
    const token = sessionStorage.getItem("G&M-token");

    const res = await api
      .get("/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },

  getSearch: async (name: string) => {
    const res = await api
      .get(`/products/search?name=${name}`)
      .catch((error) => {
        return error.response;
      });
    return res;
  },
};

export default productService;
