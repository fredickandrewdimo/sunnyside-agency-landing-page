// Hero image
import graphicDesign from "/image-graphic-design.jpg";
import photography from "/image-photography.jpg";

function Services() {
  return (
    <>
      {/* main container */}
      <div className="">
        {/* 1st section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="order-last lg:order-first bg-orange-50 font-kadwa px-7 lg:px-36 py-14 text-center flex-col flex justify-center lg:text-start">
            <h2 className="font-bold mb-5 text-3xl lg:text-4xl">
              Transform your brand
            </h2>
            <p className="font-roboto lg:text-lg mb-8 text-gray-500">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.{" "}
            </p>
            <a
              className="font-bold underline decoration-yellow-300 decoration-4 underline-offset-0 lg:text-lg"
              href=""
            >
              LEARN MORE
            </a>
          </div>
          <div className="">
            <img className="w-full" src="/image-transform.jpg" alt="" />
          </div>
        </div>
        {/* 2nd section */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <img src="/image-stand-out.jpg" alt="" />
          </div>
          <div className="bg-orange-50 font-kadwa px-7 lg:px-36 py-14 text-center flex-col flex justify-center lg:text-start">
            <h2 className="font-bold mb-5 text-3xl">
              Stand out to the right audience
            </h2>
            <p className="font-roboto lg:text-lg mb-8 text-gray-500">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we will build and
              extend your brand in digital places.
            </p>
            <a
              className="font-bold underline decoration-yellow-300 decoration-4 underline-offset-0 lg:text-lg"
              href=""
            >
              LEARN MORE
            </a>
          </div>
        </div>
        {/* 3rd section */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="font-kadwa py-5 px-5 text-center flex-col flex justify-end text-green-900"
            style={{
              backgroundImage: `url(${graphicDesign})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="font-bold mb-8 text-2xl lg:text-3xl mt-72">
              Graphic Design
            </h2>
            <p className="font-roboto mb-8 lg:px-40">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </p>
          </div>
          <div
            className="font-kadwa py-5 px-5 text-center flex-col flex justify-end text-cyan-900"
            style={{
              backgroundImage: `url(${photography})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="font-bold mb-8 text-2xl lg:text-3xl mt-72">
              Photography
            </h2>
            <p className="font-roboto mb-8 lg:px-40">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
