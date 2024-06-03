import React from 'react'

function Image() {
    const imageLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
      }

  return (
    <div>
      <Image 
      loader={imageLoader}
      height={100} 
      width={100} 
      src={img}
      />
    </div>
  )
}

export default Image
