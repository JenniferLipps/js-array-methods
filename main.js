const struggleBus = [];

const addPassenger = (name, wallet, isStrugglin, seat) => {
  //make passenger object
  //add to bus
  const passenger = {
      name: name,
      wallet: wallet,
      isStrugglin: isStrugglin
  };

  if (seat === 'back') {
      struggleBus.push(passenger);
  }
  else if (seat === 'front') {
      struggleBus.unshift(passenger);
  }
  else if (seat === 'middle') {
     struggleBus.splice(Math.floor(struggleBus.length / 2) + 1, 0, passenger);
    
    }
};

const unloadPassenger = (bus, seat) => {
  //remove passenger from bus
  //return the passenger object
  if (seat === 'front') {
    return bus.shift();
  }
  else if (seat === 'back') {
    return bus.pop();
  }
  
};

const allAboard = (bus) => {
  //loop over the passengers
  //given the bus costs $5
  //if the passenger can afford it, charge them
  //if not, kick them off the bus
  const busFare = 5;
  const validPassenger = [];

  bus.forEach((passenger) => {
    if (passenger.wallet >= busFare) {
      passenger.wallet -= busFare;
      validPassenger.push(passenger);
    };
  });
  return validPassenger;
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
  //build domString from bus parameter
  let domString = '';
  for (let i = 0; i < bus.length; i++) {
    domString += `<div class="bus-seat">`
    domString += `<h4>${bus[i].name}</div>`
    domString += `<p>${bus[i].wallet}</p>`
    domString += `<p>${bus[i].isStrugglin}</p>`
    domString += `</div>`
  };
  printToDom('the-bus', domString);
};

const init = () => {
  addPassenger('Michael', 3, true, 'front');
  addPassenger('Zoe', 20, false, 'back');
  addPassenger('Greg', 4, false, 'back');
  addPassenger('Saul', 12, true, 'front');
  addPassenger('Matt', 5, true, 'front');
  addPassenger('Matt', 15, true, 'front');
  addPassenger('Matt', 3, true, 'front');
  addPassenger('Jen', 10, true, 'middle');

  console.log(struggleBus);
    
  const firstPassenger = unloadPassenger(struggleBus, 'front');

  const busPeople = allAboard(struggleBus);

//   allAboard(struggleBus);

  busBuilder(busPeople);
};

init();