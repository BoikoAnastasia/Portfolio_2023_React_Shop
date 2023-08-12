export const SplitString = (allStr: string, limit: number) => {
    const newStr = allStr.split(" ", limit).join(" ");
    return newStr;
}