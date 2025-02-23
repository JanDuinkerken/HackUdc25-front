import { baseRequest } from "./baseRequeset"

export const get = async (url: string, access_token: any) => {
    return baseRequest(url, "GET", null, access_token);
}