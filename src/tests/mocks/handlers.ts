import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3000/products/:id", () => {
    return HttpResponse.json({
      id: 1,

      title: "Смарт‑часы X100",

      price: 7490,

      category: "Гаджеты",

      image: "https://example.com/img/1.jpg",

      description: "Водонепроницаемые, GPS, 7‑дневный аккумулятор",
    });
  }),
];
