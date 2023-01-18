
const endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?';
//navbar
let body = document.getElementById('body');
let navbar = document.createElement('div');
navbar.className='navbar';
let y=0;
let navdiv;
let navitem;
let navcontent=['Catalouge','Card-lookup','Card-lookup alt.','Account'];
let navlink=['./index.html','./card_lookup.html','./card_lookup_alt_example.html',''];
let length = localStorage.length;
while(y<=navcontent.length-1)
{
    navdiv=document.createElement('div');
    navdiv.className='navitem borderstyle';
    navitem=document.createElement('a');
    navitem.href=(''+navlink[y]);
    navitem.textContent=(''+navcontent[y]);
    navdiv.appendChild(navitem);
    navbar.appendChild(navdiv);
    y++;
}
body.appendChild(navbar);
console.log(navbar);

//dynamic table row
let cardTable = document.getElementById('table');
let tablerow;
let x;
let appendDiv;
let appendClass = ['name','cardtype','attribute','level','pendulum','type','tuner','atk','def','count','notes'];
let divText;
function addRow(card)
{
    tablerow = document.createElement('div');
    tablerow.className='tablerow borderstyle';
    tablerow.appendChild(newDiv([0],card.name));
    tablerow.appendChild(newDiv([1],card.cardtype));
    tablerow.appendChild(newDiv([2],card.attribute));
    tablerow.appendChild(newDiv([3],card.level));
    tablerow.appendChild(newDiv([4],card.scale));
    tablerow.appendChild(newDiv([5],card.type));
    if(card.tuner==true)
    {tablerow.appendChild(newDiv([6],'O'));}
    else
    {{tablerow.appendChild(newDiv([6],'X'));}}
    tablerow.appendChild(newDiv([7],card.atk));
    tablerow.appendChild(newDiv([8],card.def));
    tablerow.appendChild(newDiv([9],card.count));
    tablerow.appendChild(newDiv([10],card.notes));
    cardTable.appendChild(tablerow);
    //x=0;
    /* old code
    for(x=0;x<appendClass.length;x++)
    {
        appendDiv = document.createElement('div');
        appendDiv.className=('tablecontent borderstyle '+appendClass[x]);
        appendDiv.textContent=(''+divText[x]);
        tablerow.appendChild(appendDiv);
        //tablerow.id=""+(length+1);
        //console.log(appendDiv);
        //console.log(''+x);
    }
    */
}
function newDiv(divnumber,divcontent)
{
    appendDiv = document.createElement('Div');
    appendDiv.className = ('tablecontent borderstyle '+appendClass[divnumber]);
    appendDiv.textContent=(''+divcontent);
    return appendDiv;
}
function addrowField(appendClass)
{
    let inputField=document.getElementById('search').value.split(',');
    //console.log(+inputField);
    addRow(appendClass, inputField);
    if(localStorage.length!=0)
    {localStorage.setItem(length+1,inputField);}
    else
    {localStorage.setItem(1,inputField)}
    length++;
}
async function loadSaved()
{
    let data = await fetch('/gets');
    data =await data.json();
    console.log(data);
    //console.log(await data.length);
    for(i=0;i<data.length;i++)
    {
        console.log(data[i]);
        addRow(data[i]);
    }
}
function deleteRow()
{
    cardTable.removeChild(cardTable.lastChild);
    localStorage.removeItem(length);
    length--;
}
function createJSON()
{
    let card;
    card = 
    {
            name:document.getElementById('nameinput').value,
            cardtype:document.getElementById('cardtypeinput').value,
            attribute:document.getElementById('attributeinput').value,
            level:document.getElementById('levelinput').value,
            scale:document.getElementById('scaleinput').value,
            type:document.getElementById('typeinput').value,
            tuner:document.getElementById('tunerinput').checked,
            atk:document.getElementById('atkinput').value,
            def:document.getElementById('definput').value,
            count:document.getElementById('amountinput').value,
            notes:document.getElementById('noteinput').value
    };
    console.log(JSON.stringify(card));
    console.log(card);
    let cardstring = JSON.stringify(card);
    addRow(card);
    sendCard(cardstring);
    /*console.log(name);
    console.log(cardtype);
    console.log(attribute);
    console.log(level);
    console.log(scale);
    console.log(type);
    console.log(tuner);
    console.log(atk);
    console.log(def)
    console.log(count);
    console.log(notes);*/
}
function sendCard(card)
{
    console.log('sent JSON: ' +card),
    fetch('/posts',
    {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body:card,
    })
    .then((result) => 
    {
        if (result.status != 200) { throw new Error("Bad Server Response"); }
        return result.text();
    })
    .then((response) =>
    {
        console.log(response);
    })
    .catch((error)=>
    {
        console.log(error);
    });
}
/*
function insertCard(card)
{
    MongoClient.connect(url, function(err,db)
    {
        if(err) throw err;
        var dbo = db.db('cards');
        dbo.collection('cardlist').insertOne(card,function(err,response)
        {
            if(err) throw err;
            console.log('card inserted!');
            db.close;
        });
    });
}
*/
/*divText = ['Cloudcastle','Synchro','WIND','Level 9','/','Machine','X','0','3000','1','test'];
addRow(appendClass,divText);
divText = ['Live☆Twin Lil-la','Effect Monster','DARK','Level 2','/','Cyberse','X','500','0','4','test'];
addRow(appendClass,divText);
divText = ['Mekk-Knight Crusadia Avramax','Link Monster','LIGHT','Link 4','/','Cyberse','X','3000','/','1','test'];
addRow(appendClass,divText);
divText = ['Endymion, the Mighty Master of Magic','Pendulum Monster','DARK','Level 7','8','Spellcaster','X','2800','1700','0','test'];
addRow(appendClass,divText);*/

