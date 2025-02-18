import React from 'react';
import TodoList from './components/TodoList';
import WHAT from './components/what';
import './App.css';

function App() {
    return (
        <div className="App">
            <WHAT />
            <TodoList />
        </div>
    );
}

export default App;
