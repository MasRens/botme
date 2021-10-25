const{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
TypedArray, 
WAMessageProto,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const util = require('util');
const axios = require("axios");
const crypto = require('crypto');
const imgbb = require('imgbb-uploader');
const Math_js = require('mathjs');
const fs = require('fs');
const qrcode = require('qrcode-terminal');
const qrkode = require("qrcode");
const request = require('request');
const requests = require("node-fetch");
const moment = require('moment-timezone');
const { spawn, exec } = require('child_process');
const fetch = require('node-fetch');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const googleIt = require('google-it');
const googleImage = require('g-i-s');
const yts = require( 'yt-search');
const cheerio = require('cheerio');
const brainly = require('brainly-scraper') 
const ffmpeg = require('fluent-ffmpeg');
const imageToBase64 = require('image-to-base64');
const toMs = require("ms");
const ms = require("parse-ms");
const WAConnection = simple.WAConnection(_WAConnection);
const { smsg } = require('./lib/simple.js')
const { color, bgcolor } = require('./lib/color')
const game = require("./lib/game");
const premium = require("./lib/premium");
const { dafontDown, dafontSearch } = require('./lib/dafont')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg, pMsgGrass, pGlitch, pDoubleHeart, pCoffeCup, pLoveText, pButterfly } = require('./lib/photooxy')
const {  fetchJson, getBase64, createExif } = require('./lib/fetcher')
const { yta, ytv } = require('./lib/ytdl')
const { mediafireDl } = require('./lib/mediafire')
const { Otakudesu } = require('./lib/otakudesu')
const { pinterest } = require('./lib/pinterest')
const { recognize } = require('./lib/ocr')
const { webp2mp4File} = require('./lib/webp2mp4')
const { webp2gifFile } = require("./lib/gif.js")
const tovid = require('./lib/tovideo')
const hx = require('./lib/NOAMPI')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { menu } = require('./lib/menu')
const { ZippDL } = require('./lib/zipydl')
const setTtt = require('./lib/tictactoe.js')
const { Toxic } = require('./lib/Toxic.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
/******************************* By Resta Gw Add no api semua yaa *******************************/
const error = JSON.parse(fs.readFileSync('./database/error.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const limit = JSON.parse(fs.readFileSync('./database/limit.json'));
const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'));
const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'));
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const tmp_hit = JSON.parse(fs.readFileSync('./src/hit.json'));
const tmphit = JSON.parse(fs.readFileSync('./src/today.json'));
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'));
const setting = JSON.parse(fs.readFileSync('./src/settings.json'));
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
namabot = setting.namabot
namaowner = setting.namaowner
fake = setting.fake
lolkey = setting.lolhuman
prefix = ''
blocked = []
let tebakgambar = []; 
let family100 = []; 
let mtk = []; 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
let susunkata = [];
let tebakjenaka = [];
let caklontong = [];
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
ctc = '›'
shp = '🌹'
winawal = 1 
loseawal = 1 
memberwin = 1
baterai = {
    baterai: 0,
    cas: false 
}
fakeimage = fs.readFileSync('./src/fake.jpg')
let {    
    gamewaktu,
    limitCount
} = require('./src/settings')
/******************************* Data Basenya taruh sni jadi biar detec dluan******************************/
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            +  `FN: ${setting.namaowner}\n`
            + 'ORG:Owner Resta;\n'
            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:+${setting.ownerNumber}\n`
            + 'END:VCARD'
//******************** 》Vcard《 ********************\\
    const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function kyun(seconds){
     function pad(s){
     return (s < 10 ? '0' : '') + s;
      }
     var hours = Math.floor(seconds / (60*60));
     var minutes = Math.floor(seconds % (60*60) / 60);
     var seconds = Math.floor(seconds % 60);
     return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
     }
    async function starts() {
	const Resta = new WAConnection()
	Resta.logger.level = 'warn'
    console.log('>', '[',color('INFO','blue'),']','SEDANG MENGHUBUNGKAN')
    console.log('>', '[',color('INFO','blue'),']','Configure Connection...')
    console.log('>', '[',color('INFO','blue'),']','Configure Success, Connecting...')
	Resta.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	fs.existsSync('./catbot.json') && Resta.loadAuthInfo('./catbot.json')
	Resta.on('connecting', () => {
	start('2', 'Connecting...')
	})
	Resta.on('open', () => {
	success('2', 'Connected')
	}) 
	await Resta.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./catbot.json', JSON.stringify(Resta.base64EncodedAuthInfo(), null, '\t'))
        
    
Resta.on('group-participants-update', async (anu) => {
    if (!welcome.includes(anu.jid)) return
    try {
	const mdata = await Resta.groupMetadata(anu.jid)
	console.log(anu)
	if (anu.action == 'add') {
	num = anu.participants[0]
	try {
	ppimg = await Resta.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*
	𝙉𝙀𝙒 𝙈𝙀𝙈𝘽𝙀𝙍 𝙄𝙉𝙏𝙍𝙊
	Name : 
	Gander : 
	Askot :
	Umur :`
	
	let buff = await getBuffer(ppimg)
	Resta.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	} else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
    ppimg = await Resta.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Sayonara @${num.split('@')[0]}👋`
	let buff = await getBuffer(ppimg)
	Resta.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	}
	} catch (e) {
	console.log('Error : %s', color(e, 'red'))
	}
	})
	const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
	}
	/******************************* CALL BLOCK & BATTRE *******************************/
	Resta.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
	blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
	}) 
     Resta.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
      })
            function monospace(string) {
             return '```' + string + '```'
             }   
             function jsonformat(string) {
             return JSON.stringify(string, null, 2)
             }
             function randomNomor(angka){
             return Math.floor(Math.random() * angka) + 1
             }
             const nebal = (angka) => {
             return Math.floor(angka)
             }
           moment.tz.setDefault("Asia/Jakarta").locale("id");
           Resta.on('chat-update', async (mek) => {
	        try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			m = smsg(Resta, mek)
			global.prefix
			global.blocked
			const { quotedMsg, mentioned } = mek
			const content = JSON.stringify(mek.message)
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		    const waktu = moment.tz('Asia/Jakarta').format('a')
		    const time = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		    const cmod = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === Resta.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === Resta.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		    const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmod) ? cmod.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
            Resta.chatRead(from) 
	        const body = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === Resta.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === Resta.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
	        const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		    const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
            const q = args.join('  ')
            chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            const arg = chats.slice(command.length + 2, chats.length)
            const argss = body.split(/ +/g)
            const tescuk = ["0@s.whatsapp.net"]
            const ini_mark = `0@s.whatsapp.net`
		    const sender = mek.key.fromMe ? Resta.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const senderNumber = sender.split("@")[0]
            conts = mek.key.fromMe ? Resta.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
            const pushname = mek.key.fromMe ? Resta.user.name : conts.notify || conts.vname || conts.name || '-'
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Resta.user.phone
            
            const botNumber = Resta.user.jid
            const botN = botNumber.replace('@s.whatsapp.net', '')
			const isGroup = from.endsWith('@g.us')
			const groupMetadata = isGroup ? await Resta.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isOwner = ownerNumber.includes(sender)
			const isClaimOn = _claim.includes(sender)
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelcome = isGroup ? welcome.includes(from) : false
			const isBadword = isGroup ? grupbadword.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isPremium = premium.checkPremiumUser(sender, _premium)
			const gcounti = setting.gcount
            const gcount = isPremium ? gcounti.prem : gcounti.user
			const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
            }
			const reply = (teks) => {
	         Resta.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
		    Resta.sendMessage(hehe, teks, text)
			}
			const sendImage = (teks) => {
		    Resta.sendMessage(from, teks, image, {quoted: mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			Resta.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendmp3 = (teks) => {
		    Resta.sendMessage(from, audio, mp3, {quoted: mek})
		    }
			const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? Resta.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Resta.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const textImg = (teks) => {
            return Resta.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./src/fake.jpg')})
            }
           const kick = function(from, orangnya){
	       for (let i of orangnya){
	       Resta.groupRemove(from, [i])
           }
           }
           const kickMember = async(id, target = []) => {
           let group = await Resta.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Resta.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Resta.groupRemove(from, [i])
           } else {
           await Resta.sendMessage(id, "Not Premited!", "conversation")
           break
           }
           }
           }
           const add = function(from, orangnya){
	       Resta.groupAdd(from, orangnya)
           }
           const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
           }
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
           });
           };
          download(url, filename, async function () {
          console.log('done');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
          type = MessageType.video
          mime = Mimetype.gif
           }
          if(mime.split("/")[0] === "audio"){
          mime = Mimetype.mp4Audio
          }
          Resta.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})   
          fs.unlinkSync(filename)
          });
          }
          const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
          Resta.on('CB:action,,call', async json => {
          const callerId = json[2][0][1].from;
          console.log('call dari '+ callerId)
          await sleep(1) 
          await Resta.blockUser(callerId, 'add') // Block user
          })
          const sendFileFromUrl = async(link, type, options) => {
          hasil = await getBuffer(link).catch(e => {
	      fetch(link).then((hasil) => {
	      return Resta.sendMessage(from, hasil, type, options)
	      }).catch(e => {
	      Resta.sendMessage(from, { url : link }, type, options).catch(e => {
	      reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	      console.log(e)
	      }) 
          }) 
          })
	     Resta.sendMessage(from, hasil, type, options).catch(e => {
	     fetch(link).then((hasil) => {
	     Resta.sendMessage(from, hasil, type, options).catch(e => {
	     Resta.sendMessage(from, { url : link }, type, options).catch(e => {
	     reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	     console.log(e)
	      })
	      })
	      })
	      })
	      }
	     const sendStickerFromUrl = async(to, url) => {
         var names = Date.now() / 10000;
         var download = function (uri, filename, callback) {
         request.head(uri, function (err, res, body) {
         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
         });
         };
         download(url, './src' + names + '.png', async function () {
         console.log('selesai');
         let filess = './src' + names + '.png'
         let asw = './src' + names + '.webp'
         exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
         let media = fs.readFileSync(asw)
         Resta.sendMessage(to, media, MessageType.sticker,{quoted:mek})
         fs.unlinkSync(filess)
         fs.unlinkSync(asw)
          });
          });
          }
        const uploadImages = (buffData, type) => {
        return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
        if (err) return reject(err)
        console.log('Uploading image to telegra.ph server...')
        const fileData = fs.readFileSync(filePath)
        const form = new FormData()
        form.append('file', fileData, 'tmp.' + ext)
        fetch('https://telegra.ph/upload', {
        method: 'POST',
        body: form
        })
       .then(res => res.json())
       .then(res => {
        if (res.error) return reject(res.error)
        resolve('https://telegra.ph' + res[0].src)
        })
       .then(() => fs.unlinkSync(filePath))
       .catch(err => reject(err))
         })
         })
         }
        const sendButtonLoc = (from, title, text, desc, button, mek, men, file) => {
        return Resta.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
         }
       if (isCmd && isGroup) {
       tmp_hit.push(command)
       fs.writeFileSync('./src/hit.json', JSON.stringify(tmp_hit))
       tmphit.push(command)
       fs.writeFileSync('./src/today.json', JSON.stringify(tmphit))
        }
   
      function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
                   
game.cekWaktuFam(Resta, family100)
game.cekWaktuTG(Resta, tebakgambar)
game.cekWaktuMtk(Resta, mtk) 
game.cekWaktuTL(Resta, tebaklirik)
game.cekWaktuSA(Resta, siapaaku)
game.cekWaktuTK(Resta, tebakkata)
game.cekWaktuTU(Resta, tebakkimia)
game.cekWaktuTB(Resta, tebakbendera)
game.cekWaktuTA(Resta, tebakanime)
game.cekWaktuSK(Resta, susunkata)
game.cekWaktuTJ(Resta, tebakjenaka)
game.cekWaktuCL(Resta, caklontong)

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(1000)
addBalance(sender, htgm3, balance)
await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah :* $${htgm3}\n\nIngin bermain lagi? kirim *${prefix}math*`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}    
if (game.isTebakLirik(from, tebaklirik)){
if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
var htgml = randomNomor(100)
addBalance(sender, htgml, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐋𝐈𝐑𝐈𝐊
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgml}
Ingin bermain lagi? kirim *${prefix}tebaklirik*`)
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}
} 
if (game.isSiapaAku(from, siapaaku)){
if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(100)
addBalance(sender, htgmu, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmu}
Ingin bermain lagi? kirim *${prefix}siapakahaku*`)
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
} 
}
if (game.isCaklontong(from, caklontong)){
if (chats.toLowerCase().includes(game.getJawabanCL(from, caklontong))){
var htgmu = randomNomor(100)
addBalance(sender, htgmu, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanCL(from, caklontong)}\n*Hadiah :* $${htgmu}
Ingin bermain lagi? kirim *${prefix}caklontong*`)
caklontong.splice(game.getCLPosi(from, caklontong), 1)
} 
}
if (game.isSusunKata(from, susunkata)){
if (chats.toLowerCase().includes(game.getJawabanSK(from, susunkata))){
var htgmu = randomNomor(100)
addBalance(sender, htgmu, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐒𝐔𝐒𝐔𝐍 𝐊𝐀𝐓𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSK(from, susunkata)}\n*Hadiah :* $${htgmu}
Ingin bermain lagi? kirim *${prefix}susunkata*`)
susunkata.splice(game.getSKPosi(from, susunkata), 1)
} 
}
if (game.isTebakKata(from, tebakkata)){
if (chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTK(from, tebakkata)}\n*Hadiah :* $${htgtk}
Ingin bermain lagi? kirim *${prefix}tebakkata*`)
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}
}
if (game.isTebakJenaka(from, tebakjenaka)){
if (chats.toLowerCase().includes(game.getJawabanTJ(from, tebakjenaka))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐉𝐄𝐍𝐀𝐊𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTJ(from, tebakjenaka)}\n*Hadiah :* $${htgtk}
Ingin bermain lagi? kirim *${prefix}tebakjenaka*`)
tebakjenaka.splice(game.getTJPosi(from, tebakjenaka), 1)
}
}
if (game.isTebakKimia(from, tebakkimia)){
if (chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))){
var reva = randomNomor(100)
addBalance(sender, reva, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐔𝐍𝐒𝐔𝐑 𝐊𝐈𝐌𝐈𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTU(from, tebakkimia)}\n*Hadiah :* $${reva}
Ingin bermain lagi? kirim *${prefix}tebakkimia*`)
tebakkimia.splice(game.getTUPosi(from, tebakkimia), 1)
}
}
if (game.isTebakBendera(from, tebakbendera)){
if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(100)
addBalance(sender, syahira, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐁𝐄𝐍𝐃𝐄𝐑𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${syahira}
Ingin bermain lagi? kirim *${prefix}tebakbendera*`)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
}
if (game.isTebakAnime(from, tebakanime)){
if (chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(100)
addBalance(sender, vinna, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐀𝐍𝐈𝐌𝐄
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTA(from, tebakanime)}\n*Hadiah :* $${vinna}
Ingin bermain lagi? kirim *${prefix}tebakanime*`)
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}
} 	        
if (game.isTebakGambar(from, tebakgambar)){
if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(100)
addBalance(sender, htgm, balance)
await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
}
}
if (game.isfam(from, family100)){
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (chats.toLowerCase().includes(i)){
var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgm1}\n\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
Resta.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}   
    const getWins = (sender, total) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _win[position].win -= total
                 fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
            }
        }
 
const getLose = (sender, total) => {
            let position = false
            Object.keys(_lose).forEach((i) => {
                if (_lose[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lose[position].lose -= total
                 fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
            }
        }
    const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]
    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o
    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o
    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
     }
// function for generate board for x and o or number
    const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
    if (count % 3 == 0) {
    texts += "\n               "
     }
    texts += x
     count += 1
    }
    return texts
     }
    const checkWin = (sender) => {
    let found = false
    for (let wn of _win) {
    if (wn.jid === sender) {
    let winCounts = winawal - wn.win
    if (winCounts <= 0) return Resta.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: mek })
    return `${winCounts}`
    found = true
     }
     }
      if (found === false) {
      let obj = { jid: sender, win: 0 }
      _win.push(obj)
      fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
      return `${winCounts}`
       }
       }
       const checkLose = (sender) => {
       let found = false
       for (let ls of _lose) {
       if (ls.jid === sender) {
       let loseCounts = loseawal - ls.lose
       if (loseCounts <= 0) return Resta.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: mek })
       return `${loseCounts}`
       found = true
        }
        }
       if (found === false) {
       let obj = { jid: sender, lose: 0 }
       _lose.push(obj)
       fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
       return `${loseCounts}`
        }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
        return Resta.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
        delete tictactoe[senderNumber]
        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
        fs.unlinkSync("./src/" + from + ".json");
        })
        }   
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
        var { enemy, mode, board, step } = tictactoe[senderNumber]
        if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
        var data = tictactoe[senderNumber]
        data["enemy"] = senderNumber
        mode = mode == X ? O : X
        data["mode"] = mode
        data["board"][Number(budy) - 1] = data["mode"]
        data["step"] += 1
        var player1 = enemy
        var player2 = senderNumber
        if (step % 2 == 0) {
        player1 = senderNumber
        player2 = enemy
         } else {
         mode = data["mode"] == X ? O : X
         }
         tictactoe[enemy] = data
         delete tictactoe[senderNumber]
         var teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
         mode = mode == X ? O : X
         var html3 = randomNomor(1000)
         var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
         var test = `\n_ketik nyerah untuk menyerah_`
         board = await generateBoard(data["board"])
         addBalance(sender, html3, balance)
         var win = await getWin(data["board"])
          if (win) {
          teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
          if (win == mode) {
          teks += `•> Lose : @${player1} 👻\n\n`
          teks += board
          teks += `\n\n•> Win : @${player2} 🎉`
          teks += `\n •> You Win Balance ${html3}`
          return Resta.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
          delete tictactoe[enemy]
          fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
          fs.unlinkSync('./src/' + from + '.json')
          getWins(`${player2}@s.whatsapp.net`, 1)
          getLose(`${player1}@s.whatsapp.net`, 1)
           })
           } else {
           teks += `•> Win : @${player1} 🎉\n\n`
           teks += `•> You Win Hadiah Balance ${html3}`
           teks += board
           teks += `\n\n•> Lose : @${player2} 👻\n_`
           return Resta.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
           delete tictactoe[enemy]
           fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
           fs.unlinkSync('./src/' + from + '.json')
           getWins(`${player1}@s.whatsapp.net`, 1)
           getLose(`${player2}@s.whatsapp.net`, 1)
            })
            }
            }
            if (data["step"] == 9) {
            teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
            teks += `•> Draw : @${player1} 🦁\n\n`
            teks += board
            teks += `\n\n•> Draw : @${player2} ??`
            return Resta.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
            delete tictactoe[enemy]
            fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            fs.unlinkSync('./src/' + from + '.json')
            })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return Resta.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
            fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
            }
            if (fs.existsSync(`./src/${from}.json`)) {
	        tttSkuy = setTtt(`${from}`)
	        if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		    if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		    tttSkuy.status = true
		    rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		    winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		    fs.writeFileSync(`./src/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		    nantang = O
            pelawan = X
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                if (count % 3 == 0) {
                tesk += "\n               "
                 }
                tesk += x
                count += 1
                 }
                tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})`
                return Resta.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                var data = {}
                data["enemy"] = lawan.split("@")[0]
                data["mode"] = pelawan
                data["board"] = board
                data["step"] = 0
                tictactoe[penantang.split("@")[0]] = data
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./src/" + from + ".json");
	            } else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		        Resta.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		        fs.unlinkSync("./src/" + from + ".json");
	             }
	             }
      
    
            colors = ['red','white','black','blue','yellow','green']
            const isViewOnce = (type == 'viewOnceMessage')
            const isImage = (type === 'imageMessage')
            const isVideo = (type === 'videoMessage')
            const isSticker = (type == 'stickerMessage')
            const isList = (type == 'listResponseMessage')
            const isButton = (type == 'buttonsResponseMessage')
            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && !isGroup) {
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))
             }
            if (isCmd && isGroup) {
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
             }
         
            try{
            if(error.includes(command)){
            return reply('Fitur Tersebut sedang error\nKami akan segera memperbaikinya!')
            }
            }catch{
            }        
            mess = {
            wait: 'Scraping metadata.....',
            search: 'Searching...',
            limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
            eror: 'Eror To Again',
            claimOnAlready: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`,
            success: '✔️ Berhasil ✔️',
            error: {
            stick: 'Ulangi bang',
            Iv: 'Link tidak valid'
            },
            only: {
            prem : 'Premium special features! Chat owner to get Premium access!',
            group: 'Fitur Dapat digunakan di Dalam Group!',
            ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
            ownerB: 'Fitur Khusus Owner Bot!',
            admin: 'Fitur dapat Digunakan oleh Admin Group!',
            Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
            }
            }

                function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
				"sticker-pack-name": packname,
				"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
				len = len - 256	
				bytes.unshift(0x01)	
				} else {	
				bytes.unshift(0x00)	
				}	
				if (len < 16) {	
				last = len.toString(16)	
				last = "0" + len	
				} else {	
				last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
			}
			
			if (isGroup && isAntilink) {
             if (budy.includes("://chat.whatsapp.com/")) {
             if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
             console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
             reply(`「 *ANTILINK GROUP DETECTOR* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
             Resta.groupRemove(from, [sender]) 
             }
             }
             if (isGroup && isBadword && !isOwner && !isGroupAdmins){
             for (let kasar of badword){
             if (chats.toLowerCase().includes(kasar)){
             if (isCountKasar(sender, senbadword)){
             if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
             reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
             Resta.groupRemove(from, [sender])
             delCountKasar(sender, senbadword)
              } else {
              addCountKasar(sender, senbadword)
              reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
               }
               }
               }
               }

  switch(command) {
case 'menu': case 'help':
usrr = `@${sender.split("@")[0]}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
hitnya = `${tmp_hit.length}`
Time = `${time}`
Waktu = `${waktu}`
Tanggal = `${tanggal}`
limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
teks = `${menu(Time,Waktu,Tanggal,hitnya,limm,glimm,blan,usrr,pushname,error,prefix)}\n\n ------- PERBAIKAN -------\n\n`
e = 0
for (let i of error) {
teks += `   ${e+=1}. ${i}\n`
   }
teks += ``
sendButtonLoc(from,monospace(teks),'',`${fake}`,[
{buttonId: `${prefix}owner`, buttonText: {displayText: '</OWNER'}, type: 1}, 
{buttonId: `${prefix}donasi`, buttonText: {displayText: '</DONASI'}, type: 1}, 
{buttonId: `${prefix}gruprwbot`, buttonText: {displayText: '</GRUP RW'}, type: 1}
],null,null,fakeimage,mek)
break
case 'donasi':
case 'sumbang':
let buffer = fs.readFileSync('./src/donasi.jpg') 
var mathu = await Resta.prepareMessage(from, buffer, MessageType.image)
donasi = ` 
${shp} Saweria : https://saweria.co/RestaFvnky29

${shp} Pulsa : 6281232358627`
const sendButLocation = [{buttonId:`${prefix}owner`,buttonText:{displayText:'📌𝐎𝐰𝐧𝐞𝐫'},type:1}]
               buttonsMessage = {
               contentText: `${donasi}`, 
               footerText: `${fake}`, 
               buttons: sendButLocation, headerType: 4,
               imageMessage: mathu.message.imageMessage}
               prep = await Resta.prepareMessageFromContent(from, {buttonsMessage},{quoted: mek, contextInfo: {mentionedJid: [sender], externalAdReply: { title: `Hay Kak ${pushname}`, thumbnailUrl: 'https://telegra.ph/file/4bf79dc88caf992079fef.jpg', sourceUrl: 'https://youtube.com/channel/UCzVP2L_xERzrp_cBJYyqvIw/' }}})
               Resta.relayWAMessage(prep) 
               break 
     case 'gruprwbot':
               geus = `
♦️𝐑𝐰 𝐁𝐨𝐭𝐳𝐳♦#1
 https://chat.whatsapp.com/EryCzc6EI530q9qCXpM9b2
 ♦️𝐑𝐰 𝐁𝐨𝐭𝐳𝐳♦#2
 https://chat.whatsapp.com/CiVJyOE3gIrHodHiOusEBe
 ♦️𝐑𝐰 𝐁𝐨𝐭𝐳𝐳♦#3
 https://chat.whatsapp.com/BN7SUbLSmQs6syfNTCfP1x`
 reply (geus) 
 break
         case 'sc':
         case 'script':
         reply ('https://github.com/Restaa/whatsapp-bot-byRwbot') 
          break
          
/*****************************PUNYA OWNER******************************/
           case 'owner': 
                    Resta.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact ,{ quoted : mek})
                   .then((res) => Resta.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
                    break
            case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB) 
					let chiit = await Resta.chats.all()
                    for (let i of chiit){
                    Resta.modifyChat(i.jid, 'delete', {
                    includeStarred: false
                    }) 
                    }
					reply('Sukses delete all chat :)') 
					break
					case 'bc':
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await Resta.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buff = await Resta.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					Resta.sendMessage(_.jid, buff, image, {caption: `[ Broadcast ]\n\n${body.slice(4)}`})
					}
					reply('Suksess broadcast')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ Broadcast ]\n\n${body.slice(4)}`)
					}
					reply('Suksess broadcast')
					}
					break
		   case 'claim':   
            case 'klaim':
                    if (isClaimOn) return reply(mess.claimOnAlready)
                    var htgm6 = randomNomor(1000)
                    var htgm7 = randomNomor(20)
                    addBalance(sender, htgm6, balance)
                    giveLimit(sender, htgm7, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await reply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & *${htgm6}* balance
Dari claim harian`)
                    break
			case 'resetlimit':
				         if (!isOwner) return reply(mess.only.owner)
				         var obj = [] 
                         fs.writeFileSync('./database/claim.json', JSON.stringify(obj))
				         await reply(`LIMIT BERHASIL DI RESET`)
			             break 
			   case 'ping':
                         let totalchat = await Resta.chats.all()
                         let i = []
                         let giid = []
                        for (let mem of totalchat){
                        i.push(mem.jid)
                        }
                       for (let id of i){
                       if (id && id.includes('g.us')){
                       giid.push(id)
                      }
                    }
                   inifernazer =
 `「 *STATUS CHAT* 」
            
• Group Chats: ${giid.length}
• Personal Chats: ${totalchat.length - giid.length}
• Total Chats: ${totalchat.length}
• Charger: ${baterai.isCharge}
• Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

「 *STATUS HP BOT* 」

• Battery: ${baterai.battery}  ${baterai.isCharge === 'true' ? '_Sedang Di Cas_' : '_Tidak Di Cas_'}
• wa_version: ${wa_version}
• mcc: ${mcc}
• mnc: ${mnc}
• os_version: ${os_version}
• device_manufacturer: ${device_manufacturer}
• device_model: ${device_model}
• runtime: ${runtime(process.uptime())}`
             sendButtonLoc(from,monospace(inifernazer),'',`${fake}`,[
              {buttonId: `${prefix}owner`, buttonText: {displayText: '</OWNER'}, type: 1}, 
              {buttonId: `${prefix}menu`, buttonText: {displayText: '</MENU'}, type: 1}
               ],null,null,fakeimage,mek)
           break
           //------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              let  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              premium.addPremiumUser(mentioned[0], args[1], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)`)
              } else {    
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[1], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)`)
              }
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              let mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              }
              } else {
              reply(mess.wrongFormat)
              }
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
        case 'cekprem': case 'cekpremium':
                   if (!isPremium) return reply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
                   try {
                   ppimg = await Resta.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                   } catch {
                   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                   }
                   teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
                    its = await getBuffer (ppimg)
                    Resta.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: mek, caption: teks
                     })
                     break
           case 'developer':
                     const sokl = "6283853152230@s.whatsapp.net"
                     const sokkl = "994402223464@s.whatsapp.net"
                     teksits = `「 *Developer Of Bot* 」


