var licznik = 5;
var licznik2 = 0;
var licznik3 = 0;
var numerek = 1;
var shift = 0;
var slajdy = "";
var slajdy2 = "";
var napis = new Array(5);

window.onload = start;
// $('.carousel').carousel();

napis[0] = "WARSZAWA";
napis[1] = "MADRYT";
napis[2] = "LONDYN";
napis[3] = "BUENOS AIRES";
napis[4] = "MOSKWA";

function odliczanie()
{
	var dzisiaj;
	var godzina;
	var minuta;
	var sekunda;
	var chwila;
	
	dzisiaj = new Date();
	godzina = dzisiaj.getHours();
	if(godzina<10)
		godzina='0'+godzina;
	minuta = dzisiaj.getMinutes();
	if(minuta<10)
		minuta='0'+minuta;
	sekunda = dzisiaj.getSeconds();
	if(sekunda<10)
		sekunda='0'+sekunda;
	chwila = godzina+':'+minuta+':'+sekunda;
	document.getElementById('Zegar_bis').innerHTML = chwila;
}
function slajder2()
{
	$('#B'+licznik2).slideDown(500);
}
function kasownik()
{
	$('#A'+licznik3).animate({width: 0},1000);
	$('#Ramka ul').animate({marginLeft: shift}, 1000);
}
function slajder()
{
	var indeks = numerek - 1;
	if(licznik2<3)
	{
		shift = shift - 1347;
		$('#Ramka ul').animate({marginLeft: shift}, 1000);
	}
	setTimeout(slajder2, 1000);
	$('#Ramka ul').append('<li id="A'+licznik+'"><img class="nav-item" width=1347 height=600 src="rysunek'+indeks+'.jpg"/><div id="B'+licznik+'" class="Tekst">'+napis[indeks]+'</div></li>');
	licznik++;
	numerek++;
	if(numerek==6)
		numerek = 1;
	if(licznik2>2)
	{
		licznik3 = licznik2 - 3;
		kasownik();
	}
	licznik2++;
}
function start()
{
	setInterval(odliczanie, 1000);
	// setInterval(slajder, 5000);
	// setTimeout(slajder2, 1000);
}

$(document).ready(function(){
	var Menu1 = $('.Navbarek').offset().top;
	var sticky_Menu1 = function()
	{
		var Skrol = $(window).scrollTop();
		if(Skrol > Menu1)
		{
			$('.Navbarek').addClass('Klej');
		}
		else
		{
			$('.Navbarek').removeClass('Klej');
		}
	};
	sticky_Menu1();
	$(window).scroll(function () {sticky_Menu1()});
});

