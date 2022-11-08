const endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?';
let body = document.getElementById('body');
let navbar = document.createElement('div');
navbar.className='navbar';
let navitem1 = document.createElement('div');
navitem1.className = 'navitem borderstyle';
let navitem2 = document.createElement('div');
navitem2.className = 'navitem borderstyle';
let navitem3 = document.createElement('div');
navitem3.className = 'navitem borderstyle';
let navitem4 = document.createElement('div');
navitem4.className = 'navitem borderstyle';
navbar.appendChild(navitem1);
navbar.appendChild(navitem2);
navbar.appendChild(navitem3);
navbar.appendChild(navitem4);
//body.appendChild(navbar);

let cardTable = document.getElementById('table');
let tablerow = document.createElement('div');
tablerow.className='tablerow borderstyle';
let x=0;
let appendDiv;
let appendClass = ['name','cardtype','attribute','level','pendulum','type','tuner','atk','def','count','notes'];
let divText = ['Cloudcastle','Synchro','WIND','Level 9','/','Machine','X','0','3000','1','test'];
while(x<=appendClass.length-1)
{
    appendDiv = document.createElement('div');
    appendDiv.className=('tablecontent borderstyle '+appendClass[x]);
    appendDiv.textContent=(''+divText[x]);
    tablerow.appendChild(appendDiv);
    console.log(appendDiv);
    console.log(''+x);
    x++;
}
cardTable.appendChild(tablerow);
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
