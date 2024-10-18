import type { FC } from "react";
import { useState } from "react";

import { FormData } from "../../types/types";

import { Box, Toolbar } from "@mui/material";

import AddDataDrawer from "./AddDataDrawer/AddDataDrawer";
import DataTable from "./DataTable/DataTable";
import CommonSelect from "../CommonSelect/CommonSelect";

import { partners } from "./data";
import Searchbar from "./Searchbar/Searchbar";

const MainSection: FC = () => {
  const [partner, setPartner] = useState("");
  const [customer, setCustomer] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    database: "",
    schema: "",
    table: "",
    audience: "",
    tableFormat: "",
  });

  const [tableRows, setTableRows] = useState<FormData[]>([]);

  const selectedPartner = partners.find((p) => p.name === partner);
  const selectedCustomer = selectedPartner?.customers.find(
    (c) => c.name === customer
  );

  const handleAddData = (newData: FormData) => {
    if (selectedCustomer) {
      selectedCustomer.data.push(newData);
      setTableRows([...selectedCustomer.data]);
      console.log(partners);
    }
  };

  const handleChangePartner = (value: string) => {
    setPartner(value);
    setCustomer("");
    setTableRows([]);
  };

  const handleChangeCustomer = (value: string) => {
    setCustomer(value);
    const customerData =
      selectedPartner?.customers.find((c) => c.name === value)?.data || [];
    setTableRows([...customerData]);
  };

  const filteredRows = tableRows.filter((row) =>
    row.table.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{ padding: 4, bgcolor: "#f3f3f3", borderRadius: 5 }}
      component="section"
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "end",
          gap: 2,
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <CommonSelect
            label="Partner"
            options={partners}
            value={partner}
            onChange={handleChangePartner}
            width={200}
          />

          <CommonSelect
            label="Customer"
            options={partners.find((p) => p.name === partner)?.customers || []}
            value={customer}
            onChange={handleChangeCustomer}
            width={200}
          />

          <Searchbar setSearchQuery={setSearchQuery} />
        </Box>

        <AddDataDrawer
          formData={formData}
          setFormData={setFormData}
          handleAddData={handleAddData}
        />
      </Box>

      <Toolbar />

      <Box sx={{ padding: 2, bgcolor: "#fff", borderRadius: 2 }}>
        <DataTable rows={filteredRows} />
      </Box>
    </Box>
  );
};

export default MainSection;
