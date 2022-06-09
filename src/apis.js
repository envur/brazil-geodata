const axios = require("axios")

exports.getCitiesInSelectedState = async function (state) {
    let citiesInSelectedState = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
    );
    citiesInSelectedState = citiesInSelectedState.data.map((city) => {
      return {text: city.nome, value: city.nome};
    });
    return citiesInSelectedState;
};