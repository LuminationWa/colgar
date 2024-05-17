import Image from "next/image";

const Display = (props) => {
  const { fecha, lluviaDia, lluviaNoche } = props.data;
  return (
    <div className="flex min-h-screen flex-col items-center p-6">
      <div className="flex min-h-screen flex-col items-center">
        <h1>{fecha}</h1>
        {lluviaDia ? (
          <>
            <div>
              <Image alt="Happy cat" src="/pictures/sunCat.png" width={300} height={300} className="rounded"></Image>
            </div>
            <h1>Mal dia para colgar</h1>
          </>
        ) : (
          <>
            <div>
              <Image alt="Happy cat" src="/pictures/sunCat.png" width={300} height={300}></Image>
            </div>
            <h1>Buen dia para colgar</h1>
          </>
        )}
      </div>
      <div>
        <div>
          <div>
            <h2>Accuweather</h2>
          </div>
          <div>
            <div>
              <h1>Dia</h1>
              {lluviaDia ? <h1>Lluvia</h1> : <h1>No lluvia</h1>}
            </div>
            <div>
              <h1>Noche</h1>
              {lluviaNoche ? <h1>Lluvia</h1> : <h1>No lluvia</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
