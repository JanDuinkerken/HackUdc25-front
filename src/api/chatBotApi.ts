import { post } from "./post";

export const sendQuestion = async (question: string, access_token: any) => {
    const response = await post("http://127.0.0.1:8000/chat", {question}, access_token);
    return response.response;
}