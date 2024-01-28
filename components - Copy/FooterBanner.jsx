import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner:{discount,largeText1,largeText2,saleTime, buttonText,smallText,desc,product,image,midText}}) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
          <p>{smallText}</p>
          <p>{midText}</p>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <img src={urlFor(image)} alt="" className='footer-banner-image'/>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner