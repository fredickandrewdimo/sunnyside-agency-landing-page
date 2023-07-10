function Gallery() {
  return (
    <>
      {/* grid container */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="">
          <img src="/image-gallery-milkbottles.jpg" alt="" />
        </div>
        <div className="">
          <img src="/image-gallery-orange.jpg" alt="" />
        </div>
        <div className="">
          <img src="/image-gallery-cone.jpg" alt="" />
        </div>
        <div className="">
          <img src="/image-gallery-sugarcubes.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
