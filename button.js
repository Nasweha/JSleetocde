var objs =[ 
    {
    name: "nasweha ",
    msg : "Hello Iam NAASI"
},
{
    name: "shirin",
    msg : "Hello Iam SHIRIN"
},
{
    name: "Angel",
    msg : "Hello Iam ANGI"
}

]


function main(){
    objs.forEach((item)=>{
        const bt = document.createElement('button')
        bt.innerHTML = item.name
        bt.onclick = getCallBack(item.msg)
        document.body.appendChild(bt)
    })
}

function getCallBack(arg){
    return function(){
        alert(arg)
    }
}

main()