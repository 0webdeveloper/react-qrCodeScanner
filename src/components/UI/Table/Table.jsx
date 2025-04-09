import React from 'react';

/**
 * Компонент таблицы для отображения данных
 * @param {Object} props - Свойства компонента
 * @param {Array} props.headers - Массив заголовков таблицы
 * @param {Array} props.data - Массив данных для отображения
 * @param {Function} props.onRowClick - Функция обработки клика по строке
 * @param {Function} props.renderRow - Функция для кастомного рендеринга строки
 */
export const Table = ({ headers, data, onRowClick, renderRow }) => {
    return (
        <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className="border border-gray-300 p-2">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        renderRow ? (
                            renderRow(item, index, onRowClick)
                        ) : (
                            <tr 
                                key={index} 
                                onClick={() => onRowClick && onRowClick(index)} 
                                className={onRowClick ? "cursor-pointer hover:bg-red-100" : ""}
                            >
                                {Object.values(item).map((value, cellIndex) => (
                                    <td key={cellIndex} className="border border-gray-300 p-2">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        )
                    ))
                ) : (
                    <tr>
                        <td 
                            colSpan={headers.length} 
                            className="border border-gray-300 p-2 text-center"
                        >
                            Нет данных для отображения
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};