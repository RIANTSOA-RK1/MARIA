const API_URL ='http://localhost:3000';

export const fetchUser = async() => {
    try {
        const res = await fetch(`${API_URL}/users`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}