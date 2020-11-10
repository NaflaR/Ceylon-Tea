var mtype = '';
var ptype = '';
var stype = '';
var etype = '';
var cost = 0;
var allmanu = '';
var count = 0;

function team1() {
    mtype = document.getElementById("TeaManu").value;
    document.getElementById("cteao").innerHTML = "Manufacturer Type : "+mtype;
    price();
}
function team2() {
    ptype = document.getElementById("Package").value;
    document.getElementById("cteao1").innerHTML = "Package Type : "+ptype;
    price();
} 
function team3() {
    stype = document.getElementById("Size").value;
    document.getElementById("cteao2").innerHTML = "Size Type : "+stype;
    price();
}
function team4() {
    etype = document.getElementById("extras").value;
    document.getElementById("cteao3").innerHTML = "Extra Type : "+etype;
    price();
} 

function price() {    
    var mtotal = 0;
    var ptotal = 0;
    var stotal = 0;
    var etotal = 0;

    if(mtype == "Dilmah") {
        mtotal = 1000;
    }
    if(mtype == "Jones") {
        mtotal = 1500;
    }
    if(mtype == "GeorgeSteuart") {
        mtotal = 1000;
    }
    if(mtype == "MalwatteValleyPlantations") {
        mtotal = 2000;
    }
    if(mtype == "PrestigeCeylonTeas") {
        mtotal = 1000;
    }
    if(mtype == "EmpireTeas") {
        mtotal = 2000;
    }

    if(ptype == "Paperpouche") {
        ptotal = 1000;
    }
    if(ptype == "Tins") {
        ptotal = 5000;
    }
    if(ptype == "Bags") {
        ptotal = 2500;
    }

    if(stype == "Small") {
        stotal = 1000;
    }
    if(stype == "Medium") {
        stotal = 2500;
    }
    if(stype == "Large") {
        stotal = 5000;
    }

    if(etype == "mug") {
        etotal = 500;
    }
    if(etype == "sp") {
        etotal = 1000;
    }
    if(etype == "ws") {
        etotal = 1500;
    }

    cost = mtotal + ptotal + stotal + etotal;
    document.getElementById("ccteao").innerHTML = "Current Cost : "+cost;
}

function display() {
    var total = 0;

    var currentManu = document.getElementById("oo").innerHTML;
    allmanu = currentManu + mtype + " , ";
    count = count + 1;
    document.getElementById("oo").innerHTML = allmanu;
    document.getElementById("oo1").innerHTML = "Number of Orders : " +count;

    total = document.getElementById("oco").innerHTML;
    var tott = parseInt(total);
    document.getElementById("oco").innerHTML = tott + cost;
}

function order() {
    document.getElementById("oo").innerHTML = "";
    document.getElementById("oco").innerHTML = "0";

    document.getElementById("cteao").innerHTML = "Manufacturer Type : ";
    document.getElementById("cteao1").innerHTML = "Package Type : ";
    document.getElementById("cteao2").innerHTML = "Size Type : ";
    document.getElementById("cteao3").innerHTML = "Extra Type : ";
    document.getElementById("ccteao").innerHTML = "Current Cost : ";

    alert("Order placed Successfully!!");
}

function addfavourites() {
    localStorage.setItem("TeaManu",mtype);
    localStorage.setItem("Package",ptype);
    localStorage.setItem("Size",stype);
    localStorage.setItem("extras",etype);
    localStorage.setItem("cost",cost);
}

function orderfavourites() {
    document.getElementById("cteao").innerHTML = "Manufacturer Type : " + localStorage.getItem("TeaManu");
    document.getElementById("cteao1").innerHTML = "Package Type : " + localStorage.getItem("Package");
    document.getElementById("cteao2").innerHTML = "Size Type : " + localStorage.getItem("Size");
    document.getElementById("cteao3").innerHTML = "Extra Type : " + localStorage.getItem("extras");
    document.getElementById("ccteao").innerHTML = "Current Cost : " + localStorage.getItem("cost");

    document.getElementById("TeaManu").value = localStorage.getItem("TeaManu");
    document.getElementById("Package").value = localStorage.getItem("Package");
    document.getElementById("Size").value = localStorage.getItem("Size");
    document.getElementById("extras").value = localStorage.getItem("extras");
}

function loyalty() {
    var lp = 0;
    if (count > 4){
        lp = count*20;
    }
    else {
        lp = 0;
    }
    document.getElementById("lpy").innerHTML = lp;
}