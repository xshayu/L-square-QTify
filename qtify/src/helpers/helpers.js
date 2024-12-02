export const truncate = (text, count = 40) => {
    if (text.length <= count) {
        return text;
    }
    return text.slice(0, count) + '...';
}