export async function getData(url) {
    try {
        const res = await fetch(url);
        return res.json();
    } catch {
        return null
    }

}