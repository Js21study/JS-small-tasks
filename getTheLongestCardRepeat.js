const signs = ['♣️', '♠️', '♦️', '♥️']; // Обозначения мастей: ♣️ (крести), ♠️ (пики), ♦️ (бубны), ♥️ (червы)
const values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const deck = [];

signs.forEach((sign) => {
  values.forEach((value) => {
    deck.push({ sign: sign, value: value });
  });
});

console.log(deck);

const theLongestDeckRepeat = () => {
  let repeatArr = [];
  let shuffledDeck = [];
  let i = 0;
  while (shuffledDeck.length < deck.length) {
    let randomCard = deck[Math.floor(Math.random() * i)];
    let repeatCard =
      randomCard &&
      shuffledDeck.find((el) => el.sign === randomCard.sign && el.value === randomCard.value);

    if (!repeatCard && !!randomCard) {
      shuffledDeck.push(randomCard);
    }
    i++;
  }
  console.log(shuffledDeck, 'shuffled', shuffledDeck.length);

  for (let k = 0; k < shuffledDeck.length; k++) {
    let alreadyInRepeatArr = repeatArr.find((el) => el.value === shuffledDeck[k].value);
    if (
      shuffledDeck[k + 1] &&
      shuffledDeck[k].value === shuffledDeck[k + 1].value &&
      !alreadyInRepeatArr
    ) {
      repeatArr.push(shuffledDeck[k]);
    }
  }

  console.log(repeatArr.length, 'repeat number');
};
let res = theLongestDeckRepeat();
console.log(res);