•Resta Rw @${sokl.split("@")[0]}
•Neoxr-Bot @${sokkl.split("@")[0]}

❒ *SPECIAL BIG THANX TO :*
Mhankbarbar  | Adiwajhsing | Pengguna bot | Lol Human | Dan Creator Bot Lainnya.`
Resta.sendMessage(from, teksits, MessageType.text, { quoted: mek, caption: teksits, contextInfo: {"mentionedJid": [sokl, sokkl]}}) 
break
//******************** 》Limit《 ********************\\
       case 'topbalance':
                      if(!isGroup)return reply(mess.only.group)
                      Resta.updatePresence(from, Presence.composing)
                      let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
                      let mebn = [];
                      for (let i of balance){
                      mebn.push(i.id)
                      let bl = (i.balance)
                      txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
                      }
                      mentions(txot, mebn, true)
                      .catch((err) => {
                       sendMess(ownerNumber[0], `${command} Error:` + err)
                       reply('Gagal Coba beberapa saat lagi')
                        })
                      break
            case 'limit':
            case 'ceklimit': 
            case 'balance': 
            case 'glimit':
                      reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                      break
            case 'buylimit':{
                       if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
                       if (q.includes('-')) return reply(`Jangan menggunakan -`)
                       if (isNaN(q)) return reply(`Harus berupa angka`)
                       let ane = Number(nebal(q) * 100)
                       if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                       kurangBalance(sender, ane, balance)
                       giveLimit(sender, nebal(q), limit)
                       reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
                       }
                       break
             case 'buygamelimit':
             case 'buyglimit':{
                       if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
                       if (q.includes('-')) return reply(`Jangan menggunakan -`)
                       if (isNaN(q)) return reply(`Harus berupa angka`)
                       let ane = Number(nebal(q) * 100)
                       if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                       kurangBalance(sender, ane, balance)
                       givegame(sender, nebal(q) , glimit)
                       reply(monospace(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
                        }
                       break
             case 'giftlimit':
                       if(!isOwner)return
                       if (!q)return reply(`Example : ${prefix + command} @tag 10`)
                       lim = q.split(" ")[1]
                       const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
                       giveLimit(tag1, lim, limit)
                       reply('Succes')
                       break
/*****************************MENU DOWNLOAD******************************/
                        case 'mediafire': 
                        if(!isPremium && !isOwner )return reply(mess.only.prem)
                        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                        if (args.length < 1) return reply('Link Nya Mana? ')
                        if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
                        reply(mess.wait)
                        teks = args.join(' ')
                        res = await mediafireDl(teks)
                        result = `Media Fire Downloader

