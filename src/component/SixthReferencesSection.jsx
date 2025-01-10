import React from 'react'

const SixthReferencesSection = () => {
    const images = [
        {
            imageUrl:'assets/images/logo-google.png',
        },
        {
            imageUrl:'assets/images/logo-ibm.png',
        },
        {
            imageUrl:' assets/images/logo-microsoft.png',
        },
        {
            imageUrl:'assets/images/logo-hp.png',
        },
        {
            imageUrl:'assets/images/logo-vector-graphics.png',
        }
    ]
  return (
    <div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
       {images.map((image) => (
           <img src={image.imageUrl} alt="" />
       ))}
    </div>
  )
}

export default SixthReferencesSection