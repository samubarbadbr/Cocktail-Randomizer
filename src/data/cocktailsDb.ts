// =========================================================================
// 🍸 COCKTAIL LOUNGE MASTER DATABASE - 92 COCKTAIL & MOCKTAIL
// Cult '80/'90/'00, Grandi Classici IBA, Aperitivi Italiani, Tiki, Shooters, Mocktails
// =========================================================================

export const COCKTAILS_DATABASE = [
  {
    "id": "angelo-azzurro",
    "name": "Angelo Azzurro",
    "category": "Cult Disco Anni '90",
    "baseSpirit": "Gin",
    "flavors": [
      "Forte",
      "Agrumato",
      "Dolce",
      "Secco"
    ],
    "strength": "Forte (High Proof)",
    "glass": "Coppetta Martini o Tumbler",
    "color": "#06b6d4",
    "badge": "CULT 90s",
    "description": "Il mito assoluto delle notti italiane anni ’90. Colore blu elettrico ipnotico dato dal Blue Curaçao e tenore alcolico esplosivo.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Blue Curaçao",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 10,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi lo shaker di cubetti di ghiaccio compatti.",
      "Versa il Gin, il Triple Sec, il Blue Curaçao e il succo di limone fresco.",
      "Shakera vigorosamente per 12-15 secondi.",
      "Filtra con lo strainer in una coppetta ghiacciata o in un tumbler pieno di cubetti."
    ],
    "tips": "Per un colore ancora più brillante e un profilo meno aspro, usa succo di limone appena spremuto e filtrato.",
    "story": "Nato nelle discoteche romane e della Riviera Romagnola a fine anni ’80, è diventato leggenda generazionale per la sua gradazione e il colore blu cobalto."
  },
  {
    "id": "invisibile",
    "name": "Invisibile",
    "category": "Cult Disco Anni '90/'00",
    "baseSpirit": "Vodka",
    "flavors": [
      "Forte",
      "Agrumato",
      "Secco",
      "Fresco"
    ],
    "strength": "Molto Forte",
    "glass": "Highball / Tumbler Alto",
    "color": "#e2e8f0",
    "badge": "HIGH PROOF",
    "description": "Trasparente all'apparenza ma dalla potenza alcolica devastante: un blend letale di quattro distillati bianchi con splash di sweet & sour.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Gin London Dry",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Rum Bianco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Sweet & Sour (Limone e Zucchero)",
        "amount": 20,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un tumbler alto con cubetti di ghiaccio fino all'orlo.",
      "Versa in sequenza Vodka, Gin, Rum Bianco e Triple Sec.",
      "Aggiungi lo sweet & sour (o succo di limone e sciroppo di zucchero).",
      "Mescola energicamente dal basso verso l'alto con il bar spoon."
    ],
    "tips": "Chiamato \"invisibile\" perché privo di coloranti e completamente limpido nel bicchiere, nasconde la sua gradazione alcolica.",
    "story": "Simbolo delle serate universitarie e clubbing italiano tra il 1995 e il 2005."
  },
  {
    "id": "invisibile-fragola",
    "name": "Invisibile alla Fragola",
    "category": "Cult Disco Anni '90/'00",
    "baseSpirit": "Vodka",
    "flavors": [
      "Fruttato",
      "Dolce",
      "Forte",
      "Agrumato"
    ],
    "strength": "Molto Forte",
    "glass": "Highball / Tumbler Alto",
    "color": "#f43f5e",
    "badge": "DISCO PARTY",
    "description": "La variante più richiesta dell'Invisibile nei locali: i quattro spiriti bianchi incontrano la dolcezza intensa dello sciroppo di fragola.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Gin London Dry",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Rum Bianco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Triple Sec",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Sciroppo o Purea di Fragola",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi il bicchiere tumbler di ghiaccio a cubi.",
      "Versa tutti i quattro distillati e il succo di limone.",
      "Aggiungi lo sciroppo di fragola e mescola accuratamente per colorare uniformemente il drink."
    ],
    "tips": "La fragola maschera l'alcol, rendendolo pericolosamente beverino pur mantenendo un'altissima gradazione.",
    "story": "Regina delle notti estive nelle discoteche all'aperto degli anni 2000."
  },
  {
    "id": "japanese-slipper",
    "name": "Japanese Slipper",
    "category": "Cult Anni '80",
    "baseSpirit": "Liquori",
    "flavors": [
      "Dolce",
      "Agrumato",
      "Fruttato",
      "Mandorlato"
    ],
    "strength": "Medio",
    "glass": "Coppetta Cocktail",
    "color": "#84cc16",
    "badge": "NEON 80s",
    "description": "Verde neon ipnotico e armonia perfetta: l'iconico liquore al melone Midori bilanciato con Cointreau e succo di limone.",
    "ingredients": [
      {
        "name": "Midori Melon Liqueur",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Cointreau / Triple Sec",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa tutti gli ingredienti in proporzioni rigorosamente uguali (1:1:1) nello shaker.",
      "Aggiungi ghiaccio e shakera vigorosamente.",
      "Filtra in una coppetta da cocktail ben fredda e guarnisci con una ciliegina al maraschino."
    ],
    "tips": "L'equilibrio 1:1:1 è fondamentale: l'acidità del limone smorza la dolcezza zuccherina del melone Midori.",
    "story": "Creato nel 1984 da Jean-Paul Bourguignon al Mietta’s Restaurant di Melbourne, Australia."
  },
  {
    "id": "godfather",
    "name": "Godfather",
    "category": "Classico Anni '70",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Caldo",
      "Dolce",
      "Speziato",
      "Mandorlato",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned / Tumbler Basso",
    "color": "#b45309",
    "badge": "CINEMA CULT",
    "description": "Un sorso cinematografico: il calore affumicato dello Scotch Whisky che si sposa alla morbidezza vellutata dell'Amaretto Disaronno.",
    "ingredients": [
      {
        "name": "Scotch Whisky",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Liquore Amaretto (Disaronno)",
        "amount": 25,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un bicchiere Old Fashioned con un grande cubo di ghiaccio trasparente.",
      "Versa lo Scotch Whisky e l'Amaretto.",
      "Mescola dolcemente con il bar spoon per 20 secondi per raffreddare e amalgamare."
    ],
    "tips": "Usa uno Scotch torbato se ami le note affumicate a contrasto con la mandorla.",
    "story": "Creato negli anni ’70 in onore del capolavoro cinematografico \"Il Padrino\" di Francis Ford Coppola con Marlon Brando."
  },
  {
    "id": "godmother",
    "name": "Godmother",
    "category": "Classico Anni '70",
    "baseSpirit": "Vodka",
    "flavors": [
      "Dolce",
      "Morbido",
      "Forte",
      "Mandorlato",
      "Vanigliato"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned",
    "color": "#d97706",
    "badge": "EASY TWIST",
    "description": "La sorella del Godfather: la purezza neutra della Vodka esalta le note ricche di mandorla tostata e vaniglia dell'Amaretto.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Liquore Amaretto",
        "amount": 25,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi il tumbler con cubi di ghiaccio.",
      "Versa la Vodka e l'Amaretto.",
      "Mescola delicatamente per 15 secondi."
    ],
    "tips": "Perfetto come after-dinner morbido per chi preferisce un profilo meno legnoso rispetto al whisky.",
    "story": "Nato parallelamente al Godfather durante il boom dei liquori italiani negli Stati Uniti."
  },
  {
    "id": "b-52",
    "name": "B-52",
    "category": "Shooter Stratificato",
    "baseSpirit": "Liquori",
    "flavors": [
      "Caffè",
      "Cremoso",
      "Agrumato",
      "Vanigliato",
      "Dolce",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Bicchierino Shot / Shooter",
    "color": "#78350f",
    "badge": "LAYERED SHOT",
    "description": "Lo shot a 3 strati perfetti: Kahlúa al caffè, crema di whisky Baileys e Grand Marnier all'arancia.",
    "ingredients": [
      {
        "name": "Kahlúa (Liquore al Caffè)",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Baileys Irish Cream",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Grand Marnier / Triple Sec",
        "amount": 20,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa la Kahlúa sul fondo del bicchierino shot.",
      "Con il dorso di un cucchiaio da bar, fai colare dolcemente il Baileys per formare il secondo strato.",
      "Ripeti l'operazione con il Grand Marnier in cima per il terzo strato limpido."
    ],
    "tips": "Versa a temperatura ambiente e molto lentamente a contatto con la parete del bicchiere.",
    "story": "Creato all'Alice Restaurant di Calgary nel 1977, battezzato in onore dei bombardieri B-52 Stratofortress."
  },
  {
    "id": "white-russian",
    "name": "White Russian",
    "category": "Cult Anni '60 / '90",
    "baseSpirit": "Vodka",
    "flavors": [
      "Cremoso",
      "Caffè",
      "Dolce",
      "Vanigliato"
    ],
    "strength": "Medio-Forte",
    "glass": "Old Fashioned",
    "color": "#fef3c7",
    "badge": "THE DUDE CULT",
    "description": "Il drink leggendario de \"Il Grande Lebowski\": Vodka pura, liquore Kahlúa al caffè e un velluto di panna fresca in superficie.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Liquore al Caffè (Kahlúa)",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Panna Fresca liquida o semi-montata",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un bicchiere Old Fashioned con ghiaccio a cubi.",
      "Versa la vodka e il liquore al caffè e mescola.",
      "Fai colare delicatamente la panna liquida sulla superficie con il dorso di un cucchiaio."
    ],
    "tips": "Puoi gustarlo a strati separati o mescolarlo prima di bere per una consistenza tipo frappé alcolico.",
    "story": "Divenuto leggenda universale grazie al personaggio del Drugo (The Dude) nel film cult dei fratelli Coen."
  },
  {
    "id": "black-russian",
    "name": "Black Russian",
    "category": "Classico Anni '40",
    "baseSpirit": "Vodka",
    "flavors": [
      "Caffè",
      "Dolce",
      "Secco",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned",
    "color": "#451a03",
    "badge": "PRE-LEBOWSKI",
    "description": "La versione originaria e decisa: il contrasto essenziale tra la purezza della vodka e la ricchezza tostata del caffè Kahlúa.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Liquore al Caffè (Kahlúa)",
        "amount": 20,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un Old Fashioned con ghiaccio a cubi.",
      "Versa la vodka e il liquore al caffè.",
      "Mescola con il bar spoon per 15 secondi."
    ],
    "tips": "Servilo con ghiaccio compatto per evitare che si annacqui troppo velocemente.",
    "story": "Creato nel 1949 all'Hotel Métropole di Bruxelles dal barman Gustave Tops in onore dell'ambasciatrice USA in Lussemburgo."
  },
  {
    "id": "sex-on-the-beach",
    "name": "Sex on the Beach",
    "category": "Party Anni '80",
    "baseSpirit": "Vodka",
    "flavors": [
      "Fruttato",
      "Dolce",
      "Tropicale",
      "Fresco"
    ],
    "strength": "Medio",
    "glass": "Highball / Hurricane",
    "color": "#f97316",
    "badge": "SUMMER PARTY",
    "description": "Il cocktail simbolo delle spiagge estive: Vodka, liquore alla pesca, succo d'arancia e succo di mirtillo rosso (cranberry).",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Peach Schnapps / Liquore alla Pesca",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo d'Arancia fresca",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Succo di Cranberry (Mirtillo Rosso)",
        "amount": 40,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi lo shaker di ghiaccio e aggiungi vodka, peach schnapps e succo d'arancia.",
      "Shakera e versa nel bicchiere colmo di ghiaccio.",
      "Aggiungi delicatamente il succo di cranberry in cima per creare la sfumatura bicolore."
    ],
    "tips": "Usa succo di mirtillo rosso non troppo zuccherato per mantenere una fresca acidità.",
    "story": "Creato in Florida nel 1987 durante lo Spring Break dal barista Ted Pizio al Confetti's Bar."
  },
  {
    "id": "kamikaze",
    "name": "Kamikaze",
    "category": "Cult Disco Anni '70/'80",
    "baseSpirit": "Vodka",
    "flavors": [
      "Agrumato",
      "Fresco",
      "Forte",
      "Secco"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail o Shot",
    "color": "#fef08a",
    "badge": "HIGH IMPACT",
    "description": "Tagliente e rinfrescante: un equilibrio 1:1:1 di Vodka, Triple Sec e succo di lime fresco con un impatto immediato.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa vodka, triple sec e succo di lime nello shaker con abbondante ghiaccio.",
      "Shakera per 12 secondi ed effettua una doppia filtrazione in coppetta o in bicchierini shot."
    ],
    "tips": "È essenzialmente un Margarita dove la Vodka sostituisce la Tequila, regalando un gusto pulitissimo.",
    "story": "Nato nelle basi militari statunitensi in Giappone durante l'occupazione post-seconda guerra mondiale."
  },
  {
    "id": "long-island",
    "name": "Long Island Iced Tea",
    "category": "High Octane Classic",
    "baseSpirit": "Vodka",
    "flavors": [
      "Agrumato",
      "Frizzante",
      "Forte",
      "Speziato"
    ],
    "strength": "Molto Forte",
    "glass": "Highball / Collins",
    "color": "#b45309",
    "badge": "LEGENDARY 5-SPIRITS",
    "description": "Il re dei drink ad alto tenore alcolico: 5 distillati armonizzati da succo di limone e sciroppo, con splash di cola a simulare il colore del tè.",
    "ingredients": [
      {
        "name": "Vodka",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Gin London Dry",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Rum Bianco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Tequila Blanco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Triple Sec",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Cola per colmare",
        "amount": 40,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa tutti i distillati, il limone e lo sciroppo nello shaker con ghiaccio.",
      "Shakera brevemente per raffreddare e filtra in un bicchiere highball con ghiaccio fresco.",
      "Aggiungi un top di Cola e guarnisci con fetta di limone."
    ],
    "tips": "Non esagerare con la Cola: ne basta un goccio per conferire la tipica tonalità ambrata di tè freddo.",
    "story": "Creato nel 1972 da Robert \"Rosebud\" Butt all'Oak Beach Inn di Long Island, New York."
  },
  {
    "id": "tequila-sunrise",
    "name": "Tequila Sunrise",
    "category": "Classico Anni '70",
    "baseSpirit": "Tequila",
    "flavors": [
      "Fruttato",
      "Dolce",
      "Agrumato",
      "Tropicale"
    ],
    "strength": "Medio",
    "glass": "Highball / Collins",
    "color": "#ea580c",
    "badge": "ROCK & ROLL",
    "description": "I colori di un'alba messicana: Tequila 100% agave e succo d'arancia con goccia di granatina che affonda sul fondo.",
    "ingredients": [
      {
        "name": "Tequila Blanco",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Succo d'Arancia fresca",
        "amount": 90,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Granatina",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un tumbler alto di ghiaccio a cubetti.",
      "Versa la Tequila e il succo d'arancia, mescolando leggermente.",
      "Versa la granatina al centro del bicchiere: affonderà naturalmente sul fondo creando l'effetto sfumato del sole che sorge."
    ],
    "tips": "Non mescolare dopo aver versato la granatina per non rovinare lo spettacolare gradiente visivo.",
    "story": "Reso immortale dai Rolling Stones durante il loro leggendario tour del 1972 e dalla canzone omonima degli Eagles."
  },
  {
    "id": "midori-sour",
    "name": "Midori Sour",
    "category": "Cult Disco Anni '80",
    "baseSpirit": "Liquori",
    "flavors": [
      "Dolce",
      "Agrumato",
      "Fresco",
      "Fruttato"
    ],
    "strength": "Leggero-Medio",
    "glass": "Highball / Tumbler Basso",
    "color": "#65a30d",
    "badge": "NEON GREEN",
    "description": "Il gusto iconico del melone giapponese bilanciato da limone, lime e un tocco di soda effervescente.",
    "ingredients": [
      {
        "name": "Midori Melon Liqueur",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Vodka (opzionale per corpo)",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Soda per colmare",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera Midori, vodka e i succhi di agrumi con ghiaccio.",
      "Filtra in un bicchiere con ghiaccio fresco e colma con uno spruzzo di soda.",
      "Guarnisci con fetta di lime e ciliegia al maraschino."
    ],
    "tips": "La vodka aggiunge spessore senza coprire il bouquet aromatico del melone.",
    "story": "Lanciato negli USA allo Studio 54 di New York nel 1978 da Suntory durante la prima presentazione ufficiale del Midori."
  },
  {
    "id": "blue-lagoon",
    "name": "Blue Lagoon",
    "category": "Cult Anni '60",
    "baseSpirit": "Vodka",
    "flavors": [
      "Agrumato",
      "Fresco",
      "Dolce",
      "Tropicale"
    ],
    "strength": "Medio",
    "glass": "Highball / Hurricane",
    "color": "#0284c7",
    "badge": "TROPICAL BLUE",
    "description": "Un tuffo in una laguna turchese: Vodka, Blue Curaçao all'arancia amara e limonata gassata rinfrescante.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Blue Curaçao",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Limonata gassata o Sprite",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 10,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un bicchiere con cubi di ghiaccio.",
      "Aggiungi Vodka, Blue Curaçao e succo di limone.",
      "Colma con limonata frizzante e mescola delicatamente."
    ],
    "tips": "Usa una limonata artigianale per un sapore più fresco e meno industriale.",
    "story": "Creato da Andy MacElhone (figlio del leggendario Harry) all'Harry's New York Bar di Parigi negli anni ’60."
  },
  {
    "id": "woo-woo",
    "name": "Woo Woo",
    "category": "Party Anni '80",
    "baseSpirit": "Vodka",
    "flavors": [
      "Fruttato",
      "Dolce",
      "Fresco",
      "Agrumato"
    ],
    "strength": "Leggero-Medio",
    "glass": "Highball o Tumbler Basso",
    "color": "#e11d48",
    "badge": "EASY DRINK",
    "description": "Semplice, fruttato e dissetante: Vodka unita a Peach Schnapps e succo di mirtillo rosso americano.",
    "ingredients": [
      {
        "name": "Vodka",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Peach Schnapps (Liquore Pesca)",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Succo di Cranberry",
        "amount": 90,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa gli ingredienti in uno shaker con ghiaccio.",
      "Shakera per 10 secondi e filtra nel bicchiere colmo di ghiaccio.",
      "Guarnisci con uno spicchio di lime."
    ],
    "tips": "Può essere servito sia come long drink che in formato shooter da bere alla goccia.",
    "story": "Popolarissimo nei bar universitari americani degli anni Ottanta."
  },
  {
    "id": "alexander",
    "name": "Alexander",
    "category": "Classico Storico",
    "baseSpirit": "Gin",
    "flavors": [
      "Cremoso",
      "Dolce",
      "Speziato",
      "Vanigliato"
    ],
    "strength": "Medio",
    "glass": "Coppetta Cocktail",
    "color": "#f8fafc",
    "badge": "VELVET VINTAGE",
    "description": "Il dessert drink nobiliare: Gin London Dry, Crema di Cacao Bianca e panna liquida spolverata di noce moscata fresca.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Crema di Cacao Bianca",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Panna Fresca liquida",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Noce Moscata grattugiata",
        "amount": 1,
        "unit": "spolverata"
      }
    ],
    "recipe": [
      "Versa Gin, crema di cacao e panna nello shaker colmo di ghiaccio.",
      "Shakera energicamente per montare leggermente la panna.",
      "Filtra in coppetta ghiacciata e grattugia noce moscata fresca sulla superficie."
    ],
    "tips": "La noce moscata appena grattugiata dona una nota speziata essenziale per tagliare la grassezza della panna.",
    "story": "Creato nei primi del Novecento a New York per celebrare una campagna pubblicitaria ferroviaria di Phoebe Snow."
  },
  {
    "id": "brandy-alexander",
    "name": "Brandy Alexander",
    "category": "Classico IBA",
    "baseSpirit": "Cognac",
    "flavors": [
      "Cremoso",
      "Dolce",
      "Caldo",
      "Speziato",
      "Vanigliato"
    ],
    "strength": "Medio-Forte",
    "glass": "Coppetta Cocktail",
    "color": "#fed7aa",
    "badge": "AFTER DINNER",
    "description": "L'evoluzione aristocratica dell'Alexander: il calore nobile del Cognac/Brandy sposa il cacao scuro e la crema di panna.",
    "ingredients": [
      {
        "name": "Cognac o Brandy",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Crema di Cacao Scura",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Panna Fresca liquida",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Noce Moscata",
        "amount": 1,
        "unit": "pizzico"
      }
    ],
    "recipe": [
      "Metti Cognac, liquore al cacao e panna nello shaker con ghiaccio.",
      "Shakera con vigore per 15 secondi.",
      "Filtra in una coppetta ben fredda e decora con noce moscata."
    ],
    "tips": "Usa un Cognac VSOP per note di frutta secca e legno indimenticabili.",
    "story": "Si narra fosse il cocktail preferito di John Lennon durante il suo celebre periodo californiano \"Lost Weekend\"."
  },
  {
    "id": "negroni",
    "name": "Negroni",
    "category": "Aperitivo Reale Italiano",
    "baseSpirit": "Gin",
    "flavors": [
      "Amaro",
      "Speziato",
      "Agrumato",
      "Erbaceo",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned / Tumbler Basso",
    "color": "#dc2626",
    "badge": "IBA WORLD #1",
    "description": "L'icona indiscussa della miscelazione italiana nel mondo: 1/3 Gin, 1/3 Bitter Campari, 1/3 Vermouth Rosso dolce.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Campari Bitter",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Vermouth Rosso di Torino",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un tumbler basso con ghiaccio a cubi grandi.",
      "Versa in parti uguali Gin, Campari e Vermouth Rosso.",
      "Mescola dolcemente con il bar spoon per 20 secondi.",
      "Guarnisci con mezza fetta d'arancia e strizza gli oli della scorza sul bordo."
    ],
    "tips": "Usa ghiaccio di qualità compatto per raffreddare senza annacquare.",
    "story": "Nato a Firenze nel 1919 al Caffè Casoni quando il Conte Camillo Negroni chiese al barman Fosco Scarselli di irrobustire l'Americano con del Gin."
  },
  {
    "id": "negroni-sbagliato",
    "name": "Negroni Sbagliato",
    "category": "Aperitivo Milanese",
    "baseSpirit": "Prosecco",
    "flavors": [
      "Frizzante",
      "Amaro",
      "Agrumato",
      "Erbaceo"
    ],
    "strength": "Medio",
    "glass": "Old Fashioned o Calice",
    "color": "#ef4444",
    "badge": "MILANO CULT",
    "description": "Il meraviglioso errore del Bar Basso: le bollicine del Prosecco Brut sostituiscono il Gin per un aperitivo più leggero e brioso.",
    "ingredients": [
      {
        "name": "Campari Bitter",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Vermouth Rosso Dolce",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Prosecco D.O.C. Brut",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi il bicchiere con ghiaccio.",
      "Versa il Campari e il Vermouth Rosso.",
      "Completa con il Prosecco Brut freddissimo e mescola delicatamente per preservare il perlage.",
      "Guarnisci con una fetta d'arancia."
    ],
    "tips": "Aggiungi il Prosecco per ultimo e muovi il cucchiaio dal basso verso l'alto una sola volta.",
    "story": "Creato per sbaglio nel 1972 da Mirko Stocchetto al Bar Basso di Milano, che afferrò per errore una bottiglia di spumante al posto del gin."
  },
  {
    "id": "americano",
    "name": "Americano",
    "category": "Classico Italiano",
    "baseSpirit": "Campari",
    "flavors": [
      "Amaro",
      "Frizzante",
      "Erbaceo",
      "Agrumato"
    ],
    "strength": "Leggero",
    "glass": "Old Fashioned o Tumbler Medio",
    "color": "#b91c1c",
    "badge": "VINTAGE 1860",
    "description": "L'eleganza del Bitter Campari e del Vermouth Rosso allungati con seltz frizzante e scorza di limone.",
    "ingredients": [
      {
        "name": "Campari Bitter",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Vermouth Rosso Dolce",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz frizzante",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi il bicchiere di cubetti di ghiaccio.",
      "Versa il Campari e il Vermouth.",
      "Aggiungi il seltz e mescola con cura.",
      "Profuma con scorza di limone e fetta d'arancia."
    ],
    "tips": "Il vero Americano richiede sia la scorza di limone che la mezza fetta d'arancia per l'equilibrio agrumato.",
    "story": "Creato al Bar Gaspare Campari nel 1860, inizialmente noto come Milano-Torino e ribattezzato Americano per il successo riscosso tra i turisti statunitensi."
  },
  {
    "id": "milano-torino",
    "name": "Milano-Torino (Mi-To)",
    "category": "Aperitivo Tradizionale",
    "baseSpirit": "Campari",
    "flavors": [
      "Amaro",
      "Erbaceo",
      "Agrumato",
      "Speziato"
    ],
    "strength": "Medio",
    "glass": "Old Fashioned",
    "color": "#991b1b",
    "badge": "THE ORIGIN",
    "description": "Il padre assoluto dell'Americano e del Negroni: l'incontro puro al 50/50 tra il Bitter di Milano e il Vermouth di Torino.",
    "ingredients": [
      {
        "name": "Campari Bitter (Milano)",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Vermouth Rosso (Torino)",
        "amount": 45,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un tumbler basso di ghiaccio compatto.",
      "Versa Campari e Vermouth in parti rigorosamente uguali.",
      "Mescola per 20 secondi e guarnisci con scorza d'arancia."
    ],
    "tips": "Senza soda: assaporalo puro per apprezzare la straordinaria complessità botanica dei due spiriti.",
    "story": "Servito per la prima volta al Caffè Camparino di Milano nel 1860."
  },
  {
    "id": "cardinale",
    "name": "Cardinale",
    "category": "Classico Romano",
    "baseSpirit": "Gin",
    "flavors": [
      "Amaro",
      "Secco",
      "Speziato",
      "Erbaceo",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta o Old Fashioned",
    "color": "#dc2626",
    "badge": "ROMA 1950",
    "description": "La variante aristocratica del Negroni: il Vermouth Dry secco sostituisce il Vermouth dolce, richiamando la porpora cardinalizia.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Campari Bitter",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Vermouth Dry Extra Secco",
        "amount": 20,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Mescola tutti gli ingredienti nel mixing glass con ghiaccio.",
      "Filtra in coppetta cocktail ghiacciata o su cubo di ghiaccio in Old Fashioned.",
      "Guarnisci con un twist di scorza di limone."
    ],
    "tips": "Molto più asciutto e tagliente del Negroni classico, amato dagli intenditori di drink secchi.",
    "story": "Creato nel 1950 dal barman Giovanni Raimondo all'Hotel Excelsior di Roma in onore di un cardinale tedesco ospite fisso dell'hotel."
  },
  {
    "id": "boulevardier",
    "name": "Boulevardier",
    "category": "Classico Speziato",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Amaro",
      "Speziato",
      "Caldo",
      "Erbaceo",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned o Coupe",
    "color": "#b91c1c",
    "badge": "PARISIAN VINTAGE",
    "description": "Il fratello parigino del Negroni: il calore legnoso del Bourbon o Rye Whiskey unito a Campari e Vermouth Rosso.",
    "ingredients": [
      {
        "name": "Bourbon o Rye Whiskey",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Campari Bitter",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Vermouth Rosso Dolce",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Nel mixing glass pieno di ghiaccio mescola Bourbon, Campari e Vermouth per 25 secondi.",
      "Filtra in un bicchiere Old Fashioned con cubo di ghiaccio grande o in coppetta."
    ],
    "tips": "Aumentare leggermente il Bourbon (45ml vs 30ml) regala una rotondità maestosa al palato.",
    "story": "Creato negli anni ’20 all'Harry's New York Bar di Parigi per lo scrittore Erskine Gwynne, editore del magazine \"The Boulevardier\"."
  },
  {
    "id": "aperol-spritz",
    "name": "Aperol Spritz",
    "category": "Aperitivo Mondiale",
    "baseSpirit": "Prosecco",
    "flavors": [
      "Frizzante",
      "Agrumato",
      "Dolce",
      "Amaro",
      "Fresco"
    ],
    "strength": "Leggero",
    "glass": "Calice grande da vino",
    "color": "#f97316",
    "badge": "3-2-1 FORMULA",
    "description": "Il re globale dell'aperitivo veneziano: formula 3-2-1 con 3 parti di Prosecco D.O.C., 2 parti di Aperol e 1 spruzzo di soda.",
    "ingredients": [
      {
        "name": "Prosecco D.O.C.",
        "amount": 90,
        "unit": "ml"
      },
      {
        "name": "Aperol",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un calice grande con ghiaccio abbondante.",
      "Versa prima il Prosecco, poi l'Aperol con movimento circolare e infine lo splash di soda.",
      "Guarnisci con una mezza fetta d'arancia fresca."
    ],
    "tips": "Versare il Prosecco prima dell'Aperol impedisce che il liquore si depositi pesantemente sul fondo.",
    "story": "Nato nel Triveneto dall'usanza dei soldati austro-ungarici di spruzzare (spritzen) con acqua i vini locali troppo corposi."
  },
  {
    "id": "campari-spritz",
    "name": "Campari Spritz",
    "category": "Aperitivo Intenso",
    "baseSpirit": "Campari",
    "flavors": [
      "Amaro",
      "Frizzante",
      "Agrumato",
      "Erbaceo"
    ],
    "strength": "Medio",
    "glass": "Calice grande da vino",
    "color": "#dc2626",
    "badge": "BOLD APERITIVO",
    "description": "La versione più amara, adulta e decisa dello Spritz: Bitter Campari fuso con le bollicine del Prosecco Brut.",
    "ingredients": [
      {
        "name": "Prosecco D.O.C. Brut",
        "amount": 90,
        "unit": "ml"
      },
      {
        "name": "Campari Bitter",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi il calice di ghiaccio.",
      "Versa Prosecco, Campari e un goccio di soda.",
      "Mescola dal basso e decora con fetta d'arancia o oliva verde."
    ],
    "tips": "Usa rigorosamente Prosecco Brut per controbilanciare la dolcezza aromatica del Campari.",
    "story": "La scelta d'elezione degli amanti dell'amaro tradizionale milanese."
  },
  {
    "id": "select-spritz",
    "name": "Select Spritz Veneziano",
    "category": "Aperitivo Tradizionale",
    "baseSpirit": "Liquori",
    "flavors": [
      "Speziato",
      "Frizzante",
      "Erbaceo",
      "Amaro",
      "Sapido / Salino"
    ],
    "strength": "Leggero",
    "glass": "Calice da vino",
    "color": "#ea580c",
    "badge": "AUTENTICO VENEZIA",
    "description": "Il vero Spritz originale di Venezia con Select Bitter, caratterizzato dalle note di rabarbaro e bacche di ginepro, servito con oliva verde.",
    "ingredients": [
      {
        "name": "Prosecco D.O.C.",
        "amount": 90,
        "unit": "ml"
      },
      {
        "name": "Select Bitter Veneziano",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi il calice di ghiaccio.",
      "Versa il Prosecco, il Select e la soda.",
      "Mescola con delicatezza e aggiungi la classica oliva verde veneziana infilzata."
    ],
    "tips": "L'oliva verde rilascia una leggera salinità che esalta le erbe del Select.",
    "story": "Creato a Venezia nel 1920 dai Fratelli Pilla nel sestiere di Castello."
  },
  {
    "id": "limoncello-spritz",
    "name": "Limoncello Spritz",
    "category": "Aperitivo Costiero",
    "baseSpirit": "Liquori",
    "flavors": [
      "Agrumato",
      "Fresco",
      "Frizzante",
      "Dolce"
    ],
    "strength": "Leggero-Medio",
    "glass": "Calice grande da vino",
    "color": "#facc15",
    "badge": "COSTIERA AMALFI",
    "description": "Il sole del Sud Italia: Limoncello di Sorrento artigianale, Prosecco Brut, soda ghiacciata e foglie di menta profumata.",
    "ingredients": [
      {
        "name": "Limoncello di Sorrento",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Prosecco Brut D.O.C.",
        "amount": 90,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Foglie di Menta fresca",
        "amount": 4,
        "unit": "foglie"
      }
    ],
    "recipe": [
      "Riempi il calice di ghiaccio.",
      "Versa il Limoncello freddissimo, il Prosecco e la soda.",
      "Batti la menta sui palmi per liberare gli oli e adagiala in superficie con una fetta di limone."
    ],
    "tips": "Usa un limoncello poco zuccherato e molto profumato per un aperitivo fresco e non stucchevole.",
    "story": "Divenuto fenomeno internazionale sulle terrazze panoramiche di Capri e Positano."
  },
  {
    "id": "hugo",
    "name": "Hugo Altoatesino",
    "category": "Aperitivo Fresco",
    "baseSpirit": "Prosecco",
    "flavors": [
      "Floreale",
      "Fresco",
      "Erbaceo",
      "Balsamico / Menta",
      "Frizzante"
    ],
    "strength": "Leggero",
    "glass": "Calice grande da vino",
    "color": "#10b981",
    "badge": "SUMMER HIT",
    "description": "L'alternativa fresca alpina: fiori di sambuco, menta risvegliata, Prosecco e bollicine di seltz.",
    "ingredients": [
      {
        "name": "Prosecco D.O.C.",
        "amount": 90,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Fiori di Sambuco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Foglie di Menta Fresca",
        "amount": 6,
        "unit": "foglie"
      }
    ],
    "recipe": [
      "Batti la menta tra i palmi e adagiala nel calice colmo di ghiaccio.",
      "Versa lo sciroppo di sambuco, il Prosecco e la soda; mescola con delicatezza."
    ],
    "tips": "Non pestare mai la menta per non rilasciare clorofilla amara; una fetta di mela verde completa l'aroma alpino.",
    "story": "Nato nel 2005 a Naturno dal bartender Roland Gruber come variante alpina dello Spritz."
  },
  {
    "id": "garibaldi",
    "name": "Garibaldi",
    "category": "Aperitivo Tradizionale",
    "baseSpirit": "Campari",
    "flavors": [
      "Agrumato",
      "Amaro",
      "Fresco",
      "Fruttato"
    ],
    "strength": "Leggero",
    "glass": "Highball / Tumbler Alto",
    "color": "#dc2626",
    "badge": "ITALIAN HERO",
    "description": "L'unione d'Italia nel bicchiere: il Bitter Campari di Milano incontra le arance fresche e spumose della Sicilia.",
    "ingredients": [
      {
        "name": "Campari Bitter",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Succo d'Arancia fresca montato spumoso",
        "amount": 120,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un tumbler con ghiaccio a cubi.",
      "Versa il Campari Bitter.",
      "Frulla il succo d'arancia fresca ad alta velocità per montarlo e versalo delicatamente sopra per formare una spuma soffice."
    ],
    "tips": "Frullare l'arancia fresca crea una crema aerea e setosa spettacolare che galleggia sul Campari.",
    "story": "Chiamato Garibaldi per celebrare l'unione tra il Nord (Campari milanese) e il Sud (arance rosse siciliane)."
  },
  {
    "id": "bellini",
    "name": "Bellini Tradizionale",
    "category": "Aperitivo Nobile Veneziano",
    "baseSpirit": "Prosecco",
    "flavors": [
      "Fruttato",
      "Fresco",
      "Dolce",
      "Frizzante"
    ],
    "strength": "Leggero",
    "glass": "Flûte o Calice",
    "color": "#fdba74",
    "badge": "HARRY'S BAR",
    "description": "La poesia di Venezia: polpa setosa di pesca bianca fresca di stagione unita all'effervescenza del Prosecco Brut.",
    "ingredients": [
      {
        "name": "Prosecco D.O.C. Brut",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Polpa e Succo di Pesca Bianca",
        "amount": 50,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa la purea di pesca bianca ben fredda nel bicchiere.",
      "Aggiungi lentamente il Prosecco ghiacciato mescolando dal basso per non fare traboccare la spuma."
    ],
    "tips": "Usa rigorosamente pesche bianche schiacciate a mano o al setaccio e mai frullate col mixer per non scaldarle.",
    "story": "Creato nel 1948 da Giuseppe Cipriani all'Harry's Bar di Venezia in onore della mostra del pittore Giovanni Bellini."
  },
  {
    "id": "rossini",
    "name": "Rossini",
    "category": "Aperitivo con Bollicine",
    "baseSpirit": "Prosecco",
    "flavors": [
      "Fruttato",
      "Fresco",
      "Dolce",
      "Frizzante"
    ],
    "strength": "Leggero",
    "glass": "Flûte",
    "color": "#e11d48",
    "badge": "CIPRIANI TRILOGY",
    "description": "La variante primaverile del Bellini: purea di fragole fresche profumate al limone completate con Prosecco Brut.",
    "ingredients": [
      {
        "name": "Prosecco Brut",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Purea di Fragole fresche",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 3,
        "unit": "gocce"
      }
    ],
    "recipe": [
      "Versa la purea di fragole fresche fredda nella flûte.",
      "Aggiungi le gocce di limone e colma lentamente con il Prosecco mescolando delicatamente."
    ],
    "tips": "Aggiungi una goccia di limone alla purea di fragole per esaltarne colore e acidità naturale.",
    "story": "Dedicato al celebre compositore e buongustaio Gioachino Rossini."
  },
  {
    "id": "bicicletta",
    "name": "Bicicletta",
    "category": "Osteria Tradizionale",
    "baseSpirit": "Campari",
    "flavors": [
      "Amaro",
      "Secco",
      "Frizzante",
      "Agrumato"
    ],
    "strength": "Leggero",
    "glass": "Tumbler o Calice",
    "color": "#dc2626",
    "badge": "POPULAR TAVERN",
    "description": "L'aperitivo popolare delle osterie del Nord Italia: Bitter Campari, Vino Bianco secco fermo e spruzzo di seltz.",
    "ingredients": [
      {
        "name": "Campari Bitter",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Vino Bianco Secco fermo (es. Soave o Pinot)",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi il bicchiere con cubi di ghiaccio.",
      "Versa il Campari, il vino bianco e il seltz.",
      "Mescola e inserisci una fetta d'arancia."
    ],
    "tips": "Usa vino bianco fresco e sapido, non barricato.",
    "story": "Chiamato così perché gli anziani dei paesi tornavano a casa ondeggiando sulla bicicletta dopo averne bevuti un paio al bar."
  },
  {
    "id": "dry-martini",
    "name": "Dry Martini",
    "category": "Il Re dei Cocktail",
    "baseSpirit": "Gin",
    "flavors": [
      "Secco",
      "Erbaceo",
      "Forte",
      "Sapido / Salino"
    ],
    "strength": "Molto Forte",
    "glass": "Coppetta Martini Ghiacciata",
    "color": "#f8fafc",
    "badge": "THE KING",
    "description": "Il cocktail più elegante della storia: 6 parti di Gin London Dry aristocratico e 1 parte di Extra Dry Vermouth con scorza di limone o oliva.",
    "ingredients": [
      {
        "name": "Gin London Dry (o Vodka pura)",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Extra Dry Vermouth",
        "amount": 10,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Raffredda la coppetta con ghiaccio.",
      "Nel mixing glass pieno di cubi di ghiaccio versa Gin e Dry Vermouth.",
      "Stirra (mescola) per 30 secondi fino a renderlo gelido e cristallino.",
      "Filtra nella coppetta e vaporizza gli oli essenziali di una scorza di limone o immergi un'oliva verde."
    ],
    "tips": "Stir, never shake! Mescolare nel mixing glass preserva la limpidezza senza intorbidire il liquido con bolle d'aria.",
    "story": "Amato da Winston Churchill, Ernest Hemingway e Franklin D. Roosevelt."
  },
  {
    "id": "dirty-martini",
    "name": "Dirty Martini",
    "category": "Classico Salino",
    "baseSpirit": "Gin",
    "flavors": [
      "Sapido / Salino",
      "Secco",
      "Forte"
    ],
    "strength": "Molto Forte",
    "glass": "Coppetta Martini",
    "color": "#e2e8f0",
    "badge": "OLIVE BRINE",
    "description": "La versione salina del Martini: l'aggiunta di salamoia di olive verdi regala note sapide e una torbidità affascinante.",
    "ingredients": [
      {
        "name": "Gin o Vodka pura",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Dry Vermouth",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Salamoia di Olive Verdi (Olive Brine)",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Unisci Gin, Vermouth e la salamoia nel mixing glass con ghiaccio.",
      "Mescola energicamente per 25 secondi.",
      "Filtra in coppetta e guarnisci con 3 olive verdi su stecchino."
    ],
    "tips": "Usa la salamoia di olive carnose di alta qualità (come Cerignola o Nocellara).",
    "story": "Creato nel 1901 dal barman newyorkese John O'Connor che iniziò a schiacciare le olive direttamente nel drink."
  },
  {
    "id": "vesper-martini",
    "name": "Vesper Martini",
    "category": "Cinema & Letteratura",
    "baseSpirit": "Gin",
    "flavors": [
      "Secco",
      "Forte",
      "Agrumato",
      "Erbaceo"
    ],
    "strength": "Molto Forte",
    "glass": "Coppetta a calice profonda",
    "color": "#f1f5f9",
    "badge": "007 JAMES BOND",
    "description": "La ricetta originale di James Bond creata da Ian Fleming in Casino Royale: 3 parti di Gordon's Gin, 1 parte di Vodka, 1/2 di Kina Lillet, shakerato e non mescolato.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Vodka pura di grano",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Lillet Blanc / Kina Lillet",
        "amount": 7.5,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa gli ingredienti nello shaker con molto ghiaccio.",
      "Shakera finché lo shaker non è gelato all'esterno.",
      "Filtra in una coppetta ampia e guarnisci con una spirale lunga e sottile di scorza di limone."
    ],
    "tips": "\"Shaken, not stirred\": la shakerata crea micro-cristalli di ghiaccio che rendono il drink freddissimo.",
    "story": "Creato dallo scrittore Ian Fleming nel romanzo \"Casino Royale\" (1953) e battezzato in onore dell'agente segreto Vesper Lynd."
  },
  {
    "id": "manhattan",
    "name": "Manhattan",
    "category": "Classico di New York",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Caldo",
      "Speziato",
      "Dolce",
      "Forte",
      "Erbaceo"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#991b1b",
    "badge": "NYC ICON 1874",
    "description": "La maestosità del Rye Whiskey unita alla morbidezza del Vermouth Rosso dolce e a gocce di Angostura Bitters.",
    "ingredients": [
      {
        "name": "Rye o Bourbon Whiskey",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Vermouth Rosso Dolce",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Angostura Bitters",
        "amount": 2,
        "unit": "dash"
      }
    ],
    "recipe": [
      "Nel mixing glass unisci Rye Whiskey, Vermouth e Angostura con abbondante ghiaccio.",
      "Mescola con il bar spoon per 30 secondi.",
      "Filtra in una coppetta ghiacciata e aggiungi una ciliegina al maraschino Luxardo."
    ],
    "tips": "Il Rye Whiskey speziato è l'ideale storico originale; se preferisci una beva più dolce e vanigliata, scegli il Bourbon.",
    "story": "Creato al Manhattan Club di New York nel 1874 per un banchetto in onore di Jennie Jerome (Lady Randolph Churchill)."
  },
  {
    "id": "old-fashioned",
    "name": "Old Fashioned",
    "category": "Il Padre della Miscelazione",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Speziato",
      "Caldo",
      "Agrumato",
      "Dolce",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned / Tumbler Basso",
    "color": "#b45309",
    "badge": "THE FIRST COCKTAIL",
    "description": "La definizione originale di cocktail (1806): Whiskey nobile, zolletta di zucchero imbevuta di Angostura e oli essenziali d'arancia.",
    "ingredients": [
      {
        "name": "Bourbon o Rye Whiskey",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Zolletta di Zucchero",
        "amount": 1,
        "unit": "pezzo"
      },
      {
        "name": "Angostura Bitters",
        "amount": 3,
        "unit": "dash"
      },
      {
        "name": "Gocce di Soda per sciogliere lo zucchero",
        "amount": 5,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Nel bicchiere Old Fashioned posiziona la zolletta, bagnala con Angostura e un goccio di soda.",
      "Schiaccia con il pestello fino a sciogliere lo zucchero.",
      "Aggiungi un grande cubo di ghiaccio e versa il whiskey.",
      "Mescola per 30 secondi e strizza la scorza d'arancia."
    ],
    "tips": "Usa un unico blocco di ghiaccio grande trasparente per una diluizione lenta e costante.",
    "story": "Nato al Pendennis Club di Louisville, Kentucky, a fine Ottocento in onore del colonnello James E. Pepper."
  },
  {
    "id": "sazerac",
    "name": "Sazerac",
    "category": "Classico di New Orleans",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Speziato",
      "Forte",
      "Erbaceo",
      "Caldo"
    ],
    "strength": "Molto Forte",
    "glass": "Old Fashioned Ghiacciato",
    "color": "#9a3412",
    "badge": "NEW ORLEANS 1850",
    "description": "Il cocktail ufficiale di New Orleans: Rye Whiskey, Peychaud's Bitters e zucchero in un bicchiere aromatizzato all'Assenzio.",
    "ingredients": [
      {
        "name": "Rye Whiskey (o Cognac)",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Assenzio (Absinthe) per il rinsing",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Zolletta di Zucchero",
        "amount": 1,
        "unit": "pezzo"
      },
      {
        "name": "Peychaud's Bitters",
        "amount": 3,
        "unit": "dash"
      }
    ],
    "recipe": [
      "Sciacqua (rinse) un bicchiere ghiacciato con l'assenzio e scarta l'eccesso.",
      "In un secondo bicchiere sciogli lo zucchero con Peychaud's Bitters e aggiungi il Rye con ghiaccio.",
      "Mescola e filtra nel bicchiere profumato d'assenzio senza ghiaccio.",
      "Strizza la scorza di limone in superficie."
    ],
    "tips": "Il Sazerac si serve rigorosamente liscio, senza ghiaccio nel bicchiere finale.",
    "story": "Il più antico cocktail documentato d'America, creato dal farmacista Antoine Peychaud a New Orleans nel 1838."
  },
  {
    "id": "rusty-nail",
    "name": "Rusty Nail",
    "category": "Classico Anni '60",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Caldo",
      "Dolce",
      "Speziato",
      "Erbaceo",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned",
    "color": "#d97706",
    "badge": "RAT PACK CULT",
    "description": "Il leggendario drink del Rat Pack: Scotch Whisky unito alle note calde di miele d'erica ed erbe del Drambuie.",
    "ingredients": [
      {
        "name": "Blended Scotch Whisky",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Drambuie (Liquore Scozzese al Miele ed Erbe)",
        "amount": 25,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un Old Fashioned con ghiaccio.",
      "Versa lo Scotch Whisky e il Drambuie.",
      "Mescola delicatamente per 15 secondi e guarnisci con scorza di limone."
    ],
    "tips": "Uno Scotch leggermente affumicato bilancia divinamente il miele del Drambuie.",
    "story": "Cocktail preferito del Rat Pack di Frank Sinatra e Dean Martin nei locali di Las Vegas e Manhattan."
  },
  {
    "id": "sidecar",
    "name": "Sidecar",
    "category": "IBA Unforgettable",
    "baseSpirit": "Cognac",
    "flavors": [
      "Agrumato",
      "Secco",
      "Caldo",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta con Orlo Zuccherato (Sugar Rim)",
    "color": "#d97706",
    "badge": "PARIS 1920",
    "description": "L'eleganza suprema del Cognac francese unito a Cointreau e succo di limone con bordo di zucchero cristallino.",
    "ingredients": [
      {
        "name": "Cognac VSOP",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 20,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Borda metà della coppetta con zucchero.",
      "Shakera Cognac, Cointreau e succo di limone con ghiaccio per 12 secondi.",
      "Filtra nella coppetta ghiacciata."
    ],
    "tips": "Zucchera solo metà orlo per permettere all'ospite di scegliere se berlo con o senza zucchero.",
    "story": "Creato all'Harry's New York Bar di Parigi alla fine della prima guerra mondiale in onore di un capitano dell'esercito che viaggiava sempre sul sidecar di una moto."
  },
  {
    "id": "french-75",
    "name": "French 75",
    "category": "Classico con Bollicine",
    "baseSpirit": "Gin",
    "flavors": [
      "Frizzante",
      "Agrumato",
      "Secco",
      "Floreale",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Flûte o Coupe Champagne",
    "color": "#fef08a",
    "badge": "CHAMPAGNE COCKTAIL",
    "description": "La potenza di un cannone da 75mm: Gin profumato, limone e sciroppo completati con Champagne o Spumante Brut.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Champagne o Spumante Brut",
        "amount": 60,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera Gin, limone e sciroppo con ghiaccio.",
      "Filtra in una flûte o coppetta.",
      "Colma delicatamente con lo Champagne freddo e guarnisci con scorza di limone a spirale."
    ],
    "tips": "Le bollicine accelerano l'assorbimento dell'alcol: drink fresco ma sorprendentemente potente.",
    "story": "Creato nel 1915 all'Harry's New York Bar di Parigi, paragonato al potente cannone francese da campo da 75 mm."
  },
  {
    "id": "gimlet",
    "name": "Gimlet",
    "category": "Classico Navale",
    "baseSpirit": "Gin",
    "flavors": [
      "Agrumato",
      "Secco",
      "Fresco",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#dcfce7",
    "badge": "ROYAL NAVY",
    "description": "La freschezza essenziale: Gin London Dry unito a Lime Cordial o succo di lime fresco e sciroppo di zucchero.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Lime Cordial (o succo di lime e sciroppo)",
        "amount": 25,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa Gin e lime cordial nello shaker con ghiaccio.",
      "Shakera energicamente per 10 secondi.",
      "Filtra in coppetta ghiacciata e guarnisci con una rondella di lime."
    ],
    "tips": "Il lime cordial autentico apporta una nota citrica concentrata e leggermente candita.",
    "story": "Ideato dal chirurgo della Royal Navy britannica Sir Thomas Gimlette per spingere i marinai a consumare succo di lime contro lo scorbuto."
  },
  {
    "id": "aviation",
    "name": "Aviation",
    "category": "Classico Vintage",
    "baseSpirit": "Gin",
    "flavors": [
      "Floreale",
      "Agrumato",
      "Secco",
      "Fruttato",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#e0e7ff",
    "badge": "VINTAGE 1916",
    "description": "Il colore del cielo all'orizzonte: Gin, liquore Maraschino, Crème de Violette floreale e succo di limone.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Liquore Maraschino Luxardo",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Crème de Violette",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera tutti gli ingredienti con ghiaccio.",
      "Filtra in una coppetta ben fredda.",
      "Guarnisci con una ciliegina al maraschino depositata sul fondo."
    ],
    "tips": "Bastano pochi millilitri di Crème de Violette per donare la tipica sfumatura color azzurro cielo senza sovrastare il palato.",
    "story": "Creato da Hugo Ensslin all'Hotel Wallick di New York nel 1916 agli albori dell'aviazione moderna."
  },
  {
    "id": "clover-club",
    "name": "Clover Club",
    "category": "Classico di Filadelfia",
    "baseSpirit": "Gin",
    "flavors": [
      "Fruttato",
      "Cremoso",
      "Fresco",
      "Agrumato",
      "Floreale"
    ],
    "strength": "Medio",
    "glass": "Coppetta Cocktail",
    "color": "#fb7185",
    "badge": "1896 GENTLEMEN",
    "description": "Velluto rosa e aromi di bosco: Gin, sciroppo fresco di lamponi, succo di limone e albume d'uovo per una schiuma soffice.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Lamponi fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Albume d'uovo pastorizzato o acquafaba",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Esegui prima un dry shake (shakera senza ghiaccio) per emulsionare l'albume.",
      "Aggiungi il ghiaccio e shakera intensamente per 15 secondi.",
      "Filtra con double strain in coppetta per ottenere una schiuma vellutata."
    ],
    "tips": "Il doppio shakeraggio (a secco e poi con ghiaccio) garantisce una crema densa e compatta.",
    "story": "Nato al Bellevue-Stratford Hotel di Filadelfia nel 1896, cocktail preferito dei capitani d'industria del Clover Club."
  },
  {
    "id": "last-word",
    "name": "The Last Word",
    "category": "Classico da Intenditori",
    "baseSpirit": "Gin",
    "flavors": [
      "Erbaceo",
      "Agrumato",
      "Forte",
      "Speziato"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#a7f3d0",
    "badge": "PROHIBITION ERA",
    "description": "Armonia simmetrica in 4 parti uguali: Gin, Chartreuse Verde alle 130 erbe, Liquore Maraschino e succo di lime.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Chartreuse Verde",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Maraschino Luxardo",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 22.5,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa i 4 ingredienti in parti identiche nello shaker con ghiaccio.",
      "Shakera per 12 secondi.",
      "Filtra in coppetta ghiacciata."
    ],
    "tips": "La potenza aromatica della Chartreuse Verde crea una sinfonia botanica senza eguali.",
    "story": "Creato al Detroit Athletic Club durante gli anni del Proibizionismo americano (1920 circa)."
  },
  {
    "id": "singapore-sling",
    "name": "Singapore Sling",
    "category": "Classico Coloniale",
    "baseSpirit": "Gin",
    "flavors": [
      "Tropicale",
      "Fruttato",
      "Speziato",
      "Frizzante"
    ],
    "strength": "Medio",
    "glass": "Hurricane o Collins",
    "color": "#f43f5e",
    "badge": "RAFFLES HOTEL",
    "description": "Il capolavoro esotico del Raffles Hotel: Gin, liquore alla ciliegia Cherry Heering, Cointreau, Bénédictine, ananas e lime.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Cherry Heering (Liquore Ciliegia)",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Cointreau",
        "amount": 7.5,
        "unit": "ml"
      },
      {
        "name": "Bénédictine D.O.M.",
        "amount": 7.5,
        "unit": "ml"
      },
      {
        "name": "Succo d'Ananas",
        "amount": 120,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Granatina",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Angostura Bitters",
        "amount": 1,
        "unit": "dash"
      }
    ],
    "recipe": [
      "Shakera tutti gli ingredienti con ghiaccio abbondante.",
      "Filtra nel bicchiere Hurricane con ghiaccio fresco.",
      "Guarnisci con fetta d'ananas e ciliegia al maraschino."
    ],
    "tips": "Il succo d'ananas shakerato vigorosamente sviluppa una spuma cremosa irresistibile.",
    "story": "Creato dal barman Ngiam Tong Boon al Long Bar del Raffles Hotel di Singapore nel 1915."
  },
  {
    "id": "mint-julep",
    "name": "Mint Julep",
    "category": "Tradizione del Sud USA",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Fresco",
      "Caldo",
      "Balsamico / Menta",
      "Dolce",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Tazza d'Argento o Julep Cup",
    "color": "#86efac",
    "badge": "KENTUCKY DERBY",
    "description": "Il leggendario drink del Kentucky Derby: Bourbon robusto, foglie di menta fresca e ghiaccio tritato a montagnola.",
    "ingredients": [
      {
        "name": "Bourbon Whiskey del Kentucky",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Foglie di Menta fresca",
        "amount": 8,
        "unit": "foglie"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Nella tazza Julep premi leggermente la menta con lo sciroppo.",
      "Riempi a metà con ghiaccio tritato e versa metà del Bourbon.",
      "Mescola, colma con altro ghiaccio tritato a cupola e versa il restante Bourbon.",
      "Guarnisci con un generoso bouquet di menta fresca."
    ],
    "tips": "La tazza d'argento si brina all'esterno: bevi con la cannuccia vicina al ciuffo di menta per inalare il profumo a ogni sorso.",
    "story": "Drink ufficiale del Kentucky Derby dal 1938, dove ne vengono serviti oltre 120.000 durante il weekend di gara."
  },
  {
    "id": "gin-fizz",
    "name": "Gin Fizz",
    "category": "Classico Dissetante",
    "baseSpirit": "Gin",
    "flavors": [
      "Agrumato",
      "Frizzante",
      "Fresco",
      "Secco"
    ],
    "strength": "Leggero-Medio",
    "glass": "Highball / Collins",
    "color": "#f1f5f9",
    "badge": "IBA REFRESHER",
    "description": "L'essenza del rinfresco estivo: Gin London Dry, succo di limone fresco spremuto, sciroppo di zucchero e soda zampillante.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz",
        "amount": 80,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera Gin, succo di limone e sciroppo con ghiaccio.",
      "Filtra nel tumbler alto con ghiaccio fresco.",
      "Colma con la soda e mescola leggermente."
    ],
    "tips": "A differenza del Tom Collins, il Gin Fizz si shakera per renderlo aereo e spumoso.",
    "story": "Popolarissimo a New Orleans tra il 1900 e il 1940 come drink mattutino e rinfrescante."
  },
  {
    "id": "mojito",
    "name": "Mojito Cubano",
    "category": "Caraibico Tradizionale",
    "baseSpirit": "Rum",
    "flavors": [
      "Fresco",
      "Agrumato",
      "Erbaceo",
      "Balsamico / Menta",
      "Frizzante"
    ],
    "strength": "Medio",
    "glass": "Highball / Collins",
    "color": "#10b981",
    "badge": "CUBAN LEGEND",
    "description": "La brezza dell'Avana: Rum Bianco Cubano, menta Yerba Buena risvegliata, succo di lime fresco, zucchero di canna e soda.",
    "ingredients": [
      {
        "name": "Rum Bianco Cubano",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Foglie di Menta Fresca",
        "amount": 8,
        "unit": "foglie"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Zucchero Bianco di Canna",
        "amount": 2,
        "unit": "cucchiaini"
      },
      {
        "name": "Soda / Acqua Gassata",
        "amount": 40,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Nel bicchiere unisci zucchero e succo di lime fresco; mescola per sciogliere lo zucchero.",
      "Aggiungi le foglie di menta sfregate delicatamente tra i palmi (non pestarle con forza).",
      "Riempi di ghiaccio a cubi o tritato grossolanamente.",
      "Versa il Rum e colma con un goccio di soda; mescola delicatamente dal basso verso l'alto."
    ],
    "tips": "La menta va sfregata delicatamente per liberare gli oli essenziali; se pestata rilascia clorofilla amara sgradevole.",
    "story": "Reso immortale da Ernest Hemingway alla celebre \"Bodeguita del Medio\" a L'Avana."
  },
  {
    "id": "daiquiri",
    "name": "Daiquiri Classico",
    "category": "IBA Unforgettable",
    "baseSpirit": "Rum",
    "flavors": [
      "Agrumato",
      "Fresco",
      "Dolce",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail Ghiacciata",
    "color": "#fef9c3",
    "badge": "PURITY ICON",
    "description": "La pietra miliare dell'equilibrio caraibico: Rum Bianco Cubano, succo di lime fresco e sciroppo di zucchero in perfetta armonia.",
    "ingredients": [
      {
        "name": "Rum Bianco Cubano",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa tutti gli ingredienti nello shaker con abbondante ghiaccio.",
      "Shakera energicamente per 12 secondi per raffreddare e ossigenare.",
      "Filtra con double strain in una coppetta cocktail precedentemente ghiacciata."
    ],
    "tips": "Il segreto è la precisione millimetrica tra l'acidità del lime e la dolcezza dello sciroppo.",
    "story": "Nato nel 1898 nella cittadina mineraria di Daiquirí a Cuba dall'ingegnere americano Jennings Cox."
  },
  {
    "id": "hemingway-daiquiri",
    "name": "Hemingway Special (Papa Doble)",
    "category": "Caraibico d'Autore",
    "baseSpirit": "Rum",
    "flavors": [
      "Agrumato",
      "Secco",
      "Fruttato",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#fed7aa",
    "badge": "EL FLORIDITA",
    "description": "La ricetta creata appositamente per Ernest Hemingway: doppia dose di Rum, succo di pompelmo fresco, Maraschino Luxardo e niente zucchero.",
    "ingredients": [
      {
        "name": "Rum Bianco Cubano",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Succo di Pompelmo Rosa fresco",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Liquore Maraschino Luxardo",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera tutti gli ingredienti con ghiaccio tritato.",
      "Filtra in una coppetta ampia e profonda.",
      "Guarnisci con una fetta sottile di pompelmo."
    ],
    "tips": "Il Maraschino dona una dolcezza aromatica di ciliegia marasca che sostituisce egregiamente lo sciroppo di zucchero.",
    "story": "Creato dal leggendario cantinero Constantino Ribalaigua Vert allo storico bar El Floridita di Cuba per Ernest Hemingway."
  },
  {
    "id": "pina-colada",
    "name": "Piña Colada",
    "category": "Caraibico Tropicale",
    "baseSpirit": "Rum",
    "flavors": [
      "Tropicale",
      "Cremoso",
      "Dolce",
      "Vanigliato"
    ],
    "strength": "Medio",
    "glass": "Hurricane Glass",
    "color": "#fef08a",
    "badge": "PUERTO RICO CULT",
    "description": "La regina del relax esotico: Rum Bianco caraibico, vellutata crema di cocco e succo puro d'ananas fresco.",
    "ingredients": [
      {
        "name": "Rum Bianco",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Crema / Latte di Cocco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo d'Ananas 100% puro",
        "amount": 90,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Metti tutti gli ingredienti nel blender con una tazza di ghiaccio tritato (oppure shakera intensamente).",
      "Frulla a velocità sostenuta per 15 secondi fino a una consistenza cremosa vellutata.",
      "Versa nel bicchiere Hurricane e guarnisci con triangolo d'ananas e ciliegina."
    ],
    "tips": "Usa succo d'ananas fresco non zuccherato per non appesantire la ricetta.",
    "story": "Cocktail nazionale di Porto Rico, creato nel 1954 da Ramón \"Monchito\" Marrero al Caribe Hilton di San Juan."
  },
  {
    "id": "mai-tai",
    "name": "Mai Tai",
    "category": "Tiki Tradizionale",
    "baseSpirit": "Rum",
    "flavors": [
      "Tropicale",
      "Speziato",
      "Agrumato",
      "Mandorlato",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Double Old Fashioned / Tiki Mug",
    "color": "#ea580c",
    "badge": "TIKI ROYAL",
    "description": "Il capolavoro della cultura Tiki: blend di Rum scuro invecchiato e Rum agricolo, Orange Curaçao, sciroppo d'orzata francese e lime.",
    "ingredients": [
      {
        "name": "Rum Giamaicano Scuro",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Rum Agricolo Martinica",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Orange Curaçao / Triple Sec",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Sciroppo d'Orzata (Almond Orgeat)",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Metti tutti gli ingredienti nello shaker con ghiaccio tritato.",
      "Shakera intensamente e versa tutto (incluso il ghiaccio) nel bicchiere.",
      "Guarnisci con mezzo guscio di lime rovesciato e un ciuffo di menta a simulare un'isola tropicale."
    ],
    "tips": "La combinazione di rum giamaicano pungente e rum agricolo erbaceo crea la vera complessità Tiki.",
    "story": "Creato nel 1944 da Victor \"Trader Vic\" Bergeron a Oakland. All'assaggio, un'amica tahitiana esclamò \"Mai Tai-Roa Aé!\" (Il migliore del mondo!)."
  },
  {
    "id": "zombie",
    "name": "Zombie",
    "category": "Tiki Leggendario",
    "baseSpirit": "Rum",
    "flavors": [
      "Speziato",
      "Fruttato",
      "Tropicale",
      "Forte",
      "Agrumato"
    ],
    "strength": "Molto Forte",
    "glass": "Tiki Mug o Zombie Glass",
    "color": "#c2410c",
    "badge": "TIKI POWER",
    "description": "Il mostro sacro della miscelazione Tiki: tre tipi di Rum (chiaro, scuro e overproof 151), Falernum speziato, pompelmo, cannella e gocce di assenzio.",
    "ingredients": [
      {
        "name": "Rum Bianco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Rum Scuro Giamaicano",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Rum Overproof 151 (75.5%)",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Sciroppo Falernum speziato",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo di Pompelmo e Succo di Lime",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Cannella e Granatina",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Assenzio",
        "amount": 2,
        "unit": "gocce"
      }
    ],
    "recipe": [
      "Shakera tutti gli ingredienti con ghiaccio tritato per 10 secondi.",
      "Versa nel bicchiere Tiki colmo di ghiaccio.",
      "Guarnisci sontuosamente con menta, stecca di cannella e ciliegia."
    ],
    "tips": "Drink leggendariamente forte: nei bar di Don the Beachcomber c'era il limite di massimo 2 Zombie a persona.",
    "story": "Creato nel 1934 a Hollywood dal padre del movimento Tiki, Donn Beach (Don the Beachcomber)."
  },
  {
    "id": "jungle-bird",
    "name": "Jungle Bird",
    "category": "Modern Tiki",
    "baseSpirit": "Rum",
    "flavors": [
      "Amaro",
      "Tropicale",
      "Agrumato",
      "Speziato"
    ],
    "strength": "Medio-Forte",
    "glass": "Old Fashioned o Calice",
    "color": "#b91c1c",
    "badge": "KUALA LUMPUR 1973",
    "description": "Il perfetto connubio tra Tiki e Bitter italiano: Rum scuro Blackstrap, Bitter Campari, succo d'ananas fresco e succo di lime.",
    "ingredients": [
      {
        "name": "Dark Jamaican o Blackstrap Rum",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Campari Bitter",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo d'Ananas puro",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Unisci tutti gli ingredienti nello shaker con ghiaccio.",
      "Shakera energicamente per montare il succo d'ananas.",
      "Filtra su ghiaccio fresco in un Old Fashioned o bicchiere Tiki."
    ],
    "tips": "L'amaro del Campari taglia magistralmente la densa dolcezza dell'ananas e del rum scuro.",
    "story": "Creato all'Aviary Bar dell'Hilton Hotel di Kuala Lumpur nel 1973 come drink di benvenuto per gli ospiti."
  },
  {
    "id": "dark-and-stormy",
    "name": "Dark 'n' Stormy",
    "category": "Tradizione delle Bermuda",
    "baseSpirit": "Rum",
    "flavors": [
      "Speziato",
      "Piccante",
      "Frizzante",
      "Caldo"
    ],
    "strength": "Medio-Forte",
    "glass": "Highball / Tumbler Alto",
    "color": "#78350f",
    "badge": "BERMUDA ICON",
    "description": "La tempesta nei Caraibi: Ginger Beer piccante e speziata completata da un \"cappello\" di Rum Scuro Black Seal che galleggia in cima.",
    "ingredients": [
      {
        "name": "Goslings Black Seal Rum (o Rum Scuro)",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Ginger Beer artigianale piccante",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un tumbler alto con cubi di ghiaccio.",
      "Versa la Ginger Beer e il succo di lime.",
      "Fai colare dolcemente in superficie il Rum Scuro con il cucchiaio per creare l'effetto di nuvole tempestose."
    ],
    "tips": "Non mescolare prima del servizio: l'effetto visivo dei due strati è spettacolare.",
    "story": "Drink nazionale delle Bermuda, brevettato ufficialmente dai fratelli Gosling dopo la prima guerra mondiale."
  },
  {
    "id": "caipirinha",
    "name": "Caipirinha",
    "category": "Nazionale Brasiliano",
    "baseSpirit": "Rum",
    "flavors": [
      "Agrumato",
      "Fresco",
      "Dolce",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned / Tumbler Basso",
    "color": "#84cc16",
    "badge": "BRASIL 100%",
    "description": "L'anima del Brasile: Cachaça artigianale di canna da zucchero, lime fresco pestato e zucchero di canna.",
    "ingredients": [
      {
        "name": "Cachaça artigianale",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Lime fresco tagliato a cubetti",
        "amount": 1,
        "unit": "frutto"
      },
      {
        "name": "Zucchero Bianco di Canna",
        "amount": 2,
        "unit": "cucchiaini"
      }
    ],
    "recipe": [
      "Taglia il lime a spicchi ed elimina il filamento bianco centrale amaro.",
      "Pesta i pezzi di lime con lo zucchero direttamente nel bicchiere per estrarre succo e oli della buccia.",
      "Riempi di ghiaccio tritato.",
      "Versa la Cachaça e mescola bene dal fondo."
    ],
    "tips": "Usa zucchero bianco di canna: si scioglie più rapidamente rispetto al grezzo scuro.",
    "story": "Nata a San Paolo come rimedio popolare durante l'epidemia di influenza spagnola del 1918, divenuta cocktail simbolo del Carnevale."
  },
  {
    "id": "caipiroska-fragola",
    "name": "Caipiroska alla Fragola",
    "category": "Party Cult Anni '00",
    "baseSpirit": "Vodka",
    "flavors": [
      "Fruttato",
      "Dolce",
      "Agrumato",
      "Fresco"
    ],
    "strength": "Medio",
    "glass": "Old Fashioned",
    "color": "#e11d48",
    "badge": "CLUBBING CLASSIC",
    "description": "Il must dell'estate: Vodka liscia, lime fresco e fragole succose pestate con zucchero di canna e ghiaccio tritato.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Fragole fresche a pezzi",
        "amount": 4,
        "unit": "frutti"
      },
      {
        "name": "Mezzo Lime a cubetti",
        "amount": 0.5,
        "unit": "frutto"
      },
      {
        "name": "Zucchero di Canna",
        "amount": 2,
        "unit": "cucchiaini"
      }
    ],
    "recipe": [
      "Nel bicchiere pesta insieme lime, fragole fresche e zucchero.",
      "Colma il bicchiere con ghiaccio tritato.",
      "Versa la Vodka e mescola energicamente dal basso verso l'alto."
    ],
    "tips": "Le fragole fresche di stagione regalano un profumo e un colore incomparabili rispetto agli sciroppi.",
    "story": "La variante fruttata della Caipiroska più bevuta nei locali italiani e sulle spiagge negli anni 2000."
  },
  {
    "id": "margarita",
    "name": "Margarita Tradizionale",
    "category": "Classico Messicano",
    "baseSpirit": "Tequila",
    "flavors": [
      "Agrumato",
      "Sapido / Salino",
      "Fresco",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppa Margarita o Coppetta con orlo di Sale",
    "color": "#bef264",
    "badge": "MEXICAN ROYALTY",
    "description": "L'icona del Messico: Tequila 100% Blue Agave, Triple Sec Cointreau, succo di lime fresco e crusta di sale marino.",
    "ingredients": [
      {
        "name": "Tequila Blanco 100% Agave",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Sale fino per l'orlo",
        "amount": 1,
        "unit": "pizzico"
      }
    ],
    "recipe": [
      "Inumidisci metà del bordo della coppetta con uno spicchio di lime e immergilo nel sale.",
      "Versa Tequila, Cointreau e succo di lime nello shaker con ghiaccio.",
      "Shakera per 12 secondi ed effettua una doppia filtrazione nel bicchiere."
    ],
    "tips": "Borda con il sale solo metà bicchiere: il sale esalta l'agave ma deve essere opzionale per l'ospite.",
    "story": "Nato a Tijuana o Acapulco negli anni ’30-’40, dedicato a ballerine e dame dell'alta società messicana."
  },
  {
    "id": "tommys-margarita",
    "name": "Tommy's Margarita",
    "category": "Modern Classic",
    "baseSpirit": "Tequila",
    "flavors": [
      "Agrumato",
      "Fresco",
      "Dolce",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned con Ghiaccio",
    "color": "#facc15",
    "badge": "SAN FRANCISCO REVOLUTION",
    "description": "La rivoluzione moderna: lo sciroppo d'agave puro sostituisce il Triple Sec, mettendo in risalto la purezza assoluta della Tequila Reposado.",
    "ingredients": [
      {
        "name": "Tequila Reposado 100% Agave",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Nettare / Sciroppo d'Agave puro",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa Tequila, succo di lime e sciroppo d'agave nello shaker con ghiaccio.",
      "Shakera energicamente per 15 secondi.",
      "Filtra in un bicchiere Old Fashioned colmo di ghiaccio fresco."
    ],
    "tips": "L'uso del nettare d'agave armonizza naturalmente i sentori vegetali della pianta d'agave.",
    "story": "Creato nei primi anni ’90 da Julio Bermejo al celebre Tommy's Mexican Restaurant di San Francisco."
  },
  {
    "id": "mezcal-margarita",
    "name": "Mezcalita (Mezcal Margarita)",
    "category": "Oaxaca Craft",
    "baseSpirit": "Tequila",
    "flavors": [
      "Affumicato",
      "Agrumato",
      "Sapido / Salino",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned o Coppetta",
    "color": "#eab308",
    "badge": "SMOKY OAXACA",
    "description": "La variante affumicata: il Mezcal artigianale cotto nei forni interrati di terra incontra il lime, il Cointreau e il sale affumicato.",
    "ingredients": [
      {
        "name": "Mezcal Espadín Artigianale",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Cointreau / Triple Sec",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Sciroppo d'Agave",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Sale di Sal de Gusano o Sale affumicato",
        "amount": 1,
        "unit": "pizzico"
      }
    ],
    "recipe": [
      "Borda il bicchiere con sale affumicato o sal de gusano.",
      "Shakera Mezcal, Cointreau, succo di lime e agave con ghiaccio.",
      "Filtra su un grande cubo di ghiaccio."
    ],
    "tips": "Le note di fumo e terra del Mezcal creano un contrasto memorabile con la freschezza del lime.",
    "story": "Nato nelle mezcalerias tradizionali di Oaxaca, divenuto must nei cocktail bar di ricerca internazionali."
  },
  {
    "id": "paloma",
    "name": "Paloma",
    "category": "Modern Classic",
    "baseSpirit": "Tequila",
    "flavors": [
      "Agrumato",
      "Frizzante",
      "Sapido / Salino",
      "Fresco"
    ],
    "strength": "Medio",
    "glass": "Highball / Tumbler Alto",
    "color": "#fb7185",
    "badge": "MOST POPULAR IN MX",
    "description": "Il drink più bevuto in Messico: Tequila 100% agave, lime fresco, soda al pompelmo rosa e crusta di sale.",
    "ingredients": [
      {
        "name": "Tequila Blanco",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Soda al Pompelmo Rosa",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Sale fino per l'orlo",
        "amount": 1,
        "unit": "pizzico"
      }
    ],
    "recipe": [
      "Borda il tumbler con sale e riempilo di ghiaccio.",
      "Aggiungi la tequila e il succo di lime.",
      "Colma con soda al pompelmo rosa e mescola delicatamente.",
      "Guarnisci con mezza fetta di pompelmo rosa."
    ],
    "tips": "Una punta di sciroppo d'agave esalta la morbidezza del pompelmo.",
    "story": "Creato da Don Javier Delgado Corona allo storico bar \"La Capilla\" nella cittadina di Tequila."
  },
  {
    "id": "el-diablo",
    "name": "El Diablo",
    "category": "Classico Speziato",
    "baseSpirit": "Tequila",
    "flavors": [
      "Fruttato",
      "Piccante",
      "Frizzante",
      "Speziato"
    ],
    "strength": "Medio",
    "glass": "Highball / Collins",
    "color": "#be123c",
    "badge": "VINTAGE TIKI 1946",
    "description": "Il fascino del diavolo: Tequila Reposado, liquore Crème de Cassis ai ribes neri, succo di lime fresco e Ginger Beer speziata.",
    "ingredients": [
      {
        "name": "Tequila Reposado",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Crème de Cassis (Liquore Ribes)",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Ginger Beer",
        "amount": 80,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera Tequila e succo di lime con ghiaccio.",
      "Filtra in un tumbler alto colmo di ghiaccio.",
      "Aggiungi la Ginger Beer e fai colare il Cassis in cima per creare la colata rossa brillante."
    ],
    "tips": "Il ribes nero apporta un contrasto acido e fruttato perfetto con lo zenzero piccante.",
    "story": "Pubblicato per la prima volta da Victor Bergeron (Trader Vic) nel suo libro del 1946."
  },
  {
    "id": "espresso-martini",
    "name": "Espresso Martini",
    "category": "Modern Classic",
    "baseSpirit": "Vodka",
    "flavors": [
      "Caffè",
      "Dolce",
      "Forte",
      "Vanigliato"
    ],
    "strength": "Forte",
    "glass": "Coppetta Martini Ghiacciata",
    "color": "#291b15",
    "badge": "LONDON 1983",
    "description": "L'energia pura della notte londinese: Vodka pura, liquore Kahlúa al caffè e un espresso bollente shakerato fino a creare una crema densa come velluto.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Liquore al Caffè (Kahlúa)",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Caffè Espresso caldo appena estratto",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 10,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Estrai un caffè espresso fresco e versalo subito nello shaker.",
      "Aggiungi Vodka, Kahlúa, sciroppo di zucchero e cubi di ghiaccio compatti.",
      "Shakera con grandissima forza per 15-20 secondi per sviluppare la schiuma.",
      "Filtra rapidamente con double-strain nella coppetta e adagia 3 chicchi di caffè sulla crema."
    ],
    "tips": "L'espresso deve essere caldo al momento dello shakeraggio: lo shock termico con il ghiaccio produce la celebre schiuma densa.",
    "story": "Creato nel 1983 da Dick Bradsell al Soho Brasserie di Londra per una celebre top model che chiese: \"Something that wakes me up, and then messes me up\"."
  },
  {
    "id": "pornstar-martini",
    "name": "Pornstar Martini",
    "category": "Modern Classic 2000s",
    "baseSpirit": "Vodka",
    "flavors": [
      "Tropicale",
      "Vanigliato",
      "Fresco",
      "Frizzante",
      "Fruttato"
    ],
    "strength": "Medio",
    "glass": "Coppetta Cocktail + Shot di Prosecco a parte",
    "color": "#f59e0b",
    "badge": "GLOBAL BESTSELLER",
    "description": "Il cocktail più ordinato al mondo negli anni 2000: Vodka alla vaniglia, polpa di passion fruit, succo di lime e shotino di Champagne o Prosecco da bere a sorsi alternati.",
    "ingredients": [
      {
        "name": "Vodka alla Vaniglia",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Passoã / Liquore al Passion Fruit",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Purea di Frutto della Passione",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Vaniglia",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Shot di Prosecco o Champagne a parte",
        "amount": 50,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa vodka vaniglia, Passoã, purea di passion fruit, lime e sciroppo nello shaker con ghiaccio.",
      "Shakera energicamente per 15 secondi.",
      "Filtra in una coppetta ghiacciata e galleggia mezzo frutto della passione fresco in superficie.",
      "Servi rigorosamente con uno shot di Prosecco freddo a fianco."
    ],
    "tips": "Gusta prima un cucchiaino di passion fruit, bevi il cocktail e pulisci il palato con il sorso di bollicine.",
    "story": "Creato nel 2002 dal bartender Douglas Ankrah al LAB Bar di Londra, battezzato così per la sua sfacciata edonistica passione."
  },
  {
    "id": "moscow-mule",
    "name": "Moscow Mule",
    "category": "Classico Contemporaneo",
    "baseSpirit": "Vodka",
    "flavors": [
      "Speziato",
      "Piccante",
      "Fresco",
      "Agrumato",
      "Frizzante"
    ],
    "strength": "Medio",
    "glass": "Tazza di Rame (Copper Mug)",
    "color": "#e2e8f0",
    "badge": "COPPER MUG ICON",
    "description": "Fresco e pungente: Vodka pura, succo di lime fresco e la piccantezza speziata della Ginger Beer artigianale.",
    "ingredients": [
      {
        "name": "Vodka Liscia",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Ginger Beer piccante",
        "amount": 120,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi la tradizionale tazza di rame con cubetti di ghiaccio.",
      "Versa la Vodka e il succo di lime appena spremuto.",
      "Colma con Ginger Beer ghiacciata e mescola dolcemente.",
      "Guarnisci con uno spicchio di lime e un rametto di menta."
    ],
    "tips": "La tazza di rame conduce il freddo istantaneamente creando una brina gelida sulle labbra a ogni sorso.",
    "story": "Creato nel 1941 al Chatham Hotel di New York per promuovere sia la Vodka Smirnoff che la Ginger Beer Cock 'n Bull."
  },
  {
    "id": "london-mule",
    "name": "London Mule / Gin Gin Mule",
    "category": "Modern Botanical",
    "baseSpirit": "Gin",
    "flavors": [
      "Erbaceo",
      "Speziato",
      "Piccante",
      "Fresco",
      "Frizzante"
    ],
    "strength": "Medio",
    "glass": "Tazza di Rame o Highball",
    "color": "#ecfdf5",
    "badge": "BOTANICAL TWIST",
    "description": "La variante botanica: le bacche di ginepro del London Dry Gin incontrano lo zenzero piccante e il cetriolo croccante.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Ginger Beer",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Fette di Cetriolo e Menta",
        "amount": 3,
        "unit": "fettine"
      }
    ],
    "recipe": [
      "Nel bicchiere unisci le fettine di cetriolo, il lime e il gin con ghiaccio.",
      "Colma con Ginger Beer speziata e mescola delicatamente.",
      "Guarnisci con un bouquet di menta fresca."
    ],
    "tips": "Il cetriolo dona una freschezza acquatica che si fonde magistralmente con le note di ginepro.",
    "story": "Creato da Audrey Saunders al Pegu Club di New York come fusione tra Moscow Mule e Mojito."
  },
  {
    "id": "cosmopolitan",
    "name": "Cosmopolitan",
    "category": "Modern Classic Anni '90",
    "baseSpirit": "Vodka",
    "flavors": [
      "Agrumato",
      "Fruttato",
      "Secco",
      "Fresco"
    ],
    "strength": "Medio-Forte",
    "glass": "Coppetta Martini Ghiacciata",
    "color": "#fb7185",
    "badge": "SEX AND THE CITY",
    "description": "L'eleganza newyorkese: Vodka al Limone (Citron), Triple Sec Cointreau, succo di mirtillo rosso (cranberry) e lime fresco.",
    "ingredients": [
      {
        "name": "Vodka Citron (al Limone)",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo di Cranberry",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Raffredda la coppetta con ghiaccio.",
      "Nello shaker metti Vodka Citron, Cointreau, cranberry e succo di lime con ghiaccio.",
      "Shakera per 12 secondi e filtra nella coppetta.",
      "Fiammeggia una scorza d'arancia sulla superficie per rilasciare gli oli caramellati."
    ],
    "tips": "Il succo di cranberry serve a dare una sfumatura rosa tenue traslucida, non deve coprire la freschezza degli agrumi.",
    "story": "Perfezionato da Toby Cecchini al The Odeon di Tribeca (NYC) nel 1988 e reso leggendario dalla serie tv Sex and the City."
  },
  {
    "id": "bramble",
    "name": "Bramble",
    "category": "Modern Classic Britannico",
    "baseSpirit": "Gin",
    "flavors": [
      "Fruttato",
      "Agrumato",
      "Fresco",
      "Dolce"
    ],
    "strength": "Medio",
    "glass": "Old Fashioned / Tumbler Basso",
    "color": "#831843",
    "badge": "LONDON 1984",
    "description": "Il profumo dei boschi inglesi: Gin London Dry, succo di limone fresco e sciroppo di zucchero coperti da una cascata di liquore alle more (Crème de Mûre).",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Crème de Mûre (Liquore alle More)",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera Gin, succo di limone e sciroppo di zucchero con ghiaccio.",
      "Filtra in un Old Fashioned riempito fino all'orlo di ghiaccio tritato.",
      "Fai colare delicatamente la Crème de Mûre sopra il ghiaccio per creare l'effetto sfumato scuro.",
      "Guarnisci con due more fresche e una fetta di limone."
    ],
    "tips": "Usa ghiaccio tritato a neve per far penetrare il liquore di more lentamente attraverso il drink.",
    "story": "Creato a Londra nel 1984 dal leggendario bartender Dick Bradsell al Fred's Club di Soho."
  },
  {
    "id": "gin-basil-smash",
    "name": "Gin Basil Smash",
    "category": "Modern Classic Tedesco",
    "baseSpirit": "Gin",
    "flavors": [
      "Erbaceo",
      "Fresco",
      "Agrumato",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned con Ghiaccio",
    "color": "#22c55e",
    "badge": "LE LION 2008",
    "description": "Verde brillante ed esplosione aromatica: un intero mazzo di foglie di basilico fresco pestate con Gin London Dry, limone e zucchero.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Foglie di Basilico Fresco con gambi teneri",
        "amount": 12,
        "unit": "foglie"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 20,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Nello shaker pesta energicamente le foglie di basilico insieme al succo di limone per estrarre la clorofilla verde.",
      "Aggiungi il Gin, lo sciroppo e ghiaccio abbondante.",
      "Shakera con estrema forza per 15 secondi.",
      "Filtra con double strain (colino a maglia fine) in un tumbler con ghiaccio fresco."
    ],
    "tips": "La doppia filtrazione è fondamentale per trattenere tutti i pezzetti di foglia lasciando solo un liquido verde smeraldo puro.",
    "story": "Creato nell'estate del 2008 da Jörg Meyer al bar \"Le Lion\" di Amburgo, diventando immediatamente un classico mondiale."
  },
  {
    "id": "penicillin",
    "name": "Penicillin",
    "category": "Modern Classic NYC",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Affumicato",
      "Speziato",
      "Caldo",
      "Agrumato",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Old Fashioned con Ghiaccio",
    "color": "#ca8a04",
    "badge": "MILK & HONEY 2005",
    "description": "La cura universale: Blended Scotch Whisky, sciroppo fresco di miele e zenzero piccante, succo di limone e un float finale di Scotch torbato Islay.",
    "ingredients": [
      {
        "name": "Blended Scotch Whisky",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Islay Single Malt Torbato (per il float)",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Miele e Zenzero",
        "amount": 20,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera Blended Scotch, limone e lo sciroppo di miele e zenzero con ghiaccio.",
      "Filtra in un Old Fashioned con un grande cubo di ghiaccio.",
      "Fai galleggiare delicatamente lo Scotch torbato Islay in superficie con il bar spoon.",
      "Guarnisci con zenzero candito su stecchino."
    ],
    "tips": "Il whisky torbato in superficie colpisce subito l'olfatto con note di fumo e brace prima che il sorso riveli la dolcezza speziata di zenzero e miele.",
    "story": "Creato nel 2005 da Sam Ross al celebre speakeasy \"Milk & Honey\" di New York City."
  },
  {
    "id": "paper-plane",
    "name": "Paper Plane",
    "category": "Modern Classic",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Amaro",
      "Agrumato",
      "Erbaceo",
      "Forte"
    ],
    "strength": "Medio-Forte",
    "glass": "Coppetta Cocktail",
    "color": "#ea580c",
    "badge": "EQUAL PARTS",
    "description": "Perfetta geometria in 4 parti identiche: Bourbon Whiskey, Aperol, Amaro Nonino Quintessentia alle erbe alpine e succo di limone fresco.",
    "ingredients": [
      {
        "name": "Bourbon Whiskey",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Aperol",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Amaro Nonino Quintessentia",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 22.5,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Versa tutti e quattro gli ingredienti in proporzioni rigorosamente uguali nello shaker con ghiaccio.",
      "Shakera per 12 secondi e filtra con cura in una coppetta ghiacciata."
    ],
    "tips": "L'Amaro Nonino a base di acquavite d'uva dona una delicatezza agrumata insostituibile.",
    "story": "Creato nel 2008 da Sam Ross per il locale The Violet Hour di Chicago, ispirato al brano \"Paper Planes\" di M.I.A."
  },
  {
    "id": "naked-and-famous",
    "name": "Naked and Famous",
    "category": "Modern Mezcal Classic",
    "baseSpirit": "Tequila",
    "flavors": [
      "Affumicato",
      "Erbaceo",
      "Agrumato",
      "Amaro",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#eab308",
    "badge": "DEATH & CO 2011",
    "description": "Il capolavoro del cocktail bar Death & Co: parti uguali di Mezcal artigianale affumicato, Aperol, Chartreuse Gialla e succo di lime fresco.",
    "ingredients": [
      {
        "name": "Mezcal Espadín",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Aperol",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Chartreuse Gialla",
        "amount": 22.5,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 22.5,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Unisci i quattro ingredienti in parti identiche nello shaker con abbondante ghiaccio.",
      "Shakera per 15 secondi.",
      "Filtra in coppetta ghiacciata."
    ],
    "tips": "L'incastro aromatico tra il fumo del Mezcal, il miele della Chartreuse Gialla e l'amaro d'arancia dell'Aperol è straordinario.",
    "story": "Creato nel 2011 da Joaquín Simó al celebre bar \"Death & Co\" nell'East Village di New York."
  },
  {
    "id": "amaretto-sour",
    "name": "Amaretto Sour",
    "category": "Classico Ribilanciato",
    "baseSpirit": "Liquori",
    "flavors": [
      "Dolce",
      "Agrumato",
      "Cremoso",
      "Mandorlato"
    ],
    "strength": "Medio",
    "glass": "Old Fashioned con Ghiaccio",
    "color": "#fde047",
    "badge": "CRAFT REVOLUTION",
    "description": "La celebre versione ribilanciata: Amaretto Disaronno irrobustito da un tocco di Bourbon whiskey, succo di limone fresco e albume setoso.",
    "ingredients": [
      {
        "name": "Amaretto Disaronno",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Bourbon Whiskey (High Proof)",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 5,
        "unit": "ml"
      },
      {
        "name": "Albume d'uovo pastorizzato",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Esegui un dry shake (senza ghiaccio) con tutti gli ingredienti.",
      "Aggiungi cubi di ghiaccio e shakera vigorosamente.",
      "Filtra in un Old Fashioned con ghiaccio fresco e guarnisci con scorza di limone e ciliegina Luxardo."
    ],
    "tips": "Il goccio di Bourbon ad alta gradazione taglia la dolcezza dell'amaretto regalando una struttura da vero cocktail d'autore.",
    "story": "La ricetta moderna creata dal bartender Jeffrey Morgenthaler a Portland nel 2012 ha riabilitato il drink a livello mondiale."
  },
  {
    "id": "crodino-spritz-zero",
    "name": "Crodino Spritz Zero Alcol",
    "category": "Mocktail / Zero Alcol",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Agrumato",
      "Amaro",
      "Frizzante",
      "Fresco"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Calice da vino",
    "color": "#f97316",
    "badge": "ZERO ALCOL",
    "description": "Il rito dell'aperitivo italiano 100% analcolico: l'amaro biondo delle erbe di Crodino con acqua tonica premium e scorza d'arancia.",
    "ingredients": [
      {
        "name": "Crodino Biondo Tradizionale",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Acqua Tonica Premium o Soda",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Fetta d'Arancia fresca",
        "amount": 1,
        "unit": "pezzo"
      }
    ],
    "recipe": [
      "Riempi un calice elegante con ghiaccio abbondante.",
      "Versa il Crodino biondo.",
      "Aggiungi l'acqua tonica fredda e mescola delicatamente per non disperdere le bollicine.",
      "Guarnisci con una mezza fetta d'arancia succosa."
    ],
    "tips": "L'acqua tonica aggiunge una punta di chinino amaricante che dona complessità aromatica.",
    "story": "Nato nel 1965 a Crodo (Piemonte), è l'analcolico biondo per eccellenza della cultura del bar italiano."
  },
  {
    "id": "sanbitter-passion-zero",
    "name": "Sanbitter Passion Zero",
    "category": "Mocktail Fruttato",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Fruttato",
      "Amaro",
      "Fresco",
      "Tropicale",
      "Frizzante"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Tumbler Alto o Calice",
    "color": "#dc2626",
    "badge": "ZERO ALCOL",
    "description": "L'amaro rosso italiano incontra l'esotismo: Sanbitter Rosso, purea di frutto della passione fresca, succo d'arancia e menta.",
    "ingredients": [
      {
        "name": "Sanbitter Rosso",
        "amount": 100,
        "unit": "ml"
      },
      {
        "name": "Purea di Frutto della Passione",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo d'Arancia fresca",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Foglie di Menta fresca",
        "amount": 4,
        "unit": "foglie"
      }
    ],
    "recipe": [
      "Riempi il bicchiere con cubi di ghiaccio.",
      "Versa la purea di passion fruit e il succo d'arancia.",
      "Colma con Sanbitter Rosso e mescola con delicatezza.",
      "Profuma con un ciuffo di menta fresca."
    ],
    "tips": "Il contrasto tra l'amaro del Sanbitter e l'acidità esotica del passion fruit è sorprendente.",
    "story": "Un grande classico dei barman d'hotel italiani per proporre un aperitivo analcolico gourmet."
  },
  {
    "id": "virgin-mojito",
    "name": "Virgin Mojito",
    "category": "Mocktail Fresco",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Fresco",
      "Agrumato",
      "Erbaceo",
      "Balsamico / Menta",
      "Frizzante"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Highball / Tumbler Alto",
    "color": "#10b981",
    "badge": "ZERO ALCOL",
    "description": "Esplosione di freschezza pura: menta fresca risvegliata, lime spremuto, zucchero di canna e Ginger Ale speziata.",
    "ingredients": [
      {
        "name": "Foglie di Menta Fresca",
        "amount": 10,
        "unit": "foglie"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Zucchero di Canna",
        "amount": 2,
        "unit": "cucchiaini"
      },
      {
        "name": "Ginger Ale ghiacciata",
        "amount": 120,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Nel tumbler sciogli lo zucchero nel succo di lime.",
      "Aggiungi la menta sfregata delicatamente.",
      "Riempi di ghiaccio tritato e colma con Ginger Ale ghiacciata.",
      "Mescola dal basso per sollevare gli oli essenziali."
    ],
    "tips": "La Ginger Ale regala una punta piccante che rimpiazza splendidamente il calore del rum.",
    "story": "La variante analcolica più richiesta nei cocktail bar di tutto il mondo."
  },
  {
    "id": "shirley-temple",
    "name": "Shirley Temple",
    "category": "Mocktail Vintage Anni '30",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Dolce",
      "Fruttato",
      "Frizzante",
      "Agrumato"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Highball / Hurricane",
    "color": "#fb7185",
    "badge": "VINTAGE 1930s",
    "description": "Il mocktail più celebre della storia: Ginger Ale frizzante unita a sciroppo di granatina al melograno e ciliegina.",
    "ingredients": [
      {
        "name": "Ginger Ale o Limonata gassata",
        "amount": 120,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Granatina (Melograno)",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Ciliegina al maraschino",
        "amount": 1,
        "unit": "pezzo"
      }
    ],
    "recipe": [
      "Riempi il bicchiere di ghiaccio.",
      "Aggiungi il succo di limone e la Ginger Ale.",
      "Fai colare la granatina al centro e guarnisci con la ciliegina."
    ],
    "tips": "Il tocco di succo di limone fresco evita che risulti eccessivamente dolce.",
    "story": "Creato negli anni ’30 al Chasen's Restaurant di West Hollywood per la giovane attrice prodigio Shirley Temple."
  },
  {
    "id": "virgin-pina-colada",
    "name": "Virgin Piña Colada (Nada Colada)",
    "category": "Mocktail Cremoso",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Tropicale",
      "Cremoso",
      "Dolce",
      "Vanigliato"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Hurricane",
    "color": "#fef08a",
    "badge": "ZERO ALCOL",
    "description": "Tutta la cremosità dei Caraibi senza una goccia d'alcol: crema di cocco vellutata, succo d'ananas fresco e succo di lime.",
    "ingredients": [
      {
        "name": "Succo d'Ananas 100% puro",
        "amount": 120,
        "unit": "ml"
      },
      {
        "name": "Crema di Cocco",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 15,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Frulla tutti gli ingredienti con una tazza di ghiaccio tritato nel blender per 15 secondi.",
      "Versa nel bicchiere Hurricane e spolvera con una punta di noce moscata."
    ],
    "tips": "Il goccio di succo di lime fresco taglia la densità del cocco rendendolo irresistibilmente beverino.",
    "story": "Il drink analcolico preferito nei resort e sulle spiagge tropicali di tutto il mondo."
  },
  {
    "id": "virgin-paloma",
    "name": "Virgin Paloma Rosa",
    "category": "Mocktail Dissetante",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Agrumato",
      "Sapido / Salino",
      "Fresco",
      "Frizzante"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Highball / Tumbler Alto",
    "color": "#f43f5e",
    "badge": "ZERO ALCOL",
    "description": "Rinfrescante e sapido: succo di pompelmo rosa fresco, succo di lime, nettare d'agave e soda con orlo di sale marino.",
    "ingredients": [
      {
        "name": "Succo di Pompelmo Rosa fresco",
        "amount": 80,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Nettare / Sciroppo d'Agave",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Soda frizzante",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Sale marino per l'orlo",
        "amount": 1,
        "unit": "pizzico"
      }
    ],
    "recipe": [
      "Borda metà bicchiere con sale fino.",
      "Shakera succo di pompelmo, lime e nettare d'agave con ghiaccio.",
      "Filtra nel bicchiere colmo di ghiaccio e allunga con soda fredda."
    ],
    "tips": "La combinazione di pompelmo amaro, agave e sale offre un'esperienza gustativa identica a un cocktail alcolico d'autore.",
    "story": "La variante analcolica più apprezzata nei cocktail bar di alta mixology."
  },
  {
    "id": "florida-mocktail",
    "name": "Florida Cocktail",
    "category": "Mocktail Storico IBA",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Agrumato",
      "Fresco",
      "Fruttato",
      "Dolce"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Highball / Tumbler Alto",
    "color": "#fb923c",
    "badge": "IBA MOCKTAIL",
    "description": "Il classico analcolico ufficiale IBA: mix vitaminico di arancia fresca, pompelmo, succo di limone, sciroppo e soda.",
    "ingredients": [
      {
        "name": "Succo d'Arancia fresca",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Succo di Pompelmo fresco",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Zucchero",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Soda / Seltz per colmare",
        "amount": 40,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Shakera i succhi di agrumi e lo sciroppo con ghiaccio.",
      "Filtra in un tumbler alto con ghiaccio fresco e colma con soda.",
      "Guarnisci con mezza fetta d'arancia e foglia di menta."
    ],
    "tips": "Usa rigorosamente agrumi appena spremuti per preservare vitamina C e oli aromatici.",
    "story": "Uno dei primissimi cocktail analcolici inseriti nella codifica ufficiale IBA."
  },
  {
    "id": "bloody-mary",
    "name": "Bloody Mary",
    "category": "Classico Salino & Piccante",
    "baseSpirit": "Vodka",
    "flavors": [
      "Sapido / Salino",
      "Piccante",
      "Speziato",
      "Agrumato",
      "Fresco"
    ],
    "strength": "Medio",
    "glass": "Highball / Tumbler Alto",
    "color": "#dc2626",
    "badge": "SAVORY ICON",
    "description": "Il re indiscusso dei cocktail sapidi e del brunch: succo di pomodoro, vodka, salsa Worcester, tabasco e gambo di sedano croccante.",
    "ingredients": [
      {
        "name": "Vodka",
        "amount": 45,
        "unit": "ml"
      },
      {
        "name": "Succo di Pomodoro",
        "amount": 90,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Salsa Worcestershire",
        "amount": 3,
        "unit": "gocce"
      },
      {
        "name": "Tabasco",
        "amount": 2,
        "unit": "gocce"
      },
      {
        "name": "Sale di sedano & Pepe nero",
        "amount": 1,
        "unit": "pizzico"
      }
    ],
    "recipe": [
      "Versa tutti gli ingredienti in uno shaker o direttamente nel mixing glass con ghiaccio.",
      "Esegui una rullata dolce (tecnica \"throwing\" o \"rolling\") senza shakerare troppo per non rompere la texture del pomodoro.",
      "Filtra in un tumbler alto colmo di ghiaccio fresco.",
      "Guarnisci con un gambo di sedano fresco e una fetta di limone."
    ],
    "tips": "Aggiungi una grattugiata di rafano (horseradish) per una nota piccante e pungente ancora più autentica.",
    "story": "Creato all'Harry's New York Bar di Parigi negli anni '20 dal barman Fernand Petiot."
  },
  {
    "id": "virgin-mary",
    "name": "Virgin Mary (Mocktail)",
    "category": "Mocktail Sapido & Piccante",
    "baseSpirit": "Zero Alcol",
    "flavors": [
      "Sapido / Salino",
      "Piccante",
      "Speziato",
      "Agrumato",
      "Fresco"
    ],
    "strength": "Analcolico (0.0%)",
    "glass": "Tumbler Alto",
    "color": "#ef4444",
    "badge": "SAVORY MOCKTAIL",
    "description": "La versione analcolica del Bloody Mary: un succo di pomodoro condito alla perfezione, piccante, aromatico e rinfrescante.",
    "ingredients": [
      {
        "name": "Succo di Pomodoro",
        "amount": 120,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Salsa Worcestershire",
        "amount": 3,
        "unit": "gocce"
      },
      {
        "name": "Tabasco",
        "amount": 2,
        "unit": "gocce"
      },
      {
        "name": "Sale di sedano & Pepe",
        "amount": 1,
        "unit": "pizzico"
      }
    ],
    "recipe": [
      "Riempi un tumbler alto con cubetti di ghiaccio.",
      "Aggiungi il succo di pomodoro e il succo di limone.",
      "Condisci con tabasco, salsa Worcester, sale di sedano e pepe macinato fresco.",
      "Mescola con il bar spoon e guarnisci con sedano fresco e spicchio di lime."
    ],
    "tips": "Ottimo servito ghiacciatissimo come aperitivo analcolico robusto e dissetante.",
    "story": "Nato per soddisfare chi desidera tutta la complessità aromatica del Bloody Mary senza goccia d'alcol."
  },
  {
    "id": "grasshopper",
    "name": "Grasshopper",
    "category": "Cult Anni '50 / Cremoso",
    "baseSpirit": "Liquori",
    "flavors": [
      "Balsamico / Menta",
      "Cremoso",
      "Dolce",
      "Vanigliato"
    ],
    "strength": "Medio",
    "glass": "Coppetta Cocktail",
    "color": "#4ade80",
    "badge": "AFTER DINNER",
    "description": "Colore verde menta pastello e gusto irresistibile di cioccolatino \"After Eight\": crema di menta verde, crema di cacao bianco e panna fresca.",
    "ingredients": [
      {
        "name": "Crema di Menta Verde",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Crema di Cacao Bianco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Panna Fresca liquida",
        "amount": 30,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Raffredda la coppetta con ghiaccio a parte.",
      "Metti i tre ingredienti in parti rigorosamente uguali nello shaker con ghiaccio abbondante.",
      "Shakera con estrema energia per 15 secondi per emulsionare la panna.",
      "Filtra a doppia colatura nella coppetta ghiacciata."
    ],
    "tips": "Shakera vigorosamente: la panna deve incorporare microbolle creando una soffice schiuma vellutata.",
    "story": "Inventato al Tujague's di New Orleans nel 1918 da Philip Guichet, diventato poi un must negli anni '50 e '70."
  },
  {
    "id": "spicy-margarita",
    "name": "Spicy Jalapeño Margarita",
    "category": "Modern Craft Piccante",
    "baseSpirit": "Tequila",
    "flavors": [
      "Piccante",
      "Agrumato",
      "Sapido / Salino",
      "Fresco",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Tumbler Basso (Old Fashioned)",
    "color": "#84cc16",
    "badge": "SPICY HIT",
    "description": "La piccantezza vibrante del peperoncino Jalapeño pestato incontra il Tequila 100% Agave, il lime fresco e una crusta di sale al chili.",
    "ingredients": [
      {
        "name": "Tequila Blanco 100% Agave",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Cointreau / Triple Sec",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo di Lime fresco",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Sciroppo d'Agave",
        "amount": 10,
        "unit": "ml"
      },
      {
        "name": "Fettine di Jalapeño fresco",
        "amount": 3,
        "unit": "fette"
      },
      {
        "name": "Crusta di Sale & Peperoncino",
        "amount": 1,
        "unit": "bordo"
      }
    ],
    "recipe": [
      "Bagna metà del bordo del bicchiere con lime e intingilo nel mix di sale e polvere di chili.",
      "Nel fondo dello shaker, pesta delicatamente 2 fettine di jalapeño con lo sciroppo d'agave.",
      "Aggiungi Tequila, Cointreau, succo di lime e ghiaccio abbondante.",
      "Shakera forte per 12 secondi e filtra con double strainer sul bicchiere pieno di ghiaccio.",
      "Guarnisci con una fettina di jalapeño fresco."
    ],
    "tips": "Rimuovi i semi del jalapeño se preferisci un calore aromatico medio senza bruciore eccessivo.",
    "story": "Uno dei cocktail contemporanei più richiesti nei cocktail bar di Los Angeles e New York."
  },
  {
    "id": "french-connection",
    "name": "French Connection",
    "category": "Classico da Meditazione",
    "baseSpirit": "Cognac",
    "flavors": [
      "Mandorlato / Noce",
      "Caldo",
      "Dolce",
      "Forte",
      "Vanigliato"
    ],
    "strength": "Forte",
    "glass": "Tumbler Basso / Snifter",
    "color": "#d97706",
    "badge": "DUO CLASSIC",
    "description": "Due soli nobili ingredienti per una sinfonia vellutata: la forza legnosa del Cognac francese fusa con la dolcezza mandorlata dell'Amaretto.",
    "ingredients": [
      {
        "name": "Cognac o Brandy pregiato",
        "amount": 35,
        "unit": "ml"
      },
      {
        "name": "Amaretto Disaronno",
        "amount": 35,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi un bicchiere Old Fashioned con un grande cubo di ghiaccio trasparente.",
      "Versa il Cognac e l'Amaretto direttamente sul ghiaccio.",
      "Mescola delicatamente con il bar spoon per 20 secondi per raffreddare e diluire al punto giusto.",
      "Esprimi una scorza d'arancia sopra il drink se gradito."
    ],
    "tips": "Se preferisci un gusto più secco, usa proporzioni 45ml Cognac e 25ml Amaretto.",
    "story": "Prende il nome dal celebre film poliziesco \"Il braccio violento della legge\" (The French Connection, 1971) con Gene Hackman."
  },
  {
    "id": "st-germain-spritz",
    "name": "St-Germain Spritz Floreale",
    "category": "Aperitivo Floreale",
    "baseSpirit": "Prosecco",
    "flavors": [
      "Floreale",
      "Frizzante",
      "Fresco",
      "Agrumato",
      "Dolce"
    ],
    "strength": "Leggero",
    "glass": "Calice da Vino / Spritz",
    "color": "#fef08a",
    "badge": "FLORAL ELEGANCE",
    "description": "Raffinatissimo e aromatico: il liquore francese ai fiori di sambuco selvatico St-Germain unito al Prosecco Brut e un tocco di soda fresca.",
    "ingredients": [
      {
        "name": "Liquore ai Fiori di Sambuco St-Germain",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Prosecco Brut DOCG",
        "amount": 60,
        "unit": "ml"
      },
      {
        "name": "Soda / Acqua Frizzante",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Fettina di Limone & Rametto di Menta",
        "amount": 1,
        "unit": "pz"
      }
    ],
    "recipe": [
      "Riempi un calice grande con ghiaccio abbondante.",
      "Versa il liquore St-Germain.",
      "Aggiungi il Prosecco e completa con un top di soda.",
      "Mescola delicatamente dal basso e guarnisci con scorza di limone e menta fresca."
    ],
    "tips": "I fiori di sambuco vengono raccolti a mano sulle Alpi francesi a inizio primavera, regalando note aromatiche inimitabili.",
    "story": "L'icona dell'aperitivo parigino contemporaneo, sinonimo di leggerezza ed eleganza botanica."
  },
  {
    "id": "white-lady",
    "name": "White Lady",
    "category": "IBA Unforgettable / Agrumato",
    "baseSpirit": "Gin",
    "flavors": [
      "Agrumato",
      "Secco",
      "Cremoso",
      "Fresco",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#f8fafc",
    "badge": "VINTAGE 1920s",
    "description": "La sorella aristocratica del Sidecar: Gin London Dry, Cointreau e succo di limone fresco, arricchita da una soffice micro-schiuma setosa.",
    "ingredients": [
      {
        "name": "Gin London Dry",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Succo di Limone fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Albume d'uovo (o acquafaba)",
        "amount": 10,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Metti tutti gli ingredienti nello shaker senza ghiaccio ed esegui un \"Dry Shake\" di 10 secondi per montare l'albume.",
      "Aggiungi cubetti di ghiaccio a volontà nello shaker.",
      "Shakera energicamente per altri 12 secondi per raffreddare.",
      "Filtra a doppia colatura in una coppetta ghiacciata."
    ],
    "tips": "Il dry shake crea un cappello di velluto bianco immacolato sopra il drink.",
    "story": "Creato dal leggendario barman Harry MacElhone al Ciro's Club di Londra nel 1919 e perfezionato all'Harry's Bar di Parigi."
  },
  {
    "id": "bahama-mama",
    "name": "Bahama Mama",
    "category": "Tiki Tropicale Caraibico",
    "baseSpirit": "Rum",
    "flavors": [
      "Tropicale",
      "Caffè",
      "Fruttato",
      "Dolce",
      "Speziato"
    ],
    "strength": "Medio-Forte",
    "glass": "Hurricane o Bicchiere Tiki",
    "color": "#fb923c",
    "badge": "CARIBBEAN TIKI",
    "description": "Un viaggio alle Bahamas: doppio rum (scuro e al cocco), liquore al caffè Kahlúa, succo d'ananas, succo d'arancia e un tocco di granatina.",
    "ingredients": [
      {
        "name": "Rum Scuro Invecchiato",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Rum al Cocco (Malibu)",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Liquore al Caffè (Kahlúa)",
        "amount": 15,
        "unit": "ml"
      },
      {
        "name": "Succo d'Ananas",
        "amount": 40,
        "unit": "ml"
      },
      {
        "name": "Succo d'Arancia fresco",
        "amount": 30,
        "unit": "ml"
      },
      {
        "name": "Sciroppo di Granatina",
        "amount": 10,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Inserisci tutti gli ingredienti nello shaker con ghiaccio a cubetti.",
      "Shakera vigorosamente per 15 secondi.",
      "Filtra in un bicchiere Hurricane ricolmo di ghiaccio tritato.",
      "Guarnisci con fetta d'arancia, ciliegina al maraschino e ombrellino tropicale."
    ],
    "tips": "La combinazione insolita tra cocco, ananas e liquore al caffè crea un profilo aromatico avvolgente e unico.",
    "story": "Cocktail simbolo delle Bahamas, reso celebre nei resort e bar caraibici negli anni '60."
  },
  {
    "id": "rob-roy",
    "name": "Rob Roy",
    "category": "Classico Manhattan Scozzese",
    "baseSpirit": "Whiskey",
    "flavors": [
      "Affumicato",
      "Speziato",
      "Caldo",
      "Secco",
      "Forte"
    ],
    "strength": "Forte",
    "glass": "Coppetta Cocktail",
    "color": "#b45309",
    "badge": "SCOTCH CLASSIC",
    "description": "La celebre variante del Manhattan a base di Scotch Whisky scozzese: fumo torbato, spezie del vermouth rosso e gocce di Angostura bitters.",
    "ingredients": [
      {
        "name": "Scotch Whisky (Blended o torbato)",
        "amount": 50,
        "unit": "ml"
      },
      {
        "name": "Vermouth Rosso Dolce di Torino",
        "amount": 25,
        "unit": "ml"
      },
      {
        "name": "Angostura Bitters",
        "amount": 2,
        "unit": "dash"
      }
    ],
    "recipe": [
      "Riempi il mixing glass con cubi di ghiaccio compatti.",
      "Versa lo Scotch Whisky, il Vermouth Rosso e i dash di Angostura.",
      "Mescola con il bar spoon per 30 secondi con movimento fluido.",
      "Filtra con lo julep strainer in una coppetta ben fredda.",
      "Guarnisci con una ciliegina al maraschino o scorza d'arancia."
    ],
    "tips": "Uno Scotch con una leggera nota affumicata conferisce al drink una personalità straordinaria.",
    "story": "Creato nel 1894 al Waldorf Astoria di New York in occasione della prima dell'omonima operetta teatrale dedicata all'eroe popolare scozzese Rob Roy."
  },
  {
    "id": "golden-dream",
    "name": "Golden Dream",
    "category": "Classico Anni '60 IBA",
    "baseSpirit": "Liquori",
    "flavors": [
      "Vanigliato",
      "Agrumato",
      "Cremoso",
      "Dolce"
    ],
    "strength": "Leggero-Medio",
    "glass": "Coppetta Cocktail",
    "color": "#facc15",
    "badge": "GOLDEN GLOW",
    "description": "Un dessert liquido dorato e carezzevole: le note vanigliate e botaniche del Galliano unite a Cointreau, succo d'arancia fresco e panna montata.",
    "ingredients": [
      {
        "name": "Liquore Galliano L'Autentico",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Triple Sec / Cointreau",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Succo d'Arancia fresco",
        "amount": 20,
        "unit": "ml"
      },
      {
        "name": "Panna Fresca liquida",
        "amount": 10,
        "unit": "ml"
      }
    ],
    "recipe": [
      "Riempi lo shaker di ghiaccio.",
      "Versa tutti gli ingredienti (Galliano, Cointreau, succo d'arancia e panna).",
      "Shakera vigorosamente per 15 secondi.",
      "Filtra con double strainer in una coppetta cocktail ben ghiacciata."
    ],
    "tips": "Usa panna fresca da banco frigo ben fredda per una consistenza morbida tipo seta.",
    "story": "Creato negli anni '60 dal barman Raimundo Alvarez all'Old King Bar di Miami Beach e dedicato all'attrice Joan Crawford."
  }
];
