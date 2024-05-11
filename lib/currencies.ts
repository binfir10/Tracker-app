export const Currencies = [
  { value: "USD", label: "$ Dolar", locade: "en-US" },
  { value: "EUR", label: "€ Euro", locade: "de-DE" },
  { value: "GBP", label: "£ Libra", locade: "en-GB" },
  { value: "JPY", label: "¥ Yen", locade: "ja-JP" },
    { value: "ARS", label: "$ Peso Argentino", locade: "ar-AR" },
]

export type Currency = ( typeof Currencies )[0]