${shp} *Nama :* ${res[0].nama}
${shp} *Ukuran :* ${res[0].size}
${shp} *Link :* ${res[0].link}

 _*Tunggu Proses Mengirim Media......*_`
                         reply(result)
                         sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
                         limitAdd(sender, limit)
                         break
               case 'ytsearch': case 'yts':
                       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                       if(!q) return reply(`Example : ${prefix + command} Melukis senja`)
                       reply(mess.wait) 
                       try{
                       ysearch = await yts(q)
                       }catch(e){
                       return reply(mess.error)
                       }
                       p = 0
                       teks = `Y T  S E A R C H\nTotal : ${ysearch.all.length}\n\n`
                       for(let i of ysearch.all){
                       teks += `${p+=1}.\nTitle :` + i.title + '\n'
                       teks += `Url :` + i.url + '\n'
                       teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
                       }
                       teks +=  `Ketik ${prefix}getmusic 1 atau angka selanjutnya untuk mengambil Music!\nKetik ${prefix}getvideo 1 atau angka selanjutnya untuk mengambil Video!`
                       reply(teks)
                       limitAdd(sender, limit)
                       break
              case 'tiktoknowm':
                     if(!isPremium && !isOwner )return reply(mess.only.prem)
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
                     if (args.length < 1) return reply('Link?')
                     lin = args[0]
                     reply(mess.wait) 
                     hx.ttdownloader(`${args[0]}`)
            		.then(result => {
             		const { wm, nowm, audio } = result
             		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
            		.then(async (a) => {
             		me = `*Link* : ${a.data}`
	                 Resta.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek, caption:me}) 
                     })
                     }) 
                     .catch((err) => {
                      sendMess(ownerNumber[0], `${command} Error:` + err)
                      reply('Gagal Coba beberapa saat lagi')
                      })
                     break
        case 'tiktok':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     if (args.length < 1) return reply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
                     lin = args[0]
                     reply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.wm
                     sendMediaURL(from, ep, 'Done!')
                     limitAdd(sender, limit)
                      })
                     .catch((err) => {
                      sendMess(ownerNumber[0], `${command} Error:` + err)
                       reply('Gagal Coba beberapa saat lagi')
                       })
                      break
            case 'tiktokmp3':
            case 'tiktokmusic':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                     reply (mess.wait) 
                     ini_link = args[0]
                     get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
                     await Resta.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    .catch((err) => {
                     sendMess(ownerNumber[0], `${command} Error:` + err)
                     reply('Gagal Coba beberapa saat lagi')
                      })
                     break
            case 'getvideo':
                       try{
                       if (!m.quoted.sender === Resta.user.jid) return reply('Reply pesan hasil pencarian youtube!')
                       if(!q) return reply('Masukkan nomo urutnya!')
                       reply(mess.wait) 
                       quee = 'Y T  S E A R C H'
                       qteks = m.quoted.text
                       if(qteks.includes(quee)){
                       jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
                       if(isNaN(args[0])) return reply('Input harus berupa nomor!')
                       if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
                       pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
                       downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
                       const { dl_link, thumb, title, filesizeF, filesize } = downm
                       if(Number(filesize) >= 30000){
                       short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                       reply(`Ukuran file Terlalu besar!!\nSize : ${filesizeF}\nLink : ${short.data}\n\nSilahkan download Link diatas!!`)
                       }
                       teks = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
                       sendMediaURL(from, dl_link, teks)
                        }
                        } catch(e) {
                        reply('Reply pesan Bot hasil pencarian youtube!')
                       sendMess(ownerNumber[0], `${command} Error:` + e)
                       }
                       break
          case 'getmusic':
                       try{
                       if (!m.quoted.sender === Resta.user.jid) return reply('Reply pesan Bot hasil pencarian youtube!')
                       if(!q) return reply('Masukkan nomo urutnya!')
                       reply(mess.wait) 
                       quee = 'Y T  S E A R C H'
                       qteks = m.quoted.text
                       if(qteks.includes(quee)){
                       jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
                       if(isNaN(args[0])) return reply('Input harus berupa nomor!')
                       if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
                       pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
                       downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
                       const { dl_link, thumb, title, filesizeF, filesize } = downm
                       if(Number(filesize) >= 30000){
                       short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                       reply(`Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
                       }
                       teks = `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
                       sendMediaURL(from, dl_link)
                       }
                       } catch(e) {
                       reply('Reply pesan Bot hasil pencarian youtube!')
                       sendMess(ownerNumber[0], `${command} Error:` + e)
                       }
                       break
             case 'play':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                      if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
                      reply(mess.wait) 
                      let yut = await yts(q)
                      yta(yut.videos[0].url)
                     .then(async(res) => {
                      const { thumb, title, filesizeF, filesize } = res
                      const capti = `P L A Y\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
                      ya = await getBuffer(thumb)
                      py =  await Resta.prepareMessage(from, ya, image)
                      sendButtonLoc(from,monospace(capti),'',`${fake}`,[{buttonId: `${prefix}playyt3 ${q}`, buttonText: {displayText: '</AUDIO'}, type: 1},
                      {buttonId: `${prefix}playmp4 ${q}`, buttonText: {displayText: '</VIDEO'}, type: 1}
                       ],null,null,ya)
                       })
                      .catch((err) => {
                       sendMess(ownerNumber[0], `${command} Error:` + err)
                       reply('Gagal Coba beberapa saat lagi')
                       })
                      break
        case 'playyt3': 
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                      try {
                      reply(mess.wait) 
                      let yut = await yts(q)
                      yta(yut.videos[0].url)
                     .then((res) => {
                      const { dl_link, thumb, title, filesizeF, filesize } = res
                      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                     .then((a) => {
                      if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                      const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
                      sendMediaURL(from, dl_link, '')
                      limitAdd(sender, limit)
                      })
                      })
                     .catch((err) => reply(`${err}`))
                     } catch (err) {
                     sendMess(ownerNumber[0], `${command} Error:` + err)
                     console.log(color('[PlayMp3]', 'red'), err)
                     reply(mess.error.api)
                     }
                     break
           case 'playmp4':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     try {
                     reply(mess.wait)
                     let yut = await yts(q)
                     ytv(yut.videos[0].url)
                    .then((res) => {
                     const { dl_link, thumb, title, filesizeF, filesize } = res
                     axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                     if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
                     const mp4 = `
*PLAY VIDEO*\n\n Judul : ${title}\n\n Size : ${filesizeF}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
                     sendMediaURL (from, dl_link, mp4)
                     limitAdd(sender, limit)
                      })
                      })
                     .catch((err) => reply(`${err}`))
                      } catch (err) {
                     sendMess(ownerNumber[0], `${command} Error:` + err)
                     console.log(color('[PlayMp4]', 'red'), err)
                     reply(mess.error)
                     }
                     break
          case 'ytmp4':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
                     if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
                     teks = args.join(' ')
                     reply(mess.wait)
                     res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
✓ Title : ${res[0].judul}
✓ Ext : MP4
✓ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
   
                    sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
                    sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
                     })
                    .catch((err) => {
                     sendMess(ownerNumber[0], `${command} Error:` + err)
                     reply(mess.error.api)
                     })
                     break
             case 'ytmp3':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
			        if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			        let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			        if (!isLinks) return reply(mess.error.Iv)
                    reply(mess.wait)
				    try {
				    yta(args[0])
				   .then((res) => {
				    const { dl_link, thumb, title, filesizeF, filesize } = res
				    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				   .then((a) => {
			        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
				    const captions = `*YT MP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
			        sendMediaURL(from, thumb, captions)
				    sendMediaURL(from, dl_link).catch(() => reply(aml.eror))
				     }) 
				     })     
                    .catch((err) => reply(`${err}`))
                      } catch (err) {
                     sendMess(ownerNumber[0], `${command} Error:` + err)
                     console.log(color('[PlayMp4]', 'red'), err)
                     reply(mess.error)
                     }
                     break
				case 'ig': 
				case 'instagram':
				case 'igdl':
	              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
	              if (args.length < 1) return reply(`Kirim perintah *${prefix}ig https://www.instagram.com/p/CQU21b0JKwq/*`) 
                  if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(aml.Iv)
                  reply(mess.wait) 
                  hx.igdl(args[0])
                 .then(async(result)=> {
                  for(let i of result){
                  if(i.url.includes('mp4')){
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}\n${fake}`})
                  limitAdd(sender, limit)
                  } else {
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}\n${fake}`})
                   limitAdd(sender, limit)
                   }
                   }
                   })
                 break
	   case 'igstory': 
	              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                  if(!q) return reply('*Username?*')
                  reply(mess.wait) 
                  hx.igstory(q)
                 .then(async(res)=> {
                  for(let i of res){
                  if(i.url.includes('mp4')){
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,video,{quoted: mek,caption: `${fake}`}) 
                  limitAdd(sender, limit)
                  } else {
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,image,{quoted: mek,caption: `${fake}`}) 
                  limitAdd(sender, limit)     
                  }
                  }
                  });
                 break
      case 'twitter':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (!isUrl(args[0]) && !args[0].includes("twitter.com")) return reply(mess.Iv);
                if (!q) return reply("Linknya?");
                reply(mess.wait);
                lin = args[0]
                hx.twitter(lin).then(res => {
                console.log(lin) 
                ep = res.HD
               sendMediaURL(from, ep, 'Done!')
               limitAdd(sender, limit)
                }) 
             .catch((err) => {
              sendMess(ownerNumber[0], `${command} Error:` + err)
              reply('Gagal Coba beberapa saat lagi')
              })
              break
    case "facebook":
    case "fbdl":
    case "fb":
              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
              if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
              reply(mess.wait) 
              ini_url = args[0]
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${ini_url}`)
              ini_url = ini_url.result[0].link
              ini_buffer = await getBuffer(ini_url)
              await Resta.sendMessage(from, ini_buffer, video, { quoted: mek })
              limitAdd(sender, limit)
             .catch((err) => {
              sendMess(ownerNumber[0], `${command} Error:` + err)
              reply('Gagal Coba beberapa saat lagi')
              })
              break
          case 'zippyshare':
          case 'zipp':
                    if (!isPremium && isOwner) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} url`)
                    ini_url = args[0]
                    Op = await ZippDL(ini_url)
                    console.log(Op)
                    Op = Op.result
                    result =`╭───「 *ZIPPYSHARE DOWNLOAD* 」
│
├ *Data Berhasil Didapatkan!*
│
├≽ Nama : ${Op.title}
├≽ Ukuran : ${Op.size}
├≽ Upload : ${Op.upload}
├≽ Type : ${Op.filetype}
├≽ Link : ${Op.url}
│
╰─────────────────────
_*Tunggu Proses Mengirim Media......*_`
                    reply(result)
                    buffnya = await getBuffer(`${Op.url}`)
                    Resta.sendMessage(from, buffnya, document, { mimetype: `${Op.filetype}`  , filename: `${Op.title}`})
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply('Gagal Coba beberapa saat lagi')
                    })
                    break
         case 'spotify':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)                  
                    url = args[0]
                    reply(mess.wait) 
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await Resta.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await Resta.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    limitAdd(sender, limit)
                    break
