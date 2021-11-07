import {H_DIRECTION_LIMIT, V_DIRECTION_LIMIT, H_DIRECTION, V_DIRECTION} from "../constants/settings";

export function getDirection(width) {
    if (width <= V_DIRECTION_LIMIT) return V_DIRECTION;
    if (width >= H_DIRECTION_LIMIT) return H_DIRECTION;
    return null;
}

export function getDistancePercent(ref, direction) {
    if (!ref.current) return null;
    const {innerWidth, innerHeight} = window;
    const {x, y, width, height} = ref.current.getBoundingClientRect();

    let s, d;
    if (direction === V_DIRECTION) {
        s = innerHeight / 2;
        d = (y + (height / 2)) - s;
    }
    if (direction === H_DIRECTION) {
        s = innerWidth / 2;
        d = (x + (width / 2)) - s;
    }

    return d / s;
}