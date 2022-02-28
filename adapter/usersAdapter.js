import { xhr } from "../utils/xhr"

export const fetchAllUsers = async (token) => {
    try {
        const { data } = await xhr.get('/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data;
    } catch (error) {
        if (error.response) {
            alert(error.response.data);
        }
    }
}