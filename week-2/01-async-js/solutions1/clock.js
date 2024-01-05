

setInterval(
()=>
{
    let date=new Date();
    console.clear();
    let H=date.getHours();
    let M=date.getMinutes();
    let S=date.getSeconds();
    let h=H.toString().padStart(2,'0');
    let m=M.toString().padStart(2,'0');
    let s=S.toString().padStart(2,'0');
    console.log(`${h}:${m}:${s}`);

    if(H<=12)
    {
        h=(H+12).toString().padStart(2,'0');
        console.log(`${h}:${m}:${s} AM`);
    }
    else
    {
         h=(H-12).toString().padStart(2,'0');
         console.log(`${h}:${m}:${s} PM`);
    }

},1*1000
)