export const isoStringToTime = (isoString) => {
    const date = new Date(isoString);
    const hoursMinutes = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    return hoursMinutes;
}
