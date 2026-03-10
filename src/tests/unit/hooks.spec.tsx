import { useProductsFilter } from "@/hooks/useProductsFilter";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";

describe("useProductsFilter", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
  );

  it("setSearch updates URL param title:contains", () => {
    const { result } = renderHook(() => useProductsFilter(), { wrapper });

    act(() => {
      result.current.setSearch("Клавиатура");
    });

    expect(result.current.search).toBe("Клавиатура");
  });

  it("setProduct updates URL param :id", () => {
    const { result } = renderHook(() => useProductsFilter(), { wrapper });

    act(() => {
      result.current.setProduct("1");
    });

    expect(result.current.productId).toBe("1");
  });

  it("reset is working", () => {
    const { result } = renderHook(() => useProductsFilter(), { wrapper });

    act(() => {
      result.current.setSearch("Клавиатура");
    });

    act(() => {
      result.current.setSearch("");
    });

    expect(result.current.search).toBe("");
  });
});
