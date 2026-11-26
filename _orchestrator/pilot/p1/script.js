// script.js

let houses = [
    { name: 'House 1', points: 0, leader: 'House 1', number: 0, pointsDisplay: '', addPoints: function () {
        const currentPoints = document.getElementById('house1-points').textContent;
        if (currentPoints === '0') {
            document.getElementById('house1-points').textContent = '0';
        } else {
            document.getElementById('house1-points').textContent = currentPoints + 10;
        }
    }, subtractPoints: function () {
        const currentPoints = document.getElementById('house1-points').textContent;
        if (currentPoints > 0) {
            document.getElementById('house1-points').textContent = currentPoints - 10;
        }
    }, awardNumber: function () {
        const numberInput = document.getElementById('house1-number');
        if (numberInput.value > 0) {
            const newPoints = Number(numberInput.value);
            document.getElementById('house1-points').textContent = newPoints + 10;
            numberInput.value = 0;
            document.getElementById('house1-leader').textContent = houses[0].name;
            houses[0].leader = 'House 1';
            document.getElementById('house1-leader').textContent = document.getElementById('house1-leader').textContent;
        } else {
            alert('Please enter a whole number greater than 0.');
        }
    }, resetHouse: function () {
        document.getElementById('house1-points').textContent = '0';
        document.getElementById('house1-leader').textContent = 'House 1';
        document.getElementById('house1-leader').textContent = document.getElementById('house1-leader').textContent;
    }],
    { name: 'House 2', points: 0, leader: 'House 2', number: 0, pointsDisplay: '', addPoints: function () {
        const currentPoints = document.getElementById('house2-points').textContent;
        if (currentPoints === '0') {
            document.getElementById('house2-points').textContent = '0';
        } else {
            document.getElementById('house2-points').textContent = currentPoints + 10;
        }
    }, subtractPoints: function () {
        const currentPoints = document.getElementById('house2-points').textContent;
        if (currentPoints > 0) {
            document.getElementById('house2-points').textContent = currentPoints - 10;
        }
    }, awardNumber: function () {
        const numberInput = document.getElementById('house2-number');
        if (numberInput.value > 0) {
            const newPoints = Number(numberInput.value);
            document.getElementById('house2-points').textContent = newPoints + 10;
            numberInput.value = 0;
            document.getElementById('house2-leader').textContent = houses[1].name;
            houses[1].leader = 'House 2';
            document.getElementById('house2-leader').textContent = document.getElementById('house2-leader').textContent;
        } else {
            alert('Please enter a whole number greater than 0.');
        }
    }, resetHouse: function () {
        document.getElementById('house2-points').textContent = '0';
        document.getElementById('house2-leader').textContent = 'House 2';
        document.getElementById('house2-leader').textContent = document.getElementById('house2-leader').textContent;
    }],
    { name: 'House 3', points: 0, leader: 'House 3', number: 0, pointsDisplay: '', addPoints: function () {
        const currentPoints = document.getElementById('house3-points').textContent;
        if (currentPoints === '0') {
            document.getElementById('house3-points').textContent = '0';
        } else {
            document.getElementById('house3-points').textContent = currentPoints + 10;
        }
    }, subtractPoints: function () {
        const currentPoints = document.getElementById('house3-points').textContent;
        if (currentPoints > 0) {
            document.getElementById('house3-points').textContent = currentPoints - 10;
        }
    }, awardNumber: function () {
        const numberInput = document.getElementById('house3-number');
        if (numberInput.value > 0) {
            const newPoints = Number(numberInput.value);
            document.getElementById('house3-points').textContent = newPoints + 10;
            numberInput.value = 0;
            document.getElementById('house3-leader').textContent = houses[2].name;
            houses[2].leader = 'House 3';
            document.getElementById('house3-leader').textContent = document.getElementById('house3-leader').textContent;
        } else {
            alert('Please enter a whole number greater than 0.');
        }
    }, resetHouse: function () {
        document.getElementById('house3-points').textContent = '0';
        document.getElementById('house3-leader').textContent = 'House 3';
        document.getElementById('house3-leader').textContent = document.getElementById('house3-leader').textContent;
    }],
    { name: 'House 4', points: 0, leader: 'House 4', number: 0, pointsDisplay: '', addPoints: function () {
        const currentPoints = document.getElementById('house4-points').textContent;
        if (currentPoints === '0') {
            document.getElementById('house4-points').textContent = '0';
        } else {
            document.getElementById('house4-points').textContent = currentPoints + 10;
        }
    }, subtractPoints: function () {
        const currentPoints = document.getElementById('house4-points').textContent;
        if (currentPoints > 0) {
            document.getElementById('house4-points').textContent = currentPoints - 10;
        }
    }, awardNumber: function () {
        const numberInput = document.getElementById('house4-number');
        if (numberInput.value > 0) {
            const newPoints = Number(numberInput.value);
            document.getElementById('house4-points').textContent = newPoints + 10;
            numberInput.value = 0;
            document.getElementById('house4-leader').textContent = houses[3].name;
            houses[3].leader = 'House 4';
            document.getElementById('house4-leader').textContent = document.getElementById('house4-leader').textContent;
        } else {
            alert('Please enter a whole number greater than 0.');
        }
    }, resetHouse: function () {
        document.getElementById('house4-points').textContent = '0';
        document.getElementById('house4-leader').textContent = 'House 4';
        document.getElementById('house4-leader').textContent = document.getElementById('house4-leader').textContent;
    }],
];

