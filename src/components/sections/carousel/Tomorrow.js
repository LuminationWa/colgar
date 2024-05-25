"use client";
import { useEffect, useState } from "react";

const Tomorrow = (props) => {
  const tomorrowData = props.tomorrowData;
  const [styles, setStyles] = useState(props.styles);
  useEffect(() => {
    setStyles(props.styles);
  }, [props.styles]);
  return (
    <div
      className="absolute transition-all ease duration-1000 w-[100%] max-w-[1368px] bg-red-600 ${styles} lg:bg-transparent lg:text-black pointer-events-none" style={styles}
    >
      <div className="flex flex-col w-[100%] h-[100%] max-w-[1368px] py-10 px-8 ">
        <div className="flex justify-center">
          <img
            src="/pictures/tomorrow.png"
            alt="Tomorrow.io logo"
            className="max-w-[100%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <div>
            <p className="text-2xl">Máxima: {tomorrowData.tempMin}°C</p>
            <p className="text-2xl">Mínima: {tomorrowData.tempMax}°C</p>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <h3 className="text-2xl">Hoy</h3>
              <p> {tomorrowData.probLluvia}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl">Mañana</h3>
              <p> {tomorrowData.probLluvia2}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl">Pasado</h3>
              <p> {tomorrowData.probLluvia3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tomorrow;
