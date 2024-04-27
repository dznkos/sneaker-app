import React, { useState } from 'react'
import cat_hombre from '../assets/img/categories/cat_hombre.png'
import cat_mujer from '../assets/img/categories/cat_mujer.png'
import cat_nino from '../assets/img/categories/cat_nino.png'
import col_soccer from '../assets/img/collections/col_soccer.png'
import col_running from '../assets/img/collections/col_running.png'
import col_mountain from '../assets/img/collections/col_mountain.png'
import col_skate from '../assets/img/collections/col_skate.png'
import col_finaledition from '../assets/img/collections/col_finaledition.png'

import adidas from '../assets/img/marcas/adidas.png'
import nike from '../assets/img/marcas/nike.png'
import converse from '../assets/img/marcas/converse.png'
import vans from '../assets/img/marcas/vans.png'
import umbro from '../assets/img/marcas/umbro.png'
import dc from '../assets/img/marcas/dc.png'
import everlast from '../assets/img/marcas/everlast.png'
import puma from '../assets/img/marcas/puma.png'
import rebook from '../assets/img/marcas/rebook.png'

import banner1 from '../assets/img/banner_background_1.png'
import banner2 from '../assets/img/banner_background_2.png'
import banner3 from '../assets/img/bannerx3.jpg'
import banner4 from '../assets/img/bannerx4.png'

import { RxDotFilled } from 'react-icons/rx'

const slides = [
  { type: 'image', banner: banner1 },
  { type: 'image', banner: banner2, title: 'Zapatillas deportivas rebajadas', description: '¡Ofertas increíbles en nuestros modelos de running! Aprovecha los descuentos.' },
  { type: 'image', banner: banner1 },
  { type: 'image', banner: banner3, title: 'Nuevas zapatillas de básquetbol', description: 'Domina la cancha con nuestro último lanzamiento. Comodidad y agarre.' },
  { type: 'image', banner: banner4, title: 'Colección de zapatillas casuales', description: 'Estilo urbano para tu día a día. Descubre los nuevos modelos.' },
]

const SlideImage = ({ image }) => (
  <img className="w-full max-w-[1000px] md:max-h-[400px] lg:max-h-[450px] rounded-2xl bg-center object-cover duration-500" src={image} alt="Slide Image" />
);

const SlideOffer = ({ image, title, description }) => (
  <>
    <img className="w-full max-w-[1000px] md:max-h-[400px] lg:max-h-[450px] rounded-2xl bg-center object-cover duration-500"

      src={image} alt={title} />
    <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white rounded-br-2xl">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  </>
)

export const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <>

      {/* <!--MAIN--> */}
      <main>
        {/* <!--BRANDS--> */}
        {/* hover:scale-110 transition duration-300 ease-in-out */}
        <section className="w-full ">
          <div className='flex overflow-hidden h-[120px] bg-white-400'>
            <div className="flex animate-scrollXReverse whitespace-nowrap">
              <div className="flex justify-evenly items-center gap-32 ps-32">
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={adidas} alt="brand_adidas" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={nike} alt="brand_nike" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={converse} alt="brand_converse" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={vans} alt="brand_vans" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={umbro} alt="brand_umbro" />
                </div>
                <div className="flex items-center h-12 w-12 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={dc} alt="brand_dc" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={everlast} alt="brand_everlast" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={puma} alt="brand_puma" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={rebook} alt="brand_rebook" />
                </div>

              </div>
              <div className="flex justify-evenly items-center gap-32 ps-32">
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={adidas} alt="brand_adidas" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={nike} alt="brand_nike" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={converse} alt="brand_converse" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={vans} alt="brand_vans" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={umbro} alt="brand_umbro" />
                </div>
                <div className="flex items-center h-12 w-12 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={dc} alt="brand_dc" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={everlast} alt="brand_everlast" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={puma} alt="brand_puma" />
                </div>
                <div className="flex items-center h-14 w-14 hover:scale-110 transition duration-300 ease-in-out">
                  <img src={rebook} alt="brand_rebook" />
                </div>

              </div>
            </div>


          </div>

        </section>
        {/* CAROUSEL */}
        <div className="max-w-[1480px] max-h-[780px] bg-black/5 w-full m-auto py-16 px-4 ">
          <div className='max-w-[1000px] mx-auto rounded-2xl relative bg-cover duration-500 group'>
            {
              slides[currentIndex].type === 'image'
                ? (<SlideImage key={slides[currentIndex].index} image={slides[currentIndex].banner} />)
                : (<SlideOffer key={slides[currentIndex].index} image={slides[currentIndex].banner} title={slides[currentIndex].title} description={slides[currentIndex].description} />)

              // <img className='w-full h-full rounded-2xl bg-center bg-cover duration-500' src={slides[currentIndex]} alt={`Banner `} />
            }
            {/* hidden group-hover:block */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <i onClick={prevSlide} class="ri-arrow-left-s-line"></i>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <i onClick={nextSlide} class="ri-arrow-right-s-line"></i>
            </div>

            <div className='flex top-4 justify-center py-2u'>
              {
                slides.map((slide, slideIndex) =>
                (<div
                  key={slideIndex}
                  className='text-2xl cursor-pointer'
                  onClick={() => goToSlide(slideIndex)}>
                  <RxDotFilled />
                </div>)
                )
              }

            </div>

          </div>
        </div>

        {/* <!--CATEGORIES--> */}
        <section className="p-10 flex justify-center">
          <div className="max-w-[1280px] w-full">
            <h1 className="text-4xl font-bold">Nuestras categorías</h1>
            {/* <!--PRODUCTS CATEGORIES--> */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={cat_hombre} alt="cat_hombre" />
                <p className="mt-2 text-xl font-bold">Hombre</p>
              </div>
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={cat_mujer} alt="cat_mujer" />
                <p className="mt-2 text-xl font-bold">Mujer</p>
              </div>
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={cat_nino} alt="cat_nino" />
                <p className="mt-2 text-xl font-bold">Niño</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--COLLECTIONS--> */}
        <section className="p-10 flex justify-center">
          <div className="max-w-[1280px] w-full">
            <h1 className="text-4xl font-bold">Nuestras colecciones</h1>
            {/* <!--PRODUCTS COLLECTIONS--> */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={col_soccer} alt="col_soccer" />
                <p className="mt-2 text-xl font-bold">Zapatillas de fútbol</p>
              </div>
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={col_running} alt="col_running" />
                <p className="mt-2 text-xl font-bold">Zapatillas de running</p>
              </div>
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={col_mountain} alt="col_mountain" />
                <p className="mt-2 text-xl font-bold">Zapatillas montañeras</p>
              </div>
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={col_skate} alt="col_skate" />
                <p className="mt-2 text-xl font-bold">Zapatillas de skateboarding</p>
              </div>
              <div>
                <img className="rounded-lg brightness-75 hover:brightness-100 cursor-pointer"
                  src={col_finaledition} alt="col_soccer" />
                <p className="mt-2 text-xl font-bold">Zapatillas exclusivas</p>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}
