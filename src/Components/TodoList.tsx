import React from 'react'
import { Todo } from '../Utilities/modal';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className='grid md:grid-cols-3 gap-4 py-20 px-4'>
            {
                todos.map((todo) => (<SingleTodo
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />))
            }
        </div>
    )
}

export default TodoList