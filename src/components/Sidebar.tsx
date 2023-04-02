import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/carrier': {
    name: 'carrier',
  },
  '/studies': {
    name: 'studies',
  },
  '/media': {
    name: 'media',
  },
};

export default function Sidebar() {
  const pathname = usePathname() || '/';

  return (
    <aside className='-mx-4 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0'>
      <div className='lg:sticky lg:top-20'>
        <LayoutGroup>
          <nav
            className='fade relative flex scroll-pr-6 flex-row items-start px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0'
            id='nav'
          >
            <div className='mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col'>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={`flex align-middle transition-all hover:text-neutral-800 
                    ${!isActive ? 'text-neutral-500' : 'font-bold'}`}
                  >
                    <span className='relative px-[10px] py-[5px]'>
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className='absolute inset-0 z-[-1] rounded-md bg-neutral-100'
                          layoutId='sidebar'
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
