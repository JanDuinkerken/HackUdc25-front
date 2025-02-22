import { baseRequest } from "./baseRequeset";

export const post = (url: string, data: any) => {
    return baseRequest(url, "POST", data);
}