import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../Utilities/modal'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: Number) => {
        e.preventDefault();
        setTodos(todos.map((todo => (todo.id === id ? { ...todo, todo: editTodo } : todo))))
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
        <div>
            <div className="flex justify-center items-center mb-20">
                <div className="bg-white rounded-lg">
                    <div className="w-96 border-t-8 border-pink-600 rounded-lg flex justify-between items-center">
                        <div className="w-1/3 pt-6 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                <path xmlns="http://www.w3.org/2000/svg" d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentcolor"></path>
                            </svg>
                        </div>
                        <form className="w-full pt-6 pr-4" onSubmit={(e) => handleEdit(e, todo.id)}>
                            {
                                edit ? (
                                    <input
                                        onChange={(e) => setEditTodo(e.target.value)}
                                        value={editTodo}
                                        ref={inputRef}
                                        className="rounded-lg p-4 mr-0 border text-gray-800 border-gray-400 outline-pink-500 w-full bg-white" placeholder="Write Task Here" />
                                ) : (
                                    todo.isDone ?
                                        <h3 className="font-bold line-through text-pink-700 text-3xl">{todo.todo}</h3>
                                        :
                                        <h3 className="font-bold text-pink-700 text-3xl">{todo.todo}</h3>
                                )

                            }
                        </form>
                    </div>

                    <div className="p-4 flex justify-center space-x-4">
                        <button onClick={() => {
                            if (!edit && !todo.isDone) {
                                return setEdit(!edit)
                            }
                        }
                        }
                            className="px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm"><AiOutlineEdit size={'2rem'} /></button>
                        <button onClick={() => handleDelete(todo.id)} className="px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm"><AiOutlineDelete size={'2rem'} /></button>
                        <button onClick={() => handleDone(todo.id)} className="px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"><MdDone size={'2rem'} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTodo