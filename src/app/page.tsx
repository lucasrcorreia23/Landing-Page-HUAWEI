import Image from 'next/image'
import { Home as Homeicon, Search, Contact2 } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className=" ">
        <div className="container mx-auto flex items-center justify-center p-4 h-24 border-b border-zinc-350 border-gray-300">
          <div className="font-semibold text-xl "></div>


          <nav className=" items-center">
            <ul className="flex text-sm items-center justify-center ">
              <li className="relative group flex px-4">
              <a href="#" className=" items-center px-3 text-gray-700 hover:text-zinc-950 text-5x1 transition-colors duration-200 flex flex-row gap-2">
                <Homeicon />
                Sobre nós</a>
                <div className="absolute left-0 top-6 mt-2 w-48 rounded-md shadow-lg py-1 bg-zinc-100 ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 invisible group-hover:visible">
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
      </div>


      <main className="h-auto flex items-center flex-col text-center justify-between p-0">

        <div className=" justify-center text-center h-8xl grid-element ">
          <Image src="/watch-4-series-pc.avif" alt='Teste Banner' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={1920} height={720} />
        </div>

        <div className="bg-zinc-200 font-light text-4xl h-64 w-full flex justify-center items-center hover: transition-colors duration-200 bg-blend-color bg-gray-300 tracking-wide flex-col">
          <h1>The Best Access Points in the World</h1>

          <p className="text-sm mb-4">
      Velocidades ultrarrápidas da Huawei, mobilidade sempre ativa e rede auto-organizada contínua.
    </p>
        </div>

        <div className="relative max-w-screen-xl">
  <Image 
    src="/banner_pc_v6.jpg" 
    alt='Teste Banner' 
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 10vw, 33vw" 
    width={1920} 
    height={720} 
    className="rounded-3xl my-6"
  />
  <div className="flex flex-col justify-center text-zinc-950 absolute top-32 left-24 text-left">
    <h3 className="text-8xl font-bold text-gray-700">
      WLAN
    </h3>
    <p className="text-sm mb-4">
      Velocidades ultrarrápidas da Huawei, mobilidade sempre ativa e rede auto-organizada contínua.
    </p>
  </div>


  
  <div className="absolute inset-y-0 left-24 flex items-center">
    <a href="#">
    <button className="rounded-xl bg-transparent border border-red-700 text-zinc-400 font-bold mx-auto p-4 text-red-700 hover:bg-red-700 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
  Compre Agora
</button>


    </a>
  </div>
</div>

        <div className="relative max-w-screen-xl">
  <Image 
    src="/Huawei_Enterprise_Brand_Page_Banner-01_1.webp" 
    alt='Teste Banner' 
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 10vw, 33vw" 
    width={1920} 
    height={720} 
    className="rounded-3xl mb-6"
  />
  
  <div className="absolute inset-y-0 left-24 flex items-center">
  <a href="#">
    <button className="rounded-xl bg-transparent border border-red-700 text-zinc-400 font-bold mx-auto p-4 text-red-700 hover:bg-red-700 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
  Compre Agora
</button>


    </a>
  </div>
</div>



        
      </main>
      <footer className="p-12 h-auto flex flex-col text-center bg-zinc-200  sm:flex-row  justify-between  border border-gray-300">
        <div className="py-4 justify-center items-center flex">
          <Image src="/next.svg" width={120} height={0} alt='Logotipo' />
        </div>
        <ul className="flex flex-row gap-4 items-center justify-center">
          <a href=""><li className="gap-8 px-2 text-sm">Home</li></a>
          <a href=""><li className="gap-8 px-2 text-sm">Contact</li></a>
          <a href=""><li className="gap-8 px-2 text-sm">Price</li></a>
          <a href=""><li className="gap-8 px-2 text-sm">Features</li></a>
        </ul>
      </footer>
      <div className="p-4 h-auto flex flex-col text-center bg-zinc-100 items-center">
        <p className="text-sm">
          By Lucas
        </p>
      </div>
    </>
  )
}
