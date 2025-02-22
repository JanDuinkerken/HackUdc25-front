import { baseRequest } from "./baseRequeset"

export const get = async (url: string, access_token: any) => {
    const response = baseRequest(url, "GET", null, access_token);
    return response;
}