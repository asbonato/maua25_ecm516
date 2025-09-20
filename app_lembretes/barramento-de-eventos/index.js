const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

const eventos = [];

app.post("/eventos", (req, res) => {
  const evento = req.body;
  eventos.push(evento);
  //envia o evento para o microsserviço de lembretes
  axios.post("http://lembretes-clusterip-service:4000/eventos", evento).catch((err) => {});
  //envia o evento para o microsservico de observacoes
  axios.post("http://observacoes-clusterip-service:5000/eventos", evento).catch((err) => {});
  //envia o evento para o microsservico de consulta
  axios.post("http://consulta-clusterip-service:6000/eventos", evento).catch((err) => {});
  //envia o evento para o microsservico de classificacao
  axios.post("http://classificacao-clusterip-service:7000/eventos", evento).catch((err) => {});
  res.status(200).send({ msg: "ok" });
});

app.get("/eventos", (req, res) => {
  res.send(eventos);
});

app.listen(10000, () => {
  console.log("Barramento de eventos v1. Porta 10000.");
});
