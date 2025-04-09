import { useState } from 'react';
import { storageService } from '../services/storageService';
import { createDataWithDate } from '../utils/dateUtils';

/**
 * Хук для работы с историей QR-кодов
 * @param {string} storageKey - Ключ для хранения данных в localStorage
 * @returns {Object} - Объект с методами для работы с историей
 */
export const useQRHistory = (storageKey) => {
    // Состояние для хранения истории QR-кодов
    const [history, setHistory] = useState(() => storageService.getData(storageKey));

    /**
     * Получить историю QR-кодов
     * @returns {Array} - Массив с историей QR-кодов
     */
    const getHistory = () => {
        return history;
    };

    /**
     * Добавить запись в историю QR-кодов
     * @param {string} value - Значение QR-кода
     */
    const addToHistory = (value) => {
        const newItem = createDataWithDate(value);
        storageService.addItem(storageKey, newItem);
        setHistory(storageService.getData(storageKey));
        return newItem;
    };

    /**
     * Удалить запись из истории QR-кодов по индексу
     * @param {number} index - Индекс записи для удаления
     */
    const removeFromHistory = (index) => {
        const updatedData = storageService.removeItem(storageKey, index);
        setHistory(updatedData);
    };

    /**
     * Очистить всю историю QR-кодов
     */
    const clearHistory = () => {
        storageService.setData(storageKey, []);
        setHistory([]);
    };

    return {
        history,
        getHistory,
        addToHistory,
        removeFromHistory,
        clearHistory
    };
};