import { MemoryRouter } from "react-router";
import { server } from "../mocks/server";
import { render, screen, waitFor } from "@testing-library/react";
import { CardModal } from "@/components/modal/CardModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

describe("CardModal.tsx", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: 0 },
    },
  });
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/?productId=1"]}>{children}</MemoryRouter>
    </QueryClientProvider>
  );

  it("render component", async () => {
    render(<CardModal></CardModal>, { wrapper });

    const modalCard = await screen.findByText("Смарт‑часы X100");

    expect(modalCard).toBeInTheDocument();
  });

  it("close modal within click on button", async () => {
    const user = userEvent.setup();

    render(<CardModal></CardModal>, { wrapper });

    const closeButton = screen.getByRole("button", { name: /close/i });

    await user.click(closeButton);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("click on buy-button", async () => {
    const user = userEvent.setup();

    render(<CardModal></CardModal>, { wrapper });

    const buyButton = screen.getByRole("button", { name: /купить/i });

    await user.click(buyButton);

    const spinner = screen.getByRole("status");

    expect(buyButton).toBeDisabled();
    expect(spinner).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
