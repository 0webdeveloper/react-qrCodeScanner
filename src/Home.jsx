import React from 'react';

export const Home = () => {
  return (
    <div className="container mx-auto max-w-8xl p-4 text-center h-[calc(100dvh-88px)] grid place-items-center">
        <div>
            <h1 className="text-3xl font-bold mb-4">QR Code Generator & Scanner</h1>
            <p className="text-xl">Приложение для генерации и сканирования QR кодов</p>
        </div>
    </div>
  );
};