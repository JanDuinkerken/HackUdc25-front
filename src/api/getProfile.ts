import { get } from "./get";

export const getProfile = async (access_token: any) => {
    const response = await get('http://127.0.0.1:8000/profile', access_token);
    return response.profile;
}