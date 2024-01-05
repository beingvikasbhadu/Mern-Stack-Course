
let fs=require("fs")
let content="";

function task1()
{ return new Promise((resolve)=>{
    fs.readFile("a.txt",'utf-8',
    (err,data)=>
    {
    
        let r=data.split('\r\n');
        
        console.log(r);
        r.forEach((val1)=>{
            let new_r=val1.split(' ');
            console.log(new_r)
            new_r.forEach((val2)=>{
                content+=val2;
                if(val2!='')
                 content+=' ';
            })
            content+='\r\n';
        })
        
        console.log(content)
        resolve("task1 completed")
    })

  
})
    
}

function task2()
{
  return new Promise(
    (resolve)=>
    {
        
        fs.writeFile("a.txt",content,'utf-8',
        (err)=>
        {
            if(err)
            {
                console.log("there is an error in writing operation")
            }
            else
            {

                console.log("writing opeartion successfully executed");
            }
            resolve("task2 completed");
        })
        
    }
  )
}

task1().then(task2).then(
    ()=>
    {
        console.log("file cleaning operation is done!")
    }
)
