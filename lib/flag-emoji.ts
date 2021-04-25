export const getFlagEmoji = (countryCode: string) => String
  .fromCodePoint(...[...countryCode.toUpperCase()]
    .map(x => 0x1f1a5 + x.charCodeAt(0)))
