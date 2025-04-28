import {useEffect, useReducer, useState} from "react";
import {todoReducer} from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("toDos")) || [];
}

export const useTodo = () => {

    const [toDos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {

        localStorage.setItem("toDos", JSON.stringify(toDos));

    }, [toDos])

    const handleNewTodo = (todo) => {

        const action = {
            type: "ADD_TODO",
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id,
        })
    }

    return {
        toDos,
        toDosCount: toDos.length,
        pendingToDosCount: toDos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}