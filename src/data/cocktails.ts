import { Cocktail } from '../types';

export const COCKTAILS_DATABASE: Cocktail[] = [
  {
    id: 'paper-plane',
    name: 'Paper Plane',
    category: 'Modern Classic',
    description: 'Un capolavoro contemporaneo creato da Sam Ross nel 2008. Perfetto equilibrio in parti uguali tra note amare, agrumate ed erbacee.',
    flavor: ['Amaro', 'Agrumato', 'Erbaceo'],
    ingredients: [
      { name: 'Bourbon', amount: '22.5 ml' },
      { name: 'Aperol', amount: '22.5 ml' },
      { name: 'Amaro Nonino', amount: '22.5 ml' },
      { name: 'Succo di limone fresco', amount: '22.5 ml' }
    ],
    story: 'Prende il nome dal brano "Paper Planes" di M.I.A., ascoltato a ripetizione durante la creazione del drink al Milk & Honey di New York.',
    glass: 'Coupe',
    garnish: 'Piccolo aeroplanino di carta sul bordo o twist di limone',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'orange'
  },
  {
    id: 'last-word',
    name: 'Last Word',
    category: 'Classico',
    description: 'Cocktail pre-proibizionismo nato a Detroit. Un sorso intenso, complesso e rinfrescante guidato dalle erbe del Chartreuse.',
    flavor: ['Erbaceo', 'Balsamico', 'Agrumato'],
    ingredients: [
      { name: 'Gin', amount: '22.5 ml' },
      { name: 'Chartreuse Verde', amount: '22.5 ml' },
      { name: 'Liquore Maraschino', amount: '22.5 ml' },
      { name: 'Succo di lime fresco', amount: '22.5 ml' }
    ],
    story: 'Creato nel 10° piano del Detroit Athletic Club negli anni ’20 e riscoperto negli anni 2000 a Seattle, scatenando una rinascita cocktail mondiale.',
    glass: 'Coupe',
    garnish: 'Ciliegina al maraschino',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'aviation',
    name: 'Aviation',
    category: 'Classico',
    description: 'Un cocktail elegante e profumato dal delicato colore azzurro violetta. Un salto nel glamour dei primi del Novecento.',
    flavor: ['Floreale', 'Agrumato', 'Secco'],
    ingredients: [
      { name: 'Gin', amount: '45 ml' },
      { name: 'Liquore Maraschino', amount: '15 ml' },
      { name: 'Crème de Violette', amount: '7.5 ml' },
      { name: 'Succo di limone fresco', amount: '15 ml' }
    ],
    story: 'Creato da Hugo Ensslin a New York nel 1916 per celebrare la nascita dell aviazione moderna con sfumature che ricordano il cielo sereno.',
    glass: 'Coupe',
    garnish: 'Ciliegia al maraschino',
    abv: 'Elevato',
    difficulty: 'Medio',
    colorAccent: 'cyan'
  },
  {
    id: 'boulevardier',
    name: 'Boulevardier',
    category: 'Classico',
    description: 'Il fratello del Negroni a base di Bourbon o Rye Whiskey. Caldo, avvolgente e piacevolmente amaro.',
    flavor: ['Amaro', 'Speziato', 'Caldo'],
    ingredients: [
      { name: 'Bourbon o Rye Whiskey', amount: '45 ml' },
      { name: 'Campari', amount: '30 ml' },
      { name: 'Vermouth Rosso', amount: '30 ml' }
    ],
    story: 'Ideato da Erskine Gwynne nel celebre Harry\'s New York Bar di Parigi per gli americani in esilio durante il Proibizionismo.',
    glass: 'Old Fashioned',
    garnish: 'Scorza d\'arancia o ciliegia',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'tommys-margarita',
    name: 'Tommy\'s Margarita',
    category: 'Modern Classic',
    description: 'Versione moderna del Margarita creata a San Francisco. Sostituisce il Cointreau con lo sciroppo d\'agave per far brillare la tequila.',
    flavor: ['Agrumato', 'Secco', 'Vegetale'],
    ingredients: [
      { name: 'Tequila 100% Agave', amount: '60 ml' },
      { name: 'Succo di lime fresco', amount: '30 ml' },
      { name: 'Sciroppo d\'agave', amount: '15 ml' }
    ],
    story: 'Nato nel leggendario ristorante messicano Tommy\'s a San Francisco per mano di Julio Bermejo negli anni ’90.',
    glass: 'Old Fashioned',
    garnish: 'Spicchio di lime e orlo di sale lime opzionale',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'bramble',
    name: 'Bramble',
    category: 'Modern Classic',
    description: 'Ispirato alle passeggiate estive inglesi. Base Gin e limone ricoperta di ghiaccio tritato e un delicato top di liquore alle more.',
    flavor: ['Fruttato', 'Agrumato', 'Fresco'],
    ingredients: [
      { name: 'Dry Gin', amount: '50 ml' },
      { name: 'Succo di limone fresco', amount: '25 ml' },
      { name: 'Sciroppo di zucchero', amount: '12.5 ml' },
      { name: 'Liquore alle more (Crème de Mûre)', amount: '15 ml' }
    ],
    story: 'Creato da Dick Bradsell nel 1984 a Londra. Voleva creare un drink genuinamente britannico che ricordasse la raccolta delle more.',
    glass: 'Old Fashioned',
    garnish: 'Mora fresca e fetta di limone',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'purple'
  },
  {
    id: 'naked-and-famous',
    name: 'Naked & Famous',
    category: 'Modern Classic',
    description: 'Un incontro audace e fumoso tra Mezcal, Aperol, Yellow Chartreuse e lime in parti rigorosamente uguali.',
    flavor: ['Affumicato', 'Erbaceo', 'Agrumato'],
    ingredients: [
      { name: 'Mezcal', amount: '22.5 ml' },
      { name: 'Aperol', amount: '22.5 ml' },
      { name: 'Chartreuse Gialla', amount: '22.5 ml' },
      { name: 'Succo di lime fresco', amount: '22.5 ml' }
    ],
    story: 'Creato da Joaquín Simó nel 2011 al celebre bar Death & Co di New York, descritto come "il figlio illegittimo del Paper Plane e del Last Word".',
    glass: 'Coupe',
    garnish: 'Nessuna garnish necessaria',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'orange'
  },
  {
    id: 'negroni',
    name: 'Negroni',
    category: 'Classico',
    description: 'L\'icona dell\'aperitivo italiano nel mondo. Equilibrio perfetto tra l\'amaro del Campari, la dolcezza del Vermouth e il carattere del Gin.',
    flavor: ['Amaro', 'Speziato', 'Agrumato'],
    ingredients: [
      { name: 'Gin', amount: '30 ml' },
      { name: 'Campari', amount: '30 ml' },
      { name: 'Vermouth Rosso Dolce', amount: '30 ml' }
    ],
    story: 'Nato a Firenze nel 1919 quando il Conte Camillo Negroni chiese al barman Fosco Scarselli di rinforzare il suo Americano con un tocco di gin.',
    glass: 'Old Fashioned',
    garnish: 'Fetta di arancia fresca',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    category: 'Classico',
    description: 'Il re indiscusso dei cocktail a base Whiskey. Pochi ingredienti scelti per valorizzare la complessità dello spirito base.',
    flavor: ['Speziato', 'Dolce', 'Complesso'],
    ingredients: [
      { name: 'Bourbon o Rye Whiskey', amount: '60 ml' },
      { name: 'Zolletta di zucchero o sciroppo', amount: '1 pc / 5 ml' },
      { name: 'Angostura Bitters', amount: '2-3 dash' },
      { name: 'Goccia d\'acqua', amount: 'Q.B.' }
    ],
    story: 'Risale alla prima definizione ufficiale di "cocktail" nel 1806: distillato, zucchero, acqua e bitter. Senza fronzoli.',
    glass: 'Old Fashioned',
    garnish: 'Scorza d\'arancia espressa e ciliegia al maraschino',
    abv: 'Molto Elevato',
    difficulty: 'Medio',
    colorAccent: 'amber'
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    category: 'Classico',
    description: 'Sofisticato, speziato e avvolgente. Il mix senza tempo di Rye Whiskey e Vermouth Rosso.',
    flavor: ['Speziato', 'Fruttato', 'Caldo'],
    ingredients: [
      { name: 'Rye Whiskey', amount: '50 ml' },
      { name: 'Vermouth Rosso', amount: '20 ml' },
      { name: 'Angostura Bitters', amount: '1 dash' }
    ],
    story: 'Tradizione vuole sia stato inventato nel 1874 al Manhattan Club di New York durante un banchetto in onore della madre di Winston Churchill.',
    glass: 'Coupe',
    garnish: 'Ciliegia al maraschino',
    abv: 'Molto Elevato',
    difficulty: 'Facile',
    colorAccent: 'rose'
  },
  {
    id: 'daiquiri',
    name: 'Daiquiri',
    category: 'Classico',
    description: 'La quintessenza della freschezza caraibica. Rum chiaro, lime fresco e uno sciroppo di zucchero ben bilanciato.',
    flavor: ['Agrumato', 'Fresco', 'Secco'],
    ingredients: [
      { name: 'Rum Blanco Cubano', amount: '60 ml' },
      { name: 'Succo di lime fresco', amount: '30 ml' },
      { name: 'Sciroppo di zucchero', amount: '15 ml' }
    ],
    story: 'Nato nelle miniere di Daiquirí a Cuba intorno al 1898 dall\'ingegnere Jennings Cox che rimase sprovvisto di gin per i suoi ospiti.',
    glass: 'Coupe',
    garnish: 'Ruota di lime',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'margarita',
    name: 'Margarita',
    category: 'Classico',
    description: 'Il cocktail messicano più famoso al mondo. Tequila vigorosa, note agrumate di Triple Sec e l\'immancabile orlo di sale.',
    flavor: ['Agrumato', 'Sapido', 'Fresco'],
    ingredients: [
      { name: 'Tequila Blanco', amount: '50 ml' },
      { name: 'Cointreau o Triple Sec', amount: '20 ml' },
      { name: 'Succo di lime fresco', amount: '15 ml' }
    ],
    story: 'Leggenda narra sia stato dedicato negli anni \'30 a una showgirl allergica a molti alcolici tranne la Tequila.',
    glass: 'Coupe',
    garnish: 'Bordo di sale finissimo e spicchio di lime',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'whiskey-sour',
    name: 'Whiskey Sour',
    category: 'Classico',
    description: 'Il contrasto perfetto tra l\'intensità del Bourbon, l\'acidità del limone e la cremosità vellutata dell\'albumina.',
    flavor: ['Agrumato', 'Cremoso', 'Dolce-Apro'],
    ingredients: [
      { name: 'Bourbon Whiskey', amount: '45 ml' },
      { name: 'Succo di limone fresco', amount: '30 ml' },
      { name: 'Sciroppo di zucchero', amount: '15 ml' },
      { name: 'Albumine / Albume d\'uovo (Opzionale)', amount: '15 ml' }
    ],
    story: 'Consumato fin dal XIX secolo dai marinai per prevenire lo scorbuto combinando alcol e agrumi durante le traversate.',
    glass: 'Old Fashioned',
    garnish: 'Ciliegina al maraschino e goccia di Angostura',
    abv: 'Medio',
    difficulty: 'Medio',
    colorAccent: 'amber'
  },
  {
    id: 'gimlet',
    name: 'Gimlet',
    category: 'Classico',
    description: 'Essenziale, pulito e tagliente come uno scalpello. Gin e cordiale al lime in pura armonia.',
    flavor: ['Agrumato', 'Secco', 'Erbaceo'],
    ingredients: [
      { name: 'London Dry Gin', amount: '60 ml' },
      { name: 'Lime Juice o Lime Cordial', amount: '30 ml' }
    ],
    story: 'Chiamato così in onore del chirurgo della Marina Britannica Sir Thomas Gimlette, che raccomandava il succo di lime ai marinai.',
    glass: 'Coupe',
    garnish: 'Scorza o ruota di lime',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'sidecar',
    name: 'Sidecar',
    category: 'Classico',
    description: 'Un elegante sour a base Cognac arricchito dall\'aroma d\'arancia del Cointreau e da un bordo zuccherato.',
    flavor: ['Agrumato', 'Fruttato', 'Caldo'],
    ingredients: [
      { name: 'Cognac', amount: '50 ml' },
      { name: 'Cointreau', amount: '20 ml' },
      { name: 'Succo di limone fresco', amount: '20 ml' }
    ],
    story: 'Creato a Parigi o Londra alla fine della Prima Guerra Mondiale, pare preso in prestito dal sidecar del motoveicolo con cui arrivava il capitano.',
    glass: 'Coupe',
    garnish: 'Orlo di zucchero ed eiezione di scorza di limone',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'orange'
  },
  {
    id: 'french-75',
    name: 'French 75',
    category: 'Classico',
    description: 'Lussuoso, frizzante e letale. Gin, limone e zucchero completati da un generoso top di Champagne.',
    flavor: ['Frizzante', 'Agrumato', 'Secco'],
    ingredients: [
      { name: 'Gin', amount: '30 ml' },
      { name: 'Succo di limone fresco', amount: '15 ml' },
      { name: 'Sciroppo di zucchero', amount: '15 ml' },
      { name: 'Champagne / Prosecco', amount: '60 ml' }
    ],
    story: 'Dicevano che avesse una potenza tale da ricordare i cannoni da campo francesi da 75 mm durante la Grande Guerra.',
    glass: 'Flute',
    garnish: 'Twist di limone allungato',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'paloma',
    name: 'Paloma',
    category: 'Modern Classic',
    description: 'La bevanda dissetante più amata in Messico. Tequila e soda al pompelmo rosa arricchiti da un tocco di lime e sale.',
    flavor: ['Fruttato', 'Frizzante', 'Sapido'],
    ingredients: [
      { name: 'Tequila Blanco', amount: '50 ml' },
      { name: 'Succo di lime fresco', amount: '15 ml' },
      { name: 'Pizzico di sale', amount: '1 pinch' },
      { name: 'Soda al pompelmo rosa', amount: '100 ml' }
    ],
    story: 'Creato leggendariamente da Don Javier Delgado Corona al bar La Capilla di Tequila, Jalisco.',
    glass: 'Highball',
    garnish: 'Spicchio di pompelmo rosa e bordo salato',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'rose'
  },
  {
    id: 'mai-tai',
    name: 'Mai Tai',
    category: 'Tiki',
    description: 'Il re incontrastato della cultura Tiki. Miscela di rum invecchiati, curaçao, orzata di mandorla e lime.',
    flavor: ['Esotico', 'Fruttato', 'Dolce-Apro'],
    ingredients: [
      { name: 'Rum Giamaicano invecchiato', amount: '30 ml' },
      { name: 'Rum Martinique Agricole', amount: '30 ml' },
      { name: 'Orange Curaçao', amount: '15 ml' },
      { name: 'Sciroppo d\'Orzata (Mandorla)', amount: '15 ml' },
      { name: 'Succo di lime fresco', amount: '30 ml' }
    ],
    story: 'Creato da Trader Vic nel 1944. Servito a amici tahitiani che esclamarono "Maita\'i roa ae!" ("Il migliore del mondo!").',
    glass: 'Tiki Mug',
    garnish: 'Ciuffo di menta fresca e buccia di lime rovesciata',
    abv: 'Elevato',
    difficulty: 'Medio',
    colorAccent: 'orange'
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    category: 'Modern Classic',
    description: 'Il cocktail energizzante per eccellenza. Espresso caldo estratto al momento, vodka e liquore al caffè con schiuma cremosa.',
    flavor: ['Caffè', 'Dolce', 'Energico'],
    ingredients: [
      { name: 'Vodka', amount: '50 ml' },
      { name: 'Liquore al Caffè (Kahlúa/Tia Maria)', amount: '10 ml' },
      { name: 'Espresso fresco caldo', amount: '1 tazzina (30 ml)' },
      { name: 'Sciroppo di zucchero', amount: '10 ml' }
    ],
    story: 'Dick Bradsell lo creò negli anni ’80 per una modella famosa che chiese: "Wake me up, and then fuck me up".',
    glass: 'Coupe',
    garnish: '3 chicchi di caffè disposti a triangolo',
    abv: 'Medio',
    difficulty: 'Medio',
    colorAccent: 'amber'
  },
  {
    id: 'penicillin',
    name: 'Penicillin',
    category: 'Modern Classic',
    description: 'Una medicina liquida per l\'anima. Blended Scotch con miele, zenzero piccante e uno spray di torbato Islay in superficie.',
    flavor: ['Affumicato', 'Speziato', 'Agrumato'],
    ingredients: [
      { name: 'Blended Scotch Whisky', amount: '60 ml' },
      { name: 'Succo di limone fresco', amount: '22.5 ml' },
      { name: 'Sciroppo di miele e zenzero', amount: '22.5 ml' },
      { name: 'Single Malt Islay Torbato', amount: '7.5 ml (float)' }
    ],
    story: 'Ideato da Sam Ross nel 2005 a New York. Diventato istantaneamente un classico moderno apprezzato nei migliori cocktail bar del pianeta.',
    glass: 'Old Fashioned',
    garnish: 'Zenzero candito su stecchino',
    abv: 'Elevato',
    difficulty: 'Medio',
    colorAccent: 'amber'
  },
  {
    id: 'clover-club',
    name: 'Clover Club',
    category: 'Classico',
    description: 'Morbido, setoso e naturalmente rosa. Gin arricchito con lampone fresco, limone e albume montato.',
    flavor: ['Fruttato', 'Cremoso', 'Agrumato'],
    ingredients: [
      { name: 'Gin', amount: '45 ml' },
      { name: 'Sciroppo di lamponi freschi', amount: '15 ml' },
      { name: 'Succo di limone fresco', amount: '15 ml' },
      { name: 'Albume d\'uovo', amount: '15 ml' }
    ],
    story: 'Prende il nome da un club maschile di eminenti avvocati e scrittori che si riunivano al Bellevue-Stratford Hotel di Philadelphia negli anni 1890.',
    glass: 'Coupe',
    garnish: 'Lamponi freschi infilzati',
    abv: 'Medio',
    difficulty: 'Medio',
    colorAccent: 'rose'
  },
  {
    id: 'sazerac',
    name: 'Sazerac',
    category: 'Classico',
    description: 'Il cocktail ufficiale di New Orleans. Rye Whiskey o Cognac scosso con Peychaud Bitters e servito in un bicchiere avvinato con assenzio.',
    flavor: ['Speziato', 'Anisato', 'Complesso'],
    ingredients: [
      { name: 'Rye Whiskey o Cognac', amount: '50 ml' },
      { name: 'Assenzio (per avvinare il bicchiere)', amount: '10 ml' },
      { name: 'Peychaud\'s Bitters', amount: '3 dash' },
      { name: 'Zolletta di zucchero', amount: '1 pc' }
    ],
    story: 'Considerato da molti uno dei primissimi cocktail d\'America, servito originariamente nelle Sazerac Coffee Houses di New Orleans.',
    glass: 'Old Fashioned',
    garnish: 'Olio essenziale di scorza di limone',
    abv: 'Molto Elevato',
    difficulty: 'Da Bartender',
    colorAccent: 'red'
  },
  {
    id: 'corpse-reviver-2',
    name: 'Corpse Reviver No. 2',
    category: 'Classico',
    description: 'Progettato per risvegliare i morti dopo una notte di bagordi. Parti uguali di Gin, Lillet Blanc, Cointreau, limone e un goccio d\'assenzio.',
    flavor: ['Agrumato', 'Erbaceo', 'Anisato'],
    ingredients: [
      { name: 'Gin', amount: '22.5 ml' },
      { name: 'Lillet Blanc / Cocchi Americano', amount: '22.5 ml' },
      { name: 'Cointreau', amount: '22.5 ml' },
      { name: 'Succo di limone fresco', amount: '22.5 ml' },
      { name: 'Assenzio', amount: '1 dash' }
    ],
    story: 'Harry Craddock scrisse nel famoso Savoy Cocktail Book del 1930: "Quattro di questi presi in rapida successione risveglieranno di nuovo il cadavere".',
    glass: 'Coupe',
    garnish: 'Ciliegina al maraschino o buccia di limone',
    abv: 'Elevato',
    difficulty: 'Medio',
    colorAccent: 'cyan'
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    category: 'Aperitivo',
    description: 'Il re delle terrazze italiane. Prosecco frizzante, Aperol solare e un tocco di seltz per la massima freschezza.',
    flavor: ['Frizzante', 'Agrumato', 'Leggero'],
    ingredients: [
      { name: 'Prosecco D.O.C.', amount: '90 ml' },
      { name: 'Aperol', amount: '60 ml' },
      { name: 'Soda / Seltz', amount: '30 ml' }
    ],
    story: 'Evoluzione veneta dell usanza delle truppe austro-ungariche di spruzzare ("spritzen") un po\' d\'acqua frizzante nel vino locale.',
    glass: 'Highball',
    garnish: 'Fetta d\'arancia e oliva verde',
    abv: 'Leggero',
    difficulty: 'Facile',
    colorAccent: 'orange'
  },
  {
    id: 'vesper',
    name: 'Vesper Martini',
    category: 'Classico',
    description: 'Il drink leggendario di James Bond. Gin secco, Vodka nitida e Lillet Blanc agitati con vigore.',
    flavor: ['Secco', 'Intenso', 'Puro'],
    ingredients: [
      { name: 'Gin', amount: '60 ml' },
      { name: 'Vodka', amount: '20 ml' },
      { name: 'Lillet Blanc / Cocchi Americano', amount: '10 ml' }
    ],
    story: 'Inventato da Ian Fleming nel romanzo Casino Royale del 1953 e intitolato all\'affascinante agente doppiogiochista Vesper Lynd.',
    glass: 'Martini',
    garnish: 'Nastro allungato di scorza di limone',
    abv: 'Molto Elevato',
    difficulty: 'Facile',
    colorAccent: 'cyan'
  },
  {
    id: 'jungle-bird',
    name: 'Jungle Bird',
    category: 'Tiki',
    description: 'L\'unico classico Tiki che introduce con coraggio il Campari tra Rum scuro e succo di ananas tropicale.',
    flavor: ['Esotico', 'Amaro-Dolce', 'Fruttato'],
    ingredients: [
      { name: 'Rum Scuro Giamaicano', amount: '45 ml' },
      { name: 'Campari', amount: '22.5 ml' },
      { name: 'Succo di ananas fresco', amount: '45 ml' },
      { name: 'Succo di lime fresco', amount: '15 ml' },
      { name: 'Sciroppo di zucchero', amount: '15 ml' }
    ],
    story: 'Nato negli anni ’70 all\'Aviary Bar dell\'Hilton di Kuala Lumpur come cocktail di benvenuto servito in un bicchiere con veduta sugli uccelli esotici.',
    glass: 'Hurricane',
    garnish: 'Spicchio d\'ananas e foglie di ananas',
    abv: 'Medio',
    difficulty: 'Medio',
    colorAccent: 'red'
  },
  {
    id: 'trinidad-sour',
    name: 'Trinidad Sour',
    category: 'Modern Classic',
    description: 'Una follia geniale che sovverte le regole usando l\'Angostura bitters come vera e propria base alcolica principale.',
    flavor: ['Speziato', 'Amaro', 'Fruttato'],
    ingredients: [
      { name: 'Angostura Bitters', amount: '45 ml' },
      { name: 'Rye Whiskey', amount: '15 ml' },
      { name: 'Sciroppo d\'Orzata (Mandorla)', amount: '30 ml' },
      { name: 'Succo di limone fresco', amount: '22.5 ml' }
    ],
    story: 'Creato da Giuseppe Gonzalez nel 2009 al Clover Club di Brooklyn. Sorprende chiunque per la sua inaspettata armonia.',
    glass: 'Coupe',
    garnish: 'Nessuna garnish necessaria',
    abv: 'Elevato',
    difficulty: 'Da Bartender',
    colorAccent: 'purple'
  },
  {
    id: 'southside',
    name: 'Southside',
    category: 'Classico',
    description: 'Spesso descritto come il "Mojito al Gin". Freschissimo, erbaceo e tonificante grazie alle foglie di menta pesta delicatamente.',
    flavor: ['Erbaceo', 'Agrumato', 'Fresco'],
    ingredients: [
      { name: 'London Dry Gin', amount: '60 ml' },
      { name: 'Succo di limone fresco', amount: '30 ml' },
      { name: 'Sciroppo di zucchero', amount: '15 ml' },
      { name: 'Foglie di menta fresca', amount: '6-8 foglie' }
    ],
    story: 'Popolarizzato durante il proibizionismo al Southside Sportsmen\'s Club di Long Island o dalla banda di Al Capone nel South Side di Chicago.',
    glass: 'Coupe',
    garnish: 'Foglia di menta galleggiante',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'dark-n-stormy',
    name: 'Dark \'n\' Stormy',
    category: 'Classico',
    description: 'Tempesta in un bicchiere highball. Rum scuro speziato versato a strati sopra Ginger Beer frizzante e lime.',
    flavor: ['Speziato', 'Frizzante', 'Intenso'],
    ingredients: [
      { name: 'Gosling\'s Black Seal Rum', amount: '50 ml' },
      { name: 'Ginger Beer di qualità', amount: '100 ml' },
      { name: 'Succo di lime fresco', amount: '15 ml' }
    ],
    story: 'Un marchio registrato da Gosling Brothers alle Bermuda. Un marinaio notò che il colore ricordava "una nuvola temporalesca al tramonto".',
    glass: 'Highball',
    garnish: 'Fetta di lime e radice di zenzero',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'white-lady',
    name: 'White Lady',
    category: 'Classico',
    description: 'Pura eleganza cristallina. Gin, Triple Sec e limone scossi con fermezza per creare un Sour candido e affilato.',
    flavor: ['Agrumato', 'Secco', 'Elegante'],
    ingredients: [
      { name: 'Gin', amount: '40 ml' },
      { name: 'Cointreau', amount: '30 ml' },
      { name: 'Succo di limone fresco', amount: '20 ml' },
      { name: 'Albume (Opzionale)', amount: '10 ml' }
    ],
    story: 'Pezzo forte di Harry MacElhone ideato nel 1919 e successivamente rivisto al Ciro\'s Club di Londra aggiungendo il Gin.',
    glass: 'Coupe',
    garnish: 'Twist di scorza di limone',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'cyan'
  },
  {
    id: 'singapore-sling',
    name: 'Singapore Sling',
    category: 'Classico',
    description: 'L\'iconico e complesso cocktail tropicale a base Gin, Cherry Heering, Bénédictine, ananas e lime.',
    flavor: ['Fruttato', 'Speziato', 'Erbaceo'],
    ingredients: [
      { name: 'Gin', amount: '30 ml' },
      { name: 'Cherry Brandy Heering', amount: '15 ml' },
      { name: 'Cointreau', amount: '7.5 ml' },
      { name: 'Bénédictine', amount: '7.5 ml' },
      { name: 'Succo di ananas', amount: '120 ml' },
      { name: 'Succo di lime', amount: '15 ml' },
      { name: 'Sciroppo di granatina', amount: '10 ml' }
    ],
    story: 'Inventato prima del 1915 da Ngiam Tong Boon al Long Bar del Raffles Hotel di Singapore per consentire alle signore di bere alcol in pubblico con discrezione.',
    glass: 'Hurricane',
    garnish: 'Fetta d\'ananas e ciliegina',
    abv: 'Medio',
    difficulty: 'Da Bartender',
    colorAccent: 'rose'
  },
  {
    id: 'amaretto-sour',
    name: 'Amaretto Sour',
    category: 'Modern Classic',
    description: 'La versione moderna perfezionata da Jeffrey Morgenthaler. Amaretto di Saronno bilanciato da un goccio di Bourbon e limone.',
    flavor: ['Mandorlato', 'Agrumato', 'Cremoso'],
    ingredients: [
      { name: 'Liquore Amaretto', amount: '45 ml' },
      { name: 'Bourbon Cask Strength', amount: '22.5 ml' },
      { name: 'Succo di limone fresco', amount: '30 ml' },
      { name: 'Sciroppo di zucchero', amount: '5 ml' },
      { name: 'Albume d\'uovo', amount: '15 ml' }
    ],
    story: 'La ricetta anni ’70 era spesso troppo dolce; la versione riequilibrata negli anni 2010 lo ha trasformato in un capolavoro acclamato.',
    glass: 'Old Fashioned',
    garnish: 'Ciliegina al maraschino e scorza di limone',
    abv: 'Medio',
    difficulty: 'Medio',
    colorAccent: 'amber'
  },
  {
    id: 'mint-julep',
    name: 'Mint Julep',
    category: 'Classico',
    description: 'Il cocktail simbolo del Kentucky Derby. Abbonante ghiaccio tritato, Bourbon aromatico e profumate foglie di menta.',
    flavor: ['Fresco', 'Speziato', 'Balsamico'],
    ingredients: [
      { name: 'Bourbon Whiskey', amount: '60 ml' },
      { name: 'Foglie di menta fresca', amount: '8-10 foglie' },
      { name: 'Sciroppo di zucchero', amount: '10 ml' }
    ],
    story: 'Servito tradizionalmente in bicchieri di metallo argentato che si ricoprono di una spettacolare patina di brina ghiacciata.',
    glass: 'Old Fashioned',
    garnish: 'Ricco ciuffo di menta spolverato di zucchero a velo',
    abv: 'Molto Elevato',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'hanky-panky',
    name: 'Hanky Panky',
    category: 'Classico',
    description: 'Dolce e amaro con un tocco aromatico e mentolato inconfondibile regalato dal Fernet Branca.',
    flavor: ['Amaro', 'Mentolato', 'Erbaceo'],
    ingredients: [
      { name: 'London Dry Gin', amount: '45 ml' },
      { name: 'Vermouth Rosso Dolce', amount: '45 ml' },
      { name: 'Fernet-Branca', amount: '2 dash (approx. 7.5 ml)' }
    ],
    story: 'Creato nei primi del Novecento da Ada Coleman, prima donna capo barman dell\'American Bar all\'Hotel Savoy di Londra per l\'attore Charles Hawtrey.',
    glass: 'Coupe',
    garnish: 'Scorza d\'arancia espressa',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'purple'
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'Aperitivo',
    description: 'Un grande classico dell\'aperitivo italiano. L\'antenato del Negroni, lungo e dissetante grazie al top di soda.',
    flavor: ['Amaro', 'Frizzante', 'Agrumato'],
    ingredients: [
      { name: 'Campari', amount: '30 ml' },
      { name: 'Vermouth Rosso', amount: '30 ml' },
      { name: 'Soda / Seltz', amount: 'Top (circa 60 ml)' }
    ],
    story: 'Originariamente chiamato "Milano-Torino" per le città di provenienza dei due ingredienti base, ribattezzato in onore dei turisti americani.',
    glass: 'Highball',
    garnish: 'Fetta d\'arancia e scorza di limone',
    abv: 'Leggero',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'mezcalita',
    name: 'Mezcalita',
    category: 'Modern Classic',
    description: 'Variante caraibica del Margarita dove il Mezcal dona note affumicate e mistiche.',
    flavor: ['Affumicato', 'Agrumato', 'Sapido'],
    ingredients: [
      { name: 'Mezcal', amount: '50 ml' },
      { name: 'Cointreau', amount: '20 ml' },
      { name: 'Succo di lime fresco', amount: '25 ml' },
      { name: 'Sciroppo d\'agave', amount: '10 ml' }
    ],
    story: 'Ispirata ai rituali delle terre di Oaxaca dove l\'agave spada viene cotta lentamente nei forni in pietra sotterranei.',
    glass: 'Old Fashioned',
    garnish: 'Bordo con sale al peperoncino (Sal de Gusano) e fettina di lime',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'toronto',
    name: 'Toronto',
    category: 'Classico',
    description: 'Un Old Fashioned canadese potenziato. Rye o Canadian Whisky sposato al gusto deciso del Fernet Branca.',
    flavor: ['Speziato', 'Amaro', 'Intenso'],
    ingredients: [
      { name: 'Rye Whiskey / Canadian Whisky', amount: '60 ml' },
      { name: 'Fernet-Branca', amount: '7.5 ml' },
      { name: 'Sciroppo d\'acero o di zucchero', amount: '7.5 ml' },
      { name: 'Angostura Bitters', amount: '2 dash' }
    ],
    story: 'Documentato nel 1922 da Robert Vermeire con il nome di "Fernet Cocktail", in seguito intitolato alla metropoli canadese.',
    glass: 'Old Fashioned',
    garnish: 'Scorza d\'arancia',
    abv: 'Molto Elevato',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'espresso-tonic-mocktail',
    name: 'Espresso Tonic',
    category: 'Mocktail',
    description: 'La bevanda analcolica più cool per gli amanti del caffè. Acqua tonica amara arricchita da un estratto intenso di espresso.',
    flavor: ['Caffè', 'Frizzante', 'Agrumato'],
    ingredients: [
      { name: 'Espresso doppio di alta qualità', amount: '40 ml' },
      { name: 'Acqua Tonica Premium', amount: '120 ml' },
      { name: 'Ghiaccio a cubi grandi', amount: 'Q.B.' }
    ],
    story: 'Nata nei bar specialty coffee della Scandinavia nei primi anni 2000, diventata fenomeno estivo globale.',
    glass: 'Highball',
    garnish: 'Fetta di pompelmo o scorza di limone',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'virgin-mojito',
    name: 'Virgin Mojito',
    category: 'Mocktail',
    description: 'Tutta la freschezza esplosiva del Mojito cubano senza una singola goccia d\'alcol. Dissetante e profumato.',
    flavor: ['Fresco', 'Erbaceo', 'Agrumato'],
    ingredients: [
      { name: 'Menta fresca', amount: '10 foglie' },
      { name: 'Succo di lime fresco', amount: '30 ml' },
      { name: 'Zucchero di canna grezzo', amount: '2 cucchiaini' },
      { name: 'Ginger Ale / Soda', amount: '120 ml' }
    ],
    story: 'Il cocktail perfetto per guidare o godersi la serata in compagnia mantenendo la mente sempre lucidissima.',
    glass: 'Highball',
    garnish: 'Ciuffo di menta generoso e fetta di lime',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'shirley-temple',
    name: 'Shirley Temple',
    category: 'Mocktail',
    description: 'Il mocktail classico più famoso di Hollywood. Ginger Ale dolce, granatina rubino e succo di limone.',
    flavor: ['Dolce', 'Fruttato', 'Frizzante'],
    ingredients: [
      { name: 'Ginger Ale', amount: '120 ml' },
      { name: 'Sciroppo di Granatina', amount: '15 ml' },
      { name: 'Goccio di succo di limone', amount: '5 ml' }
    ],
    story: 'Creato negli anni ’30 al bar Chasen\'s di Beverly Hills per la celebre attrice bambina Shirley Temple.',
    glass: 'Highball',
    garnish: 'Ciliegina al maraschino',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'rose'
  },
  {
    id: 'blood-and-sand',
    name: 'Blood & Sand',
    category: 'Classico',
    description: 'Una rara unione riuscita tra Scotch Whisky, Cherry Brandy, Vermouth Rosso e succo d\'arancia fresco.',
    flavor: ['Fruttato', 'Speziato', 'Affumicato'],
    ingredients: [
      { name: 'Blended Scotch Whisky', amount: '22.5 ml' },
      { name: 'Cherry Brandy Heering', amount: '22.5 ml' },
      { name: 'Vermouth Rosso', amount: '22.5 ml' },
      { name: 'Succo d\'arancia rossa fresco', amount: '22.5 ml' }
    ],
    story: 'Prende il nome dal celebre film muto di bullfighting del 1922 "Sangue e Arena" interpretato da Rudolph Valentino.',
    glass: 'Coupe',
    garnish: 'Scorza d\'arancia',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'negroni-sbagliato',
    name: 'Negroni Sbagliato',
    category: 'Aperitivo',
    description: 'Il classico errore diventato leggenda nei bar milanesi. Sostituisce il Gin con il Prosecco per un aperitivo più leggero e frizzante.',
    flavor: ['Amaro', 'Frizzante', 'Agrumato'],
    ingredients: [
      { name: 'Campari', amount: '30 ml' },
      { name: 'Vermouth Rosso', amount: '30 ml' },
      { name: 'Prosecco D.O.C.', amount: '30 ml' }
    ],
    story: 'Nato negli anni ’70 al Bar Basso di Milano per una fortunata distrazione del barman Mirko Stocchetto che afferrò il Prosecco invece del Gin.',
    glass: 'Old Fashioned',
    garnish: 'Fetta d\'arancia fresca e oliva',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'hugo-spritz',
    name: 'Hugo',
    category: 'Aperitivo',
    description: 'Freschissimo ed elegante aperitivo altoatesino a base di sciroppo di fiori di sambuco, prosecco, seltz e foglioline di menta.',
    flavor: ['Floreale', 'Frizzante', 'Fresco'],
    ingredients: [
      { name: 'Prosecco D.O.C.', amount: '60 ml' },
      { name: 'Sciroppo di Fiori di Sambuco', amount: '30 ml' },
      { name: 'Soda / Seltz', amount: '30 ml' },
      { name: 'Foglie di menta fresca', amount: '4-5 foglie' }
    ],
    story: 'Ideato nel 2005 dal bartender Roland Gruber in Alto Adige come alternativa più profumata e fresca allo Spritz tradizionale.',
    glass: 'Highball',
    garnish: 'Fetta di lime e ciuffo di menta',
    abv: 'Leggero',
    difficulty: 'Facile',
    colorAccent: 'cyan'
  },
  {
    id: 'gin-tonic',
    name: 'Gin Tonic',
    category: 'Classico',
    description: 'Il cocktail più ordinato nei locali italiani ed internazionali. Intramontabile matrimonio tra le botaniche del gin e la nota amara della tonica.',
    flavor: ['Erbaceo', 'Amaro', 'Frizzante'],
    ingredients: [
      { name: 'Dry Gin / London Dry', amount: '50 ml' },
      { name: 'Acqua Tonica Premium', amount: '120 ml' },
      { name: 'Ghiaccio a cubi grandi', amount: 'Q.B.' }
    ],
    story: 'Creato dai soldati della Compagnia delle Indie Orientali per consumare il chinino anti-malaria rendendolo gradevole con gin, lime e zucchero.',
    glass: 'Highball',
    garnish: 'Spicchio di lime o bacche di ginepro',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'cyan'
  },
  {
    id: 'moscow-mule',
    name: 'Moscow Mule',
    category: 'Classico',
    description: 'Servito nell\'iconico mug di rame. Un sorso pungiante di zenzero piccante, vodka e lime fresco che travolge il palato.',
    flavor: ['Speziato', 'Agrumato', 'Frizzante'],
    ingredients: [
      { name: 'Vodka', amount: '45 ml' },
      { name: 'Succo di lime fresco', amount: '15 ml' },
      { name: 'Ginger Beer piccante', amount: '120 ml' }
    ],
    story: 'Inventato a Los Angeles nel 1941 dal proprietario del Cock \'n\' Bull per smaltire le scorte invendute di vodka e Ginger Beer.',
    glass: 'Copper Mug',
    garnish: 'Fetta di lime e ciuffo di menta',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'mojito',
    name: 'Mojito',
    category: 'Classico',
    description: 'Il cocktail estivo per eccellenza nei bar italiani. Menta fresca delicatamente mazzolata, rum chiaro, lime e zucchero di canna.',
    flavor: ['Fresco', 'Agrumato', 'Dolce'],
    ingredients: [
      { name: 'Rum Blanco Cubano', amount: '50 ml' },
      { name: 'Succo di lime fresco', amount: '30 ml' },
      { name: 'Foglie di menta fresca', amount: '6-8 foglie' },
      { name: 'Zucchero di canna bianco', amount: '2 cucchiaini' },
      { name: 'Soda', amount: 'Top' }
    ],
    story: 'Reso immortale da Ernest Hemingway che lo sorseggiava quotidianamente allo storico bar La Bodeguita del Medio a L\'Avana.',
    glass: 'Highball',
    garnish: 'Generoso ciuffo di menta e fettina di lime',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'sex-on-the-beach',
    name: 'Sex on the Beach',
    category: 'Classico',
    description: 'Un grande classico delle discoteche e dei bar estivi italiani. Fruttato, dolce e vivace con note di pesca, arancia e mirtillo.',
    flavor: ['Fruttato', 'Dolce', 'Agrumato'],
    ingredients: [
      { name: 'Vodka', amount: '40 ml' },
      { name: 'Liquore alla Pesca (Peach Tree)', amount: '20 ml' },
      { name: 'Succo d\'arancia fresco', amount: '40 ml' },
      { name: 'Succo di mirtillo rosso (Cranberry)', amount: '40 ml' }
    ],
    story: 'Nato in Florida nel 1987 durante la Spring Break per promuovere un nuovo liquore alla pesca, diventando subito una hit mondiale.',
    glass: 'Highball',
    garnish: 'Fetta d\'arancia e ciliegia al maraschino',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'orange'
  },
  {
    id: 'long-island-iced-tea',
    name: 'Long Island Iced Tea',
    category: 'Classico',
    description: 'Uno dei cocktail più alcolici e amati nei discobar. Cinque distillati bianchi uniti a limone e un goccio di cola.',
    flavor: ['Intenso', 'Dolce', 'Agrumato'],
    ingredients: [
      { name: 'Vodka', amount: '15 ml' },
      { name: 'Tequila Blanco', amount: '15 ml' },
      { name: 'Rum Blanco', amount: '15 ml' },
      { name: 'Gin', amount: '15 ml' },
      { name: 'Cointreau / Triple Sec', amount: '15 ml' },
      { name: 'Succo di limone fresco', amount: '25 ml' },
      { name: 'Coca-Cola', amount: 'Top' }
    ],
    story: 'Creato da Robert "Rosebud" Butt al Oak Beach Inn di Long Island negli anni ’70. Nonostante il nome, non contiene affatto tè!',
    glass: 'Highball',
    garnish: 'Fetta di limone',
    abv: 'Molto Elevato',
    difficulty: 'Medio',
    colorAccent: 'amber'
  },
  {
    id: 'caipirinha',
    name: 'Caipirinha',
    category: 'Classico',
    description: 'L\'anima del Brasile nei bar italiani. Lime pestato direttamente nel bicchiere con zucchero di canna e cachaça.',
    flavor: ['Agrumato', 'Intenso', 'Dolce-Apro'],
    ingredients: [
      { name: 'Cachaça', amount: '60 ml' },
      { name: 'Lime fresco a cubetti', amount: '1/2 lime' },
      { name: 'Zucchero di canna bianco', amount: '2 cucchiaini' }
    ],
    story: 'Nata nello stato di San Paolo come rimedio contadino contro l\'influenza spagnola, trasformata nel cocktail nazionale brasiliano.',
    glass: 'Old Fashioned',
    garnish: 'Spicchio di lime e cannucce corte',
    abv: 'Elevato',
    difficulty: 'Facile',
    colorAccent: 'emerald'
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    category: 'Tiki',
    description: 'Dolce, vellutato e cremoso. Un viaggio ai Caraibi con crema di cocco, succo d\'ananas e rum bianco.',
    flavor: ['Dolce', 'Tropicale', 'Cremoso'],
    ingredients: [
      { name: 'Rum Blanco', amount: '50 ml' },
      { name: 'Crema / Latte di Cocco', amount: '30 ml' },
      { name: 'Succo d\'ananas fresco', amount: '50 ml' }
    ],
    story: 'Bevanda ufficiale di Porto Rico inventata da Ramón "Monchito" Marrero al Caribe Hilton Hotel nel 1954.',
    glass: 'Hurricane',
    garnish: 'Spicchio d\'ananas e ciliegia',
    abv: 'Medio',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'garibaldi',
    name: 'Garibaldi',
    category: 'Aperitivo',
    description: 'Essenziale ed eccellente simbolo dell\'aperitivo italiano. Campari amaro coperto da succo d\'arancia fresco montato a neve.',
    flavor: ['Amaro', 'Agrumato', 'Leggero'],
    ingredients: [
      { name: 'Campari', amount: '45 ml' },
      { name: 'Succo d\'arancia fresca spremuta', amount: '120 ml' }
    ],
    story: 'In omaggio all\'Eroe dei Due Mondi: il rosso del Campari rappresenta le Giubbe Rosse, l\'arancia simboleggia lo sbarco in Sicilia.',
    glass: 'Highball',
    garnish: 'Fetta d\'arancia fresca',
    abv: 'Leggero',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'bellini',
    name: 'Bellini',
    category: 'Aperitivo',
    description: 'Iconico aperitivo veneziano. Delicata polpa di pesca bianca di stagione unita alle bollicine del Prosecco.',
    flavor: ['Fruttato', 'Frizzante', 'Delicato'],
    ingredients: [
      { name: 'Purea di pesca bianca fresca', amount: '50 ml' },
      { name: 'Prosecco D.O.C.', amount: '100 ml' }
    ],
    story: 'Creato nel 1948 da Giuseppe Cipriani all\'Harry\'s Bar di Venezia e intitolato al pittore Giovanni Bellini per la sfumatura rosata del drink.',
    glass: 'Flute',
    garnish: 'Fettina di pesca bianca',
    abv: 'Leggero',
    difficulty: 'Facile',
    colorAccent: 'rose'
  },
  {
    id: 'crodino-spritz-mocktail',
    name: 'Crodino Spritz (Mocktail)',
    category: 'Mocktail',
    description: 'Il classico Biondo analcolico italiano servito in calice con abbondante ghiaccio, soda e fetta d\'arancia.',
    flavor: ['Amaro', 'Frizzante', 'Agrumato'],
    ingredients: [
      { name: 'Crodino Biondo o Rosso', amount: '1 bottiglietta (100 ml)' },
      { name: 'Soda / Acqua frizzante', amount: '30 ml' },
      { name: 'Ghiaccio a cubi grandi', amount: 'Q.B.' }
    ],
    story: 'Nato nel 1965 a Crodo in Piemonte, diventato l\'aperitivo analcolico monodose più famoso e amato nei bar d\'Italia.',
    glass: 'Highball',
    garnish: 'Fetta d\'arancia e oliva verde',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'sanbitter-tonic-mocktail',
    name: 'Sanbittér Tonic (Mocktail)',
    category: 'Mocktail',
    description: 'L\'alternativa analcolica al Campari Tonic. Note amare, speziate e frizzanti per un aperitivo deciso.',
    flavor: ['Amaro', 'Frizzante', 'Erbaceo'],
    ingredients: [
      { name: 'Sanbittér Rosso', amount: '1 bottiglietta (100 ml)' },
      { name: 'Acqua Tonica Premium', amount: '50 ml' },
      { name: 'Succo di limone', amount: '10 ml' }
    ],
    story: 'Invenzione moderna dei bar italiani per offrire un aperitivo rosso analcolico di grande personalità.',
    glass: 'Highball',
    garnish: 'Scorza di limone e ramo di rosmarino',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'red'
  },
  {
    id: 'virgin-pina-colada-mocktail',
    name: 'Virgin Piña Colada (Mocktail)',
    category: 'Mocktail',
    description: 'Il sogno caraibico in versione zero alcol. Cremoso latte di cocco e succo d\'ananas fresco frullati con ghiaccio.',
    flavor: ['Dolce', 'Tropicale', 'Cremoso'],
    ingredients: [
      { name: 'Succo d\'ananas', amount: '100 ml' },
      { name: 'Crema o Latte di Cocco', amount: '40 ml' },
      { name: 'Sciroppo di zucchero', amount: '10 ml' }
    ],
    story: 'Richiestissima in tutti i lidi estivi e cocktail bar per chi desidera il gusto esotico senza alcol.',
    glass: 'Hurricane',
    garnish: 'Fetta d\'ananas e ciliegina',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'amber'
  },
  {
    id: 'san-francisco-mocktail',
    name: 'San Francisco (Mocktail)',
    category: 'Mocktail',
    description: 'Uno dei mocktail storici più serviti in Italia negli anni ’80 e ’90. Mix di succhi agrumati e fondo rosso di granatina.',
    flavor: ['Fruttato', 'Agrumato', 'Dolce'],
    ingredients: [
      { name: 'Succo d\'arancia', amount: '40 ml' },
      { name: 'Succo d\'ananas', amount: '40 ml' },
      { name: 'Succo di pompelmo rosa', amount: '30 ml' },
      { name: 'Sciroppo di Granatina', amount: '15 ml' },
      { name: 'Soda', amount: 'Top' }
    ],
    story: 'Presenza immancabile nei menu analcolici di ogni bar e discoteca italiana dagli anni novanta.',
    glass: 'Highball',
    garnish: 'Bordo di zucchero, fetta d\'arancia e ciliegina',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'orange'
  },
  {
    id: 'florida-mocktail',
    name: 'Florida Mocktail',
    category: 'Mocktail',
    description: 'Agrumato, dissetante e ricco di vitamina C. Mix di pompelmo, arancia, limone e soda.',
    flavor: ['Agrumato', 'Fresco', 'Dissetante'],
    ingredients: [
      { name: 'Succo di pompelmo rosa', amount: '50 ml' },
      { name: 'Succo d\'arancia', amount: '30 ml' },
      { name: 'Succo di limone', amount: '20 ml' },
      { name: 'Sciroppo di zucchero', amount: '15 ml' },
      { name: 'Soda / Acqua frizzante', amount: 'Top' }
    ],
    story: 'Cocktail analcolico nato per celebrare gli agrumeti del soleggiato stato della Florida.',
    glass: 'Highball',
    garnish: 'Fetta di pompelmo e foglia di menta',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'rose'
  },
  {
    id: 'strawberry-virgin-mocktail',
    name: 'Strawberry Cooler (Mocktail)',
    category: 'Mocktail',
    description: 'Fragole fresche pestate con lime e zucchero, allungate con Ginger Ale per una bollicina fruttata e irresistibile.',
    flavor: ['Fruttato', 'Frizzante', 'Dolce'],
    ingredients: [
      { name: 'Fragole fresche', amount: '4-5 fragole' },
      { name: 'Succo di lime fresco', amount: '20 ml' },
      { name: 'Sciroppo di zucchero', amount: '15 ml' },
      { name: 'Ginger Ale / Soda', amount: '100 ml' }
    ],
    story: 'Amatissimo nei bar estivi all\'aperto durante la stagione delle fragole.',
    glass: 'Highball',
    garnish: 'Fragola intera sul bordo e foglia di menta',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'rose'
  },
  {
    id: 'virgin-mary-mocktail',
    name: 'Virgin Mary (Mocktail)',
    category: 'Mocktail',
    description: 'La versione priva di vodka del Bloody Mary. Intensa, speziata e sapida con succo di pomodoro condito.',
    flavor: ['Sapido', 'Speziato', 'Intenso'],
    ingredients: [
      { name: 'Succo di pomodoro condito', amount: '120 ml' },
      { name: 'Succo di limone fresco', amount: '15 ml' },
      { name: 'Salsa Worcestershire', amount: '2 dash' },
      { name: 'Tabasco', amount: '2 drop' },
      { name: 'Sale di sedano e pepe nero', amount: '1 pinch' }
    ],
    story: 'Consumato come tonico rinfrescante e nutriente nelle mattinate e durante i brunch.',
    glass: 'Highball',
    garnish: 'Gambo di sedano fresco e spicchio di limone',
    abv: 'Analcolico',
    difficulty: 'Facile',
    colorAccent: 'red'
  }
];

