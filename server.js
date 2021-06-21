const express = require("express");
const app = express();
const { Deck, Hand } = require("./app/deck");

const HANDS_PER_DECK = 2;

app.use(express.static("public"));
app.use(express.json());

app.get("/get-cards", (req, res) => {
	const newDeck = new Deck();
	const newHand = new Hand(newDeck, 5);

	return res.json({
		deck: newDeck.cards,
		hand: newHand.cards,
	});
});

app.listen(4001, () => {});
