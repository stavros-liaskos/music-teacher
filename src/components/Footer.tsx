import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
export default function Footer() {
  return (
    <footer className='fixed bottom-0 text-center text-gray-700'>
      © {new Date().getFullYear()} By
      <UnderlineLink href='https://www.stavrosliaskos.com/'>
        Stavros Liaskos
      </UnderlineLink>
    </footer>
  );
}
