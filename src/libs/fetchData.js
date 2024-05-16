export async function getData(url) {
  const res = await fetch(`${url}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function formatData(rawData) {
  const dataFormated = rawData.DailyForecasts[0];
  return {
    fecha: dataFormated.Date,
    lluviaDia: dataFormated.Day.HasPrecipitation,
    lluviaNoche: dataFormated.Night.HasPrecipitation,
  };
}
