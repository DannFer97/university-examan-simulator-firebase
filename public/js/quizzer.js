
// MATEMATICAS
var questions = [
	[
		"Andrea, Braulio, Carlos, Dante y Esteban están sentados formando una ronda, en el orden indicado. Andrea dice el número 53, Braulio el 52, Carlos el 51, Dante el 50, y así sucesivamente. ¿Quién dice el numero 1?",
		"Andrea",
		"Carlos",
		"Braulio",
		"Esteban",
		1
	],
	[
		"Si en el  producto  indicado  27x36, cada factor aumenta  en  4  unidades; ¿Cuánto aumenta el producto original??",
		"320",
		"288",
		"328",
		"268",
		3
	],
	[
		"¿En la pizarra están escritos todos los múltiplos de 5 que son mayores que 6 y menores que 135. ¿Cuántos de esos números son impares?",
		"11",
		"10",
		"25",
		"12",
		3
	],
	[
		"¿Para cada x∈ℛ; se define f(x) como: “el mayor entero que es menor o igual a x”. Determine el valor de: f(f(f(-2,8) + 3,5)-1)?",
		"-1",
		"-2",
		"0",
		"1",
		1
	],
	[
		"Hallar la suma de las cifras del menor número de dos cifras que aumentado en 12 da un cuadrado perfecto.",
		"3",
		"4",
		"13",
		"25",
		1
	],
	[
		"¿Cuál es el mayor número natural, formado por dígitos distintos, tal que al multiplicar sus dígitos se obtiene como resultado 40?",
		"5421",
		"5464",
		"8797",
		"4654",
		0
	],
	[
		"¿La diferencia de los cuadrados de dos números consecutivos menos 1, es siempre múltiplo de:?",
		"2",
		"3",
		"5",
		"2 y 3",
		0
	],
	[
		"¿¿Cuántos resultados diferentes se pueden obtener luego de efectuar las operaciones indicadas 0 ± 1 ± 2 ± 3 ± 4;  Si cada signo ± puede ser igual a + ó - ?",
		"6",
		"11",
		"9",
		"10",
		1
	],
	[
		"Si  m - 4p = 3n y  a = (m - p)/(n + p) , halle  2a",
		"22",
		"6",
		"4",
		"8",
		1
	],
	[
		"¿Si f(X–3) = (X*X)+1   y   h(X+1) = 4X+1, halle el valor de h(f(3) + h(– 1))",
		"117",
		"145",
		"115",
		"107",
		0
	],
	[
		"Lucía fue al médico, éste le recetó tomar 4 pastillas, una pastilla cada 6 horas, ¿En qué tiempo podrá terminar de tomar todas las pastillas?",
		"28 horas",
		"24 horas",
		"20 horas",
		"32 horas",
		3
	],
	[
		"¿En  una  habitación  hay  11  pelotas  amarillas,  13  azules  y  17 verdes. Si se le pide a un ciego sacar las pelotas, ¿cuál es el mínimo número de pelotas que debe extraer para que obtenga con total seguridad 11 pelotas del mismo color?",
		"24",
		"11",
		"28",
		"30",
		3
	],
	[
		"Se le pregunta la hora a un señor y este contesta: “Dentro de 20 minutos mi reloj marcará las 10 y 32”. Si el reloj está adelantado de la hora real 5 minutos, ¿qué hora fue hace 10 minutos exactamente?",
		"10:10 min",
		"10:07 min",
		"10:12 min",
		"09:57min",
		3
	],
	[
		"¿Se compran tres manzanas por $10 y se venden cinco manzanas por $20, ¿Cuántas manzanas se deben vender para ganar $150??",
		"125",
		"225",
		"300",
		"150",
		1
	],
	[
		"Pienso en un número. Lo divido entre 7 lo elevo al cuadrado. Le agrego 41. Se le extrae la raíz cuadrada. Finalmente le resto 6 dando como resultado 15 ... ¿Qué número pensé?",
		"150",
		"98",
		"105",
		"140",
		3
	],
	[
		"Dos números son entre sí como 7 es a 13. Si al menor se le suma 140, el valor del otro número debe multiplicarse por 5 para que el valor de la razón no se altere. Halle el mayor de los dos números.",
		"130",
		"65",
		"52",
		"78",
		1
	],
	[
		"¿En una granja hay patos y gallinas en razón 9:10, si sacan 19 gallinas, la razón se invierte. ¿Cuántas gallinas había inicialmente?",
		"10",
		"81",
		"90",
		"100",
		3
	],
	[
		"¿En un establo hay vacas y aves. Si el número total de animales es de 28 y el número contado de patas es 94 ¿Cuántas aves hay?",
		"8",
		"9",
		"10",
		"11",
		1
	],
	[
		"¿Una vaca atada con una soga de 3 metros de largo, se demora 5 días en comer el pasto que está a su alcance. Si la soga fuera de 6 metros. ¿En cuántos días comerá todo el pasto a su alcance?.",
		"10",
		"20",
		"30",
		"22",
		1
	],
	[
		"A es inversamente proporcional al cuadrado de T. Cuando A es 2, el valor de T es 3. Si T = 2, entonces el valor de A es:",
		"8/9",
		"9/2",
		"9/4",
		"8/9",
		1
	],

];

