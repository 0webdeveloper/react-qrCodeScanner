import { Routes, Route } from "react-router-dom";
import { QrCodeGegerator } from './QrCodeGegerator';
import { QrCodeScanner } from './QrCodeScanner';
import { Navigation } from './Navigation';

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