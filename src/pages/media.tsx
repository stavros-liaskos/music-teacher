import Image from 'next/image';
import Art1Pic from 'public/images/art1.jpg';
import Art2Pic from 'public/images/art2.png';
import Art3Pic from 'public/images/art3.png';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <section>
        <h2 className='mb-8 pb-4 font-serif text-3xl font-bold'>Δράσεις</h2>

        <div className='flex flex-col justify-center gap-8 pb-16 md:flex-row'>
          <Image
            src={Art1Pic}
            className=''
            alt='piano-oil-canvas'
            width={300}
            height={300}
            placeholder='blur'
            priority
          />
          <div className='flex flex-col justify-center gap-4'>
            <p className='flex items-center'>
              εδω γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται
              αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο και
              αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω
              γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο
              και αυτο,
            </p>
            <span className='flex justify-end'>12.03.2022</span>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-8 pb-16 md:flex-row-reverse'>
          <Image
            src={Art2Pic}
            className=''
            alt='piano-oil-canvas'
            width={300}
            height={300}
            placeholder='blur'
            priority
          />
          <div className='flex flex-col justify-center gap-4'>
            <p className='flex items-center'>
              εδω γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται
              αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο και
              αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω
              γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο
              και αυτο,
            </p>
            <span className='flex justify-end'>12.03.2022</span>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-8 pb-16 md:flex-row'>
          <Image
            src={Art3Pic}
            className=''
            alt='piano-oil-canvas'
            width={300}
            height={300}
            placeholder='blur'
            priority
          />
          <div className='flex flex-col justify-center gap-4'>
            <p className='flex items-center'>
              εδω γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται
              αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο και
              αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω
              γινεται αυτο και αυτο, εδω γινεται αυτο και αυτο, εδω γινεται αυτο
              και αυτο,
            </p>
            <span className='flex justify-end'>12.03.2022</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
