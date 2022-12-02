const result=document.getElementById("inputtext")
const calculate =(number)=>{
    result.value+=number

}
const result1=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err)
    {
        alert("Enter Valid Input!")
    }
}
const clr=()=>{
    result.value=''
}
const del=()=>
{
    result.value=result.value.slice(0,-1)
}