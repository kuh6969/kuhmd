/**
	*APAAN BRO? SC BY ramadhankukuh
	*MAU BANTU KEMBANGIN/NGEFIX YG EROR? LANGSUNG COMMIT AJA BANG
	*CONTACT https://wa.me/6282135724604
*/
const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('./utils/smsg');
const { y2mateV, y2mateA } = require('./utils/ytdl');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("./lib/color")
const moment = require('moment-timezone');
const ytdl = require('ytdl-core');
const hentai = require('nhentai');
const fdl = require("caliph-api");
const BochilTeam = require('@bochilteam/scraper')
const hikki = require("hikki-me");
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const crypto = require('crypto')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
global.prem = require("./lib/premium")
const {isLimit:isLimit,limitAdd:limitAdd,getLimit:getLimit,giveLimit:giveLimit,addBalance:addBalance,kurangBalance:kurangBalance,getBalance:getBalance,isGame:isGame,gameAdd:gameAdd,givegame:givegame,cekGLimit:cekGLimit} = require("./lib/limit")
//let regis = JSON.parse(fs.readFileSync('./database/reg.json'));
//global.limit=JSON.parse(fs.readFileSync("./database/limit.json"))
let print = console.log;
//const cooldown = new Map();
const cooldown = new Map();

const fke = '```'

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}
  
	var idtrx = createSerial(6)

module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	//var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.omessage.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
	const jsn = JSON.parse(fs.readFileSync('./src/database.json'));
	const snt = JSON.parse(fs.readFileSync('./database/anoucement.json'));
	const dta = JSON.parse(fs.readFileSync('./database/setting.json'));
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const isOwner = number.includes(sender)
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	//const isReg = regis.includes(sender)
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium);
	
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	//const isSpam = timestamps.set(from, now)
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
	require('./setting');
	
	/*function printSpam(conn, isGc, sender, groupName) {
	if (isGc) {
		return conn.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"), "in", color(groupName, "lime"));
	}
	if (!isGc) {
		return conn.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"));
	}
}*/

const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

	//FAKE REPLY EX : { quoted: fake }
	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "628989898299-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Hallo* _${pushname} 👋_\n	╰≻ ${prefix + command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "628989898299-1589321480@g.us","inviteCode": "m","groupName": "KuhXD", "caption": `© KuhXD - Bot`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "628989898299-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}

		//TEMPLATE BUTTON!
		const buttonsDefault = [
			//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285849261085` } },
			{ urlButton: { displayText: `website`, url : `https://ramadhankukuh.my.id` } },
			{ quickReplyButton: { displayText: `🧑 owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 donate`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `🗼 ping bot`, id: `${prefix}pingbot` } }
		]

		//PREM EXP
		prem.expiredCheck(conn, m, premium);
		
		//EXP
		if (jsn[0].expired !== false) {
  		if (jsn[0].expired < Date.now()) {
    		jsn[0] = {
      		setting: 'tidak ada iklan',
      		expired: false
    		}
    		fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
  		}
		}

		//ANTI SPAM GA WORK, FIX AJA KALO BISA
/*if (!command) return;
const isSpam = true;
const cooldownAmount = 5;
function printSpam(conn, isGroup, sender, groupName) {
  if (isGroup) {
    return console.log("Detect SPAM", color(sender.split("@")[0], "lime"), "in", color(groupName, "lime"));
  }
  if (!isGroup) {
    return console.log("Detect SPAM", color(sender.split("@")[0], "lime"));
  }
}

if (!cooldown.has(from)) {
  cooldown.set(from, new Map());
}

const now = Date.now();
const timestamps = cooldown.get(from);
const cdAmount = (cooldownAmount || 5) * 1000;
if (timestamps.has(from)) {
  const expiration = timestamps.get(from) + cdAmount;
  if (now < expiration) {
    if (isGroup) {
      let timeLeft = (expiration - now) / 1000;
      printSpam(conn, isGroup, sender, groupName);
      return await conn.sendMessage(
        from,
        {
          text: `This group is on cooldown, please wait another _${timeLeft.toFixed(1)} second(s)_`,
        },
        {
          quoted: m
        }
      );
    } else if (!isGroup) {
      let timeLeft = (expiration - now) / 1000;
      printSpam(conn, isGroup, sender);
      return await conn.sendMessage(
        from,
        {
          text: `You are on cooldown, please wait another _${timeLeft.toFixed(1)} second(s)_`,
        },
        {
          quoted: m
        }
      );
    }
  }
}

setTimeout(() => timestamps.delete(from), cdAmount);

if (isSpam) {
  timestamps.set(from, now);
}*/
		
	/*if (optionsCmd.isPremium && !isPremium) {
			await conn.sendMessage(msg.from, { text: response.OnlyPrem }, { quoted: msg });
			return true;
		}*/
		
   // Push Message To Console && Auto Read
        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> Dari'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> Di'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta('──────────────────────────────────────────────────────'))
        }
