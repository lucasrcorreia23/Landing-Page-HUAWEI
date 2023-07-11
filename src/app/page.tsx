import Image from 'next/image'
import { Home as Homeicon, Search, Contact2 } from 'lucide-react';
import { Menu, } from '@/components/Menu';
import { Footer } from '@/components/Footer';
import { Features } from '@/components/Features';

export default function Home() {
  return (
    <>
      <Menu />


      <main className="h-auto w-full flex flex-col text-center p-0 m-0 bg-emerald-50 lg:scroll-snap-type-y-mandatory">

        <section className="h-auto relative flex items-center justify-center text-left w-full object-cover  ">
        
          <Image className="hidden lg:block" src="/wifi6-advanced2.jpg" alt='Teste Banner' width={3820} height={440} priority />
          <Image className="block lg:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />
          <div className="container absolute"> 
          <div className=" text-sm  relative  rounded-xl shadow-sm mx-auto mb-12    ">
            <h1 className=" text-white lg:text-gray-700 text-center text-4xl pb-8 font-semibold px-8 lg:px-0  lg:w-6/12 lg:pb-4 md:text-3xl lg:text-7xl lg:text-left ">
              What Is Wi-Fi 6 Advanced?
            </h1>
            <a href="#" className="flex justify-center lg:justify-start">
              <button className=" lg:w-1/4 lg:absolute lg:m-auto lg:block flex w-auto px-8 py-4 rounded-xl bg-transparent border border-white text-white lg:border-brand font-bold lg:text-brand hover:bg-brand hover:text-white transition duration-500 ease-in-out transform  hover:scale-105">
                Compre agora
              </button>
            </a>
          </div>
          </div>
        </section>
       
        <section className="py-20 snap-mandatory snap-x overflow-x-hidden flex lg:justify-center">
          
          <div className="flex flex-row justify-start relative left-0 ">
              
              <div className=" mx-8  lg:hover:shadow-xl  duration-700  snap-center w-60 h-4/4 align-center my-auto bg-white rounded-xl  overflow-hidden lg:justify-center">      
                <img className="h-auto w-full object-cover opacity-80    " src="/banner.webp" alt="Frete Grátis"/>
                <div className="p-4 my-auto">
                  <div className="uppercase tracking-wide text-sm text-brand font-semibold">Frete Grátis</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Para todo o Brasil</a>
                  <p className="mt-2 text-slate-500 text-sm">Compras acima de 500 reais recebem automaticamente gratuidade nas entregas</p>
                
                </div>
              </div>
              <div className="mx-8  lg:hover:shadow-xl duration-700   snap-center w-60 h-4/4 align-center my-auto bg-white rounded-xl  overflow-hidden lg:justify-center">      
                <img className="h-auto w-full object-cover opacity-80   " src="/banner.webp" alt="Frete Grátis"/>
                <div className="p-4 my-auto">
                  <div className="uppercase tracking-wide text-sm text-brand font-semibold">Garantia: 24 meses</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Estamos com você</a>
                  <p className="mt-2 text-slate-500 text-sm">Não era o que você precisava? Conte conosco para te ajudar em até 24 meses</p>
                
                </div>
              </div>
              <div className="mx-8  lg:hover:shadow-xl duration-700  snap-center w-60 h-4/4 align-center my-auto bg-white rounded-xl  overflow-hidden lg:justify-center">      
                <img className="h-auto w-full object-cover opacity-80   " src="/banner.webp" alt="Frete Grátis"/>
                <div className="p-4 my-auto">
                  <div className="uppercase tracking-wide text-sm text-brand font-semibold">Suporte on site</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Implantação</a>
                  <p className="mt-2 text-slate-500 text-sm">Profissionais certificados nas principais vertentes de TIC a seu dispor</p>
                
                </div>
              </div>
              <div className="mx-8  lg:hover:shadow-xl duration-700 snap-center w-60 h-4/4 align-center my-auto bg-white rounded-xl  overflow-hidden lg:justify-center">      
                <img className="h-auto w-full object-cover opacity-80   " src="/banner.webp" alt="Frete Grátis"/>
                <div className="p-4 my-auto">
                  <div className="uppercase tracking-wide text-sm text-brand font-semibold">Assistência pós venda</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Arquitetos de Solução</a>
                  <p className="mt-2 text-slate-500 text-sm">Equipe com arquitetos de soluções hard-end prontos para apoiar em seu projeto</p>
                
                </div>
              </div>
            
          
          </div>
          
        </section>






        

        <section className=" mx-auto h-auto relative flex items-center text-left">

            <Image
              src="/banner_pc_v6.jpg"
              alt='Teste Banner'

              width={3820}
              height={440}
              className="  hidden lg:block"
            />
            <Image className="block lg:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />

            <div className=" text-zinc-950 absolute p-0 text-center top-8 flex flex-col m-auto justify-center item w-100 lg:w-auto  mb-12 lg:mx-0 lg:top-1/4">
              <div className="container">
                <h3 className="text-6xl font-bold text-white lg:text-gray-700 lg:text-9xl  ">
                  WLAN
                </h3>
                <p className="text-sm mt-2 lg:w-8/12 text-white lg:text-gray-700 gap-4 w-8/12 top-0  mx-auto mb-8 ">
                  Velocidades ultrarrápidas da Huawei, mobilidade sempre ativa e rede auto-organizada contínua.
                </p>
                <a href="#" className=" relative text-center m-auto lg:mx-auto w-1/2 justify-center  lg:m-auto lg:block flex  px-8 py-4 rounded-xl bg-transparent border border-white text-white lg:border-brand font-bold lg:text-brand hover:bg-brand hover:text-white transition duration-500 ease-in-out transform  hover:scale-105">
                  Compre agora
                </a>
              </div>
            </div>

        </section>
        
        <section className="   p-0 bg-emerald-50 font-light text-4xl h-64 w-full flex text-brand justify-center items-center hover: transition-colors duration-200 bg-blend-color tracking-wide flex-col">
          <h1 className="font-bold">The Best Access Points in the World</h1>

          <p className="text-sm mt-4">
            High performance indoor Wi-Fi 6 APs with independent scanning RF.
          </p>
        </section>





        

        <section className="relative flex items-center w-auto h-auto">
          <Image
            src="/mbbf-2022-banner.jpg"
            alt='Teste Banner'
            width={1920}
            height={720}
            className="hidden lg:flex rounded-3xl lg:w-10/12 lg:shadow-lg lg:mb-16 lg:mx-auto"

          />
          <Image className="block lg:hidden" src="/mobile/wlan-banner-wap-0611.jpg" alt='Teste Banner' width={750} height={790} />

          <div className="absolute lg:right-1/2 lg:w-4/12 w-10/12 text-left lg:text-left text-zinc-950 flex flex-col justify-center lg: mb-32">
            <div className="container pl-10 pt-8 lg:p-0">
              <h3 className="text-2xl text-left lg:text-3xl font-bold text-white lg:text-gray-700 lg:leading-16">
                Huawei and ABI Release 5G Digital Airport White Paper
              </h3>
              <p className="mt-4 mb-8 lg:mb-4 text-left text-sm text-white lg:text-gray-700 lg:pb-4 lg:w-full lg:text-sm">
                Cloud X: Interactive Applications Streamed Over High-Speed Mobile Networks 5G
              </p>
              <a href="#" className="text-left relative lg:absolute lg:right-auto  border-white text-white mt-8 lg:mt-0 rounded-xl bg-transparent border lg:border-brand font-bold px-8 py-4 lg:text-brand hover:bg-brand hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Compre agora
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
