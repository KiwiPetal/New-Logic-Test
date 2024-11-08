"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface vars {
  src: string;
}
export default function OpenableImage({ src }: vars) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div layout className={`h-[48px] w-[48px] rounded-md`}>
      <AnimatePresence mode="wait">
        {open && (<Overlay setOpen={() => setOpen(false)} />)}
      </AnimatePresence>
      <motion.img layout src={src} onClick={() => setOpen(!open)} className={`cursor-pointer rounded-md transform ${open && "fixed top-1/2 left-1/2 max-w-[500px] max-h-[500px] z-30"}`} />
    </motion.div>
  )
}


function Overlay({ setOpen }: { setOpen: () => void }) {
  return (
    <div onClick={setOpen} className="fixed top-[0px] left-[0px] h-full w-full bg-black/25 z-20 cursor-pointer" />
  )
}
