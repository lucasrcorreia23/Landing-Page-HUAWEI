import Image from 'next/image'

export function Footer () {
    return (
<footer className="p-12 h-auto flex flex-col text-center bg-zinc-200  sm:flex-row  justify-between  border border-gray-300">
        <div className="py-4 justify-center items-center flex">
            <a href="#">
          <Image src="/prime8.svg" width={120} height={0} alt='Logotipo' />
          </a>
        </div>
        <ul className="flex flex-row gap-4 items-center justify-center">
          <a href=""><li className="gap-8 px-2 text-sm">Home</li></a>
          <a href=""><li className="gap-8 px-2 text-sm">Contact</li></a>
          <a href=""><li className="gap-8 px-2 text-sm">Price</li></a>
          <a href=""><li className="gap-8 px-2 text-sm">Features</li></a>
        </ul>
      </footer>
    )
}
