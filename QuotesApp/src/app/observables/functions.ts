import { Observable } from 'rxjs/Rx';

export function movingCoordinates() {
    const obs$ = Observable.fromEvent(document, 'mousemove');
    const XYobs$ = obs$.map(
        (mouse: MouseEvent) => {
            return {
                x: mouse.x,
                y: mouse.y
            }
        }
    )
    // return obs$
    return XYobs$
}

export function clickedCoordinates() {
    const obs$ = Observable.fromEvent(document, 'clicked');
    const XYobs$ = obs$.map(
        (mouse: MouseEvent) => {
            return {
                x: mouse.x,
                y: mouse.y
            }
        }
    )
    // return obs$
    return XYobs$
}