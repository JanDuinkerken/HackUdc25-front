import { post } from "./post";

export const submitPostit = async (text: string, access_token: any) => {
    const response = await post('http://127.0.0.1:8000/diary', { text }, access_token);
    return response.mensaje;
}