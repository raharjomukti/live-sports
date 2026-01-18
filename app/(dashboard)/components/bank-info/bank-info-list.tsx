import { FiCreditCard } from "react-icons/fi";

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
            {
                bankData.map({data, index} => (
                    <div key={index}>
                        <div className="flex justify-between bg-white gap-5">
                            <div className="flex gap-2">
                                <div className="bg-blue-50 text-blue-600 rounded w-12 h-12 flex justify-center items-center">
                                    <FiCreditCard />
                                </div>
                            </div>
                        </div>
                    </div>
                ));
            };
        </div>
    )
}

export default BankInfoList;