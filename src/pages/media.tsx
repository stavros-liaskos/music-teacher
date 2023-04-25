import Image from 'next/image';
import Art1 from 'public/images/art1.png';
import Art2 from 'public/images/art2.png';
import Art3 from 'public/images/art3.png';
import Dancing from 'public/images/dancing.png';
import Seminar1 from 'public/images/seminar1.png';
import Seminar2 from 'public/images/seminar2.png';
import Singing from 'public/images/singing.png';
import Sitting from 'public/images/sitting.png';
import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
          <Carousel
            showArrows={true}
            ariaLabel='art'
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
          >
            <div>
              <Image
                width={559}
                height={418}
                src={Art1}
                alt='art1'
                placeholder='blur'
              />
            </div>
            <div>
              <Image
                width={559}
                height={418}
                src={Art2}
                alt='art2'
                placeholder='blur'
              />
            </div>
            <div>
              <Image
                width={559}
                height={418}
                src={Art3}
                alt='art3'
                placeholder='blur'
              />
            </div>
          </Carousel>
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
          <Carousel
            showArrows={true}
            ariaLabel='art'
            showStatus={false}
            showThumbs={false}
          >
            <div>
              <Image
                width={513}
                height={329}
                src={Seminar1}
                alt='seminar1'
                placeholder='blur'
              />
            </div>
            <div>
              <Image
                width={513}
                height={329}
                src={Seminar2}
                alt='seminar2'
                placeholder='blur'
              />
            </div>
          </Carousel>
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
          <Carousel
            showArrows={true}
            ariaLabel='art'
            showStatus={false}
            showThumbs={false}
          >
            <div>
              <Image
                width={566}
                height={425}
                src={Dancing}
                alt='dancing'
                placeholder='blur'
              />
            </div>
            <div>
              <Image
                width={566}
                height={425}
                src={Singing}
                alt='singing'
                placeholder='blur'
              />
            </div>
            <div>
              <Image
                width={566}
                height={425}
                src={Sitting}
                alt='sitting'
                placeholder='blur'
              />
            </div>
          </Carousel>
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