/*****************************RANDOM TEXT*****************************/
           case 'quotes':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                     quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                     quotes = quotes.result
                     author = quotes.by
                     quotes = quotes.quote
                     reply(`_${quotes}_\n\n*${ctc}• ${author}*`)
                     limitAdd(sender, limit)
                     break
          case 'quotesanime':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n ${ctc}• ${char}*\n*${ctc}• ${anime} ${episode}*`)
                    limitAdd(sender, limit)
                    break
                case 'quotesdilan':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                    reply(quotedilan.result)
                    limitAdd(sender, limit)
                    break
                case 'quotesimage':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    await Resta.sendMessage(from, get_result, image, { quotes: mek })
                    limitAdd(sender, limit)
                    break
         case 'faktaunik':
         case 'katabijak':
         case 'pantun':
         case 'bucin':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    reply(get_result.result)
                    limitAdd(sender, limit)
                    break
         case 'randomnama':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
                    reply(anu.result)
                    limitAdd(sender, limit)
                    break
              case 'storyanime':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                      reply(mess.wait)
                      anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${lolkey}`)
                      buffer = await getBuffer(anu.result)
                      Resta.sendMessage(from, buffer, video, { quoted: mek })
                      limitAdd(sender, limit)
                      break
/************************************STALKING*****************/
                case 'stalkig':
                case 'igstalk':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    Resta.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
                case 'stalkgithub':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    Resta.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
                case 'stalktwitter':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    Resta.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt }) 
                    limitAdd(sender, limit)
                    break
           case 'stalktiktok':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    Resta.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
