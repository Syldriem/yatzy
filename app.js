class Yatzy {
    constructor() {
        this.dice = new Dice();
        this.total1 = new Number(0);
        this.total2 = new Number(0);
    }

    ones(num) {
        num = +num * 1;
        this.total1 = this.total1 + num;
        this.score(this.total1);
    }
    twos(num) {
        num = +num * 2;
        this.total1 = this.total1 + num;
        this.score(this.total1);
    }
    threes(num) {
        num = +num * 3;
        this.total1 = this.total1 + num;
        this.score(this.total1);
    }
    fours(num) {
        num = +num * 4;
        this.total1 = this.total1 + num;
        this.score(this.total1);
    }
    fives(num) {
        num = +num * 5;
        this.total1 = this.total1 + num;
        this.score(this.total1);
    }
    sixes(num) {
        num = +num * 6;
        this.total1 = this.total1 + num;
        this.score(this.total1);
    }
    score(value) {
        document.getElementById("total1").value = +value;
        this.bonus();
        this.total2 = this.total2 + this.total1;
        this.total();
    }
    bonus() {
        if (+document.getElementById("total1").value >= 63) {
            this.total2 = this.total2 + 50;
            this.total();
            return document.getElementById("bonus").value = 50;
        }
    }
    pair(num) {
        let count = 0;
        num = +num;
        for (let i = 0; i < this.dice.dice.length; i++) {
            if (this.dice.dice[i] = num) {
                count++;
            }
        }
        if (count < 2) {
            alert("You dont have a pair");
            return;
        }
        this.total2 = this.total2 + (num * 2);
        this.total();
    }
    threeOfAKind(num) {
        let count = 0;
        num = +num;
        for (let i = 0; i < this.dice.dice.length; i++) {
            if (this.dice.dice[i] === num) {
                count++;
            }
        }
        if (count < 3) {
            alert("You dont have three of a kind");
            return;
        }
        num = num * 3;
        this.total2 = this.total2 + num;
        this.total();
    }
    fourOfAKind(num) {
        let count = 0;
        num = +num;
        for (let i = 0; i < this.dice.dice.length; i++) {
            if (this.dice.dice[i] === num) {
                count++;
            }
        }
        if (count < 4) {
            alert("You dont have four of a kind");
            return;
        }
        num = num * 4;
        this.total2 = this.total2 + num;
        this.total();
    }
    smallStraight() {
        this.dice.dice.sort();
        for (let i = 0; i < this.dice.dice.length; i++) {
            if (this.dice.dice[i] !== i + 1) {
                alert("You dont have small straight");
                return;
            }
        }
        this.total2 = this.total2 + 15;
        this.total();
    }
    largeStraight() {
        this.dice.dice.sort();
        for (let i = 0; i < this.dice.dice.length; i++) {
            if (this.dice.dice[i] !== i + 2) {
                alert("You dont have large straight");
                return;
            }
        }
        this.total2 = this.total2 + 20;
        this.total();
    }
    chance() {
        for (let i = 0; i < this.dice.dice.length; i++) {
            this.total2 = this.total2 + this.dice.dice[i];
        }
        this.total();
    }
    yatzy() {
        for (let i = 0; i < this.dice.dice.length; i++) {
            if (this.dice.dice[i] !== this.dice.dice[0]) {
                alert("You dont have yatzy");
                return;
            }
        }
        this.total2 = this.total2 + 50;
        this.total();
    }
    total() {
        document.getElementById("total2").value = this.total2;
    }
}

class Dice {
    constructor() {
        this.dice = [];
        this.keep = [];
        this.counter = new Number(0);
    }

    isTurnOver() {
        if (this.counter >= 3) {
            const btn = document.getElementById("roll")
            btn.disabled = true;
        }
    }

    turn() {
        if (this.counter < 3) {
            this.counter++;
            return;
        }
        this.isTurnOver();
    }

    roll() {
        this.dice = [...this.keep];
        this.keep = [];
        this.turn();
        let dices = document.getElementById("dices");

        dices.querySelectorAll("div").forEach((e) => {
            if (e.hasAttribute("name")) {
                e.removeAttribute("name");
                e.style.color = "black";
                return;
            } else if (e.hasAttribute("hidden")) {
                e.removeAttribute("hidden");
            }

            let random = Math.floor(Math.random() * 6) + 1;
            this.dice.push(random);
            console.log("dice", this.dice);
            console.log("keep", this.keep);
            switch (random) {
                case 1:
                    e.setAttribute("class", "one");
                    break;
                case 2:
                    e.setAttribute("class", "two");
                    break;
                case 3:
                    e.setAttribute("class", "three");
                    break;
                case 4:
                    e.setAttribute("class", "four");
                    break;
                case 5:
                    e.setAttribute("class", "five");
                    break;
                case 6:
                    e.setAttribute("class", "six");
                    break;
            }
        });
    }
}
