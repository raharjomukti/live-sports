import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
    <main className="container mx-auto py-40 flex gap-12">
        <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
            <Image 
            src="/images/products/product-1.png"
            width={550}
            height={550}
            alt="Product Image-1" 
            className="aspect-square object-contain w-full"
            />
        </div>

        <div className="w-full py-7">
            <h1 className="font-bold text-5xl mb-6">Live Sporty HyperSoccer v3</h1>
            <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
                Football
            </div>
            <p className="leading-loose mb-8">
                Description of the product goes here. This is a detailed description of the product features and benefits. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi aspernatur minima commodi? Assumenda distinctio consectetur minima minus quo, eum ipsa quisquam vitae rerum, quasi recusandae harum ex? Voluptatibus, debitis.
            </p>
            <div className="text-primary text-[32px] font-semibold mb-12">
                {priceFormatter(450000)}
            </div>
            <ProductActions />
        </div>
    </main>
    )
};

export default ProductDetail;