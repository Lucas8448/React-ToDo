import React, { useState } from 'react';
import './index.css';

function TodoList() {
    // Initialize state for the list of to-do items
    const [items, setItems] = useState([
        { text: 'Program', completed: false },
        { text: 'Sleep', completed: false },
    ]);

    // Method for adding a new item to the list
    const addItem = (text) => {
        setItems([...items, { text, completed: false }]);
    }

    // Method for toggling the completed value of an item
    const toggleCompleted = (index) => {
        const newItems = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    }

    // Method for deleting an item from the list
    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <div>
        <h1>To-Do List</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            addItem(e.target.item.value);
            e.target.item.value = '';}}>
            <input name="item" />
            <button type="submit">Add</button>
            </form>
                <ul>
                    {items.map((item, index) => (
                        <TodoItem
                        key={index}
                        index={index}
                        item={item}
                        toggleCompleted={toggleCompleted}
                        deleteItem={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        );
    }

function TodoItem({ item, index, toggleCompleted, deleteItem }) {
    return (
        <li>
            <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleCompleted(index)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.text}
            </span>
            <button onClick={() => deleteItem(index)}>x</button>
        </li>
    );
}

export default TodoList;
