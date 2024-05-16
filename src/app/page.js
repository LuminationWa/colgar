import { getData, formatData } from "../libs/fetchData";
import Display from "@/components/Display";

export default async function Home() {
  const data = await getData(process.env.ACCUWEATHER);
  const dataFormated = formatData(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Display data={dataFormated}/>
    </main>
  );
}
