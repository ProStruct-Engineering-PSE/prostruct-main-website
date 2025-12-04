import Image from "next/image";

// Embedded data from WordPress
const TAG_LINE = "Professional Structural & Civil Engineers";
const INFO_IMAGE = {
  url: "/images/triangle.png",
  alt: "ProStruct Features: Low Cost, High Speed, High Quality",
  width: 350,
  height: 200,
};

export function TagLine() {
  return (
    <section className="c-data-structure">
      <div className="container">
        <h3>{TAG_LINE}</h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="row align-items-start g-0">
              <div className="col-md-5 offset-md-7 col-lg-7 offset-lg-5">
                <Image
                  src={INFO_IMAGE.url}
                  alt={INFO_IMAGE.alt}
                  width={INFO_IMAGE.width}
                  height={INFO_IMAGE.height}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
