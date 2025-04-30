export default function typeAliasSample() {
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const korea: Country = {
    capital: 'Seoul',
    language: 'Korean',
    name: 'Republic of Korea',
  };

  console.log('Object alias sample 1:', korea);

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  };

  console.log('Object alias sample 2:', america);

  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  type Adventurer = Knight | Wizard;
  type Paladin = Knight & Wizard;

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '엑스칼리버',
    swordSkill: '스윽',
  };

  console.log('Object alias sample 3:', adventurer1);

  const adventurer2: Adventurer = {
    hp: 350,
    mp: 100,
    weapon: '해리포터 지팡이',
    magicSkill: '파이아',
  };

  console.log('Object alias sample 4:', adventurer2);

  const paladin: Paladin = {
    hp: 350,
    mp: 100,
    sp: 100,
    weapon: '엑스칼리버',
    swordSkill: '스윽',
    magicSkill: '파이아ㅏ아',
  };

  console.log('Object alias sample 5:', paladin);
}
