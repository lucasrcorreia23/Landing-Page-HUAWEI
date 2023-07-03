import Image from 'next/image'
import { Home as Homeicon, Search, Contact2 } from 'lucide-react';
import { Menu, } from '@/components/Menu';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Menu />


      <main className="h-auto w-full flex items-center flex-col text-center justify-between p-0 m-0 bg-emerald-50">

        <section className=" h-auto relative flex items-center justify-center text-left w-full object-cover ">

          <Image className="hidden md:block" src="/wifi6-advanced2.jpg" alt='Teste Banner' width={3820} height={440}  />
          <Image className="block md:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />

          <div className=" text-sm absolute  rounded-xl shadow-sm grid mx-auto mb-12   ">
            <h1 className=" text-white md:text-gray-700 text-center text-4xl pb-8 font-semibold  md:w-6/12 md:pb-4 md:text-7xl lg:text-left ">
              What Is Wi-Fi 6 Advanced?
            </h1>
            <a href="#" className="flex justify-center md:justify-start">
              <button className="  md:absolute md:m-auto md:block flex w-auto px-8 py-4 rounded-xl bg-transparent border border-brand font-bold text-brand hover:bg-brand hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Compre Agora
              </button>
            </a>
          </div>
        </section>



        <section className="p-0 bg-emerald-50 font-light text-4xl h-64 w-full flex text-brand justify-center items-center hover: transition-colors duration-200 bg-blend-color tracking-wide flex-col">
          <h1 className="font-bold">The Best Access Points in the World</h1>

          <p className="text-sm mt-4">
            High performance indoor Wi-Fi 6 APs with independent scanning RF.
          </p>
        </section>

        <section className="mx-auto h-auto relative flex items-center text-left">

            <Image
              src="/banner_pc_v6.jpg"
              alt='Teste Banner'

              width={3820}
              height={440}
              className=" md:mb-16 hidden md:block"
            />
            <Image className="block md:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />

            <div className=" text-zinc-950 absolute p-0 text-center top-8 flex flex-col m-auto justify-center item  mb-12 md:mx-0 md:top-1/4">
              <div className="container">
                <h3 className="text-6xl font-bold text-white md:text-gray-700 md:text-9xl  ">
                  WLAN
                </h3>
                <p className="text-sm mt-2 md:w-8/12 text-white md:text-gray-700 gap-4 w-8/12 top-0  mx-auto mb-8 ">
                  Velocidades ultrarrápidas da Huawei, mobilidade sempre ativa e rede auto-organizada contínua.
                </p>
                <a href="#" className=" mb-4 relative rounded-xl bg-transparent border border-brand font-bold p-4 text-brand hover:bg-brand hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Compre Agora
                </a>
              </div>
            </div>

        </section>





        

        <section className="relative flex items-center w-auto h-auto">
          <Image
            src="/mbbf-2022-banner.jpg"
            alt='Teste Banner'
            width={1920}
            height={720}
            className="hidden md:flex rounded-3xl md:w-10/12 md:shadow-md md:mb-16 md:mx-auto"

          />
          <Image className="block md:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />

          <div className="absolute md:right-1/2 lg:w-4/12 w-10/12 text-left md:text-left text-zinc-950 flex flex-col justify-center md: mb-32">
            <div className="container">
              <h3 className="text-2xl text-left md:text-3xl font-bold text-white md:text-gray-700 md:leading-16">
                Huawei and ABI Release 5G Digital Airport White Paper
              </h3>
              <p className="mt-4 mb-8 md:mb-4 text-left text-sm text-white md:text-gray-700 md:py-6 md:w-full md:text-sm">
                Cloud X: Interactive Applications Streamed Over High-Speed Mobile Networks 5G
              </p>
              <a href="#" className="text-left relative md:absolute md:right-auto  mt-8 md:mt-0 rounded-xl bg-transparent border border-brand font-bold px-8 py-4 text-brand hover:bg-brand hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Compre Agora
              </a>
            </div>
          </div>
        </section>





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