/*****************************MENU MAKER******************************/
       case 'naruto':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                  if (!q) return reply('teksnya mana?')
                  pNaruto(`${q}`)
                 .then(res => {
              	console.log(res) 
                  sendMediaURL(from, res.url, fake) 
                  limitAdd(sender, limit)
		           })
		           break
         case 'shadow':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                   if (!q) return reply('teksnya mana?')
                   pShadow(`${q}`)
                  .then(res => {
               	console.log(res) 
                   sendMediaURL(from, res.url, fake) 
                   limitAdd(sender, limit)
	               })
		           break
         case 'romantic':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pRomantic(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		            break
         case 'smoke':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pSmoke(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		            })
		            break
          case 'burnpaper':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pBurnPapper(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		            break
          case 'lovemsg':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pLoveMsg(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		            })
		            break
          case 'grass':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pMsgGrass(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		            break
          case 'doubleheart':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pDoubleHeart(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		             break
           case 'coffecup':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                      if (!q) return reply('teksnya mana?')
                      pCoffeCup(`${q}`)
                     .then(res => {
                  	console.log(res) 
                      sendMediaURL(from, res.url, fake) 
                      limitAdd(sender, limit)
		               })
		              break
             case 'lovetext':
                       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                       if (!q) return reply('teksnya mana?')
                       pLoveText(`${q}`)
                      .then(res => {
                       console.log(res) 
                       sendMediaURL(from, res.url, fake) 
                       limitAdd(sender, limit)
		                })
		               break
            case 'butterfly':
                         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                         if (!q) return reply('teksnya mana?')
                         pButterfly(`${q}`)
                        .then(res => {
                     	console.log(res) 
                         sendMediaURL(from, res.url, fake) 
                         limitAdd(sender, limit)
		                  })
		                break
/*****************************MENU STALK******************************/
             case 'tomp4':
					   if (!isQuotedSticker) return reply('Reply stiker nya')
                       reply(mess.wait)
                       if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                       ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                       owgi = await Resta.downloadAndSaveMediaMessage(ger)
                       webp2mp4File(owgi).then(res=>{
                       sendMediaURL(from,res.result)
                       })
                       }else {
                       reply('Reply Stickernya!')
                       }
                       fs.unlinkSync(owgi)
                       break
            case 'asupan': case 'ptl': case 'ptlvid':{
              	 reply (mess.wait) 
                   fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
                   var wifegerak = data.split('\n')
                   var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                   sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', mek)
                   })
                   }
                   break
        case 'asupan1':
			    Resta.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Resta.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break        
     case 'asupan2':
			    Resta.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Resta.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break 
            case 'tomp3':
					  if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					  reply(mess.wait)
					  encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					  mediad = await Resta.downloadAndSaveMediaMessage(encmediad)
					  ran = getRandom('.mp4')
					  exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
					  fs.unlinkSync(mediad)
				      if (err) return reply(mess.error.api)
					  mhee = fs.readFileSync(ran)
				      Resta.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', quoted: mek })
					  fs.unlinkSync(ran)
					   })
					   break
             case 'chat':
			          if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
                      if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			          if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
                      var pc = body.slice(6)
                      var nomor = pc.split("|")[0];
                      var org = pc.split("|")[1];
                      Resta.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
                      reply(`Sukses mengirim chat:\n${org},@${nomor}`)
                      break
            case 'tagme':
                     var nomqm = mek.participant
				     tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					 Resta.sendMessage(from, tagu, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					 break
		   case 'toimg':
				    if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply (mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Resta.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
				    if (err) return reply(mess.stick) 
					huu = fs.readFileSync(ran)
				    Resta.sendMessage(from, huu, image, {quoted: mek, caption: 'tuh dh jadi '})
					fs.unlinkSync(ran)
					 }) 
					break
			case 'tinyurl':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                      if (args.length < 1) return reply(`Penggunaan :\n*${prefix}tinyurl link*`)
                      if (!isUrl(args[0])) return reply(`Masukkan link yang benar`)
                      axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
                     .then((a) => reply(`Nih ${a.data}`))
                     .catch(() => reply(`Error, harap masukkan link dengan benar`))
                      break
           case 'tourl':
                     if ((isMedia && !Resta.sendMessage.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
                 	reply(mess.wait)
                     boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                     owgi = await Resta.downloadMediaMessage(boij)
                     res = await upload(owgi)
                     reply(res)
                      } else {
                     reply('kirim/reply gambar/video')
                     }
                     break
           case 'imgtourl': 
                      var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                      var jnckk = await  Resta.downloadAndSaveMediaMessage(encmedia)
                      var imgbb = require('imgbb-uploader')
                      imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
                     .then(data => {
var caps = `╭─「 IMGBB TO URL 」\n│\n│• ID : ${data.id}\n│• MimeType : ${data.image.mime}\n│• Extension : ${data.image.extension}\n│\n│• URL : ${data.display_url}\n╰─────────────────────`
                     ibb = fs.readFileSync(jnckk)
                     Resta.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                     })
                    .catch(err => {
                     throw err 
                      })
                    break
           case 'wa.me':
		   case 'wame':
  					Resta.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					Resta.sendMessage(from, options, text, { quoted: mek } )
  					break
/*****************************MENU ANIME******************************/
         case 'kusonime': 
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                    ini_txt += `\n${x}\n`
                    for (var y in link_dl[x]) {
                    ini_txt += `${y} - ${link_dl[x][y]}\n`
                    }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await Resta.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    limitAdd(sender, limit) 
                    break
         case "otaku":
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                   if (!q) return reply("judul animenya?");
                   let anime = await hx.otakudesu(q);
                   rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
                    ram = await getBuffer(anime.img);
                    Resta.sendMessage(from, ram, image, { quoted: mek, caption: rem });
                    limitAdd(sender, limit) 
                    break;
           case "komiku":
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                     if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
                     let komik = await hx.komiku(q);
                     result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
                      sendMediaURL(from, komik.image, result);
                      limitAdd(sender, limit) 
                      break;
           case "chara":
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                  if (!q) return reply(`gambar apa?\n${prefix}chara itsmevall`);
                  let im = await hx.chara(q);
                  let acak = im[Math.floor(Math.random() * im.length)];
                  let li = await getBuffer(acak);
                  await Resta.sendMessage(from, li, image, { quoted: mek, caption: q })
                  limitAdd(sender, limit) 
                  break;
          case 'character': 
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                    ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await Resta.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
         case 'manga': 
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                    ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await Resta.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
          case 'waifu': case 'wife':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                     fetchJson('https://waifu.pics/api/sfw/waifu').then((data) => {
                     Resta.sendMessage(from, { url: data.url}, image, { quoted: mek, caption: fake})
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                     })
                    }
                    break
/*****************************MENU SEARCH******************************/
        case 'corona': case 'covid': case 'covid19': case 'covid-19':{
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  let country = q ? q : 'indonesia'
                  fetchJson('https://coronavirus-19-api.herokuapp.com/countries/' + country.toLowerCase() + '/')
                 .then((res)=>{
                  textImg('🌎️ Covid Info - ' + country.charAt(0).toUpperCase() + country.slice(1) + ' 🌍️\n\n✨️ Total Cases: ' + `${res.cases}` + '\n📆️ Today\'s Cases: ' + `${res.todayCases}` + '\n☣️ Total Deaths: ' + `${res.deaths}` + '\n☢️ Today\'s Deaths: ' + `${res.todayDeaths}` + '\n⛩️ Active Cases: ' + `${res.active}` + '.')
                  limitAdd(sender, limit)
                  })
                 .catch((err) => {
                  sendMess(ownerNumber[0], `${command} Error:` + err)
                  reply(mess.error.api)
                  })
                  }
                  break
          case 'spotifysearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                    ini_txt += `Title : ${x.title}\n`
                    ini_txt += `Artists : ${x.artists}\n`
                    ini_txt += `Duration : ${x.duration}\n`
                    ini_txt += `Link : ${x.link}\n`
                    ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                    })
                    break
           case 'brainly':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('soalnya mana?')
                    brien = (q) 
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n「 _BRAINLY_ 」\n\n➸ Pertanyaan: ${Y.pertanyaan}\n\n➸ Jawaban: ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					Resta.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                    console.log(res)
                    })
		            break 
               case 'lirik':
                         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                         if(!q) return reply('lagu apa?')
                         let song = await hx.lirik(q)
                         sendMediaURL(from,song.thumb,song.lirik)
                         limitAdd(sender, limit)
                         break
                case 'wikipedia':
                case 'wiki':
                         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                         if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
                         teks = args.join('  ') 
                         res = await wikiSearch(teks).catch(e => {
                         return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
                          }) 
                          result = `*Judul :* ${res[0].judul}
                         *Wiki :* ${res[0].wiki}`
                           sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
                           reply(result)
                           limitAdd(sender, limit)
                           }) 
                           break
                case 'playstore':
                          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                          if (!q) return reply("lu nyari apa?");
                          let play = await hx.playstore(q);
                          let store = "❉─────────────────────❉\n";
                          for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
                            reply(store);
                            limitAdd(sender, limit)
                            break
              case 'gimage':
              case 'googleimage':
                       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                       if (args.length < 1) return reply('Apa Yang Mau Dicari?')
                       reply(mess.wait)
                       teks = args.join(' ')
                       res = await googleImage(teks, google)
                       function google(error, result){
                       if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
                       else {
                       var gugIm = result
                       var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                       sendMediaURL(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
                       limitAdd(sender, limit)
                       }
                       }
                       break
          case 'gimage2':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                      if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                      reply(mess.wait)
                      query = args.join(" ")
                      get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=${query}`)
                      get_result = get_result.result
                      for (var x = 0; x <= 5; x++) {
                      var ini_buffer = await getBuffer(get_result[x])
                      await Resta.sendMessage(from, ini_buffer, image)
                      limitAdd(sender, limit)
                      }
                      break
                case 'konachan':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    reply(mess.wait)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${lolkey}&query=${query}`)
                    await Resta.sendMessage(from, ini_buffer, image, { quoted: mek})
                    limitAdd(sender, limit)
                    break
                case 'wallpapersearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await Resta.sendMessage(from, ini_buffer, image, { quoted: mek })
                    limitAdd(sender, limit)
                    break
                case 'wallpapersearch2':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await Resta.sendMessage(from, ini_buffer, image, { quoted: mek })
                    limitAdd(sender, limit)
                    break
         case 'kkbi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${q}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					limitAdd(sender, limit)
					break
         case 'pinterest':
	                Resta.updatePresence(from, Presence.composing) 
	                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if(!q) return reply('gambar apa?')
                    reply(mess.wait)
                    let pin = await hx.pinterest(q)
                    let ac = pin[Math.floor(Math.random() * pin.length)]
                    let di = await getBuffer(ac)
                    await Resta.sendMessage(from, di, image, {quoted: mek})
                    limitAdd(sender, limit)
                    break
//------------------< Math Random >-------------------
        case 'simi':
                  if(!q) return reply('text mana simi gk tau') 
                  simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${encodeURI(q)}`)
                  reply(simi.result)
                  break
		 case 'ganteng':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var akun = groupMembers
					var aku = akun[Math.floor(Math.random() * kamu.length)]
					var akunx = kamu[Math.floor(Math.random() * akun.length)]
					let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejs, [aku.jid, akunx.jid], true)
					break
		 case 'cantik':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
					mentions(gejs, [aku.jid, cintax.jid], true)
					break
	      case 'jadian':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ @${cintax.jid.split('@')[0]}\nSemoga Langgeng Hii`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
		 case 'bisakah':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi ganteng`)
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Resta.sendMessage(from, 'Pertanyaan : bisakah ' + q + '\n\nJawaban : ' + keh, text, { quoted: mek })
					break
		 case 'kapankah':
					if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Resta.sendMessage(from, 'Pertanyaan : kapankah ' + q + '\n\nJawaban : ' + koh, text, { quoted: mek })
					break
		 case 'apakah':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Resta.sendMessage(from, 'Pertanyaan : apakah ' + q + '\n\nJawaban : ' + kah, text, { quoted: mek })
					break
		  case 'toxic':
                  Toxic().then(toxic => {
                   reply (toxic)
                   })
                   break
                   case 'seberapagay': case 'howgay': case 'rategay':
                   if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} ${pushname}`)
				   axios.get(`https://arugaz.herokuapp.com/api/howgay`).then(res => res.data).then(res =>
				   textImg(`Nih Liat Data Gay Si ${q}

Persentase Gay : ${res.persen}%
Alert!!! : ${res.desc}`))
				break
	     case 'quotesislami':
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					Resta.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					break	
		case 'quotesnasehat':
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					Resta.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					break	
		  case 'quotescinta':
					const jhhhhhh =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = jhhhhhh[Math.floor(Math.random() * jhhhhhh.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					Resta.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					break 
		 case 'rate':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Resta.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: mek })
					break
		 case 'hobby':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Rara`)
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Resta.sendMessage(from, 'Pertanyaan : hobby ' + q + '\n\nJawaban : ' + by, text, { quoted: mek })
					break
		 case 'truth':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					reply(`${ttrth}`) 
					break
			case 'dare':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					reply(`${der}`) 
					break
	     case 'cekbapak': 
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					Resta.sendMessage(from, cek, text, { quoted: mek })
					break
        case 'delete':
	    case 'del':
	    case 'd':
	                try {
				    if (!isGroup)return reply(mess.only.group)
				    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                    if (!m.quoted.sender === Resta.user.jid) return reply(`Reply pesan dari bot`)
				    Resta.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				    } catch (e){
                    reply('Reply chat bot')
                    }
				    break
	   case 'citacita':
                  const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
                  const cita3 = cita[Math.floor(Math.random() * cita.length)]
                  cita2 = await getBuffer(cita3)
                  Resta.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
                  break
       case 'cekwatak':
                  var namao = pushname
                  var prfx = await Resta.getProfilePicture(sender)
                  const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
                  const wtk = watak[Math.floor(Math.random() * (watak.length))]
                  const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
                  const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
                  const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
                  const sft = sifat[Math.floor(Math.random() * (sifat.length))]
                  const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
                  const hby = hobby[Math.floor(Math.random() * (hobby.length))]
                  const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
                  const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
                  const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
                  const typo = tipe[Math.floor(Math.random() * (tipe.length))]
                  await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
                  break
    case 'cekmati':
                  if (!q) return reply(mess.wrongFormat)
                  predea = await axios.get(`https://api.agify.io/?name=${q}`)
                  reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                  break
                  break
       case 'joke': case 'jokes': case 'randomjoke': case 'randomjokes':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  fetchJson('https://some-random-api.ml/joke')
                 .then((kontlo)=>{
                  textImg(kontlo.joke + '\n\n```~Random Joke```')
                  limitAdd(sender, limit)
                  })
                 .catch((err) => {
                  sendMess(ownerNumber[0], `${command} Error:` + err)
                  reply(mess.error.api)
                  })
                  break
        case 'meme': case 'memes': case 'randommeme': case 'randommemes':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   let yo = ['wholesomeanimemes', 'dankmemes','terriblefacebookmemes','memes','AdviceAnimals','MemeEconomy','nukedmemes','okbuddyretard','historymemes','teenagers'][Math.floor(Math.random() * 10)]
                   fetchJson('https://meme-api.herokuapp.com/gimme/' + yo)
                  .then((kontlo)=>{
                   sendMediaURL(from, kontlo.url, kontlo.title, mek)
                   limitAdd(sender, limit)
                    })
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                     })
                    break
/******************"************************SETTING GRUP*********/
          case 'setdesc':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (args.length > 1) return reply(`Penggunaan ${prefix}setdesc desc`)
                    Resta.groupUpdateDescription(from, q)
                   .then((res) => reply(jsonformat(res)))
                   .catch((err) => reply(jsonformat(err)))
                    break
        case 'setgrupname':
                  if (!isGroup) return reply(mess.only.group)
                  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                  if (args.length > 1) return reply(`Penggunaan ${prefix}setgrupname name`)
                  Resta.groupUpdateSubject(from, q)
                 .then((res) => reply(jsonformat(res)))
                 .catch((err) => reply(jsonformat(err)))
                  break
      case 'promote':
                   if (!isGroupAdmins) return reply(mess.only.admin)
                   if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply ('@tag member atau reply chat member') 
                   if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                   entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                   if (entah.length > 0) {
                   var mems_ids = []
                   for (let ids of entah) {
                   mems_ids.push(ids)
                    }
                   Resta.groupMakeAdmin(from, mems_ids)
                   } else {
                   Resta.groupMakeAdmin(from, entah)
                    }
                    } else {
                    entah = mek.message.extendedTextMessage.contextInfo.participant
                    Resta.groupMakeAdmin(from, [entah])
                    }
                    break
       case 'demote':
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply ('@tag member atau reply chat member') 
                    if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                    entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if (entah.length > 0) {
                    var mems_ids = []
                    for (let ids of entah) {
                    mems_ids.push(ids)
                    }
                    Resta.groupDemoteAdmin(from, mems_ids)
                    } else {
                    Resta.groupDemoteAdmin(from, [entah[0]])
                    }
                    } else {
                    entah = mek.message.extendedTextMessage.contextInfo.participant
                    Resta.groupDemoteAdmin(from, [entah])
                    }
                    break
         case 'sider': 
         case 'chatinfo':
                   if (!isGroup) return reply(mess.only.group)
                   if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                   Resta.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
                  .then((res) => {
                   let anu = []
                   let txt = `*Info Chat*\n\n`
                   for (let i = 0; i < res.reads.length; i++){
                   anu.push(res.reads[i].jid)
                   txt += `@${res.reads[i].jid.split("@")[0]}\n`
                   txt += `Waktu membaca : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                    }
                   mentions(txt, anu, true)
                    })
                 .catch((err) => reply(jsonformat(err)))
                   break
            case 'leave':
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                     reply('bye...')
                    Resta.groupLeave(from)
                     break
            case 'opengrup':
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     Resta.groupSettingChange(from, "announcement", false)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                    break
         case 'closegrup':
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     Resta.groupSettingChange(from, "announcement", true)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                     break
          case 'kickall': 
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     for (let i of groupMembers) {
                     await kickMember(from, [i.jid])
                      }
                      break
        case 'kick':
                      if (!isGroupAdmins) return reply(mess.only.admin)
                      if (!isGroup) return reply(mess.only.group)
                      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                      kick(from, mentionUser)
                      break
      case 'add':
                      if (!isGroupAdmins) return reply(mess.only.admin)
                      if (!isGroup) return reply(mess.only.group)
                      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                      if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
                      entah = arg.split("|")[0]
                      entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
                      entah = `${entah}@s.whatsapp.net`
                      Resta.groupAdd(from, [entah])
                      } else {
                      entah = mek.message.extendedTextMessage.contextInfo.participant
                     Resta.groupAdd(from, [entah])
                     }
                     break
            case 'setppgrup':
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (isImage || isQuotedImage) {
                     let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                     let media = await Resta.downloadMediaMessage(encmedia)
                     Resta.updateProfilePicture(from, media)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                     } else {
                    reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
                    }
                   break
           case 'hidetag':
			            if (!isGroup) return reply(mess.only.group)
			            if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                        ht = body.slice(9)
                        members_id = []
				        for (let mem of groupMembers) {
				        members_id.push(mem.jid)
				        }
                        mentions(ht, members_id, false)
                        break
                 case 'join':
                 case 'join':
                          if (!isOwner)return mentions(`Perintah ini Khusus owner`) 
                          if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
                          if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          Resta.acceptInvite(code)
                         .then((res) => {
                           Resta.sendMessage(res.gid,`*Halo saya ${nama}!*\n_Saya di invit oleh @${sender.split("@")[0]} Untuk masuk ke dalam Group!_\n_Ketik ${prefix}menu untuk Melihat Fitur Bot!_\nJangan lupa Donasi`,text,{contextInfo:{mentionedJid:[sender]},quoted : mek})
                           reply(`_Succses Join Group!_`)
                            })
                          .catch((err) => reply('Sukses Join')) 
                           break
            case 'infoall':
                       if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                       if(!q) return reply('Ingfonya apa?')
                       if (!isGroup) return reply(mess.only.group)
                       var nom = mek.participant
                       members_id = []
	                   teks = '\n'
	                   for (let mem of groupMembers) {
	                   teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
	                   members_id.push(mem.jid)
	                    }
                      mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃\n┃ *From : @${sender.split("@")[0]}*\n┃ *Info :  ${q}*\n┃ *Total Member : ${groupMembers.length}*\n┃ *Nama Group : ${groupName}*\n┃\n┗⬣\n\n┏━━⬣ 𝙏𝘼𝙂 𝘼𝙇𝙇\n┃`+teks+'┃\n┗⬣', members_id, false)
                      break
           case 'tagall':
                       if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)  
                       if (!isGroup) return reply(mess.only.group)
                       var nom = mek.participant
                       members_id = []
	                   teks = '\n'
	                   for (let mem of groupMembers) {
	                   teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
	                   members_id.push(mem.jid)
	                    }
                      mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃\n┃ *From : @${sender.split("@")[0]}*\n┃ *Total Member : ${groupMembers.length}*\n┃ *Nama Group : ${groupName}*\n┃\n┗⬣\n\n┏━━⬣ 𝙏𝘼𝙂 𝘼𝙇𝙇\n┃`+teks+'┃\n┗⬣', members_id, false)
                      break
           case 'linkgroup': case 'linkgc':
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     linkgc = await Resta.groupInviteCode(from)
                     reply('https://chat.whatsapp.com/'+linkgc)
                     break 
          case 'resetlink': case 'revokelink': case 'revoke':
                      if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                      if (!isBotGroupAdmins) return reply (mess.only.Badmin)
                      Resta.query({ json: ['action', 'inviteReset', from], expect200: true })
                      reply('Succses Revoke!!') 
                      break
            case 'welcome':
                       if (!isGroup)return reply(mess.only.group)
                       if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                       if ((args[0]) === 'enable') {
                       if (isWelcome) return reply(`Udah aktif`)
                       welcome.push(from)
					   fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					   reply('Welcome aktif')
                       } else if ((args[0]) === 'disable') {
                       let anu = welcome.indexOf(from)
                       welcome.splice(anu, 1)
                       fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
                       reply('Welcome nonaktif')
                       } else {
                       gc  = [
                       {buttonId: `${prefix + command} enable`, buttonText: {displayText: '</ON'}, type: 1},
                       {buttonId: `${prefix + command} disable`, buttonText: {displayText: '</OFF'}, type: 1}
                        ]
                        gc1 = {
                        contentText: `*Hello Admin👋, Please choose one below!*`,
                        footerText: `${fake}`,
                        buttons: gc,
                        headerType: 1
                        }
                        return Resta.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:mek})
                        }
                        break
                 case 'antilinkgrup':
                 case 'antilink':
                       if (!isGroup)return reply(mess.only.group)
                       if (!isBotGroupAdmins) return reply (mess.only.Badmin)
                       if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                       if ((args[0]) === 'enable') {
                       if (isAntilink) return reply(`Udah aktif`)
                       antilink.push(from)
					   fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					   reply('_Sukses mengaktifkan Antilink Whatsapp digroup ini_')
                       } else if ((args[0]) === 'disable') {
                       let anu = antilink.indexOf(from)
                       antilink.splice(anu, 1)
                       fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                       reply('_Sukses menonaktifkan Antilink Whatsapp digroup ini_')
                       } else {
                       gc  = [
                       {buttonId: `${prefix + command} enable`, buttonText: {displayText: '</ON'}, type: 1},
                       {buttonId: `${prefix + command} disable`, buttonText: {displayText: '</OFF'}, type: 1}
                        ]
                        gc1 = {
                        contentText: `*Hello Admin👋, Please choose one below!*`,
                        footerText: `${fake}`,
                        buttons: gc,
                        headerType: 1
                        }
                        return Resta.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:mek})
                        }
                        break
              case 'antibadword':
                       if (!isGroup)return reply(mess.only.group)
                       if (!isBotGroupAdmins) return reply (mess.only.Badmin)
                       if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                       if ((args[0]) === 'enable') {
                       if (isBadword) return reply(`Udah aktif`)
                       grupbadword.push(from)
					   fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					   reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                       } else if ((args[0]) === 'disable') {
                       anu = grupbadword.indexOf(from)
                       grupbadword.splice(anu, 1)
                       fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                       reply('antibadword grup nonaktif')
                       } else {
                       gc  = [
                       {buttonId: `${prefix + command} enable`, buttonText: {displayText: '</ON'}, type: 1},
                       {buttonId: `${prefix + command} disable`, buttonText: {displayText: '</OFF'}, type: 1}
                        ]
                        gc1 = {
                        contentText: `*Hello Admin👋, Please choose one below!*`,
                        footerText: `${fake}`,
                        buttons: gc,
                        headerType: 1
                        }
                        return Resta.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:mek})
                        }
                        break
              case 'listbadword':
                         let bi = `List badword\n\n`
                         for (let boo of badword){
                         bi += `- ${boo}\n`
                         }
                         bi += `\nTotal : ${badword.length}`
                         reply(bi)
                         break
               case 'addbadword':
                         if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                         if (args.length < 1) return reply(`masukkan kata`)
                         if (isKasar(args[0].toLowerCase(), badword)) return reply(`Udah ada`)
                         addBadword(args[0].toLowerCase(), badword)
                         reply(`Sukses`)
                         break
               case 'delbadword':
                         if (!isOwner) return reply(mess.only.owner)
                         if (args.length < 1) return reply(`masukkan kata`)
                         if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Ga ada`)
                         delBadword(args[0].toLowerCase(), badword)
                         reply(`Sukses`)
                         break
            case 'clearbadword':
                       if (!isOwner) return reply(mess.only.owner)
                       if (args.length < 1) return reply(`tag atau nomor`)
                       if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                       entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                       if (entah.length !== 0){
                       for (let i = 0; i < entah.length; i++){
                       delCountKasar(mentioned[i], senbadword)
                        }
                        reply('Sukses')
                        } else {
                       delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                        reply('Sukses')
                        }
                        }
                        break
/*********************EMOJI*************/
                case 'sticker':
			    case 'stiker':
			    case 's':
			    case 'stickergif':
			    case 'gifsticker':
			            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Resta.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
				       .input(media)
					   .on('start', function (cmd) {
					    console.log(`Started : ${cmd}`)
					    })
					   .on('error', function (err) {
					    console.log(`Error : ${err}`)
					    fs.unlinkSync(media)
					    reply(mess.stick)
						})
					  .on('end', function () {
					   konoy = fs.readFileSync(ran)
					   Resta.sendMessage(from, konoy, sticker, {quoted: mek})
					   fs.unlinkSync(media)
					   fs.unlinkSync(ran)
						})
					  .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					  .toFormat('webp')
					  .save(ran)
					   } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					   const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					   const media = await Resta.downloadAndSaveMediaMessage(encmedia)
					   ran = getRandom('.webp')
					   reply(mess.wait)
					   await ffmpeg(`./${media}`)
				      .inputFormat(media.split('.')[1])
				      .on('start', function (cmd) {
					   console.log(`Started : ${cmd}`)
					    })
				      .on('error', function (err) {
					   console.log(`Error : ${err}`)
					   fs.unlinkSync(media)
					   tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					   reply(mess.stick) 
					   })
				      .on('end', function () {
				       console.log('Finish')
				       buffefr = fs.readFileSync(ran)
				       Resta.sendMessage(from, buffefr, sticker, {quoted: mek})
				       fs.unlinkSync(media)
				       fs.unlinkSync(ran)
					    })
				      .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				      .toFormat('webp')
				      .save(ran)
				      } else {
				      reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					  }
					break
          case 'emoji':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                      if (args.length == 0) return reply (`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

ap = Emoji Apple
wa = Emoji Whatsapp
fk = Emoji Facebook
go = Emoji Google
mo = Emoji Mozilla
tw = Emoji Twitter
sa = Emoji Samsung
ht = Emoji HTC
jp = Emoji  JoyPixels
om = Emoji  OpenMoji
ej = Emoji  emojidex
jp = Emoji  JoyPixels

penggunaan : ${prefix + command } wa 🗿`)
                     emojis = args[0]
                     args.shift()
                     emoje = args.join(" ")
                     reply(mess.wait)
                     limitAdd(sender, limit)
                     switch (emojis) {
               case 'emojidex':
               case 'ej':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[9].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
           	case 'om':
               case 'OpenMoji':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[8].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
           	case 'jp':
               case 'JoyPixels':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[7].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
            	case 'ht':
               case 'HTC':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[12].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
               case 'ap':
               case 'apple':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[0].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
              case 'wa':
              case 'whatsapp':
                         emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[4].url}`
      	       		sendStickerFromUrl(from,`${teks}`)	
    		         	console.log(teks)
   		     	 	})
                         break
              case 'fk':
              case 'facebook':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[6].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'go':
              case 'google':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[1].url}`
    	   	  	sendStickerFromUrl(from,`${teks}`)	
    	   	  	console.log(teks)
   			  	})
                     break
           case 'mo':
           case 'mozila':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[14].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
            case 'tw':
                  emoji.get(`${emoje}`).then(emoji => {
				  teks = `${emoji.images[5].url}`
    	  		sendStickerFromUrl(from,`${teks}`)	
      			console.log(teks)
   				})
                  break
            case 'sa':
            case 'samsung':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[2].url}`
       	 		sendStickerFromUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
                   }
                   break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                case 'amongus':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} ${pushname}`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURI(ini_txt)}`)
                    await Resta.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    limitAdd(sender, limit)
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                    })
                    break
              case 'attp2':
              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
              if (args.length == 0) return reply(`\`\`\`Example: ${prefix + command} ${pushname}\`\`\``)
              iko_buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              Resta.sendMessage(from, iko_buffer, sticker, { quoted: mek })
              limitAdd(sender, limit)
              .catch((err) => {
               sendMess(ownerNumber[0], `${command} Error:` + err)
               reply(mess.error.api)
                })
                break
        case 'tebakgambar':{
                  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                  if (!isGroup) return reply(mess.only.group)
                  if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                  let tbg = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=Hadir_hmm`)
                  const petunjuk = tbg.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                  sendMediaURL(from, tbg.data.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), mek)
                  let anih = tbg.data.result.jawaban.toLowerCase()
                  game.addgambar(from, anih, gamewaktu, tebakgambar)
                  gameAdd(sender, glimit)
	               }
                   break  	 
                   case 'tebaklirik':{
                   if (!isGroup) return reply(mess.only.group)
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
                   let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
                   reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
                   let ahhh = anu.data.result.answer.toLowerCase()
                   game.addtebaklirik(from, ahhh, gamewaktu, tebaklirik) 
                   gameAdd(sender, glimit)
                    }
                   break
        case 'susunkata': case 'tk':{
                   if (!isGroup) return reply(mess.only.group)
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (game.isSusunKata(from, susunkata)) return reply(`Masih ada soal yang belum di selesaikan`)
                   let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
                   reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
                   let khhgg = anu.data.result.jawaban.toLowerCase()
                   game.addkata(from, khhgg, gamewaktu, susunkata)
                   gameAdd(sender, glimit)
                    }
                   break
        case 'tebakkimia': case 'tuk':{
                    if (!isGroup) return reply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
                    let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
                    reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Lambang unsur ${anu.data.result.nama} adalah?\n\nWaktu : ${gamewaktu}s`)
                    let revasayank = anu.data.result.lambang.toLowerCase()
                    game.addkimia(from, revasayank, gamewaktu, tebakkimia)
                    gameAdd(sender, glimit)
                      }
                    break
         case 'tebakbendera': case 'tb':{
                    if (!isGroup) return reply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                    let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
                    const petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Bendera negara manakah itu ${anu.data.result.flag}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
                    let ikasayank = anu.data.result.name.toLowerCase()
                    game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
                    gameAdd(sender, glimit)
                     }
                    break
         case 'tebakanime': case 'ta':{
                    if (!isGroup) return reply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
                    let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolkey}`)
                    const petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    sendMediaURL(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), mek)
                    let nurulsayank = anu.data.result.name.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)
                    gameAdd(sender, glimit)
                    }
                    break
         case 'siapaaku': case 'siapakahaku': case 'sa':{
                     if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                     if (!isGroup) return reply(mess.only.group)
                     if (game.isSiapaAku(from, siapaaku)) return reply(`Masih ada soal yang belum di selesaikan`)
                     let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
                     reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
                     let anau = anu.data.result.answer.toLowerCase()
                     game.addsyiko(from, anau, gamewaktu, siapaaku)
                     gameAdd(sender, glimit)
                      }
                     break
           case 'tebakkata': case 'tl':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
                      let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${lolkey}`)
                      const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
                      let anal = anu.data.result.jawaban.toLowerCase()
                      game.addsusunkata(from, anal, gamewaktu, tebakkata)
                      gameAdd(sender, glimit)
                        }
                      break
           case 'tebakjenaka': case 'tl':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isTebakJenaka(from, tebakjenaka)) return reply(`Masih ada soal yang belum di selesaikan`)
                      let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolkey}`)
                      const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
                      let anal = anu.data.result.answer.toLowerCase()
                      game.addtebakjenaka(from, anal, gamewaktu, tebakjenaka)
                      gameAdd(sender, glimit)
                        }
                      break
                      case 'caklontong': case 'cl':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isCaklontong(from, caklontong)) return reply(`Masih ada soal yang belum di selesaikan`)
                      let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolkey}`)
                      const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
                      let anal = anu.data.result.answer.toLowerCase()
                      game.addcak(from, anal, gamewaktu, caklontong)
                      gameAdd(sender, glimit)
                        }
                      break
           case 'math':{
                       if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                       if (!isGroup) return reply(mess.only.group)
                       if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
                       if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
                       let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=GSdohIiH`)
                       reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
                       let anih = anu.data.jawaban.toLowerCase()
                       game.addmtk(from, anih, gamewaktu, mtk)
                       gameAdd(sender, glimit)
                       }
                       break
          case 'family100':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                      let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s`)
                      let anoh = anu.data.result.answer
                      let rgfds = []
                      for (let i of anoh){
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                        }
                       game.addfam(from, rgfds, gamewaktu, family100)
                       gameAdd(sender, glimit)
                        }
                       break
            case 'cekhistory':
		              reply(`\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`)
		              break
          case 'delsesi':
					if (!isGroupAdmins  && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
					if (args[0] === 'ttt') {
                    delete tictactoe[senderNumber]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))                        
					if (fs.existsSync('./src/' + from + '.json')) {
			        fs.unlinkSync('./src/' + from + '.json')
					reply('Berhasil Menghapus Sesi Ttt')
					} else {
				    reply('Tidak ada sesi yang berlangsung')
					}
					} else {
					gc  = [
                    {buttonId: `${prefix + command} ttt`, buttonText: {displayText: '</HAPUS TICTACTOE'}, type: 1}
                     ]
                    gc1 = {
                    contentText: `*Hello Admin👋, Please choose one below!*`,
                    footerText: `${fake}`,
                    buttons: gc,
                    headerType: 1
                    }
                    return Resta.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:mek})
                     }
                     break
            case 'tictactoe':
            case 'ttt':
					if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (!isGroup) return reply(mess.only.group)
					if (fs.existsSync(`./src/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesi ttt*, untuk menghapus sesi`)
					if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
					if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
				    tttSkuy = setTtt(`${from}`)
					tttSkuy.status = false
					tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
					tttSkuy.Y = args[0].replace("@", "");
					fs.writeFileSync(`./src/${from}.json`, JSON.stringify(tttSkuy, null, 2))
					starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe_`
					Resta.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
		            break
/**************************MUSLIM************************/
                    case 'jadwalsholat': case 'js': case 'jadwalsolat': case 'jadwalshalat': case 'jadwalshalat': 
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply(`Contoh penggunaan ${command} jakarta`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${q}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                     })
                    break
                    case 'nabi': case 'kisahnabi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply(`Contoh penggunaan ${command} muhammad`)
                    fetchJson('https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=' + q)
                    .then((res) =>{
                    sendMediaURL(from, res.nabi.image, `Nama: ${res.nabi.nama}\nUmur: ${res.nabi.umur}\nLahir: ${res.nabi.lahir}\nTempat: ${res.nabi.tempat}\n\n\n${res.nabi.kisah}`, mek)
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(`Mungkin nama Nabi yang anda masukkan Salah`)
                        })
                    break
         case 'alkitab': case 'alkitabsearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply(`Contoh penggunaan ${command} matius`)
                    fetchJson('http://docs-jojo.herokuapp.com/api/alkitabsearch?q=' + q)
                    .then((res) =>{
                    let txt = 'Alkitab Result :\n\n'
                    for (let x of res.result) {
                    txt += `Ayat : ${x.ayat}\n`
                    txt += `Isi : ${x.isi}\n`
                    txt += `Link : ${x.link}\n\n`
                     }
                     textImg(txt)
                     limitAdd(sender, limit)
                     })
                    .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                     reply(mess.error.api)
                     })
                    break
          case 'listsurah':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    let listsurah = `
List Surah:
1. Al-Fatihah
2. Al-Baqarah
3. Ali 'Imran
4. An-Nisa'
5. Al-Ma'idah
6. Al-An'am
7. Al-A’raf
8. Al-Anfal
9. At-Taubah
10. Yunus
11. Hud
12. Yusuf
13. Ar-Ra’d
14. Ibrahim
15. Al-Hijr
16. An-Nahl
17. Al-Isra'
18. Al-Kahf
19. Maryam
20. Ta Ha
21. Al-Anbiya
22. Al-Hajj
23. Al-Mu’minun
24. An-Nur
25. Al-Furqan
26. Asy-Syu'ara'
27. An-Naml
28. Al-Qasas
29. Al-'Ankabut
30. Ar-Rum
31. Luqman
32. As-Sajdah
33. Al-Ahzab
34. Saba’
35. Fatir
36. Ya Sin
37. As-Saffat
38. Sad
39. Az-Zumar
40. Ghafir
41. Fussilat
42. Asy-Syura
43. Az-Zukhruf
44. Ad-Dukhan
45. Al-Jasiyah
46. Al-Ahqaf
47. Muhammad
48. Al-Fath
49. Al-Hujurat
50. Qaf
51. Az-Zariyat
52. At-Tur
53. An-Najm
54. Al-Qamar
55. Ar-Rahman
56. Al-Waqi’ah
57. Al-Hadid
58. Al-Mujadilah
59. Al-Hasyr
60. Al-Mumtahanah
61. As-Saff
62. Al-Jumu’ah
63. Al-Munafiqun
64. At-Tagabun
65. At-Talaq
66. At-Tahrim
67. Al-Mulk
68. Al-Qalam
69. Al-Haqqah
70. Al-Ma’arij
71. Nuh
72. Al-Jinn
73. Al-Muzzammil
74. Al-Muddassir
75. Al-Qiyamah
76. Al-Insan
77. Al-Mursalat
78. An-Naba’
79. An-Nazi’at
80. 'Abasa
81. At-Takwir
82. Al-Infitar
83. Al-Tatfif
84. Al-Insyiqaq
85. Al-Buruj
86. At-Tariq
87. Al-A’la
88. Al-Gasyiyah
89. Al-Fajr
90. Al-Balad
91. Asy-Syams
92. Al-Lail
93. Ad-Duha
94. Al-Insyirah
95. At-Tin
96. Al-'Alaq
97. Al-Qadr
98. Al-Bayyinah
99. Az-Zalzalah
100. Al-'Adiyat
101. Al-Qari'ah
102. At-Takasur
103. Al-'Asr
104. Al-Humazah
105. Al-Fil
106. Quraisy
107. Al-Ma’un
108. Al-Kausar
109. Al-Kafirun
110. An-Nasr
111. Al-Lahab
112. Al-Ikhlas
113. Al-Falaq
114. An-NasAn-Nas`
                    reply(listsurah)
                     break
          case 'renungharian':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                     fetchJson('http://docs-jojo.herokuapp.com/api/renungan').then((res) =>{
                     let ini_txt = ''
                     ini_txt += `Judul : ${res.judul}\n`
                     ini_txt += `Isi : ${res.Isi}\n\n`
                     ini_txt += `Pesan : ${res.pesan}\n`
                     textImg(ini_txt)
                     limitAdd(sender, limit)
                     })
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                     })
                    break
         case 'alkitabharian':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson('http://docs-jojo.herokuapp.com/api/alkitab').then((res) =>{
                    let ini_txt = ''
                    ini_txt += `Ayat : ${res.result.ayat}\n`
                    ini_txt += `Isi : ${res.result.isi}\n\n`
                    ini_txt += `Link : ${res.result.link}\n`
                    sendMediaURL(from, res.result.img, ini_txt, msg)
                    limitAdd(sender, limit)
                     })
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                    })
                    break
        case 'asmaulhusna':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    .then((res) =>{
                    let ini_txt = `No : ${res.result.index}\n`
                    ini_txt += `Latin: ${res.result.latin}\n`
                    ini_txt += `Arab : ${res.result.ar}\n`
                    ini_txt += `Indonesia : ${res.result.id}\n`
                    ini_txt += `English : ${res.result.en}`
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                     })
                    break
        case 'alquranaudio': case 'quranaudio':
                    if (!q) return reply(`Cara Penggunaan : \n${command} Nomor_Surah\n\n ${command} 18/10 (Untuk Membuka Audio Per Ayat)`)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${q}?apikey=${lolkey}`)
                    await Resta.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    .catch((err) => {
                    sendMess(ownerNumber[0], `${command} Error:` + err)
                    reply(mess.error.api)
                    })
                    break
                case 'alquran': case 'surah': case 'surat': case 'quran': case 'alqur\'an': case 'qur\'an':
                    if (!q) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/quran/${q}?apikey=${lolkey}`)
                    .then((res) =>{
                    let ayat = res.result.ayat
                    let ini_txt = `QS. ${res.result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                    var arab = x.arab
                    var nomor = x.ayat
                    var latin = x.latin
                    var indo = x.indonesia
                    ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    let ini_txtt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    let ini_txttt = ini_txtt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    let ini_txtttt = ini_txttt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    textImg(ini_txtttt)
                    limitAdd(sender, limit)
                    })
                  .catch((err) => {
                   sendMess(ownerNumber[0], `${command} Error:` + err)
                   reply(mess.error.api)
                    })
                    break
                default:
                        if (budy.includes(`assalamualaikum`)) {
                         reply(`Waalaikumsalam`)
                         }
		                 if (budy.includes(`Assalamualaikum`)) {
                         reply(`Waalaikumsalam`)
                         }
          }  
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
   }) 
}
starts()