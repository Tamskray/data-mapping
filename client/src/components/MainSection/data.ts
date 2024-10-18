import { Partner } from "../../types/types";

export const partners: Partner[] = [
  {
    id: 1,
    name: "Partner1",
    customers: [
      { id: 1, name: "Customer1", data: [] },
      {
        id: 2,
        name: "Customer2",
        data: [
          {
            database: "Database1",
            schema: "Schema1",
            table: "Table1",
            audience: "Audience1",
            tableFormat: "Format1",
          },
          {
            database: "Database2",
            schema: "Schema2",
            table: "Table2",
            audience: "Audience2",
            tableFormat: "Format2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Partner2",
    customers: [
      { id: 3, name: "Customer3", data: [] },
      { id: 4, name: "Customer4", data: [] },
    ],
  },
];
