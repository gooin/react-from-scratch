export const createRoot = (container: Element) => {
    const render = (reactElement, parentElement?) => {
        if (typeof reactElement === 'string' || typeof reactElement === 'number') {
            let textNode = document.createTextNode(String(reactElement));
            parentElement.appendChild(textNode);
            return;
        }
        // console.log('reactElement', reactElement);
        const { tag, props } = reactElement;
        let element = document.createElement(tag);

        if (props) {
            Object.keys(props).filter(prop =>
                prop !== 'children'
                && !prop.includes('__'),
            ).forEach(key => {
                element[key] = props[key];
            });
            // console.log(element);
        }
        if (props.children) {
            props.children.forEach(child => {
                render(child, element);
            });
        }
        if (parentElement) {
            parentElement.appendChild(element);
        } else {
            container.appendChild(element);
        }
    };
    return {
        render,
    };
};

export default {
    createRoot,
};
