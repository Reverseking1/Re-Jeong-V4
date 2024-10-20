require("./database/module")

//GLOBAL PAYMENT
global.storename = "ReverseKing "
global.dana = "-"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "233257514504" //masukin no lu
global.namabot = "ReverseKing"
global.nomorbot = "233257514504" //masukin no lu
global.namaCreator = "ReverseKing "
global.linkyt = "-"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/QXbR0M0/IMG-2996.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e'
global.packname = "Re-Jeong"
global.author = "Re-Jeong"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
