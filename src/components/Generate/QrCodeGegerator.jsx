import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import '../../style.css';
import { GENERATE_DATA } from '../../constants';

export const QrCodeGegerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        if (value.trim() === '') {
            setValue('');
            return;
        }
        const currentDate = new Date();
        const readableDate = currentDate.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const dataToStore = {
            value,
            createdAt: readableDate
        };
        
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([
                ...(JSON.parse(localStorage.getItem(GENERATE_DATA)) || []), 
                dataToStore
            ])
        );
        setResult(value); 
        setValue('');
    };

    const onChangeHandler = (e) => {        
        setValue(e.target.value);
    };

   const generateNewQR = () => {
        setResult('');
   }

    return (
        <div className="container mx-auto max-w-8xl my-6">
            <div className="grid place-items-center h-[calc(100dvh-88px)]">
                
                {result === '' && (
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
                            className="bg-gray-500 text-white p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-200"
                            >Сгенерировать QR-код
                            </button>
                        </div>
                )}

                {result !=='' && (
                    <div className="flex flex-col gap-6">
                        <QRCodeSVG value={null} size={256} className="qr-code-generator"/>

                        <button
                        type="button"
                        onClick={generateNewQR}
                        className="bg-gray-500 text-white p-4 rounded-lg mt-8 cursor-pointer hover:bg-gray-600 transition duration-200"
                        >Сгенерировать новый QR-код
                        </button>
                    </div>
                )}
                
            </div>
        </div>
    )
}