const cities = require('../src/cities');

jest.setTimeout(30000);

describe("Testing cities functions", () => {

    it("Gets cities by state", async () => {
        const saoPauloCities = await cities.getCitiesByState("SP");
        const federalDistrictCities = await cities.getCitiesByState("DF");

        expect(saoPauloCities[0].text).toBe("Adamantina");
        expect(federalDistrictCities[0].text).toBe("Brasília");
       
        expect(saoPauloCities.length).toBe(645);
        expect(federalDistrictCities.length).toBe(1);
    })

    it("Gets cities by mesoregion", async () => {
        const flumenseNorthwestCities = await cities.getCitiesByMesoregion(3301);
        const flumenseNorthCities = await cities.getCitiesByMesoregion(3302);
        
        expect(flumenseNorthwestCities[0].text).toBe("Aperibé");
        expect(flumenseNorthCities[0].text).toBe("Carapebus");
       
        expect(flumenseNorthwestCities.length).toBe(13);
        expect(flumenseNorthCities.length).toBe(9);
    })

    it("Gets cities by microregion", async () => {
        const itaperunaCities = await cities.getCitiesByMicroregion(33001);
        const tresRiosCities = await cities.getCitiesByMicroregion(33005);

        expect(itaperunaCities[0].text).toBe("Bom Jesus do Itabapoana");
        expect(tresRiosCities[0].text).toBe("Areal");
       
        expect(itaperunaCities.length).toBe(7);
        expect(tresRiosCities.length).toBe(5);
    })

    it("Gets all cities", async () => {
        const allCities = await cities.getAllCities();

        expect(allCities[0].text).toBe("Alta Floresta D'Oeste");
        expect(allCities.length).toBe(5570);
    })

    it("Gets the data of a specific city", async () => {
        const cordeiropolis = await cities.getCityData(3512407);

        expect(cordeiropolis.nome).toBe("Cordeirópolis");
    })

    it("Gets cities by immediate region", async () => {
        const uberabaCities = await cities.getCitiesByImmediateRegion(310055);
        const itapemirimCities = await cities.getCitiesByImmediateRegion(320007);
        
        expect(uberabaCities[0].text).toBe("Água Comprida");
        expect(itapemirimCities[0].text).toBe("Atílio Vivácqua");
       
        expect(uberabaCities.length).toBe(10);
        expect(itapemirimCities.length).toBe(12);
    })

    it("Gets cities by intermediate region", async () => {
        const itumbiaraCities = await cities.getCitiesByIntermediateRegion(5202);
        const rondonopolisCities = await cities.getCitiesByIntermediateRegion(5105);
        
        expect(itumbiaraCities[0].text).toBe("Água Limpa");
        expect(rondonopolisCities[0].text).toBe("Alto Araguaia");
       
        expect(itumbiaraCities.length).toBe(22);
        expect(rondonopolisCities.length).toBe(18);
    })

    it("Gets cities by macro-region", async () => {
        const southeastCities = await cities.getCitiesByMacroRegion(3);
        const southCities = await cities.getCitiesByMacroRegion(4);
        
        expect(southeastCities[0].text).toBe("Abadia dos Dourados");
        expect(southCities[0].text).toBe("Abatiá");
       
        expect(southeastCities.length).toBe(1668);
        expect(southCities.length).toBe(1191);
    })

})