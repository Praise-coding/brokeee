export function GetUserDate(utcDate: string, timeZone: string) {
    const now = new Date();
    return now.toLocaleString(undefined, {timeZone: timeZone})
}
