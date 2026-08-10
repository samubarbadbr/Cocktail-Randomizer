export interface Ingredient {
  name: string;
  amount: string;
  note?: string;
}

export interface Cocktail {
  id: string;
  name: string;
  category: 'Modern Classic' | 'Classico' | 'Tiki' | 'Aperitivo' | 'Pre-Dinner' | 'After-Dinner' | 'Mocktail';
  description: string;
  flavor: string[]; // e.g. ["Amaro", "Agrumato", "Erbaceo"]
  ingredients: Ingredient[];
  story: string;
  glass: 'Coupe' | 'Old Fashioned' | 'Highball' | 'Nick & Nora' | 'Martini' | 'Copper Mug' | 'Hurricane' | 'Tiki Mug' | 'Flute';
  garnish: string;
  abv: 'Leggero' | 'Medio' | 'Elevato' | 'Molto Elevato' | 'Analcolico';
  difficulty: 'Facile' | 'Medio' | 'Da Bartender';
  colorAccent?: 'amber' | 'emerald' | 'purple' | 'rose' | 'cyan' | 'orange' | 'red';
}

export type FilterCategory = 'all' | 'amaro' | 'agrumato' | 'dolce' | 'secco' | 'forte' | 'mocktail' | 'favorites';
