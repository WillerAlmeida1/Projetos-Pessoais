const os = require('os')

setInterval(()=>{

  //DESESTRUTURA O "OS", retiramos apenas o que nos convém
  const { arch, platform, totalmem, freemem } = os
  const tRam = parseInt(totalmem()/1024/1024)
  const fRam = parseInt(freemem()/1024/1024)
  //Formula para descobrirmos quanto de 
  //ram esta sendo usado e quanto esta livre
  const usage = parseInt((fRam / tRam) * 100)
  const mFree = 100 - parseInt((fRam / tRam) * 100)

  //O status
  const stats = {
    Arch: arch(),
    OS: platform(),
    TotalRAM: `${tRam}MB`,
    FreeRAM: `${fRam}MB`,
    FreeMemory: `${usage}%`,
    Usage: `${mFree}%`
  }
  
  console.clear()
  console.table(stats)
  //Exporta "stats"
  exports.stats = stats

}, 1000)
