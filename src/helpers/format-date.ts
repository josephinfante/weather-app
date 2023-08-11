export const formatDate = (date: string) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const parsedDate = new Date(date.replace(/-/g, '/')); // Replace hyphens with slashes for cross-browser compatibility
    const monthIndex = parsedDate.getMonth();
    const monthName = months[monthIndex];
    const dayNumber = parsedDate.getDate();
    return `${monthName} ${dayNumber}`;
}

export const getDay = (date: string) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const parsedDate = new Date(date.replace(/-/g, '/'));
    const dayIndex = parsedDate.getDay();
    const dayName = days[dayIndex];
    return dayName;
}

export const getDayShort = (date: string) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const parsedDate = new Date(date.replace(/-/g, '/'));
    const dayIndex = parsedDate.getDay();
    const dayName = days[dayIndex];
    return dayName;
}

export const getState = (date: string) => {
    const parsedDate = new Date(date.replace(/-/g, '/'));
    const hour = parsedDate.getHours();
    if (hour > 6 && hour < 18) return 'day';
    return 'night';
}