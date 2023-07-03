import Image from 'next/image'
import { Home as Homeicon, Search, Contact2 } from 'lucide-react';
import { Menu, } from '@/components/Menu';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Menu />


      <main className="h-auto flex items-center flex-col text-center justify-between p-0 bg-emerald-50">

        <div className=" mx-auto h-auto relative flex items-center justify-center text-left ">

          <Image className="hidden md:block" src="/wifi6-advanced2.jpg" alt='Teste Banner' width={1920} height={440} />
          <Image className="block md:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />

          <div className=" text-sm absolute  rounded-xl shadow-sm grid mx-auto mb-12   ">
            <h1 className=" text-white md:text-gray-700 text-center text-4xl pb-8 font-semibold  md:w-6/12 md:pb-4 md:text-7xl lg:text-left ">
              What Is Wi-Fi 6 Advanced?
            </h1>
            <a href="#" className="flex justify-center md:justify-start">
              <button className="  md:absolute md:m-auto md:block flex w-auto px-8 py-4 rounded-xl bg-transparent border border-red-700 font-bold text-red-700 hover:bg-red-700 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Compre Agora
              </button>
            </a>
          </div>
        </div>



        <div className="p-0 bg-emerald-50 font-light text-4xl h-64 w-full flex justify-center items-center hover: transition-colors duration-200 bg-blend-color tracking-wide flex-col">
          <h1>The Best Access Points in the World</h1>

          <p className="text-sm mt-4">
            High performance indoor Wi-Fi 6 APs with independent scanning RF.
          </p>
        </div>

        <div className="mx-auto h-auto relative flex items-center text-left">
            <Image
              src="/banner_pc_v6.jpg"
              alt='Teste Banner'

              width={1920}
              height={720}
              className=" md:mb-16 hidden md:block"
            />
            <Image className="block md:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />

            <div className=" text-zinc-950 absolute p-0 text-center top-8 flex flex-col m-auto justify-center item  mb-12 md:top-24 md:left-10">
              <div className="container">
                <h3 className="text-6xl font-bold text-white md:text-gray-700 md:text-9xl  ">
                  WLAN
                </h3>
                <p className="text-sm mt-2 md:w-8/12 text-white md:text-gray-700 gap-4 w-8/12 top-0  mx-auto mb-8 ">
                  Velocidades ultrarrápidas da Huawei, mobilidade sempre ativa e rede auto-organizada contínua.
                </p>
                <a href="#" className=" mb-4 relative rounded-xl bg-transparent border border-red-700 font-bold p-4 text-red-700 hover:bg-red-700 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Compre Agora
                </a>
              </div>
            </div>
        </div>





        

        <div className="mx-auto h-auto relative flex items-center text-left">
          <Image
            src="/mbbf-2022-banner.jpg"
            alt='Teste Banner'

            width={1920}
            height={720}
            className="rounded-3xl md:w-10/12 md:shadow-md md:mx-auto mb-16 hidden md:block"
          />
          <Image className="block md:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />
          <div className=" text-zinc-950 absolute top-12 text-center flex flex-col m-auto justify-center md:items-center  mb-12  md:w-4/12 md:left-24 md:top-16">
            <div className="container">
              <h3 className="text-2xl font-bold text-white md:text-gray-700 md:text-4xl md:absolute">
                Huawei and ABI Release 5G Digital Airport White Paper
              </h3>
              <p className="text-sm  mt-4 mb-8 md:py-4 text-white md:text-gray-700 md:absolute md:py-20 ">
                Cloud X: Interactive Applications Streamed Over High-Speed Mobile Networks 5G
              </p>
              <a href="#" className=" relative md:top-40 md:left-40 md:my-auto mt-8 mr-auto rounded-xl bg-transparent border border-red-700 font-bold px-8 py-4 text-red-700 hover:bg-red-700  hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">

                Compre Agora
              </a>
            </div>
          </div>





        </div>




      </main>
      <Footer />
      <div className="p-4 h-auto flex flex-col text-center bg-zinc-200 items-center">
        <p className="text-xs">
          Copyright © Prime8, 2023. Todos os direitos reservados.
        </p>
      </div>
    </>
  )
}
