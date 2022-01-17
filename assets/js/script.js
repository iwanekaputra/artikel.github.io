
const gameCard = document.querySelectorAll('.game-card');

for(imgCard of gameCard){
	imgCard.addEventListener('mouseover', function(e) {
		const target = e.target;

		target.classList.add('card-game2')
	});

	imgCard.addEventListener('mouseout', function(e) {
		const target = e.target;

		target.classList.remove('card-game2')
	});
}

