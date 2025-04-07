import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="container mx-auto max-w-8xl p-4">
            <ul className="flex gap-4 justify-center">
                <li><Link to="/">Домой</Link></li>
                <li><Link to="/generator">Генерировать qrCode</Link></li>
                <li><Link to="/scanner">Сканировать qrCode</Link></li>
            </ul>
        </nav>
    );
};