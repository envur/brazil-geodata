const axios = require("axios")

exports.getCitiesByState = async function (state) {
    let citiesInSelectedState = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
    );
    citiesInSelectedState = citiesInSelectedState.data.map((city) => {
      return {id: city.id, text: city.nome, value: city.nome};
    });
    return citiesInSelectedState;
};

exports.getCitiesByMesoregion = async function (mesoregion) {
  let citiesInSelectedMesoregion = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/${mesoregion}/municipios`
  )
  citiesInSelectedMesoregion = citiesInSelectedMesoregion.data.map((city) => {
    return {id: city.id, text: city.nome, value: city.nome};
  });
  return citiesInSelectedMesoregion;
};

exports.getCitiesByMicroregion = async function (microregion) {
  let citiesInSelectedMicroregion = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/${microregion}/municipios`
  )
  citiesInSelectedMicroregion = citiesInSelectedMicroregion.data.map((city) => {
    return {id: city.id, text: city.nome, value: city.nome};
  });
  return citiesInSelectedMicroregion;
};

exports.getAllCities = async function () {
  let cities = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/municipios`
  )
  cities = cities.data.map((city) => {
    return {id: city.id, text: city.nome, value: city.nome};
  });
  return cities;
};

exports.getCityData = async function (cityId) {
  let cityData = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cityId}`
  )
  return cityData.data;
};

exports.getCitiesByImmediateRegion = async function (immediateRegion) {
  let citiesInSelectedImmediateRegion = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/${immediateRegion}/municipios`
  )
  citiesInSelectedImmediateRegion = citiesInSelectedImmediateRegion.data.map((city) => {
    return {id: city.id, text: city.nome, value: city.nome};
  });
  return citiesInSelectedImmediateRegion;
};

exports.getCitiesByIntermediateRegion = async function (intermediateRegion) {
  let citiesInSelectedIntermediateRegion = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/${intermediateRegion}/municipios`
  )
  citiesInSelectedIntermediateRegion = citiesInSelectedIntermediateRegion.data.map((city) => {
    return {id: city.id, text: city.nome, value: city.nome};
  });
  return citiesInSelectedIntermediateRegion;
};

exports.getCitiesByMacroRegion = async function (macroRegion) {
  let citiesInSelectedMacroRegion = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${macroRegion}/municipios`
  )
  citiesInSelectedMacroRegion = citiesInSelectedMacroRegion.data.map((city) => {
    return {id: city.id, text: city.nome, value: city.nome};
  });
  return citiesInSelectedMacroRegion;
};