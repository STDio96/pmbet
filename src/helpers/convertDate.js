const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']; // в Date дні тижня з 0
const MONTHS = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const convertDate = (date) => {
    let tmp = new Date(date.split('/').reverse().join('-'));
    
    return `${DAYS[tmp.getDay()] ?? ''} ${tmp.getDate()} ${MONTHS[tmp.getMonth()]?.toLowerCase() ?? ''} ${tmp.getFullYear()} года`;
}

export default convertDate;