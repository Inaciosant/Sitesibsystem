import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../carrosel.css"; // Arquivo de estilos

const images = [
  { src: "/images/img2.jpg", title: "Guardians of the Galaxy", description: "A group of intergalactic criminals must pull together to stop..." },
  { src: "/images/img3.jpg", title: "Spider-Man: No Way Home", description: "Peter Parker must fix reality before it's too late..." },
  { src: "/images/img1.jpg", title: "Justice League", description: "Superman’s ultimate sacrifice was not in vain..." },
];

export default function Carousel() {
  return (
    <section id="carousel">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={item.src} alt={item.title} />
              <div className="slide-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
