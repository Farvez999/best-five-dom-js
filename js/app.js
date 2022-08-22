const selectedFive = document.getElementById('selected-five');
function addPlayerCard(element) {
    const playerName = element.parentNode.children[0];
    console.log(playerName);

    if (selectedFive.children.length < 5) {

        let li = document.createElement('li');
        li.innerText = playerName.innerText;
        selectedFive.appendChild(li);
        const btn = element.parentNode.children[2];
        btn.disabled = true;
        btn.style.backgroundColor = 'gray';

    }
    else {
        alert('You Alrady select Five players');
    }


}

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player-field').value;
    const perPlyer = parseFloat(perPlayerField);
    console.log(perPlyer)

    const playerListIndex = selectedFive.children.length;
    console.log(playerListIndex)
    if (playerListIndex <= 0) {
        alert("Dont have any play. Please setect player.")
    }
    const allPlayerAmaount = perPlyer * playerListIndex
    console.log(allPlayerAmaount);
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = allPlayerAmaount;
});


