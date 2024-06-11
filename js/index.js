 import { Team } from "./team";

let team = new Team();
let char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }

team.add(char1);

let char2 = {
    name: 'Мечник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
}

team.add(char2);

for (let charecter of team) {
    console.log(charecter);
}

