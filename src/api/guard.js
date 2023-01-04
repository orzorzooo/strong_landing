import { get, post } from "@/api/request";
import store from "@/store";

export const authenticated = async () => {
  const token = localStorage.getItem("panda_token");
  if (!token) return false;
  try {
    const data = await get({ type: "users", collection: "me" });
    if (!data) throw Error;
    store.commit("user/setUser", data);
    return true;
  } catch (error) {
    store.commit("user/setLogout");
    return false;
  }
};