//cardTable.appendChild(tablerow);

//deprecated code
/*let navitem1 = document.createElement('div');
let navcontent1 = document.createElement('a');
navcontent1.href="./index.html";
navcontent1.textContent='Catalouge';
navitem1.appendChild(navcontent1);
navitem1.className = 'navitem borderstyle';
let navitem2 = document.createElement('div');
let navcontent2 = document.createElement('a');
navcontent2.href="./card_lookup.html";
navcontent2.textContent='Card-lookup';
navitem2.appendChild(navcontent2);
navitem2.className = 'navitem borderstyle';
let navitem3 = document.createElement('div');
let navcontent3 = document.createElement('a');
navcontent3.href="./card_lookup_alt_example.html";
navcontent3.textContent='Card-lookup alt.';
navitem3.appendChild(navcontent3);
navitem3.className = 'navitem borderstyle';
let navitem4 = document.createElement('div');
let navcontent4 = document.createElement('a');
navcontent4.textContent='Account';
navitem4.appendChild(navcontent4);
navitem4.className = 'navitem borderstyle';
navbar.appendChild(navitem1);
navbar.appendChild(navitem2);
navbar.appendChild(navitem3);
navbar.appendChild(navitem4);
console.log(navbar);
body.appendChild(navbar);*/

/*let cardName = document.createElement('div');
cardName.className = 'tablecontent borderstyle name';
cardName.textContent = 'Cloudcastle';
tablerow.appendChild(cardName);

let cardBaseType = document.createElement('div');
cardBaseType.className = 'tablecontent borderstyle cardtype';
tablerow.appendChild(cardBaseType);
cardBaseType.textContent = 'Monster';

let cardAttribute = document.createElement('div');
cardAttribute.className = 'tablecontent borderstyle atribute';
tablerow.appendChild(cardAttribute);
cardAttribute.textContent = 'WIND';

let cardLevel = document.createElement('div');
cardLevel.className = 'tablecontent borderstyle level';
tablerow.appendChild(cardLevel);
cardLevel.textContent = 'Level 9';

let cardScale = document.createElement('div');
cardScale.className = 'tablecontent borderstyle pendulum';
tablerow.appendChild(cardScale);
cardScale.textContent = '/';

let cardType = document.createElement('div');
cardType.className = 'tablecontent borderstyle type';
tablerow.appendChild(cardType);
cardType.textContent = 'Machine';

let cardTuner = document.createElement('div');
cardTuner.className = 'tablecontent borderstyle tuner';
tablerow.appendChild(cardTuner);
cardTuner.textContent = 'X';

let cardATK  = document.createElement('div');
cardATK.className = 'tablecontent borderstyle atk';
tablerow.appendChild(cardATK);
cardATK.textContent = '0 / 3000';

let cardCount = document.createElement('div');
cardCount.className = 'tablecontent borderstyle count';
tablerow.appendChild(cardCount);
cardCount.textContent = '1';

let cardNotes = document.createElement('div');
cardNotes.className = 'tablecontent borderstyle notes';
tablerow.appendChild(cardNotes);
cardNotes.textContent = 'Test';
*/
//cardTable.appendChild(tablerow);
/*while(x<=appendClass.length-1)
{
    appendDiv = document.createElement('div');
    appendDiv.className=('tablecontent borderstyle '+appendClass[x]);
    appendDiv.textContent=(''+divText[x]);
    tablerow.appendChild(appendDiv);
    console.log(appendDiv);
    console.log(''+x);
    x++;
}*/