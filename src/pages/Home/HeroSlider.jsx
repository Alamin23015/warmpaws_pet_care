// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // Import fade effect

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <div className="h-[60vh] md:h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'} // Use fade effect
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <div className="h-full w-full relative">
            <img src="https://github.com/Alamin23015/API_Image/raw/main/Image/1.jpg" className="h-full w-50px object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-4" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Stay Warm, Stay Stylish</h1>
                <p className="text-lg md:text-xl">Custom winter fittings for your best friend.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full relative">
            <img src="https://i.ibb.co/h7gBqH2/pet-grooming-winter.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-4" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Cozy Paws, Happy Pets</h1>
                <p className="text-lg md:text-xl">Specialized grooming for winter protection.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full relative">
            <img src="https://i.ibb.co/g94S4z1/pet-agility-indoor.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-4" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Active Indoors!</h1>
                <p className="text-lg md:text-xl">Keep them moving with our indoor agility classes.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;