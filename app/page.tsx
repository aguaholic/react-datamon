"use client";

import { useMemo } from "react";

import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

import { COLUMNS } from "@/utils/columns";
import { getAllPokemonsPaginated } from "@/api/pokemon";

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => await getAllPokemonsPaginated(10, 1),
  });

  const columns = useMemo(() => COLUMNS, []);
  const memoData = useMemo(() => data?.results, [data]);

  const table = useReactTable({
    columns,
    data: memoData,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return "Loading...";

  if (isError) return <div>Sorry! There was an Error.</div>;

  return (
    <>
      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
