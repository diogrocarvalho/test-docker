'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send({message: 'Hello World'});
});
app.get('/users', (req, res) => {
    res.send([
  {
    "_id": "5f870fec20e9e3daa37dc943",
    "index": 0,
    "guid": "f4ce97b4-f25f-4f6e-b69c-baaf43f86bc7",
    "isActive": false,
    "balance": "$2,738.70",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": {
      "first": "Laurie",
      "last": "Oliver"
    },
    "company": "ACCUFARM",
    "email": "laurie.oliver@accufarm.co.uk",
    "phone": "+1 (885) 515-3483",
    "address": "413 Bedford Place, Golconda, Ohio, 3669",
    "about": "Ut velit ipsum nostrud minim esse ipsum. Commodo sunt magna est fugiat. Dolor aliqua consequat ullamco non pariatur commodo aute irure fugiat ipsum voluptate eu veniam deserunt.",
    "registered": "Thursday, June 12, 2014 6:40 AM",
    "latitude": "4.562538",
    "longitude": "-9.030504",
    "tags": [
      "commodo",
      "dolore",
      "anim",
      "minim",
      "culpa"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Corinne Riley"
      },
      {
        "id": 1,
        "name": "Helga Mcconnell"
      },
      {
        "id": 2,
        "name": "Huffman Kaufman"
      }
    ],
    "greeting": "Hello, Laurie! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f870fec728b9952a360201d",
    "index": 1,
    "guid": "1ff05fee-c349-4ead-be94-e7bfa0629963",
    "isActive": false,
    "balance": "$1,181.16",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": {
      "first": "Payne",
      "last": "Fuller"
    },
    "company": "FANGOLD",
    "email": "payne.fuller@fangold.biz",
    "phone": "+1 (901) 436-2997",
    "address": "986 Hanson Place, Fresno, Vermont, 3752",
    "about": "Velit anim veniam aliquip culpa in commodo est nulla sint amet. Officia ad ea consequat ut mollit ex. Cillum ullamco nisi laboris enim esse consectetur nulla. Sint excepteur aute ea voluptate deserunt in magna. Consectetur do fugiat fugiat minim officia culpa ex nostrud cupidatat pariatur et officia.",
    "registered": "Saturday, March 26, 2016 5:43 PM",
    "latitude": "48.462264",
    "longitude": "0.597014",
    "tags": [
      "irure",
      "culpa",
      "id",
      "commodo",
      "duis"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Maddox Horn"
      },
      {
        "id": 1,
        "name": "Dale Jones"
      },
      {
        "id": 2,
        "name": "Lesley Rush"
      }
    ],
    "greeting": "Hello, Payne! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f870fec764d9a57b150c4bb",
    "index": 2,
    "guid": "da29e11b-ff60-4b57-811d-5785622c1224",
    "isActive": false,
    "balance": "$2,470.32",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Clara",
      "last": "Love"
    },
    "company": "COASH",
    "email": "clara.love@coash.io",
    "phone": "+1 (974) 458-3945",
    "address": "274 Elm Place, Lindisfarne, Palau, 2375",
    "about": "Anim fugiat adipisicing exercitation dolor labore. Laborum pariatur Lorem dolor amet exercitation cupidatat. Lorem magna irure proident voluptate sunt anim labore deserunt officia ea ut. Nulla elit esse commodo occaecat est magna incididunt proident laborum eiusmod ipsum aute culpa ea.",
    "registered": "Wednesday, October 24, 2018 12:01 PM",
    "latitude": "-61.74081",
    "longitude": "-35.999616",
    "tags": [
      "reprehenderit",
      "incididunt",
      "dolore",
      "esse",
      "non"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Holland Whitfield"
      },
      {
        "id": 1,
        "name": "Angelia Bass"
      },
      {
        "id": 2,
        "name": "Joni Witt"
      }
    ],
    "greeting": "Hello, Clara! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f870fec02d447af59493067",
    "index": 3,
    "guid": "2a7b3f64-7c87-47dc-a86a-a5dcf4bb99da",
    "isActive": false,
    "balance": "$2,643.61",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": {
      "first": "Gibbs",
      "last": "Keller"
    },
    "company": "CORPULSE",
    "email": "gibbs.keller@corpulse.ca",
    "phone": "+1 (976) 520-2991",
    "address": "251 Cox Place, Sperryville, Louisiana, 4560",
    "about": "Aliquip in esse fugiat ea Lorem aliqua laborum officia duis. Ullamco aliquip nulla duis in aliquip do esse. Incididunt ex commodo et tempor ex aliqua voluptate id amet nisi. Dolor cillum dolore amet ex officia sit non exercitation qui deserunt. Enim reprehenderit duis ea aliquip ea.",
    "registered": "Sunday, September 16, 2018 4:31 AM",
    "latitude": "-43.63558",
    "longitude": "-45.412561",
    "tags": [
      "fugiat",
      "in",
      "id",
      "laboris",
      "nisi"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Freeman Head"
      },
      {
        "id": 1,
        "name": "Booth Sloan"
      },
      {
        "id": 2,
        "name": "Rivers Baker"
      }
    ],
    "greeting": "Hello, Gibbs! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f870fecba2c60aa2d6e583c",
    "index": 4,
    "guid": "9ae5a193-838d-4bb8-8bcb-275dc3c26ce3",
    "isActive": false,
    "balance": "$3,359.70",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": {
      "first": "Lorena",
      "last": "Wolf"
    },
    "company": "BITENDREX",
    "email": "lorena.wolf@bitendrex.com",
    "phone": "+1 (895) 466-2464",
    "address": "408 Lexington Avenue, Carbonville, American Samoa, 5876",
    "about": "Nulla ad non non sunt aliqua. Cupidatat adipisicing cupidatat ut do aliqua labore ea incididunt incididunt. Voluptate quis pariatur amet magna. Est consectetur tempor in magna aute nulla et. Cillum incididunt occaecat minim ex.",
    "registered": "Friday, September 11, 2020 4:32 AM",
    "latitude": "-40.044066",
    "longitude": "0.798106",
    "tags": [
      "esse",
      "reprehenderit",
      "sint",
      "sint",
      "ex"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Louisa Rutledge"
      },
      {
        "id": 1,
        "name": "Gayle Rivera"
      },
      {
        "id": 2,
        "name": "Carla Maddox"
      }
    ],
    "greeting": "Hello, Lorena! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f870fec5cf57211abcc4acc",
    "index": 5,
    "guid": "a4158cd7-4bec-46bb-a190-0e311804eddc",
    "isActive": false,
    "balance": "$3,299.59",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": {
      "first": "Lynda",
      "last": "Mcpherson"
    },
    "company": "DAIDO",
    "email": "lynda.mcpherson@daido.org",
    "phone": "+1 (979) 450-2243",
    "address": "190 Surf Avenue, Wedgewood, New York, 1180",
    "about": "Fugiat exercitation duis ut mollit deserunt. Irure velit cillum dolore ea officia dolor amet cillum adipisicing sit Lorem. Incididunt ipsum magna ad proident proident nisi dolore do eu deserunt reprehenderit commodo. Cupidatat voluptate eiusmod qui commodo duis minim esse incididunt fugiat. Cupidatat laborum tempor dolore ipsum nostrud labore anim dolore. Est exercitation duis Lorem non est commodo tempor Lorem cupidatat velit officia eu labore quis.",
    "registered": "Monday, April 6, 2020 11:45 AM",
    "latitude": "-4.789313",
    "longitude": "-133.010684",
    "tags": [
      "quis",
      "eiusmod",
      "sit",
      "cillum",
      "quis"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hansen Lott"
      },
      {
        "id": 1,
        "name": "Summer Palmer"
      },
      {
        "id": 2,
        "name": "Giles Jacobson"
      }
    ],
    "greeting": "Hello, Lynda! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f870fec21dc1c6fc6cd8fef",
    "index": 6,
    "guid": "1482b9c9-5cd2-40ba-ba41-ff1254344571",
    "isActive": false,
    "balance": "$1,576.08",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": {
      "first": "Parrish",
      "last": "Villarreal"
    },
    "company": "MOREGANIC",
    "email": "parrish.villarreal@moreganic.name",
    "phone": "+1 (918) 418-2122",
    "address": "105 Ivan Court, Rew, Iowa, 146",
    "about": "Proident incididunt incididunt eu velit cupidatat velit id cillum non voluptate proident aliquip. Laborum velit commodo et occaecat exercitation amet ex in ex ad incididunt ullamco culpa excepteur. Minim sit laboris eu id aliqua officia pariatur minim dolor nostrud officia dolor. Id aute cillum veniam consectetur dolore Lorem ad in est reprehenderit sit minim qui. Esse eiusmod cupidatat magna occaecat eiusmod dolore.",
    "registered": "Monday, August 17, 2015 11:33 AM",
    "latitude": "-32.532521",
    "longitude": "177.017359",
    "tags": [
      "do",
      "reprehenderit",
      "consectetur",
      "adipisicing",
      "veniam"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Valerie Scott"
      },
      {
        "id": 1,
        "name": "Maxwell Duran"
      },
      {
        "id": 2,
        "name": "Bernadette Pittman"
      }
    ],
    "greeting": "Hello, Parrish! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f870fec2c6b76702aa28e53",
    "index": 7,
    "guid": "4ca2556b-53a0-4fe6-9340-7b3f8f45e605",
    "isActive": true,
    "balance": "$1,863.99",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": {
      "first": "Ramona",
      "last": "Walsh"
    },
    "company": "BIOHAB",
    "email": "ramona.walsh@biohab.biz",
    "phone": "+1 (988) 550-3787",
    "address": "325 Overbaugh Place, Rutherford, Illinois, 7790",
    "about": "Officia aliquip aliquip mollit eiusmod minim cillum sunt laborum duis aliqua magna Lorem sunt excepteur. Veniam reprehenderit ut labore minim ipsum Lorem occaecat pariatur irure in. Voluptate voluptate aliquip ut enim culpa ullamco aliqua occaecat qui.",
    "registered": "Sunday, March 26, 2017 2:50 AM",
    "latitude": "-33.778123",
    "longitude": "-92.695193",
    "tags": [
      "non",
      "pariatur",
      "sunt",
      "ad",
      "id"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ida Snow"
      },
      {
        "id": 1,
        "name": "Jayne Marshall"
      },
      {
        "id": 2,
        "name": "Marie Camacho"
      }
    ],
    "greeting": "Hello, Ramona! You have 8 unread messages.",
    "favoriteFruit": "banana"
  }
])
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
