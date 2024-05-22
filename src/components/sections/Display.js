'use client'
import Image from "next/image";
import { useRef } from "react";

const Display = (props) => {
  const nightRef = useRef(null);
  const { fecha, lluviaDia, lluviaNoche } = props.data[0];
  const { temp, desc } = props.data[1];
  const { probLluvia, probLluvia2, probLluvia3 } = props.data[2];
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center text-black transparent-night">
      <div className="Section-1">
        <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-3">
          <h2 className="top-0 right-0">{temp}°C</h2>
          {lluviaDia ? (
            <>
              <h1 className="display-h1 h1-night">No colgar</h1>{" "}
              <div>
                <Image
                  alt="Rain cat"
                  src="/pictures/rainCat2.png"
                  width={300}
                  height={300}
                  className="rounded-[50%]"
                ></Image>
              </div>
              <button className="flex items-center gap-1" onClick={
                () => {
                  nightRef.current.style.opacity = 1;
                }
              }>
                <h2 className="text-4xl font-bold">Muchas nubes</h2>
                <img src="./pictures/icons/arrow.svg" className="w-[20px]" alt="arrow"></img>
              </button>
              <div className="text-center">
                <div className="flex-col gap-2 lg:flex text-l opacity-0" ref={nightRef}>
                  <h2>Lluvia</h2>
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <h3>Hoy</h3>
                      <p>3%</p>
                    </div>
                    <div className="flex flex-col">
                      <h3>Mañana</h3>
                      <p>4%</p>
                    </div>
                    <div className="flex flex-col">
                      <h3>Pasado</h3>
                      <p>6%</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <Image
                  alt="Happy cat"
                  src="/pictures/colgarCat2.png"
                  width={300}
                  height={300}
                  className="rounded-[50%] sun-image"
                ></Image>
              </div>
              <h1 className="display-h1 h1-day">Colgar</h1>
              <p>{desc}</p>
            </>
          )}
          <div className="flex-col gap-2 text-center hidden lg:flex">
            <h2>Probabilidad lluvia</h2>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <h3>Hoy</h3>
                <p>{probLluvia}</p>
              </div>
              <div className="flex flex-col">
                <h3>Mañana</h3>
                <p>{probLluvia2}</p>
              </div>
              <div className="flex flex-col">
                <h3>Pasado</h3>
                <p>{probLluvia3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
