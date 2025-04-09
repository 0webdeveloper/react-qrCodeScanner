import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { SCAN_DATA } from '../../constants';
import { useQRHistory } from '../../hooks/useQRHistory';

export const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null);
    const { addToHistory } = useQRHistory(SCAN_DATA);

    const scanHandler = (result) => {
        if (result && result.length > 0) {
            const rawValue = result[0].rawValue;
            setScanned(rawValue);
            addToHistory(rawValue);
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
                        container: {minWidth: 340, maxWidth: 600, height:600, border: '1px solid #d3d3d3', borderRadius: 5}
                    }}
                    onScan={scanHandler}
                />

                <p>{scanned}</p>
            </div>
        </div>
    )
}