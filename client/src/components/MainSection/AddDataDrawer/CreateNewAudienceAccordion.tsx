import { type FC, useState, ChangeEvent } from "react";

import CommonSelect from "../../CommonSelect/CommonSelect";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import AddIcon from "@mui/icons-material/Add";

interface Option {
  id: number;
  name: string;
}

interface FormData {
  database?: string;
  schema?: string;
  table?: string;
  audience?: string;
  tableFormat?: string;
}

interface CreateNewAudienceAccordionProps {
  audienceOptions: Option[];
  handleSelectChange: (key: keyof FormData) => (value: string) => void;
  value: string;
}

const CreateNewAudienceAccordion: FC<CreateNewAudienceAccordionProps> = ({
  audienceOptions,
  handleSelectChange,
  value,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [audienceInput, setAudienceInput] = useState("");

  const handleAccordionChange = () => {
    setAudienceInput("");
    setExpanded(!expanded);
  };

  const handleAudienceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAudienceInput(event.target.value);
  };

  const handleAddAudience = (newAudience: string) => {
    const newId = audienceOptions.length + 1;
    audienceOptions.push({ id: newId, name: newAudience });
    setAudienceInput("");
    setExpanded(false);
    console.log(audienceOptions);
  };

  return (
    <Box>
      <CommonSelect
        label="Audience"
        options={audienceOptions}
        value={value}
        onChange={handleSelectChange("audience")}
      />
      <Accordion
        sx={{
          "&:not(.Mui-expanded)": {
            border: "none",
            color: "primary.main",
          },
          "&:before": {
            backgroundColor: "transparent !important",
          },
        }}
        expanded={expanded}
        onChange={handleAccordionChange}
        variant="outlined"
      >
        <AccordionSummary
          sx={{
            px: 0,
            "&.Mui-expanded": {
              px: 2,
              minHeight: "44px",
            },
            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: "0px",
            },
          }}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {!expanded && <AddIcon sx={{ width: "20px", mr: 1 }} />}
          <Typography>Create New Audience</Typography>
        </AccordionSummary>
        <Divider sx={{ width: "100%" }} />

        <AccordionDetails>
          <Typography variant="subtitle1" component="h3">
            Segment Name
          </Typography>
          <TextField
            value={audienceInput}
            onChange={handleAudienceInputChange}
            sx={{ width: "100%" }}
            id="segment-name"
            variant="outlined"
            size="small"
          />
        </AccordionDetails>

        <AccordionActions sx={{ mr: 1, mb: 1.5 }}>
          <Button onClick={handleAccordionChange}>Cancel</Button>
          <Button
            onClick={() => handleAddAudience(audienceInput)}
            variant="contained"
            sx={{ width: "180px" }}
          >
            Save Changes
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default CreateNewAudienceAccordion;
