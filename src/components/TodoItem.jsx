import {SlCheck, SlPencil, SlTrash} from "react-icons/sl";

const TodoItem = ({todo, onDelete, onEdit, onDone}) => {
    const deleteTodo = () => {
        onDelete(todo.id);
    };

    const editTodo = () => {
        onEdit(todo)
    }

    const doneTodo = () => {
        onDone(todo.id)
        console.log("done")
    }

    return (
        <div
            className={`flex items-center justify-between w-full border-b-[1px] pb-4 px-2 last:border-none last:pb-0 transition-opacity duration-300 ${todo.done ? "opacity-70" : "opacity-100"}`}>
            <p className={`font-light ${todo.done ? "line-through text-gray-400" : "text-white"}`}>{todo.title}</p>
            <div className={"space-x-6"}>
                <button onClick={deleteTodo}>
                    <SlTrash size={20} className="fill-rose-700 hover:fill-rose-500 transition-colors"/>
                </button>
                <button onClick={editTodo} disabled={todo.done} className="disabled:cursor-not-allowed">
                    <SlPencil
                        size={20}
                        className={`fill-amber-700 transition-colors ${todo.done ? "opacity-50" : "hover:fill-amber-500"}`}
                    />
                </button>
                <button onClick={doneTodo}>
                    <SlCheck size={20} className="fill-green-700 hover:fill-green-500"/>
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
