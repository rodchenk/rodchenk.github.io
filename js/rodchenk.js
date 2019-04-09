$(document).ready(function(e){
	var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {constrainWidth: false});
    $('.materialboxed').materialbox();
    $('.project-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true
	});
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	});
});

function switchTheme(e){
	var style = document.getElementById('main_style');
	style.href = 'css/' + (e ? 'dark.rodchenk.css' : 'light.rodchenk.css');
}
function switchLanguage(lang){
	setTranslation(lang);
}
function translate(word, language){
	return translation[language][word] === undefined ? word : translation[language][word];
}
function setTranslation(lang){
	var words = document.getElementsByClassName('translate');
	for (var i = 0; i < words.length; i++) {
		words[i].innerHTML = translate(words[i].getAttribute('data-word'), lang);
	}
}