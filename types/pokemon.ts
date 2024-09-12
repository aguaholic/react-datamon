type IPokemonTypes = {
  url: string;
  name: string;
};

type Sprite = {
  front_default: string;
};

type Types = {
  slot: number;
  type: {
    url: string;
    name: string;
  };
};

type Ability = {
  ability: {
    url: string;
    name: string;
  };
};

export interface IPokemonListResponseItem {
  url: string;
  name: string;
  count: number;
  results: IPokemonTypes[];
}

export interface IPokemonListResponse {
  next: string;
  count: number;
  previous: string;
  results: IPokemonListResponseItem[];
}

export interface IPokemonDetailResponse {
  id: number;
  name: string;
  sprites: Sprite;
  types: Types[];
}

export interface IPokemonListItem {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface IPaginatedPokemonList {
  records: number;
  results: IPokemonListItem[];
}

export interface IPokemonResponse {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  sprites: Sprite;
  species: {
    name: string;
  };
  abilities: Ability[];
  base_experience: string;
}

export interface IPokemon {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  sprite: Sprite;
  species: string;
  base_experience: string;
  type: IPokemonTypes;
  abilities: Ability[];
}
