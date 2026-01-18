import priceFormatter from "@/app/utils/price-formatter";
import { FiEdit, FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const transactionData = [
    {
        date : "24/09/2025 09:30",
        customer : "Jhon Doe",
        contact : "082442342343",
        total : 170000,
        status : "Pending"
    },
    {
        date : "24/09/2025 19:30",
        customer : "Jhon Oki",
        contact : "082442342343",
        total : 370000,
        status : "Rejected"
    },
    {
        date : "24/09/2025 09:30",
        customer : "Dono aku",
        contact : "082442342343",
        total : 176000,
        status : "Paid"
    },
];

type TTransactionTableProps ={
    onViewDetails: () => void;
};

const TransactionTable = ({onViewDetails}: TTransactionTableProps) => {
        const getStatusColor = (status: string) => {
            switch (status.toLowerCase()) {
                case "pending":
                    return "bg-yelLow-100 text-yellow-600 border-yellow-300";
                case "rejected":
                    return "bg-red-100 text-red-600 border-red-300";
                case "paid" :
                    return "bg-green-100 text-green-600 border-green-300";
                }
            };
    
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Customer</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Total</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactionData.map((data, index) => (
                            <tr key={index} className="border-r border-gray-200 last:border-b-0">
                                    <td className="px-6 py-4 font-medium">{data.date}</td>
                                    <td className="px-6 py-4 font-medium">{data.customer}</td>
                                    <td className="px-6 py-4 font-medium">{data.contact}</td>
                                    <td className="px-6 py-4 font-medium">
                                        {priceFormatter(data.total)}
                                    </td>

                                    <td className="px-6 py-4 font-medium">
                                        <div className= {`px-4 py-2 rounded-full border text-center w-fit text-sm uppescase ${getStatusColor(data.status)}`}>{data.status}</div>
                                    </td>
                                    <td className="px-6 py-7.5 self-center flex items-center gap-3 text-gray-600">
                                        <button onClick={onViewDetails} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md">
                                            <FiEye size={18} /> View Details
                                        </button>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TransactionTable;