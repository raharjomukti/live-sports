import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";

const bankData = [
    {
        bankName : "BCA",
        accountNumber : "2342434234",
        accountName : "PT. Sporty Live Indonesia"
    },
    {
        bankName : "Mandiri",
        accountNumber : "079047590347",
        accountName : "PT. Sporty Live Indonesia"
    },
    {
        bankName : "BRI",
        accountNumber : "0111312343322",
        accountName : "PT. Sporty Live Indonesia"
    },
]

const BankInfoList = () => {
    return (
        <div className="grid grid-cols-3 gap-8">
            {bankData.map((data, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-5"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 text-blue-600 rounded w-12 h-12 flex justify-center items-center">
                                <FiCreditCard size={24} />
                            </div>

                            <div>
                                <div className="font-semibold">
                                    {data.bankName}
                                </div>
                                <div className="text-xs opacity-50">
                                    Bank Transfer
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 justify-end">
                        <button className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                            <FiEdit2 size={20} />
                        </button>
                        <button className="p-2 rounded hover:bg-red-50 text-red-600 cursor-pointer">
                            <FiTrash2 size={20} />
                        </button>
                    </div>
                    <div className="p-5 font-medium">
                        <div className="text-xs opacity-50">
                            Account Number
                        </div>
                        <div>{data.accountNumber}</div>
                    </div>
                    <div className="border-t border-gray-200 p-5 py-3 text-xs">
                        <span className="opacity-50">Holder</span>: PT Sporty Live Indonesia
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BankInfoList;