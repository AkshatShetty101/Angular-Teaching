import { Observable } from 'rxjs/Rx';

export function movingCoordinates(element: any) {
    const obs$ = Observable.fromEvent(element, 'mousemove');
    const XYobs$ = obs$.map(
        (mouse: MouseEvent) => {
            return {
                x: mouse.x,
                y: mouse.y
            }
        }
    )
    // return obs$
    return XYobs$;
}