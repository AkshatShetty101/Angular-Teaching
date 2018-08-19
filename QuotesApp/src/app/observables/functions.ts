import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

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

export function clickedCoordinates(element: any) {
    const obs$ = Observable.fromEvent(element, 'clicked');
    const XYobs$ = obs$.map(
        (mouse: MouseEvent) => {
            return {
                x: mouse.x,
                y: mouse.y
            };
        }
    );
    // return obs$
    return XYobs$;
}