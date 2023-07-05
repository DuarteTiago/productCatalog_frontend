import api from "./api";

interface UserParams {
  firstName: string;
  lastName: string;
  email: string;
}
interface PasswordParams {
  currentPassword: string;
  newPassword: string;
}
const profileServece = {
  fetchCurrent: async () => {
    const token = sessionStorage.getItem("G&M-token");
    const res = await api
      .get("/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        return error.response;
      });
    return res.data;
  },
  userUpdate: async (params: UserParams) => {
    const token = sessionStorage.getItem("G&M-token");
    const res = await api
      .put("/users/current", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 401) {
          return error.response;
        }
      });
    return res.status;
  },
  passwordUpdate: async (params: PasswordParams) => {
    const token = sessionStorage.getItem("G&M-token");
    const res = await api
      .put("/users/current/password", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 401) {
          return error.response;
        }
      });
    return res.status;
  },
};
export default profileServece;
