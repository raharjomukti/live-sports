"use client";

import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmited from "../../components/order-status/order-submited";
import { getTransactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";

const OrderStatus = async ({params}: TPageProps) => {
  const {id} = await params

  const transaction = await getTransactionById(id)
  console.log("Trancation", transaction);

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">
          Order Status
        </h1>
      </div>
      {transaction.status === "paid" ?  <OrderConfirmed /> : <OrderSubmited />}
    </main>
  );
}

export default OrderStatus;