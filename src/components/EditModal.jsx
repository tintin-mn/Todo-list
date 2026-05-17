const EditModal = ({value, onChange, onClose, onSave}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSave();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit}
                  className="bg-[#31304D] w-96 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                <div className="bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-white text-lg font-semibold tracking-wide">✏️ Edit Task</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white/80 hover:text-white text-2xl leading-none cursor-pointer transition-colors"
                    >
                        &times;
                    </button>
                </div>
                <div className="px-6 py-5 space-y-4">
                    <input
                        type="text"
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                        autoFocus
                        className="w-full rounded-md border border-slate-300 px-4 py-2 outline-none focus:border-cyan-500"
                        placeholder="Edit your task"
                    />
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-2.5 rounded-xl border-2 border-red-400 text-gray-200 font-semibold hover:bg-red-500 hover:border-red-400 hover:scale-[1.04] transition-all cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-2.5 rounded-xl border-2 border-green-400 text-gray-200 font-semibold hover:bg-green-500 hover:scale-[1.04] transition-all cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditModal;