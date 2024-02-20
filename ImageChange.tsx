import { useState } from 'react'
import img1 from '../../../assets/c1.jpg'
import img2 from '../../../assets/c2.jpg'
import img3 from '../../../assets/c3.jpg'

const images = [
  `${img1}`,
  `${img2}`,
  `${img3}`
  // Add more image URLs as needed
]

const ImageChange = () => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]) // State to keep track of the selected image

  return (
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

export default ImageChange
