export const substr = (content: string) => {
    if (content?.length > 100) {
        return content.substring(0, 100) + '...'
    } else {
        return content
    }
}