export const formatDateForDisplay = (isoDateTimeString: string): string => {
  if (!isoDateTimeString) return "";

  try {
    return new Date(isoDateTimeString).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "short", // 例: "6月"
      day: "numeric",
      weekday: "short", // 例: "(土)"
    });
  } catch (e) {
    console.error("日付の形式が不正", isoDateTimeString, e);
    return "日付不明";
  }
};
