import { Field } from "../ui/field";
import { Input } from "../ui/input";

export const SearchFilter = () => {
  return (
    <Field orientation={"horizontal"}>
      <Input type="search" placeholder="Поиск..." />
    </Field>
  );
};
