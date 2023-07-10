function Testimonials() {
  return (
    <>
      {/* background */}
      <div className="bg-orange-50">
        {/* width content */}
        <div className="w-11/12 m-auto mn-h-screen">
          <h2 className="text-center font-kadwa text-2xl font-bold text-gray-400 pt-10 lg:pt-24 lg:pb-28 pb-14">
            CLIENT TESTIMONIALS
          </h2>
          {/* testimonial grid  */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* 1st */}
            <div className="flex flex-col justify-center items-center text-center mb-16 px-2 lg:px-10">
              <img
                className="rounded-full h-20 w-20 mb-8"
                src="/image-emily.jpg"
                alt=""
              />
              <p className="mb-8 text-gray-600">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div className="">
                <h3 className="font-bold text-xl font-kadwa">Emily R.</h3>
                <p className="text-gray-400">Marketing Director</p>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex flex-col justify-center items-center text-center mb-16 px-2 lg:px-10">
              <img
                className="rounded-full h-20 w-20 mb-8"
                src="/image-thomas.jpg"
                alt=""
              />
              <p className="mb-8 text-gray-600">
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satifying and enjoyable experience.
              </p>
              <div className="">
                <h3 className="font-bold text-xl font-kadwa">Thomas S.</h3>
                <p className="text-gray-400">Chief Operating Officer</p>
              </div>
            </div>
            {/* 3rd */}
            <div className="flex flex-col justify-center items-center text-center mb-16 px-2 lg:px-10">
              <img
                className="rounded-full h-20 w-20 mb-8"
                src="/image-jennie.jpg"
                alt=""
              />
              <p className="mb-8 text-gray-600">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <div className="">
                <h3 className="font-bold text-xl font-kadwa">Jennie F.</h3>
                <p className="text-gray-400">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
