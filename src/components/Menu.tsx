import Image from 'next/image'
import { HomeIcon, Search, Contact2 } from "lucide-react"

export function Menu() {
    return (

        <div className="mx-auto flex items-center px-4 h-24 md:h-36 border-b border-zinc-350 border-gray-300  bg-emerald-50">



            <nav className=" items-center flex-row flex w-full md:mx-auto">
                <div className="w-8/12 md:flex md:justify-center md:w-full md:mx-auto">
                    <a href="#" className="flex w-24 md:w-36 md:justify-center">

                        <Image src="/prime8.svg" width={400} height={0} alt='Logotipo' />
                    </a>
                </div>

                <div className="flex-row group flex items-center justify-center  w-full">
                    <a href="tel:5548999247580" className=" px-8 whitespace-nowrap md:py-5 md:text-lg mx-auto font-black p-4 text-xs text-center bg-brand  rounded-lg items-center text-white hover:scale-105 transition-1s duration-200 flex flex-row ">


                        <b>Falar com Especialista</b>
                        <Image src="/headset.svg" width={32} height={0} alt='Headset' className="pl-2" />
                    </a>
                </div>
            </nav>


        </div>
    )
}