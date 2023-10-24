
// 1
var questions = [
	[
		"Sinónimo de LUCRATIVO",
		"fructífero ",
		"orgulloso",
		"perjudicial",
		"benéfico",
		0
	],
	[
		"Sinónimo de COMIDA",
		"ayuno",
		"dieta",
		"alimento",
		"hambre",
		2
	],
	[
		"´Sinónimo: CONSIGNACIÓN",
		"registro",
		"consulta",
		"disposición",
		"cuenta",
		2
	],
	[
		"´Sinónimo: FINO",
		"sutil ",
		"perfecto",
		"delicado",
		"costoso",
		0
	],
	[
		"´Sinónimo: EGREGIO",
		"permanente",
		"conocido",
		"célebre",
		"nombrado",
		2
	],
	[
		".-  __________: Atemorizar mucho a alguien, de forma que quede aturdido y sin acción.",
		"espantar",
		"amilanar",
		"intimidar",
		"amenazar",
		1
	],
	[
		"__________: Observar, aguardar cautelosamente con algún propósito.",
		" escudriñar",
		"husmear",
		"espiar",
		"acechar",
		3
	],
	[
		"__________: Que desagrada y disgusta. Desdeñoso, descontentadizo, de mal humor.",
		"terco",
		"displicente",
		"apático",
		"seco",
		2
	],
	[
		" __________: Saltar de alegría, alborozarse",
		" exultar ",
		"gritar",
		"festejar",
		"celebrar",
		3
	],
	[
		"Antónimo de: MERITORIO",
		"digno",
		"loable",
		"asalariado",
		"censurable",
		3
	],
	[
		"Antónimo de: ADEFESIO",
		"nocivo",
		"interrumpir",
		"caduco",
		"bello",
		3
	],
	[
		"Antónimo de: EXTROVERTIDO",
		"goloso",
		"reservado",
		"desgano",
		"lícito",
		1
	],
	[
		"Antónimo:  INESTIMABLE",
		"inapreciable",
		"unico",
		"perfecto",
		"moderado",
		1
	],
	[
		"Antónimo: TRANSITORIO",
		"asequible",
		"provisiona",
		"efímero",
		"permanente",
		3
	],
	[
		"Antónimo: EXALTACIÓN",
		"elogio",
		"entusiasmo",
		"encubramiento",
		"censura",
		3
	],
	[
		"´Término Excluido: FELINO",
		"león",
		"tigre",
		"jaguar",
		" cabra ",
		3
	],
	[
		"Término Excluido: PELEA:",
		"armonía",
		"riña",
		"trifulca",
		"pleito",
		0
	],
	[
		"´Término Excluido:: RETRASO",
		"tardanza",
		"demora",
		"adelanto",
		"retardo",
		2
	],
	[
		"Término Excluido: VEHÍCULO:",
		"llantas",
		" radar ",
		" chasis",
		"volante",
		1
	],
	[
		"Término Excluido: RESEÑA",
		" secuencia ",
		"narración",
		"noticia",
		"descripción",
		0
	],[
		"Término Excluido: EGREGIO",
		"permanente",
		"conocido",
		"célebre",
		"nombrado",
		2
	],
	[
		"Complete: Un libro siempre tiene:",
		"pasta",
		"hojas",
		" palabras",
		" ideas ",
		3
	],
	[
		"´Complete: Un abismo siempre tiene:",
		" oscuridad",
		"vegetación",
		"profundidad",
		"rio",
		2
	],
	[
		"Complete:: Un jardín debe tener siempre:",
		"árboles",
		"césped",
		"flores",
		"niños",
		2
	],
	[
		"Complete: El acto de coleccionar estampillas se denomina: ",
		"coleccionista",
		"numismática",
		"archivador",
		" filatelia ",
		3
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