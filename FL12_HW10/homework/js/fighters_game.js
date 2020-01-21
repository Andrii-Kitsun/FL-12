function Fighter(fighter) {
  fighter.wins = 0;
  fighter.losses = 0;
  fighter.startHP = fighter.hp;

  this.getName = () => fighter.name;
  this.getDamage = () => fighter.damage;
  this.getStrength = () => fighter.strength;
  this.getAgility = () => fighter.agility;
  this.getHealth = () => fighter.hp;

  this.attack = defender => {
    const MAX_CHANCE = 100;
    const HIT_CHANCE = MAX_CHANCE - (defender.getStrength() + defender.getAgility());
    const RAND = Math.random() * MAX_CHANCE;

    if (HIT_CHANCE > RAND) {
      console.log(`${fighter.name} makes ${fighter.damage} damage to ${defender.getName()}`);
      defender.dealDamage(fighter.damage);
    } else {
      console.log(`${fighter.name} attack missed`);
    }
  };
  this.dealDamage = damage => {
    fighter.hp -= damage;
    if (fighter.hp < 0) {
      fighter.hp = 0;
    }
  };
  this.heal = healPoints => {
    fighter.hp += healPoints;
    if (fighter.hp > fighter.startHP) {
      fighter.hp = fighter.startHP;
    }
  };
  this.addWin = () => {
    fighter.wins++;
  };
  this.addLoss = () => {
    fighter.losses++;
  };
  this.logCombatHistory = () => {
    console.log(`Name: ${fighter.name}, Wins: ${fighter.wins}, Losses: ${fighter.losses}`);
  };
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
    return;
  }
  if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
    return;
  }

  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth() === 0) {
      console.log(`${fighter1.getName()} has won`);
      fighter1.addWin();
      fighter2.addLoss();
      return;
    }

    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0) {
      console.log(`${fighter2.getName()} has won`);
      fighter2.addWin();
      fighter1.addLoss();
      return;
    }
  }
}

const myFighter = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90});