import * as React from 'react';
import { ReactNode } from 'react';

const Paragraph = ({
  title,
  children,
  gap = true,
}: {
  title: string;
  gap?: boolean;
  children: ReactNode;
}) => (
  <p
    className={`my-5 flex flex-col justify-start text-neutral-200 text-neutral-800 md:flex-row ${
      gap ? 'gap-x-10' : ''
    }`}
  >
    <span className='min-w-[105px] font-bold md:font-normal'>
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </span>

    {children}
  </p>
);

export default Paragraph;
