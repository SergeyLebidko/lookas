import design from "../content/images/design.jpg";
import decor from "../content/images/decor.jpg";
import restoration from "../content/images/restoration.jpg";

export const IMG_COUNT = 5;

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
        imgSource: design
    },
    {
        id: 'dec',
        title: 'Декор',
        text: 'В декоре, будь то декор отдельных элементов мебели или помещений в целом, я использую самые разные материалы: ' +
            'дерево, картон, пенопласт, полимерную глину, акриловые краски, цемент, металл и многие другие. ' +
            'Я всегда подхожу к делу творчески и сперва стараюсь разобраться в индивидуальных потребностях каждого клиента,' +
            'а потом уже предложить ему что-то действительно уникальное!',
        imgSource: decor
    },
    {
        id: 'res',
        title: 'Реставрация',
        text: 'Я занимаюсь реставрацией мебели самого различного плана: шкафы, комоды, столы, стулья, серванты и многое другое.' +
            'Помогу вдохнуть новую жизнь в ваши вещи и придать им совершенно новый самобытный вид так, что они с легкостью впишутся в ваш' +
            'интерьер и станут настоящим его украшением.',
        imgSource: restoration
    }
]