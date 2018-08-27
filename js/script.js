/* Recebe os valores do artigo e do botão do artigo */

/*       FASE 1              */
var start = document.getElementById('start');
var step = document.getElementById('step');
/*       FASE 1              */

/*       FASE 2              */
var step1 = document.getElementById('step1');
var next1 = document.getElementById('next1');
var voltar1 = document.getElementById('voltar1');

/*       FASE 2              */

/*       FASE 3              */
var step2 = document.getElementById('step2');
var next2 = document.getElementById('next2');
var op2 = document.getElementById('op2');
var voltar2 = document.getElementById('voltar2');
/*       FASE 3              */

/*       FASE 4              */
var step3 = document.getElementById('step3');
var next3 = document.getElementById('next3');
var op3 = document.getElementById('op3');
var voltar3 = document.getElementById('voltar3');

/*       FASE 4              */


/*       FASE 5              */
var step4 = document.getElementById('step4');
var next4 = document.getElementById('next4');
var op4 = document.getElementById('op4');
var voltar4 = document.getElementById('voltar4');

/*       FASE 5              */

/*       FASE  6             */
var step5 = document.getElementById('step5');
var next5 = document.getElementById('next5');
var op5 = document.getElementById('op5');
var voltar5 = document.getElementById('voltar5');

/*       FASE  6             */

/*       FASE  7             */
var step6 = document.getElementById('step6');
var next6 = document.getElementById('next6');
var op6 = document.getElementById('op6');
var voltar6 = document.getElementById('voltar6');

/*       FASE  7             */

/*       FASE  8             */
var step7 = document.getElementById('step7');
var next7 = document.getElementById('next7');
var op7 = document.getElementById('op7');
var voltar7 = document.getElementById('voltar7');

/*       FASE  8            */

/*       FASE  8             */
var step8 = document.getElementById('step8');
var next8 = document.getElementById('next8');
var voltar8 = document.getElementById('voltar8');
/*       FASE  8            */

/*       FASE  9             */
var step9 = document.getElementById('step9');
var next9 = document.getElementById('next9');
var voltar9 = document.getElementById('voltar9');
/*       FASE  9            */

/*       FASE  10             */
var step10 = document.getElementById('step10');
var next10 = document.getElementById('next10');
var voltar10 = document.getElementById('voltar10');
/*       FASE  10            */


/*	Alterna entre as questões	*/

start.onclick = function(){
	step.style.display = "none";
	step1.style.display = "block";
};

next1.onclick = function(){
	step1.style.display = "none";
	step2.style.display = "block";
}
voltar1.onclick = function(){
	step.style.display = "block";
	step1.style.display ="none";
}





next2.onclick = function(){
	if(document.form.op2[0].checked==false && 
		document.form.op2[1].checked==false &&
		document.form.op2[2].checked==false &&
		document.form.op2[3].checked==false){
		alert("Escolha um opção!");
	}else{
	step2.style.display = "none";
	step3.style.display = "block";
	}
}
voltar2.onclick = function(){
	step1.style.display = "block";
	step2.style.display ="none";
}





next3.onclick = function(){
	if(document.form.op3[0].checked==false && 
		document.form.op3[1].checked==false &&
		document.form.op3[2].checked==false &&
		document.form.op3[3].checked==false){
		alert("Escolha um opção!");
	}else{
	step3.style.display = "none";
	step4.style.display = "block";
	}
}
voltar3.onclick = function(){
	step2.style.display = "block";
	step3.style.display ="none";
}







next4.onclick = function(){
	if(document.form.op4[0].checked==false && 
		document.form.op4[1].checked==false &&
		document.form.op4[2].checked==false &&
		document.form.op4[3].checked==false){
		alert("Escolha um opção!");
	}else{
	step4.style.display = "none";
	step5.style.display = "block";
	}
}
voltar4.onclick = function(){
	step3.style.display = "block";
	step4.style.display ="none";
}






next5.onclick = function(){
	if(document.form.op5[0].checked==false && 
		document.form.op5[1].checked==false &&
		document.form.op5[2].checked==false &&
		document.form.op5[3].checked==false){
		alert("Escolha um opção!");
	}else{
	step5.style.display = "none";
	step6.style.display = "block";
	}
}
voltar5.onclick = function(){
	step4.style.display = "block";
	step5.style.display ="none";
}








next6.onclick = function(){
	if(document.form.op6[0].checked==false && 
		document.form.op6[1].checked==false &&
		document.form.op6[2].checked==false &&
		document.form.op6[3].checked==false){
		alert("Escolha um opção!");
	}else{
	step6.style.display = "none";
	step7.style.display = "block";
	}
}
voltar6.onclick = function(){
	step5.style.display = "block";
	step6.style.display ="none";
}







next7.onclick = function(){
	if(document.form.op7[0].checked==false && 
		document.form.op7[1].checked==false &&
		document.form.op7[2].checked==false &&
		document.form.op7[3].checked==false){
		alert("Escolha um opção!");
	}else{
	step7.style.display = "none";
	step8.style.display = "block";
	}
}
voltar7.onclick = function(){
	step6.style.display = "block";
	step7.style.display ="none";
}







next8.onclick = function(){
	step8.style.display = "none";
	step9.style.display = "block";
}

voltar8.onclick = function(){
	step7.style.display = "block";
	step8.style.display ="none";
}








next9.onclick = function(){
	step9.style.display = "none";
	step10.style.display = "block";
}
voltar9.onclick = function(){
	step8.style.display = "block";
	step9.style.display ="none";
}

voltar10.onclick = function(){
	step9.style.display = "block";
	step10.style.display ="none";
}
/*	Alterna entre as questões	*/

/*

*/