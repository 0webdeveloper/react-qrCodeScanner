import { Scanner } from '@yudiel/react-qr-scanner';

export const QrCodeScanner = () => {
    const scanHandler = (result) => {
        console.log(result);
    }

const settings = {
    audio: false,
    finder: false
}

    return (
        <div>
            <Scanner 
                allowMultiple={true}
                components={settings}
                styles={{
                    container: {width: 350, border: '1px solid #000', borderRadius: 10}
                }}
                onScan={(result) => scanHandler}
            />
        </div>
    )
}