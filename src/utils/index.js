export const sumAndAverage = arr => {
  const result =
    arr.reduce((p, c) => {
      return p + c;
    }, 0) / arr.length;
  return result.toFixed(1);
};

export const weatherStatesEnum = {
  snow: "sn",
  sleet: "sl",
  hail: "h",
  thunderstorm: "t",
  heavyRain: "hr",
  lightRain: "lr",
  showers: "s",
  heavyCloud: "hc",
  lighCloud: "lc",
  clear: "c"
};
