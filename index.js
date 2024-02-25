const express = require('express')
const app = express()
const port = 3000
const schedule = require('node-schedule');


// Defina a regra de agendamento para a cada 30 segundos
const rule = new schedule.RecurrenceRule();
rule.second = new schedule.Range(0, 59, 30); // Executa a cada 30 segundos

// Crie a tarefa agendada
const job = schedule.scheduleJob(rule, function() {
    // Coloque a lógica da sua checagem aqui
    console.log('Executando a checagem a cada 30 segundos...');
});

console.log('Tarefa agendada para ser executada a cada 30 segundos.');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })