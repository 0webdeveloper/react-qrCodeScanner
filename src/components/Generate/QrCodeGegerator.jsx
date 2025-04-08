import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import '../../style.css';
import { GENERATE_DATA } from '../../constants';

export const QrCodeGegerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([
                ...(JSON.parse(localStorage.getItem(GENERATE_DATA)) || []), 
                value
            ])
        );
        setResult(value);
        setValue('');
    };

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        setResult('');
    };

    console.log(result);

    return (
        <div className="container mx-auto max-w-8xl my-6">
            <div className="flex justify-center items-center gap-4">
            <input 
                type="text"
                placeholder="Введите текст"
                value={value}
                className="p-4 border border-gray-200 rounded-lg"
                onChange={onChangeHandler}
            />
            <button
             type="button"
             onClick={onClickHandler}
             className="bg-gray-500 text-white p-4 rounded-lg"
             >Сгенерировать QR-код
             </button>

             {result !=='' && (
                <QRCodeSVG value={null} size={256} className="qr-code-generator"/>
            )}
            </div>
        </div>
    )
}