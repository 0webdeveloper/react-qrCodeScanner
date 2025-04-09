import React from 'react';

/**
 * Компонент кнопки с единым стилем для всего приложения
 * @param {Object} props - Свойства компонента
 * @param {string} props.type - Тип кнопки (button, submit, reset)
 * @param {Function} props.onClick - Функция обработки клика
 * @param {string} props.className - Дополнительные классы стилей
 * @param {React.ReactNode} props.children - Содержимое кнопки
 * @param {boolean} props.disabled - Флаг отключения кнопки
 */
export const Button = ({ 
    type = 'button', 
    onClick, 
    className = '', 
    children, 
    disabled = false 
}) => {
    const baseClasses = 'bg-gray-500 text-white p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-200';
    
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${className}`}
        >
            {children}
        </button>
    );
};