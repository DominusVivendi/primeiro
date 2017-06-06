// JavaScript Document
function remover_espacos(str)
{
    r = "";
    for(i = 0; i < str.length; i++)
	{
    if(str.charAt(i) != ' ')
    r += str.charAt(i);
    }
    return r;
}
function retira_acentos(texto) {
	var chrEspeciais = new Array("á", "à", "â", "ã", "ä", "é", "è", "ê", "ë",
				     "í", "ì", "î", "ï", "ó", "ò", "ô", "õ", "ö",
				     "ú", "ù", "û", "ü", "ç",
				     "Á", "À", "Â", "Ã", "Ä", "É", "È", "Ê", "Ë",
				     "Í", "Ì", "Î", "Ï", "Ó", "Ò", "Ô", "Õ", "Ö",
				     "Ú", "Ù", "Û", "Ü", "Ç");
	var chrNormais = new Array("a", "a", "a", "a", "a", "e", "e", "e", "e",
				   "i", "i", "i", "i", "o", "o", "o", "o", "o",
				   "u", "u", "u", "u", "c",
				   "A", "A", "A", "A", "A", "E", "E", "E", "E",
				   "I", "I", "I", "I", "O", "O", "O", "O", "O",
				   "U", "U", "U", "U", "C");
	for (_loc in chrEspeciais) {
		texto = texto.replace(chrEspeciais[_loc], chrNormais[_loc]);
	}

	return texto.toLowerCase();
}
function localizar()
{
	buscarm(document.form1.textoloc.value)
}
function buscarm(palavrab)
{
	palavrab = palavrab.toLowerCase();
	palavrab = remover_espacos(palavrab);
	palavrab = retira_acentos(palavrab);
	if(palavrab == "")
	{
		alert('Por favor preencha o campo Localizar');
		document.form1.textoloc.focus();
	}
	else
	if(palavrab == "trabalhodegeografia")
	{
		window.location = 'trabalhodegeografia.html';
	}
	else
	if(palavrab == "programadefisica")
	{
		window.location = 'progfisica.html';
	}
	else
	if(palavrab == "trabalhodematematica")
	{
		window.location = 'trabalhodematematica.html';
	}
	else
	{
		alert('Palavra não encontrada!\nVerifique se a palavra foi digitada corretamente e tente novamente.');
		document.form1.textoloc.focus();
	}
}
