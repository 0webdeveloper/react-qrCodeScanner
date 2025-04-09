import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

/**
 * Компонент для отображения QR-кода
 * @param {Object} props - Свойства компонента
 * @param {string} props.value - Значение для генерации QR-кода
 * @param {number} props.size - Размер QR-кода
 * @param {string} props.className - Дополнительные классы стилей
 */
export const QRCode = ({ value, size = 256, className = '' }) => {
    const baseClasses = 'qr-code-generator';
    
    return (
        <QRCodeSVG 
            value={value} 
            size={size} 
            className={`${baseClasses} ${className}`}
        />
    );
};