
const app_key = "fbb44a8401e5cb6bdbb8380b4274cbb3";

export const fetchData = async (value) => {
    try {
        const res = await fetch(`https:/api.openweathermap.org/data/2.5/weather?q=${value}&appid=${app_key}`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}