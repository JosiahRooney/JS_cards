/**
 * Created by josiahrooney on 7/6/16.
 */

function DeckConstructor() {
    this.cards = [];
    this.discard = [];
    this.showDeck = function () {
        if ( this.cards.length == 0 ) {
            this.buildDeck();
        }
        console.log('Current deck of ' + this.cards.length + ' cards: '+this.cards);
    };
    this.buildDeck = function () {
        if ( this.cards.length == 0 ) {
            var suits = ['H','S','C','D'];
            var cards = ['2','3','4','5','6','7','8','9','10','11','12','13','14'];
            for ( var i in suits ) {
                var j = 0;
                while( j < cards.length ) {
                    var card = suits[i] + cards[j];
                    this.cards.push(card);
                    j++;
                }
            }
        } else {
            console.log('Deck already built!');
        }
    };
    this.shuffle = function () {
        if ( this.cards.length == 0 ) {
            this.buildDeck();
        }
        this.buildDeck();
        this.discard = [];
        this.discard = this.discard.concat(this.cards);
        this.cards = [];
        for ( var j = 0; j < 52; j++ ) {
            var random_num = Math.floor(Math.random() * this.discard.length);
            this.cards.push(this.discard[random_num]);
            this.discard.splice(random_num, 1);
        }
    };
    this.reset = function () {
        if ( this.cards.length == 0 ) {
            this.buildDeck();
        } else {
            this.cards = [];
            this.discard = [];
            this.buildDeck();
        }
    };
    this.deal = function () {
        var random_num = Math.floor(Math.random() * this.cards.length);
        var card = this.cards[random_num];
        this.cards.splice(random_num, 1);
        return card;
    }
}

function PlayerConstructor (name) {
    this.name = name;
    this.hand = [];
    this.take = function (card) {
        this.hand.push(card);
        return card;
    };
    this.discard = function (card) {
        this.hand.splice(this.hand.indexOf(card));
        return card;
    };
    this.showHand = function() {
        console.log(this.name + "'s hand: " + this.hand);
    }
}



var cards = new DeckConstructor();
cards.buildDeck();
cards.shuffle();
cards.showDeck();
cards.reset();
cards.showDeck();
console.log(cards.deal());
console.log(cards.deal());
console.log(cards.deal());
console.log(cards.deal());
console.log(cards.deal());
cards.showDeck();

var josiah = new PlayerConstructor('Josiah');
josiah.take(cards.deal());
josiah.take(cards.deal());
josiah.take(cards.deal());
josiah.take(cards.deal());
josiah.take(cards.deal());
josiah.showHand();