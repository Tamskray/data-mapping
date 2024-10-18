import { type FC } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

interface Option {
  id: number;
  name: string;
}

interface CommonSelectProps {
  label: string;
  options: Option[];
  value?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  width?: number;
}

const CommonSelect: FC<CommonSelectProps> = ({
  label,
  options,
  // initialValue,
  value,
  onChange,
  width,
}) => {
  // const [value, setValue] = useState(initialValue || "");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as string;
    // setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography variant="subtitle1" component="h3">
        {label}
      </Typography>
      <FormControl sx={{ width: width || "100%" }} size="small">
        <Select
          sx={{ textAlign: "left" }}
          value={value || ""}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CommonSelect;
