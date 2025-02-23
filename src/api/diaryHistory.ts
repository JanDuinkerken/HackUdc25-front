import { get } from "./get"

export const diaryHistory = async (access_token: any) => {
    const response = await get('http://127.0.0.1:8000/history', access_token);
    return response.history;
}