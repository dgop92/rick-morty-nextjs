import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import BaseSelect, {
  SelectProps as BaseSelectProps,
} from "@mui/material/Select";
import { Controller, Control, FieldPath } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import { styled } from "@mui/material/styles";

export type MenuItemPair = {
  text: string;
  value: number | string;
};

export interface SelectProps<T> extends BaseSelectProps<T> {
  name: string;
  label: string;
  defaultOption?: string;
  items: MenuItemPair[];
}

export interface ControlledSelectProps<T, ControlType> extends SelectProps<T> {
  name: FieldPath<ControlType>;
  control: Control<ControlType, object>;
  // eslint-disable-next-line react/require-default-props
  errorMessage?: string;
}

export const SelectFormControl = styled((props: FormControlProps) => (
  <FormControl size="small" fullWidth margin="dense" {...props} />
))<FormControlProps>(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  },
  "& .MuiInputLabel-root": {
    top: "3px",
  },
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(2),
  },
}));

export function ControlledSelect<T, ControlType>({
  name,
  label,
  items,
  control,
  errorMessage,
  defaultOption,
}: ControlledSelectProps<T, ControlType>): JSX.Element {
  const inputId = `${name}-id`;
  const labelId = `${name}-label-id`;

  return (
    <SelectFormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <BaseSelect
            labelId={labelId}
            id={inputId}
            label={label}
            error={!!errorMessage}
            {...field}
          >
            <MenuItem value="">
              <em>{defaultOption || "None"}</em>
            </MenuItem>
            {items.map((itemData, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MenuItem key={index} value={itemData.value}>
                {itemData.text}
              </MenuItem>
            ))}
          </BaseSelect>
        )}
      />
      <FormHelperText error id={`${name}-helper-text`}>
        {errorMessage}
      </FormHelperText>
    </SelectFormControl>
  );
}

export function Select<T>({
  name,
  label,
  items,
  value: currentValue,
  onChange: handleChange,
  ...props
}: SelectProps<T>): JSX.Element {
  const inputId = `${name}-id`;
  const labelId = `${name}-label-id`;

  return (
    <SelectFormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <BaseSelect
        labelId={labelId}
        id={inputId}
        value={currentValue}
        label={label}
        onChange={handleChange}
        {...props}
      >
        <MenuItem value="">
          <em>Ninguna</em>
        </MenuItem>
        {items.map((itemData, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MenuItem key={index} value={itemData.value}>
            {itemData.text}
          </MenuItem>
        ))}
      </BaseSelect>
    </SelectFormControl>
  );
}
