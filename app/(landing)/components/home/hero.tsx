import Image from "next/image";
import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image
            src="/images/img-basketball.png"
            alt="live sport image"
            width={432}
            height={423}
            className="grayscale absolute left-0 -top-20"
        />
        <div className="relative ml-40 w-full">
          <div className="text-primary italic">Weekend Sale, 50%</div>
          <h1 className="font-extrabold text-[96px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP QUALITY <br /> SPORTYWEAR</h1>
            <p className="w-1/2 mt-10 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem veritatis aut magni, id nesciunt mollitia non, laboriosam commodi optio excepturi. </p>
            <div className="flex gap-5 mt-10">
                <Button>
                    Explore More <FiFastForward />
                </Button>
                <Button variant="ghost">
                    Watch Video{" "}
                <Image
                    src="/images/icon-play-video.svg"
                    alt="icon playvideo"
                    width={29}
                    height={29}
                />
                </Button>
            </div>
        </div>
        <Image
            src="/images/img-hero.png"
            alt="live sport image"
            width={710}
            height={960}
            className="absolute -right-5 top-1/2 -translate-y-1/2"
        />
        <Image
            src="/images/img-ornament-hero.svg"
            alt="live sport image"
            width={420}
            height={420}
            className="absolute -right-[400px] top-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default HeroSection;