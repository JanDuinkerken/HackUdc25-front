import { baseRequest } from "./baseRequeset"

export const get = async (url: string) => {
    const response = baseRequest(url, "GET", null);
    return response;
}