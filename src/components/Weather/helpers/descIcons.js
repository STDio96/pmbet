import sun from '../img/weatherIcons/sun.png'
import cloudy from '../img/weatherIcons/cloudy.png'
import rain from '../img/weatherIcons/rain.png'
import snowing1 from '../img/weatherIcons/snowing1.png'
import snowing2 from '../img/weatherIcons/snowing2.png'
import storm from '../img/weatherIcons/storm.png'
import defaultImg from '../img/weatherIcons/default.png'

const DESCRIPTION_IMAGES = [
    { descr: 'ясно', icon: sun },
    { descr: 'небольшая облачность', icon: cloudy },
    { descr: 'дождь', icon: rain },
    { descr: 'снег', icon: snowing1 },
    { descr: 'мокрый снег', icon: snowing2 },
    { descr: 'гроза', icon: storm }
]

const getIcon = (title) => {
    let index = DESCRIPTION_IMAGES.findIndex((el) => el.descr === title);
    let image = (index !== -1 ? DESCRIPTION_IMAGES[index].icon : defaultImg);

    return image;
}

export default getIcon;