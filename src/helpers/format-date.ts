export const formatDate = (date: string) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthIndex = new Date(date).getMonth();
    const monthName = months[monthIndex];
      
    const dayNumber = new Date(date).getDate();
    return `${monthName} ${dayNumber}`
}

export const getDay = (date: string) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    const dayName = days[dayIndex];
    return dayName
}

export const getDayShort = (date: string) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIndex = new Date(date).getDay();
    const dayName = days[dayIndex];
    return dayName
}

export const getState = (date: string) => {
    const hour = new Date(date).getHours();
    if (hour > 6 && hour < 18) return 'day';
    return 'night';
}