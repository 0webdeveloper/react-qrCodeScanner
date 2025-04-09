import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';

export const ScanHistory = () => {

    const [historyData, setHistoryData] = useState(
        JSON.parse(localStorage.getItem(SCAN_DATA)) || []
    );

    const removeLine = (index) => {
        const updateData = historyData.filter((_, i) => i !== index);
        localStorage.setItem(SCAN_DATA, JSON.stringify(updateData));
        setHistoryData(updateData);
    }
    
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">История скана</h1>
            <div className="container mx-auto max-w-8xl p-4">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">ID</th>
                            <th className="border border-gray-300 p-2">Данные</th>
                            <th className="border border-gray-300 p-2">Дата</th>
                            <th className="border border-gray-300 p-2">qr code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((item, index) => (
                            <tr key={index} onClick={() =>removeLine(index)} className="cursor-pointer hover:bg-red-100">
                                <td className="border border-gray-300 p-2">{index + 1}</td>
                                <td className="border border-gray-300 p-2">{item.value}</td>
                                <td className="border border-gray-300 p-2">{item.createdAt}</td>
                                <td className="border border-gray-300 p-2"> <QRCodeSVG value={item.value} size={100} className="qr-code-generator !p-2"/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}