import {
  type DeepMap,
  type FieldError,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import { Select, type SelectProps } from ".";

export type RhfSelectProps<T extends FieldValues = FieldValues> =
  UseControllerProps<T> & SelectProps;
export const RhfSelect = <T extends FieldValues>(props: RhfSelectProps<T>) => {
  const { name, control, options } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <Select
      inputRef={ref}
      options={options}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
      {...rest}
    />
  );
};
