let prevBtn = document.querySelector('.slider-previous');
let nextBtn = document.querySelector('.slider-next');

// console.log('Previous Button :', prevBtn);
// document.write('Next Button :', nextBtn);

let slide = document.querySelectorAll('.slider-item');
// console.log(slide);
// console.log('je suis le premier item du slider :', slide[0]);

let counter = 0;

slide[counter].classList.add('active');
//slide[counter].classList.remove('active');

let app = document.querySelector('.app');
app.classList.add('active');

// Trouver la taille du tableau

let sliderLength = slide.length;
console.log(sliderLength);


function prevSlide() {
	slide[counter].classList.remove('active');
	counter--;


	// si le compteur est a 0, je reviens a la fin du tableau
	if (counter < 0) {
		
		counter = sliderLength - 1;
	}
	slide[counter].classList.add('active');
}

function nextSlide() {
	slide[counter].classList.remove('active');
	counter++;

	// si le compteur est a la fin du tableau, je reviens au debut  du tableau
	if (counter >= sliderLength) {
		counter = 0;
	}
	slide[counter].classList.add('active');
}

 prevBtn.addEventListener('click', () => {
	prevSlide();
});

nextBtn.addEventListener('click', function() {
	nextSlide();
});