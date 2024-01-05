let cnt=0;

function Counter()
{
    setTimeout(
        ()=>{
            cnt+=1;
            console.clear();
            console.log(cnt)
            Counter()
        },
        1*1000
    )
}
Counter()