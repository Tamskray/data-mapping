export interface FormData {
  database: string;
  schema: string;
  table: string;
  audience: string;
  tableFormat: string;
}

export interface Customer {
  id: number;
  name: string;
  data: FormData[];
}

export interface Partner {
  id: number;
  name: string;
  customers: Customer[];
}