// 2
var questionTemplate = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
      <ul class='options'> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
          <label for='q<%= index %>o1'><%= a %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
          <label for='q<%= index %>o2'><%= b %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
          <label for='q<%= index %>o3'><%= c %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='3' id='q<%= index %>o4'> \
          <label for='q<%= index %>o4'><%= d %></label> \
        </li> \
      </ul> \
    </div> \
    ");


// 3
var points,
	pointsPerQuestion,
	currentQuestion,
	
	timeForQuestion = 7200, // seconds
	timeLeftForQuestion; 

// 4
$(function() {

	// 
	$('button.start').click(start);
	$('.play_again button').click(restart);


	function restart() {
		points = 0;
		pointsPerQuestion = 10;
		currentQuestion = 0;
		timeLeftForQuestion = timeForQuestion;

		$('.finish.card').hide();
		$('div.start').show();
		$('.times_up').hide();

		generateCards();
		updateTime();
		updatePoints();
	}

	// 
	function start() {
		$('div.start').fadeOut(200, function() {
			moveToNextQuestion();
		});
	}

	// 
	function generateCards() {
		$('.questions').html('');
		for (var i = 0; i < questions.length; i++) {
			var q = questions[i];
			var html = questionTemplate({
				question: q[0],
				index: i,
				a: q[1],
				b: q[2],
				c: q[3],
				d: q[4]
			});
			$('.questions').append(html);
		};
		$('.question.card input').change(optionSelected);
	}

	// 
	function moveToNextQuestion() {
		currentQuestion += 1;
		if (currentQuestion > 1) {
			$('.question.card:nth-child(' + (currentQuestion-1) + ')').hide();
		}
		showQuestionCardAtIndex(currentQuestion);
		setupQuestionTimer();
	}

	// 
	function setupQuestionTimer() {
		if (currentQuestion > 1) {
			clearTimeout(questionTimer);
		}
		timeLeftForQuestion = timeForQuestion;
		questionTimer = setTimeout(countdownTick, 1000);
	}

	// 
	function showQuestionCardAtIndex(index) { // staring at 1
		var $card = $('.question.card:nth-child(' + index + ')').show();
	}

	// 
	function countdownTick() {
		timeLeftForQuestion -= 1;
		updateTime();
		if (timeLeftForQuestion == 0) { 
			return finish();
		}
		questionTimer = setTimeout(countdownTick, 1000);
	}

	// 
	function updateTime() {
		$('.countdown .time_left').html(timeLeftForQuestion + 's');
	}

	// 
	function updatePoints() {
		$('.points span.points').html(points + ' puntos');
	}

	// 
	function optionSelected() {
		var selected = parseInt(this.value);
		var correct = questions[currentQuestion-1][5];

		if (selected == correct) {
			points += pointsPerQuestion;
			updatePoints();
			correctAnimation();
		} else {
			wrongAnimation();
		}

		if (currentQuestion == questions.length) {
			clearTimeout(questionTimer);
			return finish();
		}
		moveToNextQuestion();
	}

	
	function correctAnimation() {
		animatePoints('right');
	}

	// 
	function wrongAnimation() {
		animatePoints('wrong');
	}

	// 
	function animatePoints(cls) {
		$('header .points').addClass('animate ' + cls);
		setTimeout(function() {
			$('header .points').removeClass('animate ' + cls);
		}, 500);
	}

	// 
	function finish() {
		if (timeLeftForQuestion == 0) {
			$('.times_up').show();
		}
		$('p.final_points').html(points + ' puntos');
		$('.question.card:visible').hide();
		$('.finish.card').show();
	}

	// 
	restart();

});