import {
  getData,
  formatAccuData,
  formatOpenData,
  formatTomorrowData,
} from "../libs/fetchData";
import Display from "@/components/sections/Display";
import Carousel from "@/components/sections/Carousel";

export default async function Home() {
  const fetchAllData = async () => {
    const dataArr = [];
    const accuData = await getData(process.env.ACCUWEATHER);
    const openData = await getData(process.env.OPENWEATHER);
    const tomorrowData = await getData(process.env.TOMORROW);
    dataArr.push(accuData, openData, tomorrowData);
    return dataArr;
  };
  const formatAllData = async () => {
    //1 is accuWeather, 2 is openWeather, 3 is Tomorrow
    const dataArr = await fetchAllData();
    const formatedData = [];
    formatedData.push(formatAccuData(dataArr[0]), formatOpenData(dataArr[1]), formatTomorrowData(dataArr[2]));
    return formatedData;    
  };
  const data = await formatAllData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bgMobile lg:bg-bgDesk bg-cover bg-center bg-repeat font-mono">
      <Display data={data} />
      <Carousel data={data}/>
    </main>
  );
}
