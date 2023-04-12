export class Card {
	_open = false;
	_success = false;

	constructor(container, number, action) {
		this.card = document.createElement('div')
		this.card.classList.add('card')
		this.card.textContent = number
		this.number = number

		this.card.addEventListener('click', () => {
			if (this.open == false && this.success == false) {
				this.open = true
				action(this)
			}
		})
		container.append(this.card)
	}

	set open(value) {
		this._open = value
		value ? this.card.classList.add('open') : this.card.classList.remove('open')
	}	
	get open() {
		return this._open
	}
	set success(value) {
		this._success = value
		value ? this.card.classList.add('success') : this.card.classList.remove('success')
	}	
	get success() {
		return this._open
	}
}

export  function createModal(startGame) {
	let wrapper = document.createElement('div')
	let containerModal = document.createElement('div')
	let content =  document.createElement('div')
	let input = document.createElement('input')
	let buttonWrapper = document.createElement('div')
	let btnAdd = document.createElement('button')
	let btnReset = document.createElement('button')
	input.type = 'number'
	content.textContent = 'Введите количество карт'
	
	wrapper.classList.add('wrapper')
	input.classList.add('input')
	content.classList.add('content')
	containerModal.classList.add('container-modal')
	buttonWrapper.classList.add('btn-wrapper')
	btnAdd.classList.add('btn-primary')
	btnAdd.textContent = 'Добавить'
	btnReset.classList.add('btn-danger')
	btnReset.textContent = 'Сбросить'
	
	buttonWrapper.append(btnAdd)
	buttonWrapper.append(btnReset)
	content.append(input)
	content.append(buttonWrapper)
	containerModal.append(content)
	wrapper.append(containerModal)

	document.body.append(wrapper)

	let	data = document.querySelector('.input')
	btnAdd.addEventListener('click', () => {
		startGame(document.getElementById('game'), data.value)
		wrapper.remove()
	})
	

	btnReset.addEventListener('click', () => {
		document.querySelector('.input').value = ''
		
	})
}


