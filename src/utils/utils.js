import {H_DIRECTION_LIMIT, V_DIRECTION_LIMIT, H_DIRECTION, V_DIRECTION} from "../constants/settings";

export function getDirection(width) {
    if (width <= V_DIRECTION_LIMIT) return V_DIRECTION;
    if (width >= H_DIRECTION_LIMIT) return H_DIRECTION;
    return null;
}