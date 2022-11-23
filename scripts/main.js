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
function addRow(appendClass, divText)
{
    x=0;
    tablerow = document.createElement('div');
    tablerow.className='tablerow borderstyle';
    while(x<=appendClass.length-1)
    {
        appendDiv = document.createElement('div');
        appendDiv.className=('tablecontent borderstyle '+appendClass[x]);
        appendDiv.textContent=(''+divText[x]);
        tablerow.appendChild(appendDiv);
        //console.log(appendDiv);
        //console.log(''+x);
        x++;
    }
    cardTable.appendChild(tablerow);
}
divText = ['Cloudcastle','Synchro','WIND','Level 9','/','Machine','X','0','3000','1','test'];
addRow(appendClass,divText);
divText = ['Live☆Twin Lil-la','Effect Monster','DARK','Level 2','/','Cyberse','X','500','0','4','test'];
addRow(appendClass,divText);
divText = ['Mekk-Knight Crusadia Avramax','Link Monster','LIGHT','Link 4','/','Cyberse','X','3000','/','1','test'];
addRow(appendClass,divText);
divText = ['Endymion, the Mighty Master of Magic','Pendulum Monster','DARK','Level 7','8','Spellcaster','X','2800','1700','0','test'];
addRow(appendClass,divText);

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