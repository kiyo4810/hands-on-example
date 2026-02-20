/**
 * カンマ区切りの文字列を数値に変換します
 */
export const commaToNum = (str: string) => {
  // replace()からreplaceAll(",","")に変換
  const noCommaStr = str.replaceAll(",", "");
  return Number(noCommaStr);
};
