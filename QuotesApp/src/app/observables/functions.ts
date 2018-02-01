import { Observable } from 'rxjs/Rx';

export function Coordinates() {
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