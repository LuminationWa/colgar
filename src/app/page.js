//Key for Montevideo 349269
export default async function Home() {
  async function getData() {
    const res = await fetch(
      "http://dataservice.accuweather.com/forecasts/v1/daily/1day/367948?apikey=6nwD021BKJQmOhP4yXndaCSztIjmtq70"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  }
  const data = await getData();
  const dataFormated = data.DailyForecasts;
  console.log(dataFormated);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{dataFormated[0].Date}</h1>
    </main>
  );
}
