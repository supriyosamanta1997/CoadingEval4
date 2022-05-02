// write js code here corresponding to matches.html
var matchArr= JSON.parse(localStorage.getItem("schedule"));
 displayData(matchArr)
var favouritArr= JSON.parse(localStorage.getItem("favourites"))||[] ;

function displayData(data)
{
    
    matchArr.forEach(function(elem){
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
        td6.innerText="Add as Favourites"
        td6.setAttribute("id","fev")
        td6.addEventListener("click",function(){
            favouritFun(elem)
        })
    
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}

function favouritFun(elem)
{
    favouritArr.push(elem)
    console.log(favouritArr)
    localStorage.setItem("favourites",JSON.stringify(favouritArr))
    window.location.href="favourites.html"
}



