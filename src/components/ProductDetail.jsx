import { useCart } from '../hooks/useCart'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {

  const { id } = useParams()
  const { addToCart } = useCart()

  const data = window.localStorage.getItem('products')
  const products = JSON.parse(data)
  const item = products.find( product => product.id == id)

  if (!item) {
    console.log(item)
    return (
      <div>
        <p>Producto no encontrado</p>
      </div>
    )
  }

  return (
    <div className='flex gap-5 max-w-[800px] mx-auto py-10'>
      <div className='flex-2'>
        <h3 className='text-xl font-bold '>{ item.name }</h3>
        <div className='w-full  py-5'>
          <img className='border rounded-3xl max-w-[450px] ' src={item.image} alt="" />
        </div>
      </div>
      

      <div className='flex-1'>
        <strong>Description:</strong>
        <p >{ item.description }</p>
        <hr className='my-5' />
        <div className='pb-5'>
          <strong >Price: ${ item.price }</strong>
        </div>
        <strong>Add </strong>
        <button className='rounded px-1.5 bg-blue-400 hover:bg-blue-600' onClick={() => addToCart(item)}>
          <i class="ri-add-line text-white"></i>
        </button>
      </div>

    </div>
  )
}
