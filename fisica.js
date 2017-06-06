// JavaScript Document
function verificar()
{
	if(document.form1.senha.value == "")
	{
		javascript:MM_showHideLayers('vazio','','show','invalido','','hide');
		document.form1.senha.focus();
	}
	else
	{
		if(document.form1.senha.value == "bento")
			{
				javascript:MM_showHideLayers('validacao','','hide','vazio','','hide','invalido','','hide','link','','show');
			}
			else
			{
				javascript:MM_showHideLayers('vazio','','hide','invalido','','show');
				document.form1.senha.focus();
			}
	}
}
function baixar()
{
	alert('Arquivo ainda não disponibilizado!\nEsperando o professor passar o programa!');
}