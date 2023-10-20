import {
  FilledInput,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import "/src/index.css";

export const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || null);
  switch (item.type) {
    case "text":
      return (
        <>
          <InputLabel required>{item.label}</InputLabel>
          <FilledInput
            type="text"
            id={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
            sx={{
              width: "100%",
            }}
          />
        </>
      );
      break;
    case "password":
      return (
        <>
          <InputLabel htmlFor="inputPassword5" required>
            {item.label}
          </InputLabel>
          <FilledInput
            type="password"
            id="inputPassword5"
            // aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
            sx={{
              width: "100%",
            }}
          />
        </>
      );
      break;
    case "select":
      return (
        <div>
          <FormControl fullWidth>
            <InputLabel id="select-label">Adress</InputLabel>
            <Select
              labelId="select-label"
              label="Adress"
              aria-label={item.label}
              onChange={(e) => onChange(e.target.value, item.value)}
              value={currentValue}
            >
              <MenuItem>{item.label}</MenuItem>
              {item.options.map((opt, index) => {
                return <MenuItem value={opt}>{opt}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
      );
      break;
    case "information":
      return <p>{item.label}</p>;
  }

  return <></>;
};
