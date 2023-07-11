import Image from 'next/image'

export function Footer () {
    return (
<footer className="p-12 h-auto flex flex-col text-center bg-zinc-100  sm:flex-row  justify-between  border border-gray-300">
  <div className="container">
        <div className="pb-8 justify-center items-center flex">
            <a href="#">
          <Image src="/prime8.svg" width={120} height={0} alt='Logotipo' />
          </a>
        </div>
        
        <ul className="flex flex-col gap-2 items-center justify-center">          
          <a href=""><li className="gap-8 px-2 text-sm"><b>Compra 100% Segura</b></li></a>
          <a href=""><li className="gap-8 px-2 text-sm">Certificado SSL</li></a>
          <a href=""><li className="gap-8 px-2 text-sm">sac@prime8.com.br</li></a>
        </ul>
      </div>
      </footer>
    )
}
