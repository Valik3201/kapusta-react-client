import axios from "axios";

export const userInfoAPI = async () => {
    const { data } = await axios.get("user");
    return data;
};
