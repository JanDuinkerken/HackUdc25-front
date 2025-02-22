import { baseRequest } from "./baseRequeset";

export const post = (url: string, data: any, access_token: any) => {
    return baseRequest(url, "POST", data, access_token);
}