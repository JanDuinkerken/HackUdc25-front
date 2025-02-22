export const baseRequest = async (url: string, method: string, data: any, access_token: any) => {
    try {
        const headers: HeadersInit = access_token != null ? 
        { "Content-Type": "application/json", "Authorization": `Bearer ${access_token}` } : 
        { "Content-Type": "application/json" };

        const options: RequestInit = {
            method,
            headers: headers,
        };

        if (data && (method === 'POST' || method === 'PUT')) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}