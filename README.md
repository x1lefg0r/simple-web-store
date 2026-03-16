# Simple Web Store

SPA каталог товаров — тестовое задание, которое вышло чуть больше чем тестовое задание.

🔗 **[Live Demo](https://simple-web-store.vercel.app/)**

---

## Что внутри

Помимо базового требования (карточки, поиск, модалка) реализовано:

- **Infinite scroll** вместо пагинации — `useInfiniteQuery` + `IntersectionObserver`
- **URL state** — модалка и поиск живут в адресной строке. Открытый товар можно скопировать и отправить, после перезагрузки страницы поиск сохраняется
- **Skeleton loader** — карточки и модалка не моргают пустым экраном
- **Анимация карточек** при появлении — stagger через Framer Motion
- **Toast после покупки** — с лоадером на кнопке и закрытием модалки
- **Empty / Error / Loading state** — человеческая обратная связь вместо пустого экрана

---

## Стек

| Слой                | Инструмент                     |
| ------------------- | ------------------------------ |
| UI                  | React 19 + TypeScript + Vite   |
| Стили               | Tailwind v4 + shadcn/ui        |
| Data fetching       | TanStack Query v5              |
| Роутинг / URL state | React Router v7                |
| Анимации            | Framer Motion                  |
| API                 | json-server                    |
| Тесты               | Vitest + Testing Library + MSW |

---

## Тесты

Покрыты три уровня:

**Unit — хуки** (`useProductsFilter`):

- `setSearch` обновляет параметр `q` в URL
- `setProduct` обновляет параметр `productId` в URL
- Сброс поиска удаляет параметр из URL

**Integration — компоненты** (`ProductCard`, `CardModal`):

- Карточка рендерится с правильными данными (название, цена, изображение)
- Клик по карточке вызывает `onOpen`
- Модалка открывается когда `productId` есть в URL
- Клик по кнопке X закрывает модалку
- Кнопка "Купить" блокируется во время загрузки, модалка закрывается после

MSW перехватывает fetch-запросы на уровне сети — тесты не зависят от реального сервера.

```bash
npm run test
```

---

## Запуск локально

```bash
git clone https://github.com/x1lefg0r/simple-web-store
cd simple-web-store
npm install

# создать .env.local
echo "VITE_API_URL=http://localhost:3000" > .env.local

# запустить API и фронт
npm run start  # json-server на порту 3001
npm run dev      # фронт на порту 5173
```

---

## Деплой

- Фронт — **Vercel**
- API — **Render** (json-server)
