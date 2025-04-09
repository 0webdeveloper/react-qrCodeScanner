import React from 'react';

/**
 * Компонент поля ввода с единым стилем для всего приложения
 * @param {Object} props - Свойства компонента
 * @param {string} props.type - Тип поля ввода (text, password, email и т.д.)
 * @param {string} props.placeholder - Текст-подсказка
 * @param {string} props.value - Значение поля
 * @param {Function} props.onChange - Функция обработки изменения значения
 * @param {string} props.className - Дополнительные классы стилей
 * @param {boolean} props.disabled - Флаг отключения поля ввода
 */
export const Input = ({ 
    type = 'text', 
    placeholder = '', 
    value = '', 
    onChange, 
    className = '', 
    disabled = false 
}) => {
    const baseClasses = 'p-4 border border-gray-200 rounded-lg';
    
    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`${baseClasses} ${className}`}
        />
    );
};