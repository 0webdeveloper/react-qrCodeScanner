import { Routes, Route, Navigate } from "react-router-dom";
import { QrCodeGegerator } from './components/Generate/QrCodeGegerator';
import { QrCodeScanner } from './components/Scan/qrCodeScanner';
import { Navigation } from './components/Navigation/Navigation';
import { GenerateHistory } from './components/Generate/GenerateHistory';
import { ScanHistory } from './components/Scan/ScanHistory';
import { Home } from './Home';

const Layout = () => {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/react-qrCodeScanner/" element={<Home />} />
                <Route path="/react-qrCodeScanner/generator" element={<QrCodeGegerator />} />
                <Route path="/react-qrCodeScanner/scanner" element={<QrCodeScanner />} /> 
                <Route path="/react-qrCodeScanner/generateHistory" element={<GenerateHistory />} /> 
                <Route path="/react-qrCodeScanner/scanHistory" element={<ScanHistory />} />
                {/* <Route path="/react-qrCodeScanner/" element={<Navigate to="/" replace />} /> */}
            </Routes>

        </>
    );
};

export { Layout };