import priceFormatter from '@/app/utils/price-formatter';
import Image from 'next/image';
import Button from './button';
import { FiArrowRight, FiTrash, FiTrash2 } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export const cartList = [
  {
    name: "Live Sporty HyperSoccer v3",
    category: "Running",
    price: 450000,
    qty : 56,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty : 62,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty : 45,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Running",
    price: 440000,
    qty : 32,
    imgUrl: "product-4.png",
  }
];

const CartPopup = () => {
    const {push} = useRouter();
    const totalPrice = cartList.reduce((total, item) => total + (item.price * item.qty), 0);

    const handleCheckout = () => {
        push("/checkout")
    }

    return (
        <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Card
            </div>
            {cartList.map((item, index) => (
                <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                    <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                    <Image
                        src={`/images/products/${item.imgUrl}`}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="aspect-square object-contain"
                    />
                    </div>
                    <div className='self-center'>
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="flex gap-3 font-medium text-xs">
                            <div>{item.qty}x</div>
                            <div className="text-primary font-semibold">{priceFormatter(item.price)}</div>
                        </div>
                    </div>
                    <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center ml-auto">
                        <FiTrash2 />
                    </Button>
                </div>
            ))}
            <div className="border-t border-gray-200 p-4">
                <div className='flex justify-between'>
                    <div className="text-sm">Total:</div>
                    <div className="font-semibold text-primary text-xs">{priceFormatter(totalPrice)}</div>
                </div>
                <Button variant='dark' size='small' className="w-full mt-4 flex justify-center gap-2" onClick={handleCheckout}>
                    Checkout Now! <FiArrowRight />
                </Button>
            </div>
        </div>
    );
}

export default CartPopup;
