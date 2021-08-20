import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './../components/TodoList/index';
TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'New',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'New',
        },
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all')

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'New' ? 'completed' : 'New',
        };
        setTodoList(newTodoList);
    }
    const handleShowAllClick = () => {
        setFilteredStatus('all')
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')

    }
    const handleShowNew = () => {
        setFilteredStatus('new')

    }
    const render = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={render} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show ALl</button>
                <button onClick={handleShowCompletedClick}>Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;