//+++++++++++++ START COMMAND +++++++++++++++
switch(command){
			case'menu':
			case'help': {
				footerr = `Peringatan : Dilarang spam command/apapun ke bot!, dikarena mengakibatkan bot eror!`
				txt = `${fke}Hi ${m.pushName} 👋, i'am KuhXD - Bot * ${fke}

╭──❲ *KUHXD BOT - MD* ❳
│
│ *Info*
│> *Nama :* _「 ${m.pushName} 」_
│> *Status :* _「 ${isPremium ? "Premium" : "Free"} 」_
│> *Nomer :* _「 ${m.sender.split("@")[0]} 」_
│> *Jam :* _「 ${times(new Date)} 」_
│> *Tanggal :* _「 ${tanggal(new Date)} 」_
│> *Runtime :* _「 ${runtime(process.uptime())} 」_
│
│ *Keterangan*
│ • 🆆 = Fitur Berfungsi
│ • 🅴 = Fitur Eror
│ • 🅼 = Fitur Maintenance 
│
│ *Search Menu:*
│   ╰≻ ${prefix}play [query] 🆆
│   ╰≻ ${prefix}ytsearch [query] 🆆
│   ╰≻ ${prefix}pinterest 🆆
│
│ *Group Menu:*
│   ╰≻ ${prefix}add [number] 🆆
│   ╰≻ ${prefix}kick [tag] 🆆
│   ╰≻ ${prefix}tagall [psn] 🆆
│   ╰≻ ${prefix}promote [tag] 🆆
│   ╰≻ ${prefix}demote [tag] 🆆
│   ╰≻ ${prefix}setname [text] 🆆
│   ╰≻ ${prefix}setppgroup [reply] 🆆
│   ╰≻ ${prefix}setdesk [text] 🆆
│   ╰≻ ${prefix}hidetag [text] 🆆
│   ╰≻ ${prefix}totag [reply] 🆆
│   ╰≻ ${prefix}linkgroup 🆆
│
│ *Convert Menu :*
│   ╰≻ ${prefix}nulis [text] 🆆
│   ╰≻ ${prefix}sticker/s 🆆
│   ╰≻ ${prefix}stickergif 🆆
│   ╰≻ ${prefix}swm [q|q] 🆆
│   ╰≻ ${prefix}toimg [reply] 🆆
│   ╰≻ ${prefix}style [text] 🆆
│   ╰≻ ${prefix}emojimix (😊+😐) 🆆
│   ╰≻ ${prefix}emojimix2 (😐+😊) 🅼
│   ╰≻ ${prefix}smeme [q|q] 🆆
│   ╰≻ ${prefix}ttp [text] 🆆
│   ╰≻ ${prefix}attp [text] 🆆
│   ╰≻ ${prefix}ebinary [text] 🆆
│   ╰≻ ${prefix}dbinary [code] 🆆
│   ╰≻ ${prefix}tomp4 [send/reply] 🆆
│   ╰≻ ${prefix}toaud [send/reply] 🆆
│   ╰≻ ${prefix}tomp3 [send/reply] 🆆
│   ╰≻ ${prefix}tovn [send/reply] 🆆
│   ╰≻ ${prefix}togif [send/reply] 🆆
│   ╰≻ ${prefix}tourl [send/reply] 🆆
│
│ *Fun Menu :*
│   ╰≻ ${prefix}menfes 🆆
│   ╰≻ ${prefix}jadian 🆆
│   ╰≻ ${prefix}jodohku 🆆
│
│ *Downloader Menu :*
│   ╰≻ ${prefix}tiktok [url] 🆆
│   ╰≻ ${prefix}tiktokaudio [url] 🆆
│   ╰≻ ${prefix}ytmp3 [url] 🆆
│   ╰≻ ${prefix}ytmp4 [url] 🆆
│
│ *Premium Menu :*
│   ╰≻ ${prefix}join [link] 🆆
│
│ *Other Menu :*
│   ╰≻ ${prefix}requestfitur [text] 🆆
│   ╰≻ ${prefix}ping 🆆
│   ╰≻ ${prefix}listonline 🆆
│   ╰≻ ${prefix}listgc 🆆
│   ╰≻ ${prefix}listpc 🆆
│
│ *Owner Menu :*
│   ╰≻ ${prefix}setiklan 🆆
│   ╰≻ ${prefix}block [tag] 🆆
│   ╰≻ ${prefix}unblock [tag] 🆆
│   ╰≻ ${prefix}setstatusbot [text] 🆆
│   ╰≻ ${prefix}setmamebot [text] 🆆
│   ╰≻ ${prefix}setppbot [reply] 🆆
│   ╰≻ ${prefix}cekkomisi 🆆
│   ╰≻ ${prefix}leave 🆆
│   ╰≻ ${prefix}anticall 🆆
│   ╰≻ ${prefix}addprem [tag jum] 🆆
│   ╰≻ ${prefix}delprem [tag] 🆆
│   ╰≻ ${prefix}tarikkomisi [jum] 🆆
│   ╰≻ ${prefix}sf [reply code] 🆆
│   ╰≻ ${prefix}addanoucment (new fitur) 🆆
│   ╰≻ > 🆆
│   ╰≻ => 🆆
│   ╰≻ $ 🆆
│
│ *Store*
│   │≻ *Followers/Like/View*
│   │		╰≻ ${prefix}order ( cara order) 🆆
│   │		╰≻ ${prefix}followers [jum|targ] 🆆
│   │		╰≻ ${prefix}view [jum|link] 🆆
│   │		╰≻ ${prefix}like [jum|link] 🆆
│   │		╰≻ ${prefix}cekstatus [id] 🆆
│   │		╰≻ ${prefix}prichlist 🆆
│   │		
│   ╰≻ *Tes*
│
│ *Anoucement 📢 :*
│   ╰≻ Added ${snt[4]}
│   ╰≻ Added ${snt[3]}
│   ╰≻ Added ${snt[2]}
│   ╰≻ Added ${snt[1]}
│   ╰≻ Added ${snt[0]}
│
╰────────────────⊱
`,
					btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/ramadhankukuh'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://ramadhankukuh.my.id'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❗ CREDITS',
                                    id: 'credit'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤 OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '[NEW] CONFESS',
                                    id: 'menfes'
                                }
                            }]

				conn.send5ButLoc(from, txt, footerr, global.thumb, btn)
				conn.sendMessage(from, {text : `*This is an ad*\n\n•───────────•\n${jsn[0].setting}\n•───────────•\n\n_© 2022 KuhXD - BOT_`}, {quoted :{
				key: { fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "628989898299-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `*Hallo* _${pushname} 👋_\n	╰≻ Iklan _(mau pasang iklan? hub owner!)_`,
				"title": `Pasang iklan murah bang`,
				'jpegThumbnail': global.thumb}}}}
				)
 				 }                      
				break
			case 'donasi': 
					case 'sewabot': 
					case 'sewa': 
					case 'buypremium': 
					case 'donate': {
					 let pes = `*Hallo kak, mau invite bot/donasi ya*
					
*⚠️ Nomor :*
(Dana, OVO, GoPay, ShopeePay)
	╰≻ 08989800046
(XL)
	╰≻ 08176878884
(Qris)
	╰≻ Click the button below. 

*💯 Keuntungan :*
> Add ke group max 2 group
> - 

*📝 Note :*
> Trimakasih yaa, ngga rugi kok jika kakak menambahkan bot ini ke dalam group kaka, karena hanya dengan membayar seikhlasnya kak hehe.
> hasil dari bot ini akan digunakan untuk menyewa server dan perkembangan bot ini!
> _Mengapa owner menetapkan biaya seikhlasnya?, Kenapa owner tidak mengambil untung yang banyak?_ *Dikarenakan owner menjalankan bot ini hanya untuk mengisi waktu luang/belajar, dan mempermudah pengguna bot😁.*

*❗ Penting :*
Konfirmasi pembayaran mu dengan menunjjukan bukti transfer kepada owner!
						`
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
                    {buttonId: `qriscrizzy`, buttonText: {displayText: 'Pay With QRIS'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: 'Confirm to owner'}, type: 2} 
                ]
					conn.sendMessage(from, { caption: pes, image: { url: 'https://i.ibb.co/5KyLnCd/photo1663509809.jpg' } , buttons: but, footer: `Thank you for your help and support to this bot, hopefully the sustenance will be smoother. \n For more information, please contact the owner!\n\n© 2022 Kukuh` })
					} 
				break
			case 'qriscrizzy':{
				let captionQris = `Hay terimakasih sudah membantu, semoga rezekinya semakin lancar. \n\nKonfirmasi pembayaranmu dengan menunjjukan bukti transfer kepada owner yaa😊🙏`
				bta = [
                 	   {buttonId: `owner`, buttonText: {displayText: 'Confirm to owner'}, type: 1} 
             	   ]
						conn.sendMessage(from, { caption: captionQris, image: { url: 'https://i.ibb.co/5KyLnCd/photo1663509809.jpg' } , buttons: bta, footer: `Thank you for your help and support to this bot, hopefully the sustenance will be smoother. \n\n© 2022 Kukuh` })
						} 
			 
				break
			case 'addprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				m.reply("Sukses");
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				m.reply("Sukses via nomor");
						}
					}
				break
			case 'delprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					m.reply("Sukses");
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				m.reply("sukses via nomor");
				}
				}
				break
				case 'jadwalbioskop': {
					if (!q) throw `Example: ${prefix + command} jakarta`
					let { bioskop } = require('@bochilteam/scraper')
					const res = await bioskop(`${q}`).catch(e => {m.reply('Error, Atau Tidak Ada Jadwal Bioskop Yang Tersedia')})
					let capt = `Jadwal Bioskop From : ${q}\n\n`
					capt += `⭔ Title: ${res[0].title}\n`
					capt += `⭔ Genre: ${res[0].genre}\n`
					capt += `⭔ Durasi: ${res[0].duration}\n`
					capt += `⭔ Rilis: ${res[0].release}\n`
					capt += `⭔ Director: ${res[0].director}\n`
					capt += `⭔ Cast: ${res[0].cast}\n`
					capt += `⭔ Thumbnail: ${res[0].img}\n`
					capt += `⭔ Url: ${res[0].url}\n\n──────────────────────\n`
					but = [
						{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/ramadhankukuh` } },
						{ urlButton: { displayText: `Website`, url : `https://ramadhankukuh.my.id` } },
							]
						conn.sendMessage(from, { caption: capt, image: {url: res[0].img}, templateButtons: but, footer: `© 2022 KuhXD - BOT` })
					}
					break
					case 'nowplayingbioskop': {
					let { bioskopNow } = require('@bochilteam/scraper')
					const res = await bioskopNow().catch(e => {m.reply('Error, Atau Tidak Ada Jadwal Bioskop Yang Tersedia')})
					let capt = `Sedang Tayang\n\n`
					capt += `⭔ Title: ${res[0].title}\n`
					capt += `⭔ Genre: ${res[0].genre}\n`
					capt += `⭔ Durasi: ${res[0].duration}\n`
					capt += `⭔ Playing At: ${res[0].playingAt}\n`
					capt += `⭔ Thumbnail: ${res[0].img}\n`
					capt += `⭔ Url: ${res[0].url}\n\n──────────────────────\n`
					but = [
						{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/ramadhankukuh` } },
						{ urlButton: { displayText: `Website`, url : `https://ramadhankukuh.my.id` } },
							]
						conn.sendMessage(from, { caption: capt, image: {url: res[0].img}, templateButtons: but, footer: `© 2022 KuhXD - BOT` })
					}
					break
			case 'tes':{
				//if (!isPremium) return m.reply('premium only')
				m.reply('affah iyh')
				}
				break
			case 'join': {
                if (!isPremium) return m.reply('premium only')
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                m.reply('wait bg...')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	    }
           	 break
			case 'leave': {
                if (!isCreator) return m.reply(act.owner)
                await conn.groupLeave(from).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                console.log()
            	}
             break
			case 'setsponsor':
			case 'setiklan':
				if (!isCreator) return m.reply(act.owner)
				if (args.length < 1) return m.reply('text nya mana')
				let intex = q.split('|')[0] ? q.split('|')[0]: q
				let expr = q.split('|')[1] ? q.split('|')[1]: ''
				exo = Date.now() + toMs(expr)
				newvalue = {
  				setting: intex,
  				expired: exo
				}
				oldvalue = jsn[0].setting
				let position = false
				Object.keys(jsn).forEach((i) => {
  				if (jsn[i].setting === oldvalue) {
    				position = i
  				}
				})
				if (position !== false) {
  				jsn[position] = newvalue
  				fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
				}
				m.reply(`Iklan sukses diganti menjadi : *${jsn[0].setting}*`)
				break
			case 'owner':
			case 'creator': {
                conn.sendContact(from, global.owner, m)
          	  }
        	    break
			case'nulis':
				if(args.length < 1) return m.reply('text nya')
				m.reply(act.proc)
				await conn.sendMessage(from,{image:{url:`https://api.zekais.com/bukukanan?text=${body.slice(6)}&apikey=zekais`},caption:act.done},{quote:m}).catch((e) => m.reply(e))
				break
			case 'sticker': case 's': case 'stickergif': case 'sgif': {
        	   if (/image/.test(mime)) {
        	   m.reply(act.proc)
              	  let media = await conn.downloadMediaMessage(qmsg)
            	    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
             	   await fs.unlinkSync(encmedia)
         	   } else if (/video/.test(mime)) {
        	    m.reply(act.proc)
        	        if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
             	   let media = await conn.downloadMediaMessage(qmsg)
             	   let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
        	        await fs.unlinkSync(encmedia)
      	      } else {
       	         m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
       	         }
        	    }
        	    break
			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	m.reply(act.proc)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                /*} else if (/document/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)*/
                } else {
                    m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
        	    }
        	    break
			case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
                m.reply('Wait bang...')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(from, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
       	     }
     	       break
			case 'play':
			case 'ytplay': {
                if (!text) return m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply(act.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                	{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/ramadhankukuh` } },
                    { quickReplyButton: { displayText: `Audio`, id: `ytmp3 ${anu.url}` } },
                    { quickReplyButton: { displayText: `Video`, id: `ytmp4 ${anu.url}` } }
                ]
                let buttonMessage = {
                    image : { url: anu.thumbnail },
                    caption : `YOUTUBE PLAY`,
                    footer : `⊳ Title : ${anu.title}
⊳ Ext : Search
⊳ ID : ${anu.videoId}
⊳ Duration : ${anu.timestamp}
⊳ Viewers : ${anu.views}
⊳ Upload At : ${anu.ago}
⊳ Author : ${anu.author.name}
⊳ Channel : ${anu.author.url}
⊳ Description : ${anu.description}
⊳ Url : ${anu.url}`,
                    templateButtons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
                console.log(anu)
      	      }
      	      break
			case 'yts':
			case 'ytsearch': {
                if (!text) m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply("Please wait... data is being processed!")
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
				var list = []

                let no = 1
                for (let i of search.all) {
                	list.push({

				title: `*${no++} ${i.title}*`, rowId: `dariytskunci ${i.url}`, description: `\n\n▢ Judul : ${i.title}\n▢ ID : ${i.videoId}\n▢ Channel : ${i.author.name}\n▢ Upload : ${i.ago}\n▢ Ditonton : ${i.views}\n▢ Duration : ${i.timestamp}\n▢ URL : ${i.url}`})

				}

				var sections = [{title: `Hallo *${pushname}* 👋 Silahkan pilih dibawah ini`, rows:list}]

				var listms = { text: `*YOUTUBE SEARCH*\n\nBerhasil Menemukan Data\nHasil Pencarian : ${q}\nSilahkan Pilih Dibawah Ini`, footer: `Id : Jangan lupa donasi untuk suport bot yaa\nEn : don't forget to donate to support bots\n\n© 2022 Kukuh`, buttonText: "Click Here", sections }

				conn.sendMessage(from, listms, m)

               }
          	  break
			case 'dariytskunci':{ //KUNCI = BIAR GA DR AKSES HEHE
				let { yta } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command} blabla`)
                let quality = args[1] ? args[1] : '128kbps'
                let resmed = await yta(text, quality)
                if (resmed.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(resmed))
                btnYts = [
                    { urlButton: { displayText: `Instagram`, url : `https://instagram.com/ramadhankukuh` } },
                    { quickReplyButton: { displayText: `Audio`, id: `resaudkunci ${q}` } },
                    { quickReplyButton: { displayText: `𝐕𝐢𝐝𝐞𝐨`, id: `resvidkunci ${q}` } }
                ]
                conn.sendMessage(from, { caption: `⭔ Title : ${resmed.title}\n⭔ File Size : ${resmed.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, image: {url: resmed.thumb}, templateButtons: btnYts, footer: `© 2022 ramadhankukuh.com` })
				}
				break
			case 'resaudkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				let { yta } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command} dhdh`)
                let quality = args[1] ? args[1] : '128kbps'
                let medd = await yta(text, quality)
                if (medd.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(medd))
                conn.sendMessage(from, { audio: { url: medd.dl_link }, mimetype: 'audio/mpeg', fileName: `${medd.title}.mp3` }, { quoted: m })
                }
                break
			case 'resvidkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				let { ytv } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command} https://youtube.com/ 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                }
                break
				case 'imagenobg': case 'removebg': case 'remove-bg': {
					if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
					if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
					if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
					let remobg = require('remove.bg')
					let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
					let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
					hmm = await './src/remobg-'+getRandom('')
					localFile = await conn.downloadAndSaveMediaMessage(quoted, hmm)
					outputFile = await './src/hremo-'+getRandom('.png')
					m.reply('Loading. . .')
					remobg.removeBackgroundFromImageFile({
					  path: localFile,
					  apiKey: apinobg,
					  size: "regular",
					  type: "auto",
					  scale: "100%",
					  outputFile 
					}).then(async result => {
					conn.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: 'Success'}, { quoted : m })
					await fs.unlinkSync(localFile)
					await fs.unlinkSync(outputFile)
					})
					}
					break
			case 'ytmp3':
			case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=xxx 128kbps`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
       	     }
        	    break
            case 'ytmp4':
			case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=xxx 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
        	    }
        	    break
			case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah *${prefix}${command} nomer|pengirim|pesan*\n\nContoh *${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you*\n\nContoh 2 : *${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you*\n\nTenang aja privasi aman kok. ga kayak komin**><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*KuhXD - BOT*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ \n\n─────────────\nKamu bisa pilih opsi dibawah ingin terima atau kirim`
				header = 'hayyy'
					gambar = `https://telegra.ph/file/4fda9764fb634c8721cfa.jpg`

				 but = [
					{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/ramadhankukuh` } },
					{ urlButton: { displayText: `Website`, url : `https://ramadhankukuh.my.id` } },
                    { quickReplyButton: { displayText: `Terima Menfess`, id: `menfesconfirm ${m.sender}` } },
                    { quickReplyButton: { displayText: `Kirim Menfesmu`, id: `Menfess` } }
                		]
					conn.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://telegra.ph/file/4fda9764fb634c8721cfa.jpg`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\n© 2022 KuhXD - BOT` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break

				case 'trxgame':
					if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
					if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah *${prefix}${command} nomer|pengirim|pesan*\n\nContoh *${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you*\n\nContoh 2 : *${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you*\n\nTenang aja privasi aman kok. ga kayak komin**><`)
					let no = q.split('|')[0] ? q.split('|')[0] : q
					let chat = q.split('|')[1] ? q.split('|')[1] : q
					if (chat.length < 1) return m.reply(`Harus di isi semua! ex : menfess 628xxxxxxxx|orderan`)
					 let anu = `Halo Kak ${m.pushName} Berikut Detail Transaksi Kamu\n\nNo Invoice : ${idtrx}\n\n${chat}`
					header = 'hayyy'
						gambar = `https://telegra.ph/file/018d277caed5db9af2e7a.jpg`
						footer = `BOT TRANSAKSI OTOMATIS BY KUKUH`

					 but = [
						{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/ramadhankukuh` } },
						{ urlButton: { displayText: `Website`, url : `https://ramadhankukuh.my.id/topup` } },
						{ quickReplyButton: { displayText: `Customer Service`, id: `owner` } }
							]
							conn.send5ButLoc(`${no}@s.whatsapp.net`, anu, footer, gambar, but)
					m.reply(`Sukses Mengirim Invoice!!`)
					break

					case 'pengumumanbot':
						if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
						if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah *${prefix}${command} nomer|pengirim|pesan*\n\nContoh *${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you*\n\nContoh 2 : *${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you*\n\nTenang aja privasi aman kok. ga kayak komin**><`)
						let n = q.split('|')[0] ? q.split('|')[0] : q
						let c = q.split('|')[1] ? q.split('|')[1] : q
						if (c.length < 1) return m.reply(`Harus di isi semua! ex : pengumumanbot 628xxxxxxxx|pengumuman`)
						 let a = `${c}`
						header = 'hayyy'
							gambar = `https://telegra.ph/file/3e6570b149771d3b5fd7a.jpg`
							footer = `BOT ANNOUNCEMENT`
	
						 but = [
							{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/ramadhankukuh` } },
							{ urlButton: { displayText: `Website`, url : `https://ramadhankukuh.my.id/topup` } },
							{ quickReplyButton: { displayText: `Customer Service`, id: `owner` } }
								]
								conn.send5ButLoc(`${n}@s.whatsapp.net`, a, footer, gambar, but)
						m.reply(`Sukses Mengirim ANNOUNCEMENT!!`)
						break

			case 'menfesconfirm':
 				 conn.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
			case 'tiktoknowm':
			case 'tiktokmp4':
			case 'tiktok':
			case 'tt':
			    if (!q) return m.reply('masukkan link nya')
				let p = await BochilTeam.tiktokdlv3(q)
				m.reply('Loading. . .')
				let nih = ` *TIKTOK DOWNLOADER*

⭔ *Creator:* Kukuh
⭔ Nickname : ${p.author.nickname}
⭔ Desc : ${p.description}`
				let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.video.no_watermark },
                    caption: nih,
                    title: 'TIKTOK DOWNLOADER',
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
            
			    break
			case 'tiktokmp3': 
			case 'tiktokaudio': {
				if (!text) return m.reply('masukkan link nya')
				let aud = await BochilTeam.tiktokdlv3(text)
				m.reply('Loading. . .')
				let cap = ` *TIKTOK AUDIO*

⭔ *Creator:* Kukuh
⭔ Nickname : ${aud.author.nickname}
⭔ Desc : ${aud.description}`
				conn.sendMessage(from, { caption: cap, image: {url: aud.author.avatar}})
				conn.sendMessage(from, { document: { url: aud.music }, fileName: 'KuhXD - TikTod.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
				}
				break
			/*case 'topup': {
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let nyobb = [{
  				title: "Game Store",
  				rows: [
							{title: `*Free Fire 5 Diamond*`,rowId: `epep ${q}|5`, description: `\nTop up diamond free fire 5`},
							{title: `*Free Fire 12 Diamond*`,rowId: `epep ${q}|12`, description: `\nTop up diamond free fire 12`},
							{title: `*Free Fire 70 Diamond*`,rowId: `epep ${q}|70`, description: `\nTop up diamond free fire 70`},
							{title: `*Free Fire 140 Diamond`,rowId: `epep ${q}|140`, description: `\nTop up diamond free fire 140`},
							{title: `*Free Fire 355 Diamond`,rowId: `epep ${q}|355`, description: `\nTop up diamond free fire 355`},
							{title: `*Free Fire 720 Diamond`,rowId: `epep ${q}|720`, description: `\nTop up diamond free fire 720`}
				]},
				]
				conn.sendListMsg(from, `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`, `© 2022\nKukuh (owner bot)\nAffis Junianto (owner smm)`, `Hallo, Berikut layanan kami`, `Click Here`, nyobb, m)
				}
				break
          	case 'epep':
          //async function topupFreeFire() {
          	let idtar = q.split('|')[0] ? q.split('|')[0]: q
				let jumjum = q.split('|')[1] ? q.split('|')[1]: ''
				if (jumjum.length < 1) return m.reply(`Jumlah dan Target harus di isi!`)
const makeSession = await hikki.game.topupFreeFire(`${idtar}`, `${jumjum}`) // support nominal 5 12 70 140 355 720'
 //console.log(makeSession) //if get more property
buto = [{
    				buttonId: `cekstatus`,
    				buttonText: {
      				displayText: 'Check Status'
    				},
    				type: 1
  				}]
conn.sendMessage(from, {
    				caption: `bayar\ntime : ${makeSession.data.timerCount}`, image: {
      				url: makeSession.data.qrCode
    				}
  				})
// const paydm = hikki.game.payDiamond(makeSession, '08953225697662')
console.log(paydm)
//topupFreeFire().then(console.log).catch(console.error)
//}
break*/
			case'create': case 'sf':
				if (!isCreator) return m.reply(act.owner)
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				//fs.writeFileSync(`./${q}`,JSON.stringify(q))
				await require("fs").writeFileSync(q, m.quoted.text);
				m.reply('success')
				break
			case 'kick': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'add': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.gc)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'promote': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'demote': {
				if (!m.isGroup) return m.reply(act.gc)
      		  if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			//BC BELOM WORK BANH
			case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return m.reply(act.owner)
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Hallo semua`)
                let anu = await conn.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
				for (let yoi of anu) {
		  	  await sleep(1500)
			    let btn = [{
                                urlButton: {
                                    displayText: '𝑺𝑼𝑷𝑶𝑹𝑻 𝑼𝑺!',
                                    url: 'https://instagram.com/ramadhankukuh'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑴𝑬𝑵𝑼',
                                    id: 'menu'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑺𝑪𝑹𝑰𝑷𝑻',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 ALL Broadcast Bot 」\n\n${text}`
                      conn.send5ButImg(yoi, txt, conn.user.name, global.thumb, btn)
					}
					m.reply('Sukses Broadcast')
          		  }
         		   break
			case 'bcgc': case 'bcgroup': {
                if (!isCreator) return m.reply(act.owner)
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Hallo semua`)
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '𝑺𝑼𝑷𝑶𝑹𝑻 𝑼𝑺!',
                                    url: 'https://instagram.com/ramadhankukuh'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑴𝑬𝑵𝑼',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑺𝑪𝑹𝑰𝑷𝑻',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Group 」\n\n${text}`
                      conn.send5ButLoc(i, txt, global.footer, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
			case 'tesbut':{
			let buttons = [
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 1},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 2},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 3},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 4},
                    {buttonId: `tes`, buttonText: {displayText: 'tes'}, type: 5}
                ]
                conn.sendMessage(from, {text:`*NGETES BUTTON*`, title: 'WALLET', footer: '© 2022 Kukuh', buttons: buttons})
                }
                break
			case 'request': case 'requestfitur':{
				if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Tambahin fitur tiktok downloader dong`)
				conn.sendMessage(`628989898299@s.whatsapp.net`, {text: `*Hallo owner ada yang request fitur nih*\n\nPesan : ${text}\nPengirim : ${m.sender}`}, {quoted: {key: { fromMe: false,
				participant: `${m.sender}`, ...(from ? { remoteJid: "628989898299-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `Request Fitur!`,
				"title": `Pasang iklan murah bang`,
				'jpegThumbnail': global.thumb}}}})
				m.reply('suksess request')
				}
				break
			case 'tagall': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply('jadikan gw admin dulu')
                if (!isAdmins) return m.reply('only admin')
				let teks = `─────✪〘 *👥 Tag All* 〙✪─────
 
 ≻ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `╰≻ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
			case 'jodohku': {
           	 if (!m.isGroup) return m.reply(act.gc)
          	  let member = participants.map(u => u.id)
          	  let me = m.sender
          	  let jodoh = member[Math.floor(Math.random() * member.length)]
          	  let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
           	 let ments = [me, jodoh]
          	  let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, jawab, global.footer, m, {mentions: ments})
          	  }
           	 break
            case 'jadian': {
           	 if (!m.isGroup) return m.reply(act.gc)
          	  let member = participants.map(u => u.id)
           	 let orang = member[Math.floor(Math.random() * member.length)]
          	  let jodoh = member[Math.floor(Math.random() * member.length)]
            	let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
         	   let menst = [orang, jodoh]
          	  let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, jawab, global.footer, m, {mentions: menst})
       	     }
        	    break
			case 'addanoucment': case 'addnewfitur':
				if (!isCreator) return m.reply(act.owner)
				snt.push(`${q}`)
				snt.splice(0,1)
				fs.writeFileSync('./database/anoucement.json', JSON.stringify(snt))
				m.reply('success anoucement!')
				break
			case 'block': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
      	  case 'unblock': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'copystyle':
				if (args.length < 2) return m.reply(`khusus button`)
				let judul = q.split('|')[0] ? q.split('|')[0] : q
				let style = q.split('|')[1] ? q.split('|')[1] : ''
				var captionnye = `copy hasilnya dibawah ya!\n\nName : ${judul}\nStyle : ${style}`
				var copynye = `${style}`
				const menuButa = [
    				{index: 1, urlButton: {displayText: `Copy Here`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}}
				]
  			  await conn.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: `Terimakasih telah menggunan Crizzy-Bot\nDonasi untuk suport bot!\n\n© 2022 Kukuh` })
				break
	  	  case 'style': case 'styletext': {
				let { styletext } = require('./lib/scraper')
				if (!text) return m.reply('Masukkan Query text!')
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                var list = []
                for (let i of anu) {
                list.push({
				title: i.name, rowId: `copystyle ${i.name} | ${i.result}`, description: `${i.result}`})
				}
				var sections = [{title: `Pilih salah satu lalu kirim.`, rows:list}]
				var listms = { text: `*Srtle Text*\n\nBerhasil menemukan sytle font\nSilahkan pilih font yang anda suka.`, footer: `Terimakasih telah menggunan Crizzy-Bot\nDonasi untuk suport bot!\n\n© 2022 Kukuh`, buttonText: "Click Here", sections }
				conn.sendMessage(from, listms, {quoted:m})
	  		  }
	  		  break
			case 'anticall': {
           	 if (!isCreator) return m.reply(act.owner)
                let ciko = JSON.parse(fs.readFileSync('./database/setting.json'));
                if (args[0] === "on") {
                if (ciko.setting.anticall == true) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko.setting.anticall = true
				fs.writeFileSync('./database/setting.json', JSON.stringify(ciko))
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (ciko.setting.anticall == false) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko.setting.anticall = false
				fs.writeFileSync('./database/setting.json', JSON.stringify(ciko))
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, `Mode AntiCall`, global.footer, m)
                }
          	   }
       	      break
			case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
       	     }
         	   break
			case 'pinterest': {
               	 m.reply(act.wait)
					let { pinterest } = require('./lib/scraper')
               	 anu = await pinterest(text)
               	 result = anu[Math.floor(Math.random() * anu.length)]
              	  conn.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
         		   }
          		  break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       	 if (!/image/.test(mime)) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
      	      if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
	   	     m.reply(act.wait)
       	     atas = text.split('|')[0] ? text.split('|')[0] : '-'
      	      bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	  	      let dwnld = await conn.downloadMediaMessage(qmsg)
	 	       let { floNime } = require('./lib/uploader')
	  	      let fatGans = await floNime(dwnld)
	       	 let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	  	      let has = await conn.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
	  	      await fs.unlinkSync(has)
       	     }
	  	      break     
			case 'emojimix': {
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
				if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
				for (let res of anu.results) {
				    let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				    await fs.unlinkSync(encmedia)
				}
	 		   }
	  		  break
			case 'emojimix2': {
	  		  if (!text) return m.reply(`Example : ${prefix + command} 😅`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
				for (let res of anu.results) {
		  	  let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		 	   await fs.unlinkSync(encmedia)
				}
	  		  }
	  		  break
	        case 'attp': case 'ttp': {
          	  if (!text) return m.reply(`Example : ${prefix + command} text`)
         	   await conn.sendMedia(from, `https://xteam.xyz/${command}?file&text=${text}`, 'Fadhil', 'Graphy', m, {asSticker: true})
    		    }
     		   break
			case 'setname': case 'setsubject': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply('Text ?')
                await conn.groupUpdateSubject(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
       	     }
          	  break
           case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply('Text ?')
                await conn.groupUpdateDescription(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
          	  }
       	     break
           case 'setppbot': {
                if (!isCreator) return m.reply(act.owner)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isAdmins) return m.reply(act.admin)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(act.success)
                }
                break
			case 'hidetag': {
           	 if (!m.isGroup) return m.reply(act.gc)
            	if (!isBotAdmins) return m.reply(act.botadm)
          	  if (!isAdmins) return m.reply(act.admin)
         	   conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
         	   }
            	break
            case 'totag': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               if (!isAdmins) return m.reply(act.admin)
               if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
               conn.sendMessage(from, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            	if (!isCreator) return m.reply(act.owner)
         	  if (!text) return m.reply(`this is a WhatsApp Bot named conn-Morou`)
        	   let name = await conn.updateProfileStatus(text)
           	m.reply(`Successfully changed bot bio status to ${name}`)
         	  }
           	break
			case 'setnamabot': case 'setnamebot': {
				if (!isCreator) return m.reply(act.owner)
        	   if (!text) return m.reply( `Example : ${prefix + command} WhatsApp ✅`)
       	    let name = await conn.updateProfileName(text)
        	   m.reply(`Successfully renamed bot to ${name}`)
      	     }
       	    break
			case 'linkgroup': case 'linkgc': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               let response = await conn.groupInviteCode(from)
               conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
      	      }
     	       break
			case 'listpc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                }
                 conn.sendTextWithMentions(from, teks, m)
        	    }
     	       break
            case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await conn.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 conn.sendTextWithMentions(from, teks, m)
       	      }
          	   break
            case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      	       }
        	     break
			case 'ebinary': {
        	    if (!text) return m.reply(`Example : ${prefix + command} text`)
           	 let { eBinary } = require('./lib/binary')
          	  let eb = await eBinary(text)
           	 m.reply(eb)
       		 }
       		 break
            case 'dbinary': {
          	  if (!text) return m.reply(`Example : ${prefix + command} text`)
          	  let { dBinary } = require('./lib/binary')
          	  let db = await dBinary(text)
            	m.reply(db)
       		 }
      	  	break
			case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
        	    }
           	 break
            case 'toaud': case 'toaudio': {
        	    if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        	    m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toAudio } = require('./lib/converter')
         	   let audio = await toAudio(media, 'mp4')
          	  conn.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
          	  }
           	 break
            case 'tomp3': {
          	  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
           	 let media = await conn.downloadMediaMessage(qmsg)
           	 let { toAudio } = require('./lib/converter')
            	let audio = await toAudio(media, 'mp4')
           	 conn.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
           	 }
           	 break
            case 'tovn': case 'toptt': {
         	   if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toPTT } = require('./lib/converter')
          	  let audio = await toPTT(media, 'mp4')
         	   conn.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
           	 }
          	  break
            case 'togif': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
         	   }
          	  break
	        case 'tourl': {
                m.reply(act.wait)
				let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            	}
          	  break
			case 'name':
				conn.sendMessage(from, {text: conn.getName('628989898299@s.whatsapp.net')})
				break
