import Image from "next/image";

const Display = (props) => {
  const { fecha, lluviaDia, lluviaNoche } = props.data;
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center p-6 text-black">
      <div className="Section-1">
        <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-8">
          <h1 className="text-xl">{fecha}</h1>
          {lluviaDia ? (
            <>
              <div>
                <Image alt="Happy cat" src="/pictures/sunCat.png" width={300} height={300} className="rounded-[50%]"></Image>
              </div>
              <h1 className="text-2xl bold">Mal dia para colgar</h1>
            </>
          ) : (
            <>
              <div>
                <Image alt="Happy cat" src="/pictures/sunCat.png" width={300} height={300} className="rounded-[50%]"></Image>
              </div>
              <h1 className="text-2xl bold" >Buen dia para colgar</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
