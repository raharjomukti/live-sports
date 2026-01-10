"use client";

import { FiCheckCircle, FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const PaymentSteps = () => {
    const {push} = useRouter();

    const uploadAndconfirm = () => {
        push("/order-status/212")
    }
    
    return (
    <div>
        <CardWithHeader title="Payment Steps">
            <div className="p-5">
                <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Rp. 1.900.000</b>, qui delectus quos consectetur provident ducimus vitae natus aliquam nostrum esse, architecto ullam ab possimus, non temporibus veniam. Id, sed.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis, qui delectus quos consectetur provident <b>Keep the Payment Receipt</b>, architecto ullam ab possimus, non temporibus veniam. Id, sed.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis, qui <b>Upload the Payment Receipt/Screenshoot confirm</b>, ducimus vitae natus aliquam nostrum esse, architecto ullam ab possimus, non temporibus veniam. Id, sed.</li>
                </ol>
                <FileUpload />
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className='flex justify-between'>
                    <div className="text-sm">Total:</div>
                    <div 
                        className="font-semibold text-primary text-xs">{priceFormatter(1900430)}
                    </div>
                </div>
                <Button variant='dark' className="w-full mt-4 flex justify-center gap-2" onClick={uploadAndconfirm}>
                    <FiCheckCircle /> Upload Receip & Confirm
                </Button>
            </div>
        </CardWithHeader>
    </div>
);
}

export default PaymentSteps; 