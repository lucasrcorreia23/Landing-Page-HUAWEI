import { HomeIcon, Search, Contact2 } from "lucide-react"

export function Menu() {
    return (
        
        <div className="mx-auto flex items-center justify-center p-4 h-24 border-b border-zinc-350 border-gray-300  bg-gray-100">
          <div className="font-semibold text-xl "></div>


          <nav className=" items-center">
            <ul className="flex text-sm items-center justify-center ">
              <li className="relative group flex px-4">
              <a href="#" className=" items-center px-3 text-gray-700 hover:text-zinc-950 text-5x1 transition-colors duration-200 flex flex-row gap-2">
                <HomeIcon />
                Sobre nós</a>
                <div className="absolute z-50 left-0 top-6 mt-2 w-48 rounded-md shadow-lg py-1 bg-zinc-100 ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 invisible group-hover:visible">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Empresa</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Parceria</a>
                </div>
              </li>
              <li className="flex-row flex px-6">
                <a href="tel:5548999247580" className="px-3 align-center text-gray-700 hover:text-zinc-950 transition-colors duration-200 flex flex-row gap-2">
                <Contact2 />
                
                Entrar em contato
                </a>
                </li>
            </ul>
          </nav>
        
      </div>
    )
}