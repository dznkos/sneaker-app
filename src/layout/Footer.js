import React from 'react'
import { SocialIcon } from '../components/shared/SocialIcon'

export const Footer = () => {
  return (
    <footer className="h-[320px] flex mt-auto bg-gray-800 px-20 text-white">
      <div className="flex flex-row flex-wrap justify-between w-full my-auto">
        <div className="flex flex-column ">
          <div >
            <div className='relative mb-10'>
              <h4 className='text-2xl'>Nosotros</h4>
              <div className='absolute bottom-[-10px] left-0 h-[2px] w-12 bg-white text-white'>
              </div>
            </div>
            <ul>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="pages/nosotros.html">Sobre nosotros</a></li>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="#">Nuestros servicios</a></li>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="pages/TyC.html">Terminos y Condiciones</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-column">

          <div>
            <div className='relative mb-10'>
              <h4 className='text-2xl'>Get Help</h4>
              <div className='absolute bottom-[-10px] left-0 h-[2px] w-12 bg-white text-white'>
              </div>
            </div>

            <ul>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="pages/FAQs.html">FAQ</a></li>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="#">Ayuda</a></li>
            </ul>
          </div>

        </div>
        <div className="flex flex-column">
          <div>
            <div className='relative mb-10'>
              <h4 className='text-2xl'>Tienda online</h4>
              <div className='absolute bottom-[-10px] left-0 h-[2px] w-12 bg-white text-white'>
              </div>
            </div>

            <ul>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="#">Ver</a></li>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="#">carrito</a></li>
              <li className='transition duration-200 delay-100 hover:translate-x-2'><a href="#">zapatillas</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-column">
          <div>
            <div className='relative mb-10'>
              <h4 className='text-2xl'>Siguenos</h4>
              <div className='absolute bottom-[-10px] left-1 h-[2px] w-12 bg-white text-white'>
              </div>
            </div>
            <div >
              {/* <a className='border p-1.5  rounded-full' href="https://www.facebook.com/people/Sneakers/100087382202607/"><i class="ri-facebook-fill"></i></a>
              <a href="https://www.instagram.com/snks___shop/"><i class="ri-instagram-fill"></i></a> */}
              <SocialIcon
                href="https://www.facebook.com/people/Sneakers/100087382202607/"
                icon="ri-facebook-fill"
                bgColor="bg-blue-600"
                textColor="text-white"
              />
              <SocialIcon
                href="https://www.instagram.com/snks___shop/"
                icon="ri-instagram-fill"
                bgColor="bg-pink-600"
                textColor="text-white"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
