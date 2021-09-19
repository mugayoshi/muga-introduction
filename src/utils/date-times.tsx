const ENGLISH_MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const ENGLISH_DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

// TODO add locale in args
export function convertMonthNumberToString(input: number): string {
    if (input < 0 && input > 11) {
        return '';
    }
    return ENGLISH_MONTHS[input];
}

export function convertDayNumberToString(input: number): string {
    if (input < 0 && input > 6) {
        return '';
    }
    return ENGLISH_DAYS[input];
}


