export function formatMonthYear(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function getExperienceDuration(
  startDate: string,
  endDate?: string | null,
) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) {
    months--;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years <= 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
  }

  return `${years} year${years !== 1 ? "s" : ""}${
    remainingMonths > 0
      ? ` ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
      : ""
  }`;
}
