const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']; // в Date дні тижня з 0
const MONTHS = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const convertDate = (date, withTime = false) => {
    let tmp = new Date(date);
    
    let time = withTime ? tmp.getHours() + ':' + tmp.getMinutes() + ':' + tmp.getSeconds() : '';

    return `${DAYS[tmp.getDay()] + ',' ?? ''} ${tmp.getDate()} ${MONTHS[tmp.getMonth()]?.toLowerCase() ?? ''} ${tmp.getFullYear()} года в ${time}`;
}

export default convertDate;