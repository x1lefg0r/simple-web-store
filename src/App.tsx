import { Toaster } from "sonner";
import { ProductList } from "./components/Product/ProductList";
import { CardModal } from "./components/modal/CardModal";

function App() {
  return (
    <>
      <Toaster richColors />
      <CardModal></CardModal>
      <ProductList></ProductList>
    </>
  );
}

export default App;
