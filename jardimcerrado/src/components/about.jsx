import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles/carrosel.css"; // Arquivo de estilos
import { useState } from "react";


const images = [
    { src: "/img2.jpg", },
    { src: "/img3.jpg",  },
    { src: "/img1.jpg", },
    { src: "/img4.jpg",  },
    { src: "/img2.jpg", },
    { src: "/img3.jpg",  },
    { src: "/img1.jpg", },
    { src: "/img4.jpg",  },

];


export default function About() {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <section id="about" className="text-center py-5 mt-5">
            <h1 className="text-dark fw-bold">Nossa galeria de imagens</h1>
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
                slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            {images.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="slide text-center">
                        <img 
                            src={item.src} 
                            alt={`Imagem ${index + 1}`} 
                            className="mx-auto mb-3 cursor-pointer"
                            onClick={() => setSelectedImage(item.src)}
                                                      style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage} alt="Imagem em tela cheia" />
                    </div>
                </div>
            )}
    </section>
    );
}