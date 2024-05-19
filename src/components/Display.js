import Image from "next/image";

const Display = (props) => {
  const { fecha, lluviaDia, lluviaNoche } = props.data[0];
  const { temp, desc } = props.data[1];
  const { probLluvia, probLluvia2, probLluvia3 } = props.data[2];
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center p-6 text-black">
      <div className="Section-1">
        <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-8">
          <h1 className="text-xl">{fecha}</h1>
          <h2 className="hidden lg:block">{temp}°C</h2>
          {lluviaDia ? (
            <>
              <div>
                <Image
                  alt="Happy cat"
                  src="/pictures/rainCat.jpg"
                  width={300}
                  height={300}
                  className="rounded-[50%]"
                ></Image>
              </div>
              <h1 className="text-2xl bold">Mal dia para colgar</h1>
            </>
          ) : (
            <>
              <div>
                <Image
                  alt="Happy cat"
                  src="/pictures/colgarCat.jpg"
                  width={300}
                  height={300}
                  className="rounded-[50%]"
                ></Image>
              </div>
              <h1 className="text-2xl bold">Buen dia para colgar</h1>
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
