const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'servidorDaSiilvaGamer.aternos.me', // Substitua pelo IP do seu Aternos
  port: 5990,                    // Substitua pela porta numérica do seu Aternos
  username: 'zeroDoBot'           // Nome que o bot vai usar dentro do jogo
})

bot.on('spawn', () => {
  console.log("Bot entrou no servidor com sucesso!")
  
  // Faz o bot executar uma ação de vez em quando para não ser kikado por AFK
  setInterval(() => {
    bot.setControlState('jump', true) 
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 10000) // A cada 10 segundos ele dá um pulinho
})

bot.on('end', () => {
  console.log("O bot desconectou, tentando reconectar...")
  setTimeout(() => {
    // Tenta reconectar automaticamente caso caia
  }, 5000)
})

bot.on('error', (err) => {
  console.log("Erro encontrado: ", err)
})
