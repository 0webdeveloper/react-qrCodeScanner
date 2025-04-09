/**
 * Утилиты для работы с датами
 */

/**
 * Форматирует дату в читаемый формат
 * @param {Date} date - Дата для форматирования
 * @returns {string} - Отформатированная дата
 */
export const formatDate = (date = new Date()) => {
    return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};

/**
 * Создает объект с данными и текущей датой
 * @param {string} value - Значение для сохранения
 * @returns {Object} - Объект с данными и датой
 */
export const createDataWithDate = (value) => {
    return {
        value,
        createdAt: formatDate()
    };
};