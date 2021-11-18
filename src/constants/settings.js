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
import project5 from "../content/images/project5.jpg";

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
    project3,
    project4,
    project5
}

export const IMG_COUNT = Object.keys(IMG_SOURCES).length;

export const SLIDE_COUNT = 6;

export const PRELOADER_CAPTION = 'WHITE LINEN';

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
        title: 'WHITE LINEN',
        description: 'Я эксперт во Fusion дизайне, я наполняю ваши дома, рестораны и террасы аксессуарами и мебелью, ' +
            'которым даю вторую жизнь. Я отдаю предпочтение индивидуальному стилю, начиная от полки и заканчивая ручкой ' +
            'для шкафа. Мы опираемся на десятилетний опыт в декоре ища красоту и вдохновение в природе для своих ' +
            'проектов. Мы несём свободу, исследование, комфорт и практичность.',
        img: project0
    },
    {
        title: 'Реставрация мебели',
        description: 'Я новатор, я модернизирую, и декорируют старую мебель, я - ключ к вашей индивидуальности и ' +
            'комфорту. В своих работах мы стараемся экспериментировать со стилями, формами и материалами. Я-отличный ' +
            'элемент декора, который подчеркнёт ваш индивидуальный стиль в любом пространстве: я - мягкое кресло, ' +
            'которое появилось в вашей гостиной, деревянный буфет в деревенском стиле, который украшает вашу кухню, ' +
            'я - большой и удобный стол, от которого у ваших гостей захватывает дух. Я- большой вызов в маленьком городе.',
        img: project1
    },
    {
        title: 'MILK PAINT',
        description: 'Я- экологичный, я практичный я вдохновляющий материал для вашего творчества. ' +
            'Со мной, только люди, разделяющие страсть к жизнь со вкусом, могут получить вдохновение и удовольствие.',
        img: project2
    },
    {
        title: 'Декоративные покрытия',
        description: 'Я- качественный материал, который выдерживает испытание временем. Я внушаю безмятежность, ' +
            'олицетворяю комфорт.Мы современны и индивидуальны, Мы несем разнообразие и эксклюзив.',
        img: project3
    },
    {
        title: 'Дизайн фотостудии',
        description: 'Я вдохновлён дизайном скандинавских стран. Я предлагаю декор строгих линий и нейтральных тонов. ' +
            'Роскошные материалы - состаренная кожа, массив дерева, приятные на ощупь ткани, переработаны в более ' +
            'современном стиле. Я олицетворяю комфорт и элегантность. Я деревенский, но шикарный.',
        img: project4
    },
    {
        title: 'Дизайн коммерческих помещений',
        description: 'Я - гибридное место кафе и пекарня, созданная нашей командой. Я предлагаю свежеиспечённый хлеб и ' +
            'ароматный кофе. Благодаря мне вы порадуете себя и привезёте домой немного Франции.. ' +
            'Я предлагаю услугу "под ключ", от консультации до снятия замеров и исполнения командой специалистов.',
        img: project5
    }
]