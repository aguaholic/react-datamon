import { ColumnDef } from "@tanstack/react-table";

import { IPokemonListItem } from "@/types/pokemon";

export const COLUMNS: ColumnDef<IPokemonListItem>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Sprite",
    accessorKey: "sprite",
    cell: ({ row }) => {
      return <img src={String(row.original.sprite)} alt={row.original.name} />;
    },
  },
  {
    header: "Type",
    accessorKey: "types",
  },
];
