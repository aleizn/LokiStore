let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `《 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 》: ${pesan}`
let teks = `< Venta de plataformas-doxeo-diamantes para el free entre otros juegos>
🧑🏻‍💻Atención 24/7
💸Medios de pago yape-plin
《😼𝐈𝐍𝐕𝐎𝐂𝐀𝐂𝐈𝐎𝐍 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 》\n\n❏ ${oi}\n\n❏ 《 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 》:\n`
for (let mem of participants) {
teks += `✼❤️‍🔥 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐋𝐨𝐤𝐢 𝐬𝐭𝐨𝐫𝐞`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    
