// Hero image
import backgroundImage from "/image-header.jpg";

// Components
import Navbar from "../components/Navbar";

function Hero() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />

        <div className="w-11/12 m-auto mn-h-screen pt-20 lg:pt-36 pb-56 text-center flex-col flex items-center justify-center">
          <h1 className="font-bold font-kadwa text-5xl lg:text-7xl tracking-widest leading-normal text-white">
            WE ARE CREATIVES
          </h1>
          <img
            className="h-24 mt-5 lg:mt-10 lg:h-30"
            src="/icon-arrow-down.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
