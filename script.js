// JavaScript Document
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function vergaleria(galeria)
{
	window.open('galeria_'+galeria+'.html','','height=590,width=700,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no');
}
function dia(dia)
{
	data(dia,mesatual);
}
function data(dia,mes)
{
	window.open(mes+'.html#d'+dia,'','height=450,width=350,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no');
}
function irdata()
{
	if(document.form1.irdia.value == "")
	{
		alert('Escolher um dia');
		document.form1.irdia.focus();
	}
	else
	if(document.form1.irmes.value == "")
	{
		alert('Escolher um mês');
		document.form1.irmes.focus();
	}
	else
	{
		data(document.form1.irdia.value,document.form1.irmes.value);
	}
}
function mostralegenda(materia,nprof)
{
	document.form1.legendahorario.value = materia;
	document.form1.nomeprof.value = nprof;
}
function filtrarcad()
{
	if(document.form1.filtrocad.value == "geografia")
	{
		javascript:document.getElementById("cadgeografia").style.display="block";
		javascript:document.getElementById("cadbiologia").style.display="none";
		javascript:document.getElementById("cadsociologia").style.display="none";
	}
	if(document.form1.filtrocad.value == "biologia")
	{
		javascript:document.getElementById("cadgeografia").style.display="none";
		javascript:document.getElementById("cadbiologia").style.display="block";
		javascript:document.getElementById("cadsociologia").style.display="none";
	}
	if(document.form1.filtrocad.value == "sociologia")
	{
		javascript:document.getElementById("cadgeografia").style.display="none";
		javascript:document.getElementById("cadbiologia").style.display="none";
		javascript:document.getElementById("cadsociologia").style.display="block";
	}
	if(document.form1.filtrocad.value == "")
	{
		javascript:document.getElementById("cadgeografia").style.display="block";
		javascript:document.getElementById("cadbiologia").style.display="block";
		javascript:document.getElementById("cadsociologia").style.display="block";
	}
}