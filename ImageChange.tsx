import { useState } from 'react'
import First from './First'
import Map from './Map'
import Second from './Second'

import img1 from '../../../assets/c1.jpg'
import img2 from '../../../assets/c2.jpg'
import img3 from '../../../assets/c3.jpg'

const images = [
  `${img1}`,
  `${img2}`,
  `${img3}`

  // Add more image URLs as needed
]

const ContactUs = () => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]) // State to keep track of the selected image

  return (
    // <div className='px-20 py-10  mobile:px-5 mobile:py3'>
    //   <div>
    //     <h2 className=' font-bold text-[32px] radio:text-[12px] tablet:text-[14px]'>
    //       CONTACT US
    //     </h2>
    //     <span className='text-[15px] font-[500] text-[#A1A1A1] radio:text-[10px] tablet:text-[12px] '>
    //       You can't find what you are looking for? It's Okay, We can Help.
    //     </span>
    //   </div>

    //   <div className='mobile:flex mobile:flex-col md:flex md:flex-col '>
    //     <div className='flex justify-between mobile:flex-col mobile:flex mobile:justify-between mobile:w-full  mt-[25px]'>
    //       <div className=' w-[50%] mobile:w-[100%] mobile:mb-[30px] '>
    //         <First />
    //       </div>
    //       <div className=' w-[50%] mobile:w-[100%] mobile:bg-[red] flex items-center justify-end mobile:justify-center'>
    //         <Second />
    //       </div>
    //     </div>
    //     <div className='mobile:flex-grow mt-[50px]'>
    //       <Map />
    //     </div>
    //   </div>
    // </div>

    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-4 gap-4'>
        {/* Display small boxes with images */}
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className='cursor-pointer'
          >
            <img
              src={image}
              alt={`Product Image ${index + 1}`}
              className='w-full h-16 object-cover'
            />
          </div>
        ))}
      </div>

      {/* Display large box with selected image */}
      <div className='ml-8'>
        {selectedImage && (
          <img
            src={selectedImage}
            alt='Selected Product Image'
            className='w-64 h-64 object-cover border border-gray-500'
          />
        )}
      </div>
    </div>
  )
}

export default ContactUs
