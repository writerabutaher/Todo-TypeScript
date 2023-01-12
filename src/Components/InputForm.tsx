import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputForm: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <div>
            <div className='flex justify-center'>
                <form
                    onSubmit={handleAdd}
                    className="flex">
                    <input
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                        className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 outline-pink-500 w-full bg-white" placeholder="Write Task Here" />
                    <button type='submit' className="px-8 rounded-r-lg bg-pink-600 text-white font-bold p-4 uppercase border-pink-500 border-t border-b border-r">Add</button>
                </form>
            </div>
        </div>
    )
}

export default InputForm