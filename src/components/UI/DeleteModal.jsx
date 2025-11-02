// import React from "react";

// const DeleteModal = ({
//     isOpen,
//     onClose,
//     onConfirm,
//     title = "Delete Confirmation",
//     message = "Are you sure you want to delete this item? This action cannot be undone.",
//     confirmText = "Delete",
//     cancelText = "Cancel",
// }) => {
//     if (!isOpen) return null;

//     return (
//         <div
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//             onClick={onClose}
//         >
//             <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-[90%] max-w-md transition-all transform scale-100"
//             >
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
//                     {title}
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//                     {message}
//                 </p>
//                 <div className="flex justify-end gap-3">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
//                     >
//                         {cancelText}
//                     </button>
//                     <button
//                         onClick={onConfirm}
//                         className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
//                     >
//                         {confirmText}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DeleteModal;

import React from "react";

const DeleteModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Delete Confirmation",
    message = "Are you sure you want to delete this item? This action cannot be undone.",
    confirmText = "Delete",
    cancelText = "Cancel",
    theme = "light", // ✅ accept theme prop
}) => {
    if (!isOpen) return null;

    const isDark = theme === "dark";

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`rounded-xl shadow-2xl p-6 w-[90%] max-w-md transition-all duration-300 ${isDark
                    ? "bg-slate-700 text-gray-100 border border-gray-600"
                    : "bg-white text-gray-900 border border-gray-200"
                    }`}
            >
                {/* Header */}
                <h2 className="text-xl font-semibold mb-2">{title}</h2>

                {/* Message */}
                <p
                    className={`text-sm mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    {message}
                </p>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className={`px-4 py-2 rounded-lg font-medium border transition-colors ${isDark
                            ? "border-gray-400 text-gray-200 hover:bg-gray-600"
                            : "border-gray-300 text-gray-800 hover:bg-gray-100"
                            }`}
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700 shadow-sm transition-colors"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;


