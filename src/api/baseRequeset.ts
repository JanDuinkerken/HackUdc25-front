export const baseRequest = async (url: string, method: string, data: any) => {
    try {
        const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            // Add your authorization token here
            // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}