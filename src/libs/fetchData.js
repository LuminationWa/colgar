export async function getData(url) {
  const res = await fetch(`${url}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    console.log("Error",  "Failed to fetch data");
    return false;
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
