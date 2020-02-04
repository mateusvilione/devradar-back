# DevRadar :rocket:

Projeto desenvolvido na 10° semana OmniStack da [RocketSeat](https://rocketseat.com.br/) com o objetivo de aprender as tecnologias:

- [React](https://reactjs.org);
- [React Native](https://facebook.github.io/react-native/);
- [Node.js](https://nodejs.org/en/);
- [Expo](https://expo.io/).

## Projeto

O projeto DevRadar tem como objetivo conectar desenvolvedores por meio da localização dentro do limite de 10km. As aulas foram ministradas pelo [Diego Fernandes](https://github.com/diego3g).

---

## API

HOST: https://devradar-back-end.herokuapp.com/

## Desenvolvedores [/devs]

#### Cadastrar um desenvolvedor [POST]

> Request (application/json)

Data Structures
- github_username: "mateusvilione" (string, required)
- techs: "React, React Native, Node.js" (string, required)
- latitude: -23.5991659 (number)
- longitude: -46.7005801 (number)

```JSON
{
	"github_username": "mateusvilione",
	"techs": "React, React Native, Node.js",
	"latitude": -23.5991659,
	"longitude": -46.7005801
}
```

> Response 200 (application/json)

```JSON
{
    "message": {
        "techs": [
            "React",
            "React Native",
            "Node.js",
            "git"
        ],
        "_id": "5e39d1ab7755770021251668",
        "github_username": "mateusvilione",
        "name": "Mateus Vilione",
        "avatar_url": "https://avatars2.githubusercontent.com/u/15036533?v=4",
        "bio": "Formado em Análise e Desenvolvimento de Sistema na Fatec Rubens Lara",
        "location": {
            "coordinates": [
                -46.7005801,
                -23.5991659
            ],
            "_id": "5e39d1ab7755770021251669",
            "type": "Point"
        },
        "__v": 0
    }
}
```

#### Listar todos os desenvolvedores [GET]

> Response 200 (application/json)

```JSON
[
    {
        "techs": [
            "React",
            "React Native",
            "Node.js",
            "git"
        ],
        "_id": "5e39d1ab7755770021251668",
        "github_username": "mateusvilione",
        "name": "Mateus Vilione",
        "avatar_url": "https://avatars2.githubusercontent.com/u/15036533?v=4",
        "bio": "Formado em Análise e Desenvolvimento de Sistema na Fatec Rubens Lara",
        "location": {
            "coordinates": [
                -46.7005801,
                -23.5991659
            ],
            "_id": "5e39d1ab7755770021251669",
            "type": "Point"
        },
        "__v": 0
    },
    {
        "techs": [
            "Selenium",
            "Cucumber",
            "Java",
            "Ruby"
        ],
        "_id": "5e39d1cf775577002125166a",
        "github_username": "raquelvilione",
        "name": "Raquel Vilione",
        "avatar_url": "https://avatars1.githubusercontent.com/u/15036567?v=4",
        "bio": "‎",
        "location": {
            "coordinates": [
                -46.6986169,
                -23.5840556
            ],
            "_id": "5e39d1cf775577002125166b",
            "type": "Point"
        },
        "__v": 0
    },
    {
        "techs": [
            "Selenium",
            "Cucumber",
            "Java",
            "Ruby"
        ],
        "_id": "5e39d20a775577002125166c",
        "github_username": "juanbg10",
        "name": "Juan Bertoluzzi Garcia",
        "avatar_url": "https://avatars3.githubusercontent.com/u/36767325?v=4",
        "bio": "Studying Internet Systems in FATEC Santos.",
        "location": {
            "coordinates": [
                -46.7081681,
                -23.574173
            ],
            "_id": "5e39d20a775577002125166d",
            "type": "Point"
        },
        "__v": 0
    },
    {
        "techs": [
            "React",
            "React Native",
            "Node.js",
            "git",
            "Java"
        ],
        "_id": "5e39d22c775577002125166e",
        "github_username": "fbarrella",
        "name": "Felipe Barrella",
        "avatar_url": "https://avatars2.githubusercontent.com/u/15387751?v=4",
        "bio": "Developer on development",
        "location": {
            "coordinates": [
                -46.7176378,
                -23.5498061
            ],
            "_id": "5e39d22c775577002125166f",
            "type": "Point"
        },
        "__v": 0
    }
]
```

## Filtro [/search?longitude=<VALUE>&latitude=<VALUE>&techs=<tech1,tech2>]

#### Listar todos os desenvolvedores por localização e tecnologias [GET]

> Response 200 (application/json)

```JSON
[
    {
        "techs": [
            "React",
            "React Native",
            "Node.js",
            "git"
        ],
        "_id": "5e39d1ab7755770021251668",
        "github_username": "mateusvilione",
        "name": "Mateus Vilione",
        "avatar_url": "https://avatars2.githubusercontent.com/u/15036533?v=4",
        "bio": "Formado em Análise e Desenvolvimento de Sistema na Fatec Rubens Lara",
        "location": {
            "coordinates": [
                -46.7005801,
                -23.5991659
            ],
            "_id": "5e39d1ab7755770021251669",
            "type": "Point"
        },
        "__v": 0
    },
    {
        "techs": [
            "React",
            "React Native",
            "Node.js",
            "git",
            "Java"
        ],
        "_id": "5e39d22c775577002125166e",
        "github_username": "fbarrella",
        "name": "Felipe Barrella",
        "avatar_url": "https://avatars2.githubusercontent.com/u/15387751?v=4",
        "bio": "Developer on development",
        "location": {
            "coordinates": [
                -46.7176378,
                -23.5498061
            ],
            "_id": "5e39d22c775577002125166f",
            "type": "Point"
        },
        "__v": 0
    }
]
```

---
Desenvolvido por Mateus Vilione