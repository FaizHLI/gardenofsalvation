export function calculateSavings(prompts) {
    const ENERGY_SAVED_PER_PROMPT = 2.5; // Wh per prompt
    const WATER_SAVED_PER_KWH = 2500; // milliliters per kWh
    const CO2_SAVED_PER_KWH = 920; // g CO2 per kWh
    const SMARTPHONE_ENERGY_PER_WH = 4.5;
    const MILES_PER_KG_CO2 = 3.33;

    const whToKwh = (wh) => wh / 1000;
    const energySavedWh = prompts * ENERGY_SAVED_PER_PROMPT;
    const energySavedKwh = whToKwh(energySavedWh);
    
    return {
        energySavedWh: `${energySavedWh.toFixed(2)} Wh`,
        energySavedKwh: `${energySavedKwh.toFixed(2)} kWh`,
        waterSaved: `${(energySavedKwh * WATER_SAVED_PER_KWH).toFixed(2)} mL`,
        co2Saved: `${(energySavedKwh * CO2_SAVED_PER_KWH).toFixed(2)} g`,
        milesSaved: `${((energySavedKwh * CO2_SAVED_PER_KWH)/1000 * MILES_PER_KG_CO2).toFixed(2)} miles`,
        smartphoneHoursSaved: `${(energySavedWh * SMARTPHONE_ENERGY_PER_WH).toFixed(1)} hours`
    };
}
