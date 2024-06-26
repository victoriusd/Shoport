import burbuja from '../assets/img/burbuja.png'
import { useNavigate } from 'react-router-dom';
const NoFound = () => {

    const navigate = useNavigate();

    return (
        <section class="bg-[#FF6D00] font-inter overflow-y-hidden h-[80vh]">
            <div className="mt-20">
                <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden h-screen  ">
                    <div>
                        <img className=" top-[303px] z-10 left-[-185.69px] rotate-[303.21deg] absolute w-[608.77px] h-[584.5px] " src={burbuja} alt="" />
                        <img className=" top-[-300px] left-[1125px] rotate-[33.21deg] absolute w-[608.77px] h-[584.5px] " src={burbuja} alt="" />

                    </div>
                </div>
            </div>
            <div class=" relative py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-20 ">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl dark:text-white">Algo Fallo!</p>
                    <p class="mb-4 text-lg font-light text-white ">Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para explorar en la página de inicio.</p>
                    <button
                    class="inline-flex text-white bg-blue-600 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
                    onClick={() => navigate("/")}
                    >Volver al Inicio</button>
                </div>
            </div>
        </section>
    );
}

export default NoFound;