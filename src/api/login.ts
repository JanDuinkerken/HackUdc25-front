import { post } from "./post";

export const login = async (username: string, password: string) => {
    const response = await post("http://localhost:8000/login", { email: username, password }, null);
    return response.access_token;
}