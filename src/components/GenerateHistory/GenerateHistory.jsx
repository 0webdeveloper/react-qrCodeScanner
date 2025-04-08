import { GENERATE_DATA } from "../../constants";

export const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];

    console.log(data);
    
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">История генераций</h1>
            <div className="container mx-auto max-w-8xl p-4">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">ID</th>
                            <th className="border border-gray-300 p-2">Данные</th>
                            <th className="border border-gray-300 p-2">Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{index + 1}</td>
                                <td className="border border-gray-300 p-2">{item.value}</td>
                                <td className="border border-gray-300 p-2">{item.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}