import {Card} from "./components/Card.js";

Vue.createApp({
    template: `
    <div class="header">
        <h1>Shuffle deck of cards</h1>
        <h2>with vue 🌍</h2>
        <div class="buttons">
            <button @click="handler('36')">generate 36 cards deck</button>
            <button @click="handler('54')">generate 54 cards deck</button>
            <button @click="shuffleDeck">shuffle deck</button>
            <button @click="removeDeck">reset</button>
        </div>
        <div v-if="cards.length != 0" class="cards">
            <Card v-for="card in cards" :props="card"></Card>
        </div>
    </div>
    `,
    components: {
        "Card": Card
    },
    data() {
        return {
            cards: [],
            card: {
                type: "",
                value: ""
            },
            deckSize: []
        }
    },
    methods: {
        handler(cardsCount) {
            console.log(this.cards.length);
            if (this.cards.length != 0) {
                alert("сначала нужно отчистить колоду👹😳")
                return
            }
            this.generateDeck(cardsCount);
        },
        generateDeck(cardsCount) {
            const counts = {
                "54": [2, 3, 4, 5, 6, 7, 8, 9, 10, "В", "Д", "К", "Т"],
                "36": [6, 7, 8, 9, 10, "В", "Д", "К", "Т"]
            }
            const icons = ["черви", "буби", "крести", "пики"];
            for (let number in counts[cardsCount]) {
                for (let icon in icons) {
                    this.cards.push({
                        type: icons[icon],
                        number: counts[cardsCount][number]
                    })
                }
            }
            if (cardsCount === "54") {
                this.cards.push({
                    type: "джокер",
                    number: "J"
                })
                this.cards.push({
                    type: "джокер",
                    number: "J"
                })
            }
            ;
        },
        removeDeck() {
            this.cards = [];
        },
        shuffleDeck() {
            this.cards.sort(this.makeRandomArr)
        },
        makeRandomArr(a, b) {
            return Math.random() - 0.5;
          }
    }
}).mount('#app');