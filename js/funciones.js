$(document).ready(function()
{ //inicia JS
	$("#backend").hide();
	$("#bootstrap").hide();

	$(".nav-item").on("click",function()
	{

		
		idselect=$(this).attr("id"); 	
		const idnew = idselect.substring(1);

		caja=$(this).attr("href");
		const idcaja = caja.substring(1);
		//alert(idselect);
		//recorre los tabs
		$(".nav-item").each(function()
		{
			iditem=$(this).attr("id");

			
			if(idselect==iditem)
			{
				
				$("#"+idselect).addClass("active");
				
			}
			else
				{
					$("#"+iditem).removeClass("active");
					
				}
		});

		//recorre los paneles y donde coindica con href del tab lo activa
		$(".accordion").each(function()
		{
			idpanel=$(this).attr("id");
			
			if(idpanel==idcaja)
				{	
					//alert(idpanel+" es igual "+idcaja);
					$("#"+idpanel).css("display","block");
				}
				else
				{
					//alert(idpanel+" es diferente "+idcaja);
					$("#"+idpanel).css("display","none");
				}

		});	
	});
	
//termina JS
});

