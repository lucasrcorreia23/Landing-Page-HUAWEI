import Image from 'next/image'
import { HomeIcon, Search, Contact2 } from "lucide-react"

export function Menu() {
    return (
        
        <div className="mx-auto flex items-center px-8 h-24 md:h-36 border-b border-zinc-350 border-gray-300  bg-emerald-50">
          

         <div className="container">
          <nav className=" items-center flex-row flex w-full md:mx-auto">
              <div className="w-8/12 md:flex md:justify-center md:w-full md:mx-auto">
                  <a href="#" className="flex w-24 md:w-36 md:justify-center">
                  <Image src="/prime8.svg" width={400} height={0} alt='Logotipo' />
                  </a>
              </div>
          
            <ul className="flex flex-row text-sm  w-6/12 mx-auto md:w-full ">
              

              
              
              <li className="flex-row group flex px-1 items-center  w-full">
                <a href="tel:5548999247580" className=" md:py-5 md:text-lg mx-auto font-black leading-3 text-xs text-center bg-brand px-8 py-3 rounded-2xl items-center text-white hover:scale-105 transition-1s duration-200 flex flex-row ">
                
                
                Falar com Especialista
                </a>
                </li>
            </ul>
          </nav>
          </div>
        
      </div>
    )
}