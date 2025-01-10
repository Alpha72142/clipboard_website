import React from 'react'

const ThirdFeaturesSection = () => {
  const items =[
    {
      header:"Quick Search",
      description:"Easily search your snippets by content, category, web address, application, and more.",
    },{
      header:"iCloud Sync",
      description:"Instantly saves and syncs snippets across all your devices.",
    },{
      header:"Completely History",
      description:"Retrieve any snippets from the first moment you started using the app.",
    },
  ]
  return (
    <div className='section-container my-20'>
      <div className="relative flex flex-col md:flex-row md:space-x-32">
        {/* Image */}
        <div className="md:w-1/2">
          <img src="assets/images/image-computer.png" alt="" className='md:absolute top-0 right-[50%]'/>
        </div>
        {/* items Container */}
        <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
          {/* Item 1 */}
          {items.map((item, index) => (
            <div key={index}>
            <h5>{item.header}</h5>
            <p className='max-w-md text-grayishBlue'>{item.description}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThirdFeaturesSection