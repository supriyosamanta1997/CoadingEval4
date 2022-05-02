// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", masaiFun)
 var matchArr= JSON.parse(localStorage.getItem("schedule"))||[];
function masaiFun(){
    event.preventDefault();
    var masaiObj={
        matchNumber:document.querySelector("#matchNum").value,
        teamA:document.querySelector("#teamA").value,
        teamB:document.querySelector("#teamB").value,
        matchDate:document.querySelector("#date").value,
        matchVenue:document.querySelector("#venue").value,
    };

    matchArr.push(masaiObj);
    console.log(matchArr)
    localStorage.setItem("schedule",JSON.stringify(matchArr))
    window.location.href="matches.html"
}