let currentHouse = 0;

document.querySelector('.house-scoreboard').addEventListener('click', function () {
    const house = houses[currentHouse];
    const houseHTML = '';
    houseHTML += `<h2>${house.name}</h2>`;
    houseHTML += `<p>Points: <span id="house${house.name}-points">0</span></p>`;
    houseHTML += `<button class="add-points">+10</button>`;
    houseHTML += `<button class="subtract-points">-10</button>`;
    houseHTML += `<input id="house${house.name}-number" type="number">`;
    houseHTML += `<button class="award-button">Award</button>`;
    houseHTML += `<p id="house${house.name}-leader"></p>`;
    houseHTML += `<button class="reset-button">Reset</button>`;
    document.querySelector('.house-scoreboard').innerHTML = houseHTML;
    document.querySelector(`#${house.name}-points`).textContent = house.points;
});

document.querySelector('.add-points').addEventListener('click', function () {
    const currentPoints = document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-points`).textContent;
    const newPoints = Number(document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-number`).value);
    if (newPoints > 0) {
        document.querySelector(`#${currentHouse}-points`).textContent = newPoints;
        document.querySelector(`#${currentHouse}-points`).textContent = document.querySelector(`#${currentHouse}-points`).textContent + 10;
        document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-number`).value = 0;
        updateLeaderhouse();
    } else {
        alert('Please enter a whole number greater than 0.');
    }
});

document.querySelector('.subtract-points').addEventListener('click', function () {
    const currentPoints = document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-points`).textContent;
    const newPoints = Number(document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-number`).value);
    if (newPoints > 0) {
        document.querySelector(`#${currentHouse}-points`).textContent = currentPoints - 10;
        document.querySelector(`#${currentHouse}-points`).textContent = document.querySelector(`#${currentHouse}-points`).textContent - 10;
        document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-number`).value = 0;
        updateLeaderhouse();
    } else {
        alert('Please enter a whole number greater than 0.');
    }
});

document.querySelector('.award-number').addEventListener('click', function () {
    const numberInput = document.querySelector('.house-scoreboard').querySelector('.house-scoreboard').querySelector(`#${currentHouse}-number`);
    const newPoints = Number(numberInput.value);
    document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-points`).textContent = newPoints + 10;
    document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-number`).value = 0;
    updateLeaderhouse();
});

document.querySelector('.reset-button').addEventListener('click', function () {
    document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-points`).textContent = '0';
    document.querySelector('.house-scoreboard').querySelector(`#${currentHouse}-number`).value = 0;
    document.querySelector('.house-scoreboard').querySelector('.house-scoreboard').querySelector(`#${currentHouse}-leader`).textContent = '';
    currentHouse = 0;
    updateLeaderhouse();
});

function updateLeaderhouse() {
    let maxPoints = 0;
    let leader = '';
    houses.forEach(house => {
        if (house.points > maxPoints) {
            maxPoints = house.points;
            leader = house.name;
        }
    });
    document.querySelector('.house-scoreboard').querySelector('.house-scoreboard').querySelector(`#${currentHouse}-leader`).textContent = leader;
}
