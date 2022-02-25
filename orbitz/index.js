document.getElementById("signIn").addEventListener("click", ()=>{
    if(document.getElementById("signinBox").style.display == "block")
    {
        document.getElementById("signinBox").style.display = "none";
    }
    else{
        document.getElementById("signinBox").style.display = "block";
    }
    
})

document.getElementById("travel").addEventListener("click", ()=>{
    if(document.getElementById("moreTravel").style.display == "block")
    {
        document.getElementById("moreTravel").style.display = "none";
    }
    else{
        document.getElementById("moreTravel").style.display = "block";
    }
    
})

let data =  JSON.parse(localStorage.getItem("data"));
console.log(data);
showData(data);
function showData(data){
    if(data.length==0)
    {
     console.log("No data");
     document.getElementById("signIn").innerHTML = "Sign In"
    }
    else{
        
        console.log(data[0].name);
            document.getElementById("signIn").innerHTML = data[0].name;
        
    }
}

document.getElementById("book").addEventListener("click",() => {
    let book =  JSON.parse(localStorage.getItem("book"));
    if(book==null)
    {
        localStorage.setItem("book",JSON.stringify([]));
        let book = JSON.parse(localStorage.getItem("book")); 
    }

   let dest = document.getElementById("dest").value;
   let indate = document.getElementById("check-indate").value;
   let outdate = document.getElementById("check-outdate").value;
   let count = document.getElementById("count").value;
   let flight="No";
   let car="No";
   if(document.getElementById("addflight").value=="checkedin")
   {
     flight = "Yes";
   }
   else{
    flight = "No";
   }
   if(document.getElementById("addcar").value=="checkedin")
   {
     car = "Yes";
   }
   else{
     car = "No";
   }
   
    let obj = {
    dest,
    indate,
    outdate,
    count,
    flight,
    car,
  };
  book.push(obj);
  console.log(obj);
  console.log(book)
  localStorage.setItem("book", JSON.stringify(book));
  bookedData(book);
});

function bookedData(book){
    document.getElementById("loc").innerHTML=book[0].dest;
    document.getElementById("go").innerHTML=book[0].indate;
    document.getElementById("co").innerHTML=book[0].outdate;
    document.getElementById("tra").innerHTML=book[0].count;
    document.getElementById("ye").innerHTML=book[0].flight;
    document.getElementById("no").innerHTML=book[0].car;
    document.getElementById("bookedData").style.display="block";

    setTimeout(()=>{
        window.location.href = "./index.html"
    },5000);
}

