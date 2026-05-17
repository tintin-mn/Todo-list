import TodoItem from "./TodoItem.jsx";

const BoxTodo = ({todos, onDelete, onEdit, onDone}) => {
    const hasTodos = todos.length > 0;

    const renderTodos = todos?.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} onDone={onDone}/>;
    });

    if (hasTodos) {
        return (
            <div
                className="flex flex-col items-center justify-center space-y-4 w-80 md:min-w-[450px] border-2 rounded-md px-8 py-4">
                {renderTodos}
            </div>
        );
    }
};

export default BoxTodo;
