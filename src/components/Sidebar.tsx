import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'Aρχική',
  },
  '/media': {
    name: 'Δράσεις',
  },
  '/about': {
    name: 'Προφίλ',
  },
  '/carrier': {
    name: 'Εργασία',
  },
  '/studies': {
    name: 'Εκπαιδεύσεις',
  },
};

export default function Sidebar() {
  const pathname = usePathname() || '/';

  return (
    <aside className='-mx-4 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0'>
      <div className='lg:sticky lg:top-20'>
        <LayoutGroup>
          <nav
            className='fade relative flex flex-row md:relative md:flex-col md:overflow-auto md:px-0'
            id='nav'
          >
            <div className='mb-2 flex flex-row md:flex-col'>
              {Object.entries(navItems).map(([path, { name }], index) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={`flex align-middle transition-all hover:text-neutral-800 
                    ${!isActive ? 'text-neutral-500' : 'font-bold'}`}
                  >
                    <span
                      className={`relative md:px-[10px] ${
                        index === 4 ? 'pl-2' : 'px-2'
                      } py-[5px]`}
                    >
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
