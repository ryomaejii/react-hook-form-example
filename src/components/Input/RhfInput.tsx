import {
  type DeepMap,
  type FieldError,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import { Input, type InputProps } from ".";

export type RhfInputProps<T extends FieldValues = FieldValues> =
  UseControllerProps<T> & InputProps;

export const RhfInput = <T extends FieldValues>(props: RhfInputProps<T>) => {
  const { name, control, placeholder } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <Input
      inputRef={ref}
      placeholder={placeholder}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
      {...rest}
    />
  );
};
