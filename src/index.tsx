import React, { useState } from './lib/react';
import ReactDOM from './lib/ReactDOM';

const App = () => {

    const [name, setName] = useState('zhangsan');
    const [count, setCount] = useState(0);

    return (
        <div id={'react-from-scratch'} className={'container'} something={'shuffle'}>
            <h1 className={'hello'}>Hello {name}</h1>
            <input type="text" placeholder={'input your name here.'}
                   value={name}
                   onchange={e => setName(e.target.value)}
            />
            <br/>
            <h1>count: {count}</h1>
            <button onclick={()=>setCount(count+1)}>+</button>
            <button onclick={()=>setCount(count-1)}>-</button>
        </div>
    );
};

// const container = document.getElementById('root');
//
// const root = ReactDOM.createRoot(container);
// root.render(<App/>);

export const render = () => {
    const container = document.getElementById('root');
    document.getElementById('root')?.firstChild?.remove();
    const root = ReactDOM.createRoot(container);
    root.render(<App/>);
};

render();

