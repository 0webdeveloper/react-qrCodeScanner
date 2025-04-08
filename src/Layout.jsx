import { Routes, Route } from "react-router-dom";
import { QrCodeGegerator } from './components/Generate/QrCodeGegerator';
import { QrCodeScanner } from './components/Scan/qrCodeScanner';
import { Navigation } from './components/Navigation/Navigation';
import { GenerateHistory } from './components/GenerateHistory/GenerateHistory';
import { GenerateScan } from './components/GenerateScan/GenerateScan';
const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/generator" element={<QrCodeGegerator />} />
                <Route path="/scanner" element={<QrCodeScanner />} /> 
                <Route path="/generateHistory" element={<GenerateHistory />} /> 
                <Route path="/generateScan" element={<GenerateScan />} /> 
            </Routes>
        </div>
    );
};

export { Layout };