fetch('https://restcountries.eu/rest/v2/all').then((data)=>{
    return data.json();
}).then(data=> GetCountries(data))
.catch((error)=>{
    console.log("Error encountred while fetching the countries");
});

function GetCountries(Countries)
{
    var maindiv=document.createElement("div");
    maindiv.className="container";
    maindiv.id="ContainerDiv";

    console.log(Countries.length);
    var card=[],Countryname=[],CountryImage=[],capital=[],CountryCode=[],Region=[];
    var column=[],row=[];
    for (var j = 0; j <1; j++) {    

     row[j]=document.createElement("div");
     row[j].className="row";
    for (let i = 0; i < Countries.length; i++) {

        column[i]=document.createElement("div");
        column[i].className="col-sm-3"

    card[i]=document.createElement("div");
    card[i].className="card";
//    card[i].setAttribute("style","width: 18rem");
  

    Countryname[i]=document.createElement("div");
    Countryname[i].className="Countryname";
    Countryname[i].innerHTML=i+1+"). "+Countries[i].name;
    card[i].appendChild(Countryname[i]);

    CountryImage[i]=document.createElement("img");
    CountryImage[i].src=Countries[i].flag;
    CountryImage[i].className="card-img-top";
    card[i].appendChild(CountryImage[i]);

    capital[i]=document.createElement("div");
    capital[i].className="CountryDetails";
    capital[i].innerHTML="Country Capital : "+Countries[i].capital;
    card[i].appendChild(capital[i]);

    
    CountryCode[i]=document.createElement("div");
    CountryCode[i].className="CountryDetails";
    CountryCode[i].innerHTML="Country Codes : "+Countries[i].alpha2Code+","+Countries[i].alpha3Code;
    card[i].appendChild(CountryCode[i]);

    
    Region[i]=document.createElement("div");
    Region[i].className="CountryDetails";
    Region[i].innerHTML="Region : "+Countries[i].region;
    card[i].appendChild(Region[i]);

    column[i].appendChild(card[i]);
    row[j].appendChild(column[i]);
    }
    
    maindiv.appendChild(row[j]);
}

    document.body.appendChild(maindiv);
    console.log(Countries);
}



