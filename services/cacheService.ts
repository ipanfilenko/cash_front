export const setCacheForKey = (key: string, data: string) => {
    sessionStorage.setItem(key, data);
}

export const getCacheForKey = (key: string) => {
    return sessionStorage.getItem(key);
}