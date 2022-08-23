const selectedFivePlayerList = document.getElementById('selected-five');
function addPlayerCard(element) {
    const playerName = element.parentNode.children[0];
    console.log(playerName);

    if (selectedFivePlayerList.children.length < 5) {

        let li = document.createElement('li');
        li.innerText = playerName.innerText;
        selectedFivePlayerList.appendChild(li);
        const btn = element.parentNode.children[2];
        btn.disabled = true;
        btn.style.backgroundColor = 'gray';

    }
    else {
        alert('You Alrady select Five players');
    }


}

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerField = getInputFieldValueById('per-player-field');

    const playerListIndex = selectedFivePlayerList.children.length;
    console.log(playerListIndex)
    if (playerListIndex <= 0) {
        alert("Dont have any play. Please setect player.")
    }
    const allPlayerAmaount = perPlayerField * playerListIndex
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = allPlayerAmaount;
});

//total calculate 
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;

    const playerExpenses = parseFloat(playerExpensesString);

    const managerSalaryFild = getInputFieldValueById('manager-salary');

    const coachSalaryFild = getInputFieldValueById('coach-salary');

    const totalAmaount = playerExpenses + managerSalaryFild + coachSalaryFild;

    const total = document.getElementById('total-amaount');
    total.innerText = totalAmaount;
});


