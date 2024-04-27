import React from 'react'

import banner from '../assets/img/about_banner.jpg'
import about from '../assets/img/about1.jpg'


export const About = () => {
  return (
    <div className='mt-5 mx-auto p-10'>
      <h1 className='text-2xl '>Sobre Nosotros</h1>
      <hr />
      <img className='rounded-2xl my-5' src={banner} alt="" />

      <hr />

      <div className='max-w-[800px] flex flex-col md:flex-row justify-between items-center gap-8 mx-auto'>

        <div className='flex-1 my-5'>
          <h1 className='text-2xl mb-5 font-bold '>Quienes somos ?</h1>
          <p className='text-pretty break-keep text-justify'>En Sneakers, nuestra misión es brindarte una experiencia de compra excepcional. Nacimos de la pasión por ofrecer productos de calidad y un servicio inigualable a nuestros clientes.
            Desde nuestros humildes inicios, hemos crecido gracias a la confianza y el apoyo de una comunidad leal de compradores que comparten nuestros valores de excelencia, integridad y satisfacción del cliente.
            Nos enorgullecemos de presentar una cuidadosa selección de productos que cumplen con los más altos estándares de calidad. Nuestro equipo dedicado trabaja incansablemente para asegurarse de que cada artículo en nuestro catálogo sea auténtico, duradero y esté a la vanguardia de las tendencias actuales.</p>
        </div>
        <div className='flex-1 my-5'>
          <img className='rounded-3xl' src={about} alt="" />
        </div>

      </div>

    </div >
  )
}
