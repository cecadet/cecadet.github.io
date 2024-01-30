$(document).ready(function()
{

	//BOTON COMPARTIR
	var clicks=1;
	$(".comparte").on("click",function()
	{	
		
		$(this).find(".globo").css("display","block");
		$(this).find(".globo").html("<b>"+clicks+"</b>").css("color","white");
		clicks++;
	});

//REACION LIKIE
	$(".like").on("click", function()
	{
		var texto=$(this).find("span").text()
		
		if(texto=="Me gusta")
		{
			$(this).find("i").css("color","steelblue");
			$(this).find("span").text("Te gusta").css("color","steelblue");
		}
		else
			{
				$(this).find("i").css("color","#767676");
				$(this).find("span").text("Me gusta").css("color","#767676");
			}
		
		
		
		
		
	});

});