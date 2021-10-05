import axios from 'axios';

const api=axios.create({

//Bases de API conversão de moeda gratuita
//https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=778dad229f043e885305
//https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

    baseURL:'https://economia.awesomeapi.com.br/last'
});

export default api;