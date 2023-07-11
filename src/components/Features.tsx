import Image from 'next/image'

export function Features () {
    return (
    <section>
        <div>
            <div className="container">
                <div>
                    <div>
                        <h2>
                            Desempenho <span>extremo</span>
                        </h2>
                        <picture>
                        <Image src="/feature1.png" width={400} height={0} alt='Logotipo' />
                        </picture>
                        <div>

                        </div>
                        <div>
                        <h2>
                            Desempenho <span>extremo</span>
                        </h2>
                            <p>
                            Placa gráfica de última geração com Nvidia GTX, RTX da série 4000.
O melhor desempenho para aplicações profissionais com linha Nvidia Quadro.
GPU's de alta performance para co-processamento com Nvidia Tesla e NVidia Volta.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}