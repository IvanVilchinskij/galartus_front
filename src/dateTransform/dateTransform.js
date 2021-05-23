const setMonthName = (month) => {
    switch (month) {
        case 0:
            return 'января';
        case 1:
            return 'февраля';
        case 2:
            return 'марта';
        case 3:
            return 'апреля';
        case 4:
            return 'мая';
        case 5:
            return 'июня';
        case 6:
            return 'июля';
        case 7:
            return 'августа';
        case 8:
            return 'сентября';
        case 9:
            return 'октября';
        case 10:
            return 'ноября';
        case 11:
            return 'декабря';
        default:
            return 'не корректный месяц';
    }
};

const setWeekdayName = (weekday) => {
    switch (weekday) {
        case 0:
            return 'воскресенье';
        case 1:
            return 'понедельник';
        case 2:
            return 'вторник';
        case 3:
            return 'среда';
        case 4:
            return 'четверг';
        case 5:
            return 'пятница';
        case 6:
            return 'суббота';
        default:
            return 'не корректный день недели';
    }
};

export {
    setMonthName,
    setWeekdayName,
};