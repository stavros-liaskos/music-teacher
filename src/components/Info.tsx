import Image from 'next/image';
import PianoPic from 'public/images/piano.png';
import * as React from 'react';

import { EmailIcon, PhoneIcon } from '@/components/Icons';
export default function Info() {
  return (
    <div>
      <h1 className='font-serif text-3xl font-bold'>Eυγενία Πωλαναγνωστάκη</h1>
      <p className='my-5 max-w-[460px] text-neutral-800'>
        Μουσικοπαιδαγωγός - Πτυχιούχος Πιάνου
      </p>

      <div className='my-8 flex flex-col items-start md:flex-row md:items-center'>
        <Image
          src={PianoPic}
          className='rounded-full grayscale'
          alt='piano-oil-canvas'
          width={100}
          height={100}
          placeholder='blur'
          priority
        />
        <div className='ml-0 mt-8 space-y-2 text-neutral-400 text-neutral-500 md:ml-6 md:mt-0'>
          <a
            href='tel:+00313311341'
            className='ml-[-2px] flex items-center gap-2'
          >
            <PhoneIcon /> 697123123123
          </a>
          <a
            href='mailto:evgenia@piano.gr'
            className='flex items-center gap-2'
            target='_blank'
          >
            <EmailIcon /> evgenia@piano.gr
          </a>
        </div>
      </div>

      {/*<p className='my-5 max-w-[600px] text-neutral-800'>asdf</p>*/}
    </div>
  );
}
