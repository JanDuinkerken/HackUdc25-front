import { post } from "./post";

export const sendQuestion = async (question: string) => {
    const response = await post("http://127.0.0.1:8000/chat", { question });
    return response.response;
}