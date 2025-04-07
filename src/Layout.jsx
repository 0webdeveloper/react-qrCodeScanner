import { Routes, Route } from "react-router-dom";
import { QrCodeGegerator } from './components/Generate/QrCodeGegerator';
import { QrCodeScanner } from './components/Scan/qrCodeScanner';
import { Navigation } from './components/Navigation/Navigation';

const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/generator" element={<QrCodeGegerator />} />
                <Route path="/scanner" element={<QrCodeScanner />} /> 
            </Routes>
        </div>
    );
};

export { Layout };