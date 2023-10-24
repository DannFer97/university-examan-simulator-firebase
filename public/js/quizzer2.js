
// 1
var questions = [
	[
		"Las bacterias son organismos:",
		"Procariotes",
		"Eucariotes",
		"Vegetales",
		"Animales",
		0
	],
	[
		"¿Cuál de las siguientes características es propia de los seres vivos?",
		"Son perennes.",
		"Su adaptabilidad es nula.",
		"Responden a estímulos.",
		"Carecen de procesos metabólicos.",
		2
	],
	[
		"Se describe a un organismo con muchas células, núcleo, una pared celular de quitina y que absorbe su alimento. ¿En qué reino o dominio colocaría a este organismo?",
		"Plantae",
		"Protista",
		"Animalia",
		"Fungi",
		3
	],
	[
		"¿Cuál de estas sustancias es un polisacárido con función de reserva energética en los animales??",
		"Las proteínas integrales.",
		"Las glucoproteínas.",
		"La bicapa lipídica.",
		"Todas son correctas.",
		2
	],
	[
		"Cuál de los siguientes constituyentes de membrana resulta anfipático?",
		"Polisacárido con función estructural.",
		"Monosacárido con función cetona.",
		"Disacárido de glucosa.",
		"Disacárido de glucosa y fructosa.",
		3
	],
	[
		"El ATP es:",
		"Un monosacárido que almacena energía en sus enlaces fosfato.",
		"Un azúcar desoxirribosa que forma parte del ADN.",
		"Un nucleótido que transporta energía química.",
		"Un nucleósido formado de adenina y ribosa.",
		2
	],
	[
		"El embrión se diferencia en tres capas germinales, éstas son:",
		"Gastrulación, segmentación y blastulación..",
		"Ectodermo, mesodermo y endodermo.",
		"Digestivo, circulatorio y muscular.",
		"Mórula, blástula y gástrula.",
		1
	],
	[
		"El proceso por el que las células adquieren forma y función determinadas en el desarrollo embrionario, se conoce como:",
		"Embriogénesis.",
		"Biología del desarrollo.",
		"Diferenciación.",
		"Capas germinativas.",
		2
		
	],
	[
		"A partir del ectodermo se forman:",
		"El sistema digestivo.",
		"La vejiga urinaria y parte de la uretra.",
		"Los músculos de la cara.",
		"El sistema nervioso, la piel y sus anexos.",
		3
	],
	[
		"Un conjunto de reacciones típicamente catabólico es la:",
		"Fotosíntesis.",
		"Glucólisis.",
		"Síntesis de proteínas.",
		"Replicación del ADN.",
		1
	],
	[
		"El organelo que constituye la fuente energética de la célula es:",
		"Mitocondria.",
		"Ribosoma.",
		"Vacuola..",
		"Aparato de Golgi.",
		0
	],
	[
		"Que la célula es la unidad anatómica de los seres vivos quiere decir que...",
		"todos los seres vivos están formados por células..",
		"Que los gametos son células.",
		"Que el funcionamiento de los seres vivos se debe al funcionamiento de sus células",
		"Que hay seres vivos unicelulares y pluricelulares..",
		0
	],
	[
		"Se entiende por genotipo el conjunto de:",
		"Características externas de un individuo.",
		"Alelos no recesivos de un individuo.",
		"Características detectables de un organismo.",
		"Genes que posee un individuo para un carácter.",
		3
	],
	[
		"¿Cuáles son los grupos sanguíneos posibles de un descendiente de un matrimonio entre una mujer de sangre tipo AB y un hombre de sangre tipo O? Indicio: tipo sanguíneo O es recesivo.",
		"ABuO",
		"A,BuO",
		"Ao B",
		"A,B,ABuO",
		2
	],
	[
		"Una mujer portadora que es heterocigota para el carácter recesivo ligado al sexo que causa daltonismo, se casa con un hombre normal. ¿Qué proporción de sus hijos varones tendrán daltonismo?",
		"100%",
		"75%",
		"50%",
		"1%",
		2
	],
	[
		"¿Cuál de las siguientes características es propia de la reproducción sexual?",
		"Se origina a partir de una sola célula haploide.",
		"Se lleva a cabo mediante un proceso de mitosis.",
		"Se produce a partir de células somáticas.",
		"Se origina mediante la presencia y fusión de gametos.",
		3
	],
	[
		"¿Cuál de las siguientes características no es propia de la reproducción sexual?",
		"Se origina a partir de células especializadas haploides.",
		"No existen ni fecundación ni gametos",
		"Se lleva a cabo a partir de células somáticas",
		"La reproducción asexual fue, probablemente, el primer mecanismo de reproducción que tuvieron los seres vivos.",
		0
	],
	[
		"Si se colocan algunas células en una solución salina hipertónica, se produce:",
		"Entrada de agua.",
		"Salida de iones.",
		"Salida de agua.",
		"Entrada de oxígeno.",
		2
	],
	[
		"La diversidad genética es mayor en la:",
		"Partenogénesis.",
		"Reproducción sexual.",
		"Reproducción asexual.",
		"Fisión binaria.",
		1
	],
	[
		"¿Cuál era la composición de la atmósfera de la Tierra cuando se originó la vida?",
		"Oxígeno y nitrógeno, como la actual.",
		"Hidrógeno, amoníaco, metano y vapor de agua.",
		"Oxígeno, amoníaco, metano y vapor de agua",
 		"Nitrógeno, amoníaco, metano y vapor de agua.",
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