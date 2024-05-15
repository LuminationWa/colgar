import { getData, formatData } from "../libs/fetchData";

export default async function Home() {
  const data = await getData(process.env.ACCUWEATHER);
  const dataFormated = formatData(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{dataFormated.fecha}</h1>
      <h1>{dataFormated.lluviaDia}</h1>
      <h1>{dataFormated.lluviaNoche}</h1>
    </main>
  );
}
