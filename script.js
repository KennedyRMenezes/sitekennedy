$(".botao-menu").click(mostraMenu);

function mostraMenu(){
	$(".menu-barra").stop().slideToggle(900);
	scrollMenu();
}; 

function scrollMenu(){
	var posicaoMenu = $(".menu-barra").offset().top;
	$("body").animate(
	{
		scrollTop: posicaoMenu+"px"

	},1300);

}