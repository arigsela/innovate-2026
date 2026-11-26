let houses = [
  {
    name: 'House 1',
    points: 0,
    award: 0,
    reset: 0
  },
  {
    name: 'House 2',
    points: 0,
    award: 0,
    reset: 0
  },
  {
    name: 'House 3',
    points: 0,
    award: 0,
    reset: 0
  },
  {
    name: 'House 4',
    points: 0,
    award: 0,
    reset: 0
  }
];

// Initialize houses
for (let i = 0; i < houses.length; i++) {
  document.querySelector(`.houses-name#${i + 1}`).textContent = houses[i].name;
  document.querySelector(`.houses-points #points-${i + 1}`).textContent = houses[i].points;
}

// Add event listeners
for (let i = 0; i < houses.length; i++) {
  document.querySelector(`.houses-points #points-${i + 1}`).addEventListener('click', () => {
    if (houses[i].points > 0) {
      houses[i].points += 10;
      document.querySelector(`.houses-points #points-${i + 1}`).textContent = `${houses[i].points} points`;
    } else {
      alert('Points cannot be negative!');
    }
  });

  document.querySelector(`.houses-points #award-${i + 1}`).addEventListener('click', () => {
    if (houses[i].points > 0) {
      houses[i].award += 10;
      document.querySelector(`.houses-points #award-${i + 1}`).textContent = `${houses[i].award} award points`;
    } else {
      alert('Points cannot be negative!');
    }
  });

  document.querySelector(`.houses-points #reset-${i + 1}`).addEventListener('click', () => {
    houses[i].points = 0;
    document.querySelector(`.houses-points #points-${i + 1}`).textContent = '0 points';
  });
}
