import { Dispatch, SetStateAction, useState, type FC } from "react";

import { FormData } from "../../../types/types";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CommonSelect from "../../CommonSelect/CommonSelect";
import CreateNewAudienceAccordion from "./CreateNewAudienceAccordion";

import {
  databaseOptions,
  schemaOptions,
  tableOptions,
  audienceOptions,
  tableFormatOptions,
} from "./options";

interface AddDataDrawerProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;

  handleAddData: (newData: FormData) => void;
}

const AddDataDrawer: FC<AddDataDrawerProps> = ({
  formData,
  setFormData,
  handleAddData,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSelectChange =
    (key: keyof typeof formData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };

  const handleCreateClick = () => {
    console.log("Selected Values:", formData);
    handleAddData(formData);
    setOpen(false);

    setFormData({
      database: "",
      schema: "",
      table: "",
      audience: "",
      tableFormat: "",
    });
  };

  const DrawerList = (
    <Box
      sx={{
        width: 500,
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
      role="presentation"
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant="h5" component="h2">
          New Data Mapping
        </Typography>

        <CommonSelect
          label="Database"
          options={databaseOptions}
          value={formData.database}
          onChange={handleSelectChange("database")}
        />

        <CommonSelect
          label="Schema"
          options={schemaOptions}
          value={formData.schema}
          onChange={handleSelectChange("schema")}
        />

        <CommonSelect
          label="Table"
          options={tableOptions}
          value={formData.table}
          onChange={handleSelectChange("table")}
        />

        <CreateNewAudienceAccordion
          audienceOptions={audienceOptions}
          handleSelectChange={handleSelectChange}
          value={formData.audience}
        />

        <CommonSelect
          label="Table Format"
          options={tableFormatOptions}
          value={formData.tableFormat}
          onChange={handleSelectChange("tableFormat")}
        />
      </Box>

      <Button variant="contained" onClick={handleCreateClick}>
        Create
      </Button>
    </Box>
  );

  return (
    <>
      <Button sx={{}} onClick={toggleDrawer(true)} variant="contained">
        + Map Data
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default AddDataDrawer;
