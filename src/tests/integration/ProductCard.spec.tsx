import { ProductCard } from "@/components/Product/ProductCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("ProductCard.tsx", () => {
  const mockProduct = {
    id: 1,

    title: "Смарт‑часы X100",

    price: 7490,

    category: "Гаджеты",

    image: "https://example.com/img/1.jpg",

    description: "Водонепроницаемые, GPS, 7‑дневный аккумулятор",
  };

  it("render component", () => {
    const onOpen = vi.fn();
    render(
      <ProductCard
        product={mockProduct}
        key={mockProduct.id}
        onOpen={onOpen}
      ></ProductCard>,
    );

    const productCard = screen.getByTestId("product-card");

    expect(productCard).toBeInTheDocument();
    expect(screen.getByText("Смарт‑часы X100")).toBeInTheDocument();
    expect(screen.getByText("7 490 ₽")).toBeInTheDocument();
  });

  it("click trigger onOpen", async () => {
    const onOpen = vi.fn();

    const user = userEvent.setup();

    render(
      <ProductCard
        product={mockProduct}
        key={mockProduct.id}
        onOpen={onOpen}
      ></ProductCard>,
    );

    const productCard = screen.getByTestId("product-card");

    await user.click(productCard);

    expect(onOpen).toHaveBeenCalled();
  });
});
