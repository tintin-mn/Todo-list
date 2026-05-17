import AddTodo from "./components/AddTodo.jsx";
import BoxTodo from "./components/BoxTodo.jsx";
import {useState} from "react";
import Header from "./components/Header.jsx";
import {v4 as uuid} from "uuid";
import EditModal from "./components/EditModal.jsx";

const App = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [selectedIndex, setSelectedIndex] = useState()
    const [selectedItemEdit, setSelectedItemEdit] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleDeleteTodo = (id) => {
        const updateTodo = todos.filter((todo) => {
            return todo.id !== id;
        });
        localStorage.setItem("todos", JSON.stringify(updateTodo));
        setTodos(updateTodo);
    };

    const createTodo = (title) => {
        const updateTodo = [...todos, {id: uuid(), title, done: false}];
        localStorage.setItem("todos", JSON.stringify(updateTodo));
        setTodos(updateTodo);
    };

    const handleDoneTodo = (id) => {
        const updateTodo = todos?.map((todo) => (
                (todo.id === id) ? {...todo, done: !todo.done} : todo
            )
        )
        localStorage.setItem("todos", JSON.stringify(updateTodo));
        setTodos(updateTodo)
    }

    const handleEditTodo = () => {
        if (!selectedItemEdit.trim()) return

        const updateTodo = todos.map((todo) => {
            if (todo.id === selectedIndex) {
                return {...todo, title: selectedItemEdit.trim()};
            }

            return todo;
        });

        localStorage.setItem("todos", JSON.stringify(updateTodo));
        setTodos(updateTodo);
        setIsModalOpen(false)
        setSelectedIndex(undefined)
        setSelectedItemEdit("")
    }

    const openModal = (item) => {
        setSelectedItemEdit(item.title)
        setSelectedIndex(item.id)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedIndex(undefined)
        setSelectedItemEdit("")
    }

    return (
        <>
            <main
                className={`bg-[#31304D] min-h-screen w-full py-16 font-Nunito transition-all duration-300 ${isModalOpen ? "blur-sm pointer-events-auto" : ""}`}>
                <div className="flex flex-col items-center justify-center space-y-8 m-auto w-2/3 ">
                    <Header/>
                    <AddTodo onCreate={createTodo}/>
                    <BoxTodo todos={todos} onDelete={handleDeleteTodo} onEdit={openModal} onDone={handleDoneTodo}/>
                </div>
            </main>
            {isModalOpen && (
                <EditModal
                    value={selectedItemEdit}
                    onChange={setSelectedItemEdit}
                    onClose={closeModal}
                    onSave={handleEditTodo}
                />
            )}
        </>
    );
};

export default App;
