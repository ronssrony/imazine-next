'use client'
import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import Preloader from './components/Preloader';


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (
            async () => {
                setTimeout(() => {
                    setIsLoading(false);
                    window.scrollTo(0, 0);
                }, 2000)
            }
        )()
    }, [])
  return (

    <div className="font-sans min-h-[100vh]  flex flex-col items-center justify-center p-8  gap-10">
        <AnimatePresence mode='wait'>
            {isLoading && <Preloader />}
        </AnimatePresence>
      <div className="w-full">

      </div>
    </div>
  );
}
