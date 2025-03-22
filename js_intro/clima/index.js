const axios = require('axios')
require('dotenv').config()
const appid = process.env.API_KEY
const q = 'São Caetano do Sul'
const units = 'metric'
const lang = 'pt_br'
const cnt = '10'
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`

axios.get(url)
    .then(res => {
        console.log(res)
        return res.data
    })
    .then(res => {
        console.log(res.cnt)
        return res
    })
    .then(res => {
        console.log("aqui", res)
        return res['list']
    })
    .then(res => {
        for (let previsao of res) {
            console.log(
            `
            ${new Date(previsao.dt * 1000).toLocaleString()},
            ${'Min : '+previsao.main.temp_min}\u00B0C,
            ${'Max : '+previsao.main.temp_max}\u00B0C,
            ${'Umid: '+previsao.main.humidity}%,
            ${previsao.weather[0].description}
            `)
        }
        return res
    })
    .then(res => {
        const lista = res.filter(r => r.main.feels_like >= 30)
        console.log(`${lista.length} previsões com sensação térmica acima de 30 graus.`)
    })
    .catch(err => {
        console.log(err)
    })