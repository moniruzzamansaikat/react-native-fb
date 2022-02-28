import { xhr } from '../utils/xhr';

export const loginUser = async ({ username, password }) => {
    try {
        const { data } = await xhr('/auth/login', {
            method: 'POST',
            data: {
                username, password
            }
        });
        return data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        }
    }

}

export const signUpUser = async ({ name, username, email, password, password2 }) => {
    try {
        const { data } = await xhr('/auth/register', {
            method: 'POST',
            data: {
                name, username, email, password, password2
            }
        });
        return data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        }
    }

}


export const fetchUser = async (token) => {
    try {
        const { data } = await xhr('/auth/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        }
    }
}