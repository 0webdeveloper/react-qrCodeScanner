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
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<QrCodeGegerator />} />
                <Route path="/scanner" element={<QrCodeScanner />} /> 
                <Route path="/generateHistory" element={<GenerateHistory />} /> 
                <Route path="/scanHistory" element={<ScanHistory />} />
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>

        </>
    );
};

export { Layout };