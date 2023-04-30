import * as React from 'react';

import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <div className='mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row md:gap-10 lg:mx-auto lg:mt-32'>
        <Sidebar />
        <main className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0'>
          {children}
        </main>
      </div>
      {/*<Footer />*/}
    </>
  );
}
