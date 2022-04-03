const React = {
    createElement: (tag, props, ...children) => {
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
    },
};

const ReactDOM = {
    createRoot: (container: Element) => {
        const render = (reactElement, parentElement?) => {
            if (typeof reactElement === 'string' || typeof reactElement === 'number') {
                let textNode = document.createTextNode(String(reactElement));
                parentElement.appendChild(textNode);
                return;
            }
            console.log('reactElement', reactElement);
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
    },
};

const App = () => {
    return (
        <div id={'react-from-scratch'} className={'container'} something={'shuffle'}>
            <h1 className={'hello'}>Hello World</h1>
            <div title={123}>
                <h1 id={'sayHello'}>say hello</h1>
                <span>span say hello</span>
            </div>
            <h1>something</h1>
            <input type="text" placeholder={'input your name here.'}/>
        </div>
    );
};

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(<App/>);

