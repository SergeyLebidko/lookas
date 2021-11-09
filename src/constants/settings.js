import back from "../content/images/main_back.jpg";
import design from "../content/images/design.jpg";
import decor from "../content/images/decor.jpg";
import restoration from "../content/images/restoration.jpg";
import photo from "../content/images/photo.jpg";
import logo from "../content/images/logo.jpg";
import mini_slide0 from "../content/images/mini_slide0.jpg";
import mini_slide1 from "../content/images/mini_slide1.jpg";
import mini_slide2 from "../content/images/mini_slide2.jpg";
import mini_slide3 from "../content/images/mini_slide3.jpg";
import mini_slide4 from "../content/images/mini_slide4.jpg";
import mini_slide5 from "../content/images/mini_slide5.jpg";
import project0 from "../content/images/project0.jpg";
import project1 from "../content/images/project1.jpg";
import project2 from "../content/images/project2.jpg";
import project3 from "../content/images/project3.jpg";
import project4 from "../content/images/project4.jpg";

export const IMG_SOURCES = {
    back,
    design,
    decor,
    restoration,
    photo,
    logo,
    mini_slide0,
    mini_slide1,
    mini_slide2,
    mini_slide3,
    mini_slide4,
    mini_slide5,
    project0,
    project1,
    project2,
    project4

}

export const IMG_COUNT = Object.keys(IMG_SOURCES).length;

export const SLIDE_COUNT = 6;

// Граница изменения направления
export const V_DIRECTION_LIMIT = 1023;
export const H_DIRECTION_LIMIT = 1024;

// Константы направления
export const V_DIRECTION = 'v_direction';
export const H_DIRECTION = 'h_direction';

// Параметры горизонтального скролла
export const SCROLL_DELTA = 2;
export const SCROLL_TIMING = 10;
export const SCROLL_STEPS_LIMIT = 30;

export const MENU_DATA = [
    {
        id: 'des',
        title: 'Дизайн',
        text: 'Я занимаюсь дизайном помещений и фасадов, фотозон, банкетных и праздничных залов. ' +
            'Помогу подобрать правильный вид, расположение, цвет и форму всех элементов вашего помещения, выстроить узнаваемый ' +
            'единый стиль, который может стать визитной карточкой вашего бизнеса.',
        imgSource: IMG_SOURCES['design']
    },
    {
        id: 'dec',
        title: 'Декор',
        text: 'В декоре, будь то декор отдельных элементов мебели или помещений в целом, я использую самые разные материалы: ' +
            'дерево, картон, пенопласт, полимерную глину, акриловые краски, цемент, металл и многие другие. ' +
            'Я всегда подхожу к делу творчески и сперва стараюсь разобраться в индивидуальных потребностях каждого клиента,' +
            'а потом уже предложить ему что-то действительно уникальное!',
        imgSource: IMG_SOURCES['decor']
    },
    {
        id: 'res',
        title: 'Реставрация',
        text: 'Я занимаюсь реставрацией мебели самого различного плана: шкафы, комоды, столы, стулья, серванты и многое другое.' +
            'Помогу вдохнуть новую жизнь в ваши вещи и придать им совершенно новый самобытный вид так, что они с легкостью впишутся в ваш' +
            'интерьер и станут настоящим его украшением.',
        imgSource: IMG_SOURCES['restoration']
    }
]

export const MATERIALS = [
    'Гипс',
    'Картон',
    'Штукатурка',
    'Полимерная глина',
    'Акриловые краски',
    'Пенопласт',
    'Металл',
    'Дерево',
    'Ткань'
]

export const PROJECTS = [
    {
        title: 'Травертин',
        description: 'Работа с травертином стало откровением для меня. ' +
            'Когда я впервые попробовала его ... У меня пропал дар речи... ' +
            'Я очень благодарна тому, что у меня был хороший наставник , спасибо тебе за это! ' +
            'До этого я работала с трафаретами меньшего размера и специальными текстурными пастами ' +
            'из художественных магазинов... Но ничто не сравнится с травертином! Теперь я в этом уверена!',
        img: project0
    },
    {
        title: 'Фотозона в светлых тонах',
        description: 'Проект фотозоны, содержащей минимум необходимых элементов и оставляющей при этом впечатление большого, ' +
            'наполненного светом пространства. По желанию заказчика кровать, как и камин, мобильна. Они на колесах, ' +
            'поэтому пространство как трансформер может менять направление и наполнение по желанию фотографа.',
        img: project1
    },
    {
        title: 'Реставрация чемодана',
        description: 'Этот чемодан из простого и потрепанного жизнью превратился в дорогой и стильный аксессуар! ' +
            'Были использованы латексная шпаклёвка, акриловая краска и мой любимый битумный лак',
        img: project2
    },
    {
        title: 'Череп',
        description: 'А этот череп, выполненный в стиле древних ацтекских мотивов может стать необычным элементом ' +
            'декора кафе или даже офиса, добавив интерьеру яркую и запоминающуюся деталь',
        img: project3
    },
    {
        title: 'Реставрация комода',
        description: 'Старый советский комод, который хозяева хотели было уже выбросить, после реставрации ' +
            'современными материалами приобрел совершенно другой вид! Теперь это яркая и функциональная деталь ' +
            'интерьера, которая по праву стала украшением гостиной!',
        img: project4
    }
]