//++++++++++++++ END CASE +++++++++++++++
default:
//AUTO REACT GW MATIIN, GANGGU.
/*if (budy.includes('gabut') || budy.includes('hehe') || budy.includes('apa')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, // use an empty string to remove the reaction
        key: m.key
    }
}

conn.sendMessage(from, reactionMessage)
	}*/
if ((m.mtype === 'reactionMessage') && m.isGroup) {
    conn.sendMessage(from, {text: `Terdeteksi *${m.pushName} @${m.sender.split("@")[0]}* Mengirim Reaction.`, mentions: [m.sender]}, {quoted: fake})
        }
        
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        	let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: '𝑶𝑾𝑵𝑬𝑹 𝑩𝑶𝑻'}, type: 1}
                ]
			conn.sendMessage(from, {text:`INVITE DETECT\n\nMau masukin bot ini ke group kamu?`, title: 'LINK GROUP DECTETED', footer: '© 2022 Kukuh', buttons: buttons, headerType: 5})
		}
       /* if (m.mtype === 'stickerMessage') {
        	const reactionMessage = {
    react: {
        text: '🌚', // use an empty string to remove the reaction
        key: m.key
    }
} 

conn.sendMessage(from, reactionMessage)
}*/
if (budy.startsWith("$") && isCreator) {
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) m.reply(`${stdout}`.trim())
})
}
if (budy.startsWith(`>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(m.key.remoteJid, { text: JSON.stringify(eval(body.slice(2)), null, 2)}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(from, { text: String(e)}, { quoted: m})}
}
if (budy.startsWith(`=>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(from, { text: util.format(eval(`( async () => { return ${body.slice(3)}})()`))}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(`628989898299@s.whatsapp.net`, { text: String(e) }, { quoted: m})
}
}
}
} catch(e) {
print(`[x] Error: ${e}`.red)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
