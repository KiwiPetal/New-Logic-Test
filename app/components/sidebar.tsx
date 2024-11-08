"use client"
import Link from "next/link";
import { ReactElement, useMemo, useState } from "react";
import { usePathname } from 'next/navigation'
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export default function Sidebar() {
  if (typeof window === "undefined")
    return;
  const pathname = usePathname();
  const isDesktop = useMediaQuery({
    query: '(min-width: 1100px)'
  });

  // Routes {{{
  type T_Routes = {
    [key: string]: {
      route: string;
      icon: ReactElement;
    }
  }
  const routes: T_Routes = {
    "Moje objednávky": {
      route: "/", icon:
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    },
    "Faktury": {
      route: "/faktury", icon:
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
    },
    "Seznam přání": {
      route: "/favorites", icon:
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    },
    "Věrnostní program": {
      route: "/rewards", icon:
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    },
    "Slevové kódy": {
      route: "/coupons", icon:
        <svg>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
    },
    "Hlídané zboží": {
      route: "/search", icon:
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    },
    "Nastavení účtu": {
      route: "/settings", icon:
        <svg>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
    },
  }
  // }}}

  const [open, setOpen] = useState(false);

  const component = useMemo(() => {
    return isDesktop ? (
      <div className="max-w-[300px] w-full h-fit p bg-container rounded-lg flex flex-col gap items-center justify-center">
        <div className="gap-[4px] flex flex-col items-center justify-center text-center">
          <p className="font-bold text-xl">Daniil Filatov</p>
          <p className="text-black/50">daniil.filatov@newlogic.cz</p>
        </div>
        <div className="w-full flex flex-col gap-sm">
          {Object.keys(routes).map((routeName, i) => (
            <Link key={"route:" + i} href={routes[routeName].route} className={`inline-flex gap-[10px] w-full p-sm rounded-md cursor-pointer transition duration-300 ${pathname === routes[routeName].route ? "bg-active text-bg" : "bg-transparent"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[22px] w-[22px] z-50">
                {routes[routeName].icon}
              </svg>
              <p className="grow">{routeName}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[22px] w-[22px] z-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
          <button className="appearance-none bg-error/20 text-error p-sm rounded-md w-full">
            Odhasit se
          </button>
        </div>
      </div>
    ) : (
      <motion.div onClick={() => setOpen(!open)} layout className="fixed top-[12px] left-[12px] cursor-pointer z-10">
        {open ? (
          <div className="max-w-[300px] w-full h-fit p bg-container rounded-lg flex flex-col gap items-center justify-center">
            <div className="gap-[4px] flex flex-col items-center justify-center text-center">
              <p className="font-bold text-xl">Daniil Filatov</p>
              <p className="text-black/50">daniil.filatov@newlogic.cz</p>
            </div>
            <div className="w-full flex flex-col gap-sm">
              {Object.keys(routes).map((routeName, i) => (
                <Link key={"route:" + i} href={routes[routeName].route} className={`inline-flex gap-[10px] w-full p-sm rounded-md cursor-pointer transition duration-300 ${pathname === routes[routeName].route ? "bg-active text-bg" : "bg-transparent"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[22px] w-[22px] z-50">
                    {routes[routeName].icon}
                  </svg>
                  <p className="grow">{routeName}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[22px] w-[22px] z-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
              <button className="appearance-none bg-error/20 text-error p-sm rounded-md w-full">
                Odhasit se
              </button>
            </div>
          </div>
        ) : (
          <div className="p-xs bg-container rounded-lg flex flex-col gap items-center cursor-pointer justify-center text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[32px] w-[32px] z-50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        )}
      </motion.div>
    )
  }, [isDesktop, open, pathname])

  return (component);
}
