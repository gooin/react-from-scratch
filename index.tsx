const React = {
    createElement: (tag, props, ...children) => {
        // console.log('createElement', args);

        const element = {
            tag,
            props: {
                ...props,
                children,
            },
        };
        console.log('createElement element', element);

        return element;
    },
};

const a = (
    <div id={'react-from-scratch'} something={'shuffle'}>
        <h1 class={'hello'}>Hello World</h1>
        <div title={123}>
            <h1 id={'sayHello'}>say hello</h1>
            <span>span say hello</span>
        </div>
        <h1>something</h1>
    </div>
);

