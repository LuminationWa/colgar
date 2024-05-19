import { getData, formatAccuData, formatOpenData, formatTomorrowData } from "../libs/fetchData";
import Display from "@/components/Display";
import Carousel from "@/components/sections/Carousel";

export default async function Home() {
  // const accuData = await getData(process.env.ACCUWEATHER);
  // const openData = await getData(process.env.OPENWEATHER);
  // const tomorrowData = await getData(process.env.TOMORROW);
  // const dataFormated = formatTomorrowData(tomorrowData);
  const backupData = {
    fecha: "Fecha de ejemplo",
    lluviaDia: false,
    lluviaNoche: true,
  };
  // const dataFormated = formatAccuData(accuData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bgMobile lg:bg-bgDesk bg-cover bg-center bg-repeat font-mono">
      <Display data={backupData} />
      <Carousel />
    </main>
  );
}
