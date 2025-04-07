import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        if (result && result.length > 0) {
            const rawValue = result[0].rawValue;
            setScanned(rawValue);
            localStorage.setItem(
                SCAN_DATA,
                JSON.stringify([
                    ...(JSON.parse(localStorage.getItem(SCAN_DATA)) || []), 
                    rawValue
                ])
            );
        }
    };

    console.log({setScanned});
    

    return (
        <div className="container mx-auto max-w-8xl ">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-2xl font-bold">Отсканируйте QR code </h2>
                <Scanner 
                    allowMultiple={true}
                    components={{
                        finder: false,
                        audio: false
                    }}
                    styles={{
                        container: {width: 350, border: '1px solid #000', borderRadius: 10}
                    }}
                    onScan={(result) => scanHandler}
                />

                <p>{scanned}</p>
            </div>
        </div>
    )
}