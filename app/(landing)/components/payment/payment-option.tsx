import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
  {
    bank_name: 'BCA',
    account_number: '342849328409',
    account_holder: 'PT Sporty Live Indonesia',
    icon: '💳'
  },
  {
    bank_name: 'BSI',
    account_number: '4545242455',
    account_holder: 'PT Sporty Live Indonesia',
    icon: '💳'
  },
  {
    bank_name: 'BRI',
    account_number: '098530852514',
    account_holder: 'PT Sporty Live Indonesia',
    icon: '💳'
  },
  {
    bank_name: 'Mandiri',
    account_number: '1112323124124',
    account_holder: 'PT Sporty Live Indonesia',
    icon: '💳'
  },
  {
    bank_name: 'Bank Jago',
    account_number: '99989899889',
    account_holder: 'PT Sporty Live Indonesia',
    icon: '💳'
  }
];

const PaymentOption = () => {
  return (
    <div>
        <CardWithHeader title="Payment Option">
            {paymentList.map((payment, index) => (
                <div className="flex gap-5 p-4.5 border-b border-gray-100" key={index}>
                    <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center rounded-md">
                        <FiCreditCard size={25} />
                    </div>
                    <div className="self-center">
                        <div className="font-bold">{payment.bank_name}</div>
                        <div className="text-sm">{payment.account_number}</div>
                        <div className="text-sm opacity-70">{payment.account_holder}</div>
                    </div>
                    <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-3 py-1 rounded-full">
                        Bank Transfer
                    </div>
                </div>
            ))}
        </CardWithHeader>
    </div>
);
}

export default PaymentOption; 