var x=document.getElementById("sas");
var y=document.getElementsByClassName("aaa");
x.addEventListener("mouseover",function()
{
    for(let i=0;i<y.length;i++)
    {
        y[i].style.display="block";
    }


});
x.addEventListener("mouseleave",function()
{
    for(let i=0;i<y.length;i++)
    {
        y[i].style.display="none";
    }


}
)
