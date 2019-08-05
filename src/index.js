import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = (
    //Provider 连接了store，那我这个provider就有能力获取store里面的内容了
    <Provider store={store}>
        <TodoList />
    </Provider>
);


ReactDOM.render(App, document.getElementById('root'));
