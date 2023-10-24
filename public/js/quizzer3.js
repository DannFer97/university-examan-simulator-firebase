
// 1
var questions = [
	[
		"¿A qué se debe la migración externa del Ecuador?",
		"educacion",
		"desempleo",
		"Situacion financiera",
		"Otros",
		1
	],
	[
		"¿Por qué se origino la crisis de la migración?",
		"educacion",
		"desempleo",
		"Situacion financiera",
		"dolarizacion",
		3
	],
	[
		"¿De qué manera influyen la corriente de Humbolt en el clima del Ecuador?",
		"Sistema de alta presión",
		"Madrid",
		"Situacion financiera",
		"dolarizacion",
		0
	],
	[
		"¿Qué tipo de clima tiene la subregión de la cordillera costanera?",
		"seco humedo",
		"desempleo",
		"Situacion financiera",
		"dolarizacion",
		0
	],
	[
		"¿Qué tipo de recurso apoyan la economía del país?",
		"educacion",
		"desempleo",
		"Petroleo",
		"dolarizacion",
		2
	],
	[
		"¿Cuáles son los centros ganaderos más importantes de país?",
		"educacion",
		"desempleo",
		"Situacion financiera",
		"Sierra y Costa",
		3	
		],
	
	[
		"¿Escribe el nombre de los productos de exportación del Ecuador?",
		"educacion",
		"desempleo",
		"Banano, Camarón",
		"dolarizacion",
		2
	],
	[
		"¿Qué es espacio marítimo o mar territorial??",
		"200 millas",
		"desempleo",
		"Banano, Camarón",
		"dolarizacion",
		0
	],
	[
		"¿Cuál es la población económicamente activa?",
		"educacion",
		"ocupadas",
		"Banano, Camarón",
		"dolarizacion",
		1
	],
	[
		"¿Cuándo una persona es considerada económicamente activa?",
		"educacion",
		"empleadas",
		"Banano, Camarón",
		"dolarizacion",
		1
	],
	[
		"¿Cuándo una población es económicamente activa?",
		"educacion",
		"desempleo",
		"Banano, Camarón",
		"dolarizacion",
		2
	],
	[
		"¿Escribe el nombre de los productos de exportación del Ecuador?",
		"participa en la produccion economica",
		"desempleo",
		"Banano, Camarón",
		"dolarizacion",
		0
	],
	[
		"¿CUÁLES SON LAS REGIONES MÁS HABITADAS?",
		"educacion",
		"desempleo",
		"Banano, Camarón",
		"Sierra o costa",
		3
	],
	[
		"15.-¿EN CUÁNTAS CLASES SE CLASIFICAN LAS ACTIVIDADES ECONÓMICAS EN NUESTRO PAÍS Y CUÁL ES LA ACTIVIDAD QUE MÁS SE HA DESARROLLADO?",
		"educacion",
		"Agricola, Industrial y Forestal",
		"Banano, Camarón",
		"dolarizacion",
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
	
7200	timeLeftForQuestion; 

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