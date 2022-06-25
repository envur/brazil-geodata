!["Logo"](https://github.com/envur/brazil-geodata/blob/main/assets/brazil-geodata-logo-white.png)

<p align="center">
    <a href="https://github.com/envur/brazil-geodata/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/envur/brazil-geodata" alt="MIT License">
    </a>
    <a href="https://www.npmjs.com/package/brazil-geodata">
        <img src="https://img.shields.io/npm/v/brazil-geodata" alt="NPM Version">
    </a>
    <a href="https://www.npmjs.com/package/brazil-geodata">
        <img src="https://img.shields.io/npm/dm/brazil-geodata" alt="NPM Downloads">
    </a>
    <a href="https://github.com/envur/brazil-geodata">
        <img src="https://img.shields.io/github/contributors/envur/brazil-geodata" alt="GitHub Contributors">
    </a>
</p>

## About

This is an npm library to get data about brazilian cities, states, districts and more.

It's made entirely based on the IBGE's APIs which you can find here: https://servicodados.ibge.gov.br/api/docs/localidades.

I'm still working on it, so far I've implemented functions for every API related to cities ('municípios' at IBGE's site).

## Instalation

```shell
npm i brazil-geodata
```

or

```shell
yarn add brazil-geodata
```

## Usage

You can simply import the lib in your javascript code and start using it right away!

Right now, there's only one option to import, which is `cities`:

```js
import { cities } from "brazil-geodata";
```

```js
const saoPauloCities = cities.getCitiesByState("SP");
```

### Cities:

|       Function        |            Args           | Return Value |
|-----------------------|---------------------------|--------|
|    getCitiesByState   |`state` ("AM", "RS", "RJ"...). You can use multiple states by separating them in a single string using pipes ("AM\|RS\|RJ") | An array containing the `id`, `name` and `value` of each city (name and value are the same.)|
| getCitiesByMesoregion |`mesoregion` (3301, 3302..). The numbers are the IDs of the mesoregions defined by IBGE. You can use multiple mesoregions by separating them in a single string using pipes ("3301\|3302\|3303") | An array containing the `id`, `name` and `value` of each city (name and value are the same.) |
| getCitiesByMicroregion |`microregion` (33001, 33002..). The numbers are the IDs of the mesoregions defined by IBGE. You can use multiple microregions by separating them in a single string using pipes ("33001\|33002\|33003") | An array containing the `id`, `name` and `value` of each city (name and value are the same.) |
| getAllCities | None | An array containing the `id`, `name` and `value` of every brazilian city (name and value are the same.) |
| getCityData | `cityId` (3201209, 1600303...). The numbers are the IDs of the cities defined by IBGE. You can use multiple cities by separating them in a single string using pipes ("3201209\|1600303") | An array containing the `id`, `name` and `value` of the city (name and value are the same.) |
| getCitiesByImmediateRegion |`immediateRegion` (310055, 320005..). The numbers are the IDs of the immediate regions defined by IBGE. You can use multiple immediate regions by separating them in a single string using pipes ("310055\|320005") | An array containing the `id`, `name` and `value` of each city (name and value are the same.) |
| getCitiesByIntermediateRegion |`intermediateRegion` (5202, 5206..). The numbers are the IDs of the intermediate regions defined by IBGE. You can use multiple intermediate regions by separating them in a single string using pipes ("5202\|5206") | An array containing the `id`, `name` and `value` of each city (name and value are the same.) |
| getCitiesByMacroRegion |`macroRegion` (2, 3, 4..). The numbers are the IDs of the macro-regions defined by IBGE. You can use multiple macro-regions by separating them in a single string using pipes ("2\|3\|4") | An array containing the `id`, `name` and `value` of each city (name and value are the same.) |

## Contributing

Wanna help to improve the project? Do you have any critics or would something different? Wonderful! Feel free to make any changes.

Also, if you want, you can always buy me a coffee:

<p align="center">
    <a href="https://www.buymeacoffee.com/envur" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
</p>