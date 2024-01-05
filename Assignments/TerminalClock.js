

setInterval(
    ()=>
    {
        let date= new Date();
        let hours=date.getHours().toString().padStart(2,'0')
        let minutes=date.getMinutes().toString().padStart(2,'0')
        let seconds=date.getSeconds().toString().padStart(2,'0')
        console.clear()
        console.log(`${hours}:${minutes}:${seconds}`)

    },1*1000
)