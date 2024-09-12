import { ColumnDef } from "@tanstack/react-table";

import { IPokemon } from "@/types/pokemon";

export const COLUMNS: ColumnDef<IPokemon>[] = [
  {
    header: "ID",
    accessorFn: (results) => results.id,
  },
  {
    header: "Name",
    accessorFn: (results) => results.name,
  },
  {
    header: "Sprite",
    accessorFn: (results) => results.sprite,
  },
  {
    header: "Type",
    accessorFn: (results) => results.type,
  },
];
