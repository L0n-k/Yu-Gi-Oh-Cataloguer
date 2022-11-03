const endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?';

let cardTable = document.getElementById('table');
let tablerow = document.createElement('div');
tablerow.className='tablerow borderstyle';
console.log(tablerow);
let cardName = document.createElement('div');
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
cardTable.appendChild(tablerow);

