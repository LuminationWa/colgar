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

export function formatAccuData(rawData) {
  const dataFormated = rawData.DailyForecasts[0];
  return {
    fecha: dataFormated.Date,
    lluviaDia: dataFormated.Day.HasPrecipitation,
    lluviaNoche: dataFormated.Night.HasPrecipitation,
  };
}

export function formatOpenData(rawData) {
  return {
    temp: rawData.main.feels_like,
    tempMin: rawData.main.temp_min,
    tempMax: rawData.main.temp_max,
    desc: rawData.weather[0].description,
  }
}

export function formatTomorrowData(rawData) {
  const baseData = rawData.timelines.daily;
  return {
      probLluvia: baseData[0].values.precipitationProbabilityAvg,
      probLluvia2: baseData[1].values.precipitationProbabilityAvg,
      probLluvia3: baseData[2].values.precipitationProbabilityAvg,
      tempMin: baseData[0].values.temperatureMin,
      tempMax: baseData[0].values.temperatureMax,
  }
}
