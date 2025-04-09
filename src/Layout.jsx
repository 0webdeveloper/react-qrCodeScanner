import { Routes, Route } from "react-router-dom";
import { QrCodeGegerator } from './components/Generate/QrCodeGegerator';
import { QrCodeScanner } from './components/Scan/qrCodeScanner';
import { Navigation } from './components/Navigation/Navigation';
import { GenerateHistory } from './components/GenerateHistory/GenerateHistory';
import { ScanHistory } from './components/ScanHistory/ScanHistory';
import { Home } from './Home';

const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<QrCodeGegerator />} />
                <Route path="/scanner" element={<QrCodeScanner />} /> 
                <Route path="/generateHistory" element={<GenerateHistory />} /> 
                <Route path="/scanHistory" element={<ScanHistory />} /> 
            </Routes>

        </div>
    );
};

export { Layout };