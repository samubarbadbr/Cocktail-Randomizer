export interface IngredientItem {
  name: string;
  amount: number | string;
  unit?: string;
}

export type Ingredient = IngredientItem;

export interface CocktailItem {
  id: string;
  name: string;
  category: string;
  baseSpirit?: string;
  flavor?: string[];
  flavors?: string[];
  strength?: string;
  abv?: string;
  glass: string;
  color?: string;
  colorAccent?: string;
  badge?: string;
  description: string;
  ingredients: IngredientItem[];
  recipe?: string[];
  tips?: string;
  story?: string;
  garnish?: string;
  difficulty?: string;
}

export type Cocktail = CocktailItem;

export type NavTab = 'filter' | 'catalog' | 'favorites';

export type FilterCategory = 'all' | 'amaro' | 'agrumato' | 'dolce' | 'secco' | 'forte' | 'mocktail' | 'favorites';
