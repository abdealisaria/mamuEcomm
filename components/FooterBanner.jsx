import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          {/* <p>{discount}</p> */}
          {/* <h3>{largeText1}</h3>
          <h3>{midText}</h3> */}
          {/* <p>{saleTime}</p> */}
          <h5>Buy now</h5>
          <h3>Save Big</h3>
          <Link href={`/product/${product}`}>
            <button type="button" className='btn'>{buttonText}</button>
          </Link>
        </div>
        <div className="right">
          {/* <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p> */}
          
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner