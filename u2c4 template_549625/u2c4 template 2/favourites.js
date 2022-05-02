// write js code here corresponding to favourites.html
var favouritArr= JSON.parse(localStorage.getItem("favourites"))
displayData(favouritArr)

function displayData(data)
{
    
    favouritArr.forEach(function(elem,index){
        var tr=document.createElement("tr");
    
        var td1=document.createElement("td")
        td1.innerText=elem.matchNumber
    
        var td2=document.createElement("td")
        td2.innerText=elem.teamA
    
        var td3=document.createElement("td")
        td3.innerText=elem.teamB
    
        var td4=document.createElement("td")
        td4.innerText=elem.matchDate
    
        var td5=document.createElement("td")
        td5.innerText=elem.matchVenue
    
        var td6=document.createElement("td")
        td6.innerText="Delete"
        td6.setAttribute("id","del")
        td6.addEventListener("click",function(){
            deleteRowFun(elem,index)
        })
    
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}

function deleteRowFun(elem,index)
{
    favouritArr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favouritArr))
    window.location.reload();
}