import {
  IPokemonListItem,
  IPaginatedPokemonList,
  IPokemonDetailResponse,
  IPokemonListResponseItem,
} from "@/types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getAllPokemonsPaginated(
  pageLength: number,
  selectePage: number,
): Promise<IPaginatedPokemonList> {
  const offset = selectePage > 0 ? pageLength * selectePage : 0;

  const pokemonListResponse = await fetch(
    `${BASE_URL}/pokemon?limit=${pageLength}&offset=${offset}`,
  );

  const pokemonList: IPokemonListResponseItem =
    await pokemonListResponse.json();

  const pokemonDetails: IPokemonListItem[] = await Promise.all(
    pokemonList.results.map(async (pokemonItem) => {
      const pokemonDetailResponse = await fetch(pokemonItem.url);

      const pokemonDetail: IPokemonDetailResponse =
        await pokemonDetailResponse.json();

      return {
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        sprite: pokemonDetail.sprites.front_default,
        types: pokemonDetail.types.map((t) => t.type.name),
      };
    }),
  );

  return {
    results: pokemonDetails,
    records: pokemonList.count,
  };
}
