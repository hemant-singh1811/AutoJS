var btn = document.getElementById('add');
var col = document.getElementById('col');
var del = document.getElementById('del')
var cols = document.getElementById('cols');
var tcol = document.getElementById('tcol');
var form = document.getElementById('form');
var create = document.getElementById('btn');
var type = document.getElementById('type');
var table = document.getElementById('table');
var total = document.getElementById('i');
var table_name=document.getElementById('table_name');
// cols.style.visibility='hidden';
// table.style.visibility='hidden';


const map = new Map();
var i = 0;
var option = ['Number', 'Charcters']
var box;
btn.onclick = function () {
    i++;
    var BOX = document.createElement("div");
    table.style.visibility = 'visible';
    cols.style.visibility = 'visible';

    // var cols=document.createElement
    console.log('you clicking the button');
    var INPUT = document.createElement("INPUT");
    var TYPE = document.createElement('select');
    option.forEach(e => {
        var typ = document.createElement("option");
        typ.text = e;
        TYPE.add(typ);
    });
    INPUT.setAttribute("type", "text");
    INPUT.style.textTransform = "uppercase"
    var ipt = "ipt" + i;
    var types = 'TYPE' + i;
    INPUT.setAttribute('id', ipt);
    TYPE.setAttribute('id', types);
    TYPE.required = true;
    INPUT.required = true;
    TYPE.style.margin = '5px';
    TYPE.style.border = '2px #8f9e9e solid';
    INPUT.setAttribute('name', ipt);
    TYPE.setAttribute('name', types);
    TYPE.style.display = 'block';
    INPUT.style.display = 'inline-block';
    BOX.appendChild(TYPE);
    // console.log("INPUT id : " + INPUT.id);
    BOX.appendChild(INPUT);
    BOX.style.margin = '4px'
    BOX.style.border = '2px #8f9e9e solid';
    BOX.style.display = 'inline-block'
    BOX.style.margin = '10px'
    TYPE.style.margin = '10px';
    //    cols.style.border='2px black solid';
    box = 'box' + i;
    BOX.setAttribute('id', box);
    // console.log('BOX : ' + box);
    BOX.style.marginLeft = '5px'
    BOX.style.padding = '5px'
    // di.style.textAlign='center'
    
    // cols.style.margin='auto';
    BOX.style.backgroundColor = '#d4caca';
    cols.style.backgroundColor = 'rgb(214 223 232 / 56%)';
    cols.style.textAlign='center';
    cols.style.border='2px black solid;'
    cols.appendChild(BOX);
    tcol.value = i.toString();
    total.setAttribute('name', 'total')
    total.textContent = i;
}

del.onclick = function () {
    if (i > 0) {
        // console.log('last di id : ' + box);
        var myobj = document.getElementById(box);

        // console.log('i before :' + i);
        myobj.remove();
        i = i - 1;
        // console.log('i after :' + i);
        box = 'box' + i;
        // console.log('last di id : ' + box);
    }
    total.textContent = i;
    tcol.value = i.toString();

    if (i == 0) {
        console.log("table name",table_name.value);
        // var nul="";
        table_name.value="";
        cols.style.visibility = 'hidden';
        table.style.visibility = 'hidden';
        cols.style.border = '0';
    }
}

form.addEventListener('click', (e) => {
    // create.onclick=function(){
    console.log('inside the event listener');
    for (let j = 1; j <= i; j++) {
        var s = 'ipt' + j;
        console.log("form s : " + s);
        var alet = document.getElementById(eval(s));
        if (alet.value != "" && alet.value != null) {
            if (!map.has(alet.value)) {
                map.set(s, 1);
            } else {
                e.preventDefault;
                window.alert('every column name should by unique')

                alet.style.border = '2px red solid';
            }
        }

    }

    // }
})