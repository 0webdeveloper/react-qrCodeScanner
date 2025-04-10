import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Главная' },
        { path: '/generator', label: 'Генерировать qrCode' },
        { path: '/scanner', label: 'Сканировать qrCode' },
        { path: '/generateHistory', label: 'История генераций' },
        { path: '/scanHistory', label: 'История сканирования' },
    ];

    return (
        <nav className="container mx-auto max-w-8xl p-4">
            <ul className="flex flex-wrap gap-4 justify-center mt-8">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <Link 
                            className={`py-2 px-4 rounded-lg border ${location.pathname === link.path ? 'bg-blue-500 text-white' : 'border-gray-100 hover:text-white hover:bg-blue-400'}`} 
                            to={link.path}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};