"use client";
import { useEffect, useState } from "react";

const Tomorrow = (props) => {
  const tomorrowData = props.tomorrowData;
  const [styles, setStyles] = useState(props.styles);
  useEffect(() => {
    setStyles(props.styles);
    console.log("aaa")
  }, [props.styles]);
  return (
    <div
      className={`h-[100%] lg:grid grid-cols-[65%_35%] transition-all ease duration-1000 w-[100%] max-w-[1368px] bg-red-600 ${styles}`}
    >
      <div className="flex flex-col w-[100%] h-[100%] max-w-[1368px] py-10 px-8">
        <div className="flex">
          <img
            src="/pictures/tomorrow.png"
            alt="Tomorrow.io logo"
            className="max-w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <p>{tomorrowData.desc}</p>
          <h3>Hoy {tomorrowData.probLluvia}</h3>
          <h3>Mañana {tomorrowData.probLluvia2}</h3>
          <h3>Pasado {tomorrowData.probLluvia3}</h3>
          <p>Maxima: {tomorrowData.tempMin}</p>
          <p>Minima: {tomorrowData.tempMax}</p>
        </div>
      </div>
    </div>
  );
};

export default Tomorrow;
