import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import './style.css';

export const QrCodeGegerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        setResult(value);
        setValue('');
    };

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        setResult('');
    };

    console.log(result);

    return (
        <div className="container">

            <input 
                type="text"
                placeholder="Введите текст"
                value={value}
                className="input"
                onChange={onChangeHandler}
            />
            <button
             type="button"
             onClick={onClickHandler}
             className="button"
             >Сгенерировать QR-код
             </button>

             {result !=='' && (
                <QRCodeSVG value={null} size={256} className="qr-code-generator"/>
            )}
        </div>
    )
}