import { SCAN_DATA, GENERATE_DATA } from '../constants';

/**
 * Сервис для работы с localStorage
 */
export const storageService = {
    /**
     * Получить данные из localStorage
     * @param {string} key - Ключ для получения данных
     * @returns {Array} - Массив данных
     */
    getData: (key) => {
        return JSON.parse(localStorage.getItem(key)) || [];
    },

    /**
     * Сохранить данные в localStorage
     * @param {string} key - Ключ для сохранения данных
     * @param {Array} data - Данные для сохранения
     */
    setData: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },

    /**
     * Добавить элемент в массив данных
     * @param {string} key - Ключ для сохранения данных
     * @param {Object} item - Элемент для добавления
     */
    addItem: (key, item) => {
        const data = storageService.getData(key);
        storageService.setData(key, [...data, item]);
    },

    /**
     * Удалить элемент из массива данных по индексу
     * @param {string} key - Ключ для сохранения данных
     * @param {number} index - Индекс элемента для удаления
     * @returns {Array} - Обновленный массив данных
     */
    removeItem: (key, index) => {
        const data = storageService.getData(key);
        const updatedData = data.filter((_, i) => i !== index);
        storageService.setData(key, updatedData);
        return updatedData;
    },

    /**
     * Получить данные сканирования
     * @returns {Array} - Массив данных сканирования
     */
    getScanData: () => {
        return storageService.getData(SCAN_DATA);
    },

    /**
     * Получить данные генерации
     * @returns {Array} - Массив данных генерации
     */
    getGenerateData: () => {
        return storageService.getData(GENERATE_DATA);
    },

    /**
     * Добавить данные сканирования
     * @param {Object} item - Данные сканирования
     */
    addScanData: (item) => {
        storageService.addItem(SCAN_DATA, item);
    },

    /**
     * Добавить данные генерации
     * @param {Object} item - Данные генерации
     */
    addGenerateData: (item) => {
        storageService.addItem(GENERATE_DATA, item);
    },

    /**
     * Удалить данные сканирования по индексу
     * @param {number} index - Индекс элемента для удаления
     * @returns {Array} - Обновленный массив данных
     */
    removeScanData: (index) => {
        return storageService.removeItem(SCAN_DATA, index);
    },

    /**
     * Удалить данные генерации по индексу
     * @param {number} index - Индекс элемента для удаления
     * @returns {Array} - Обновленный массив данных
     */
    removeGenerateData: (index) => {
        return storageService.removeItem(GENERATE_DATA, index);
    }
};