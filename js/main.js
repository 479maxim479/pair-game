import { Card } from './card.js';
import { createModal } from './card.js';

function startGame(container, num) {
	let cardsShuffleArray = []
	let cardsArr = []
	let cardOne = null
	let cardTwo = null

	for( let i = 1; i <= num / 2; i++) {
		cardsShuffleArray.push(i)
		cardsShuffleArray.push(i)
	}

	cardsShuffleArray = cardsShuffleArray.sort(() => Math.random() - 0.5)

	for( let cardNumber of cardsShuffleArray) {
		cardsArr.push(new Card(container, cardNumber, action))
	}

	function action(card) {
		let count = [];
		if(cardOne !== null && cardTwo !== null) {
			if(cardOne.number !== cardTwo.number) {
				cardOne.open = false
				cardTwo.open = false
				cardOne = null
				cardTwo = null
			}
		}

		if(cardOne === null) {
			cardOne = card
		} else {
			if(cardTwo === null) {
				cardTwo = card
			}
		}
	
		if(cardOne !== null && cardTwo !== null) {
			if(cardOne.number === cardTwo.number) {
				cardOne.success = true
				cardTwo.success = true
				cardOne = null
				cardTwo = null	
			}
		}

		if(document.querySelectorAll('.success').length === cardsArr.length) {
			alert('победа')
			container.innerHTML = ''
			cardsShuffleArray = []
			cardsArr = []
			cardOne = null
			cardTwo = null
			// location.reload()
			createModal(startGame)
		}
	}
}

createModal(startGame)


// 



