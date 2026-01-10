import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">    
        <div className="p-5">
            <div className="input-group">
                <label htmlFor="full_name">Full Name</label>
                <input type="text" placeholder="Type Your Full Name Dude" id="full_name" />
            </div>
            <div className="input-group">
                <label htmlFor="wa_number">Number WhatsApp</label>
                <input type="text" placeholder="Type Your Number WhatsApp Dude" id="wa_number" />
            </div>
            <div className="input-group">
                <label htmlFor="shipping_address">Shipping Address</label>
                <textarea placeholder="Type Your Address Shipping" id="shipping_address" rows={7}></textarea>
            </div>
        </div>
    </CardWithHeader>
  );
}

export default OrderInformation;