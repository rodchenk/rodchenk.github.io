$(document).ready(function(e){
	var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {constrainWidth: false});
    $('.parallax').parallax();
});

function switchTheme(e){
	var style = document.getElementById('main_style');
	style.href = 'css/' + (e ? 'dark.rodchenk.css' : 'light.rodchenk.css');
}
function switchLanguage(lang){
	//document.getElementById('lang-switcher').text = lang;
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