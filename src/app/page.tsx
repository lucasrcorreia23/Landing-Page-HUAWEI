import Image from 'next/image'
import { Home as Homeicon, Search, Contact2 } from 'lucide-react';
import { Menu, } from '@/components/Menu';
import { Footer } from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Menu />


      <main className="h-auto flex items-center flex-col text-center justify-between p-0 bg-slate-200">

      <div className=" mx-auto h-auto relative flex items-center justify-center text-left ">
          <Image src="/wifi6-advanced2.jpg" alt='Teste Banner' width={1920} height={440} />
          <div className="absolute p-8 rounded-xl shadow-sm grid mx-auto lg:container ">
            <h1 className="text-3xl pb-4 font-semibold  grid w-32 md:text-8xl ">
            What Is Wi-Fi 6 Advanced?
            </h1>
            <a href="#">
              <button className="  absolute w-auto px-8 py-4 rounded-xl bg-transparent border border-red-700 font-bold text-red-700 hover:bg-red-700 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Compre Agora
              </button>
            </a>
          </div>
      </div>

        

        <div className="bg-zinc-100 font-light text-4xl h-64 w-full flex justify-center items-center hover: transition-colors duration-200 bg-blend-color tracking-wide flex-col">
          <h1>The Best Access Points in the World</h1>

          <p className="text-sm mt-4">
          High performance indoor Wi-Fi 6 APs with independent scanning RF.
          </p>
        </div>

        <div className="relative max-w-screen-xl">
          <Image
            src="/banner_pc_v6.jpg"
            alt='Teste Banner'
           
            width={1920}
            height={720}
            className="rounded-3xl my-6"
          />
          <div className="flex flex-col justify-center text-zinc-950 absolute top-32 left-24 text-left">
            <h3 className="text-8xl font-bold text-gray-700">
              WLAN
            </h3>
            <p className="text-sm mt-2">
              Velocidades ultrarrápidas da Huawei, mobilidade sempre ativa e rede auto-organizada contínua.
            </p>
          </div>



          <div className="absolute inset-y-0 left-24 flex items-center">
            <a href="#">

              <button className="rounded-xl bg-transparent border border-red-700 font-bold mx-auto p-4 text-red-700 hover:bg-red-700 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Compre Agora
              </button>

            </a>
          </div>
        </div>

        <div className="relative max-w-screen-xl">
          <Image
            src="/mbbf-2022-banner.jpg"
            alt='Teste Banner'
            
            width={1920}
            height={720}
            className="rounded-3xl mb-6"
          />
          <div className="flex flex-col justify-center text-zinc-950 absolute top-32 left-24 text-left">
            <h3 className="text-4xl font-bold text-gray-700 grid grid-cols-2">
            Huawei and ABI Release 5G Digital Airport White Paper
            </h3>
            <p className="text-sm mb-4 grid grid-cols-2 mt-4">
            Cloud X: Interactive Applications Streamed Over High-Speed Mobile Networks 5G
            </p>
          </div>
          <div className="absolute inset-y-0 top-48 left-24 flex items-center">

            <a href="#">

              <button className="rounded-xl bg-transparent border border-red-700 font-bold mx-auto p-4 text-red-700 hover:bg-red-700  hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Compre Agora
              </button>

            </a>

          </div>
        </div>




      </main>
      <Footer />
      <div className="p-4 h-auto flex flex-col text-center bg-zinc-200 items-center">
        <p className="text-sm">
          By Lucas
        </p>
      </div>
    </>
  )
}
