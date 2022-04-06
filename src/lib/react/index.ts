import { render } from '../../index';

export const createElement = (tag, props, ...children) => {
    if (typeof tag === 'function') {
        return tag(props);
    }
    const element = {
        tag,
        props: {
            ...props,
            children,
        },
    };
    // console.log('createElement element', element);
    return element;
};

let states = [];
let CURSOR = 0;

export const useState = <T>(initialState: T): [T, (newState: T) => void] => {
    const CURR_CURSOR = CURSOR;
    states[CURR_CURSOR] = states[CURR_CURSOR] ?? initialState;
    // console.log('state,curr cursor', states, CURR_CURSOR);

    const setState = (newState: T) => {

        states[CURR_CURSOR] = newState;
        // console.log('newState ,curr cursor', states, CURR_CURSOR);
        CURSOR = 0;
        render();
    };
    CURSOR++;
    return [states[CURR_CURSOR], setState];
};

export const useEffect = (fn: () => void, deps: any[]) => {
    let prevDeps = states[CURSOR];
    let isChanged = true;

    if (prevDeps) {
        isChanged = prevDeps.some((d, i) => !Object.is(d, deps[i]));
    }

    if (isChanged) {
        fn();
    }

    states[CURSOR] = deps;
    CURSOR++;
};

export default {
    createElement,
};
