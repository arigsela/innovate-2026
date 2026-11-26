let house1Points = 0;
let house2Points = 0;
let house3Points = 0;
let house4Points = 0;
let house1Award = '';
let house2Award = '';
let house3Award = '';
let house4Award = '';
let resetAll = false;

function updateHouse1() {
  document.getElementById('house1-points').innerHTML = house1Points;
  document.getElementById('house1-btn').classList.remove('disabled');
  document.getElementById('house1-btn2').classList.remove('disabled');
  document.getElementById('house1-award').innerHTML = house1Award;
  if (house1Award !== '') {
    document.getElementById('house1-btn').classList.add('disabled');
    document.getElementById('house1-btn2').classList.add('disabled');
  }
}

function updateHouse2() {
  document.getElementById('house2-points').innerHTML = house2Points;
  document.getElementById('house2-btn').classList.remove('disabled');
  document.getElementById('house2-btn2').classList.remove('disabled');
  document.getElementById('house2-award').innerHTML = house2Award;
  if (house2Award !== '') {
    document.getElementById('house2-btn').classList.add('disabled');
    document.getElementById('house2-btn2').classList.add('disabled');
  }
}

function updateHouse3() {
  document.getElementById('house3-points').innerHTML = house3Points;
  document.getElementById('house3-btn').classList.remove('disabled');
  document.getElementById('house3-btn2').classList.remove('disabled');
  document.getElementById('house3-award').innerHTML = house3Award;
  if (house3Award !== '') {
    document.getElementById('house3-btn').classList.add('disabled');
    document.getElementById('house3-btn2').classList.add('disabled');
  }
}

function updateHouse4() {
  document.getElementById('house4-points').innerHTML = house4Points;
  document.getElementById('house4-btn').classList.remove('disabled');
  document.getElementById('house4-btn2').classList.remove('disabled');
  document.getElementById('house4-award').innerHTML = house4Award;
  if (house4Award !== '') {
    document.getElementById('house4-btn').classList.add('disabled');
    document.getElementById('house4-btn2').classList.add('disabled');
  }
}

function reset() {
  document.getElementById('house1-points').innerHTML = '0';
  document.getElementById('house2-points').innerHTML = '0';
  document.getElementById('house3-points').innerHTML = '0';
  document.getElementById('house4-points').innerHTML = '0';
  house1Award = '';
  house2Award = '';
  house3Award = '';
  house4Award = '';
  resetAll = true;
}

function updateAward(house, number) {
  if (house !== 'all') {
    if (house === 'leader') {
      house1Award = number;
      house2Award = number;
      house3Award = number;
      house4Award = number;
    }
  } else {
    house1Award = number;
    house2Award = number;
    house3Award = number;
    house4Award = number;
  }
  house1Points += number;
  house2Points += number;
  house3Points += number;
  house4Points += number;
  document.getElementById('house1-points').innerHTML = house1Points;
  document.getElementById('house2-points').innerHTML = house2Points;
  document.getElementById('house3-points').innerHTML = house3Points;
  document.getElementById('house4-points').innerHTML = house4Points;
}

document.getElementById('house1-btn').addEventListener('click', () => {
  if (house1Points >= 0) {
    house1Points += 10;
    updateHouse1();
  }
});

document.getElementById('house1-btn2').addEventListener('click', () => {
  if (house1Points >= 0) {
    house1Points -= 10;
    updateHouse1();
  }
});

document.getElementById('house1-award').addEventListener('click', () => {
  if (house1Award !== '') {
    updateAward('house1', 10);
  }
});

document.getElementById('house1-reset-btn').addEventListener('click', reset);

document.getElementById('house2-btn').addEventListener('click', () => {
  if (house2Points >= 0) {
    house2Points += 10;
    updateHouse2();
  }
});

document.getElementById('house2-btn2').addEventListener('click', () => {
  if (house2Points >= 0) {
    house2Points -= 10;
    updateHouse2();
  }
});

document.getElementById('house2-award').addEventListener('click', () => {
  if (house2Award !== '') {
    updateAward('house2', 10);
  }
});

document.getElementById('house2-reset-btn').addEventListener('click', reset);

document.getElementById('house3-btn').addEventListener('click', () => {
  if (house3Points >= 0) {
    house3Points += 10;
    updateHouse3();
  }
});

document.getElementById('house3-btn2').addEventListener('click', () => {
  if (house3Points >= 0) {
    house3Points -= 10;
    updateHouse3();
  }
});

document.getElementById('house3-award').addEventListener('click', () => {
  if (house3Award !== '') {
    updateAward('house3', 10);
  }
});

document.getElementById('house3-reset-btn').addEventListener('click', reset);

document.getElementById('house4-btn').addEventListener('click', () => {
  if (house4Points >= 0) {
    house4Points += 10;
    updateHouse4();
  }
});

document.getElementById('house4-btn2').addEventListener('click', () => {
  if (house4Points >= 0) {
    house4Points -= 10;
    updateHouse4();
  }
});

document.getElementById('house4-award').addEventListener('click', () => {
  if (house4Award !== '') {
    updateAward('house4', 10);
  }
});

document.getElementById('house4-reset-btn').addEventListener('click', reset);

document.getElementById('reset-btn').addEventListener('click', resetAll);

if (resetAll) {
  house1Points = 0;
  house2Points = 0;
  house3Points = 0;
  house4Points = 0;
  house1Award = '';
  house2Award = '';
  house3Award = '';
  house4Award = '';
}
