


$(function() {
	var App = {
		filled: 0,
		inputs: {}
	};
	App.data = {
		items: [
			{
				"label": "Вопрос 1",
				"text": "<p>Год рождения.</p>",
				"name": "",
				"id": "question_1",
				"textArea" : true
			},
			{
				"label": "Вопрос 2",
				"text": "<p>Город, в котором вы живёте.</p>",
				"name": "",
				"id": "question_2",
				"textArea" : true
			},
			{
				"label": "Вопрос 3",
				"text": "<p>Вуз, факультет, специальность, кафедра.</p>",
				"name": "",
				"id": "question_3",
				"textArea" : true
			},
			{
				"label": "Вопрос 4",
				"text": "<p>Год окончания вуза.</p>",
				"name": "",
				"id": "question_4",
				"textArea" : true
			},
			{
				"label": "Вопрос 5",
				"text": "<p>Уровень владения английским языком:</p><div><input name=\"question_5-1\" type=\"checkbox\" id=\"question_5-1\" value=\"1\"><label for=\"question_5-1\">начальный</label></div><div><input name=\"question_5-2\" type=\"checkbox\" id=\"question_5-2\" value=\"2\"><label for=\"question_5-2\">средний</label></div><div><input name=\"question_5-3\" type=\"checkbox\" id=\"question_5-3\" value=\"3\"><label for=\"question_5-3\">свободное владение</label></div>",
				"name": "",
				"id": "question_5",
				"textArea" : false
			},
			{
				"label": "Вопрос 6",
				"text": "<p>Чего вы ожидаете от участия в Школе?</p>",
				"name": "",
				"id": "question_6",
				"textArea" : true

			},
			{
				"label": "Вопрос 7",
				"text": "<p>Откуда вы о нас узнали?</p>",
				"name": "",
				"id": "question_7",
				"textArea" : true
			},
			{
				"label": "Вопрос 8",
				"text": "<p>Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?</p>",
				"name": "",
				"id": "question_8",
				"textArea" : true
			},
			{
				"label": "Вопрос 9",
				"text": "<p>Расскажите о вашем опыте разработки. Нам будет интересно всё — как серьезный интерфейс, так и просто домашняя страничка.</p>",
				"name": "",
				"id": "question_9",
				"textArea" : true
			},
			{
				"label": "Вопрос 10",
				"text": "<p>Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.</p>",
				"name": "",
				"id": "question_10",
				"textArea" : true
			},
			{
				"label": "Вопрос 11",
				"text": "<p>Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.</p>",
				"name": "",
				"id": "question_11",
				"textArea" : true
			},
			{
				"label": "Вопрос 12",
				"text": "<p>Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?</p>",
				"name": "",
				"id": "question_12",
				"textArea" : true
			},
			{
				"label": "Вопрос 13",
				"text": "<p>Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:</p><p >4! + 0! + 5! + 8! + 5! = 40585</p><p>В качестве ответа на вопрос пришлите ссылку на <a href=\"http://jsfiddle.net/\" >http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на <a href=\"https://github.com/\" >https://github.com/</a>.</p>",
				"name": "",
				"id": "question_13",
				"textArea" : true
			},
			{
				"label": "Вопрос 14",
				"text": "<p >Вы — пилот грузового межгалактического корабля. Ваша работа — перевозка грузов с одной планету на другую. Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое состояние (местоположение и степень загруженности), а также летать в любую точку пространства. Каждая планета может содержать на себе груз, который можно взять. Также на каждой планете груз можно оставить.</p><p>Задание: </p><p>Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.</p><p >Полное условие задачи доступно на</p><p><a href=\"https://github.com/yandex-shri/introtask-space\" >https://github.com/yandex-shri/introtask-space</a>.</p><p>В качестве ответа на вопрос пришлите ссылку на <a href=\"http://jsfiddle.net/\" >http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на <a href=\"https://github.com/\">https://github.com/</a>.</p>",
				"name": "",
				"id": "question_14",
				"textArea" : true
			},
			{
				"label": "Вопрос 15",
				"text": "<p>Сверстайте форму-анкету с нашими заданиями для кандидатов. Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS. Страница должна содержать интерактив, реализованный с помощью JS и jQuery. Это может быть:</p><ul><li >проверка полноты и правильности заполнения полей (где это возможно);</li><li >возможность свернуть и развернуть разделы (аккордеон);</li><li >индикатор заполнения анкеты;</li><li >что-нибудь ещё.</li></ul><p>Подумайте над тем, как эти данные будут отправляться на сервер.</p><p>Будет плюсом, если вы сверстаете страницу, используя БЭМ.</p><p>Дополнительные задания:</p><p>1. Выполните задание про форму-анкету, используя один из классических шаблонизаторов: Handlebars, mustache, Dust, Jade и т.п.</p><p>2. Выполните задание про форму-анкету, используя один из экзотических шаблонизаторов: XSLT, YATE, BEMHTML и т.п.</p><p>Разработку необходимо вести на <a href=\"https://github.com/\" >https://github.com/</a>. В качестве ответа на вопрос пришлите ссылку на проект.</p>",
				"name": "",
				"id": "question_15",
				"textArea" : true
			}
		]
	};

	var page = $('.b-page');
	var form = page.find('.b-form');
	var row = $('#anketaRow').html();
	var rowTemplate = Handlebars.compile(row);
	var contentWrap = page.find('.b-anketa__inner_questions');

	contentWrap.html(rowTemplate(App.data));
    var indicatorFull = page.find('.b-anketa__indicator__full');
    var checkbox = contentWrap.find('input[type=checkbox]');
    App.inputsAll = 0;
    $(':input', form).each(function(ind, item) {
    	var inputName = $(this).prop('name');
    	switch ($(this).prop('type')) {
    		case 'checkbox' : 
    			var complexName = inputName.split('-');
    			
    			if(complexName[1]) {
    				if(!App.inputs[complexName[0]]) {
    					App.inputsAll += 1;
    					App.inputs[complexName[0]] = [];
    				}
    			} else {
    				App.inputs[inputName] = '';
    				App.inputsAll += 1;
    			}
    			break;
    		case 'submit':
    		case 'reset':
    			 break;	
    		default: 
    			App.inputs[inputName] = '';
    			App.inputsAll += 1;
    		break;
    	}
    });
    indicatorFull.text(App.inputsAll);

    if(!Array.isArray) {
	  Array.isArray = function (vArg) {
	    return Object.prototype.toString.call(vArg) === "[object Array]";
	  };
	}

    function indicateFill(name, value){
    	var filled = 0,
    		indicatorWidth = 0,
			indicator = $('.b-anketa__indicator'),
			indicatorInner = indicator.find('.b-anketa__indicator__line__inner'),
			indicatorFilled = indicator.find('.b-anketa__indicator__filled');
			complexName = name.split('-');
		if(name === 'all' && value === '') {
			$.each(App.inputs, function(ind, val) {
				if(Array.isArray(val)) {
					App.inputs[ind] = [];
				} else {
					App.inputs[ind] = '';
				}
			});
		} else {
			if(complexName[1]) {			
				if (value !== '') {
					App.inputs[complexName[0]].push(value);
				} else {
					var ind = $.inArray(complexName[1], App.inputs[complexName[0]]);
					App.inputs[complexName[0]].splice(ind, 1);
				}
			} else {
				if (value !== '' && value !== 'Выбрать' && value !== '0') {
					App.inputs[name] = value;
				} else {
					App.inputs[name] = '';
				}
			}
			$.each(App.inputs, function(ind, val) {
				if(val.length) {
					filled += 1;
				}
			});
		}
		indicatorWidth = filled / App.inputsAll * 100;
		indicatorInner.css('width', indicatorWidth + '%');
		indicatorFilled.text(filled);
    };

	page.on('click', '.b-link_pseudo', function(evt) {
		evt.preventDefault();
		var contentBlock = $('.b-anketa__inner');
		$(this).parent().next(contentBlock).toggleClass('b-anketa__inner_state_show');
	});

    checkbox.on('change', function(evt){
    	if ($(this).is(':checked')) {
    		indicateFill($(this).prop('name'), $(this).val());
    	} else {
			indicateFill($(this).prop('name'), '');
    	}	
    });

	page.on('change', '.b-input__input', function(evt, param) {
		if(param && param.reset) {
			return false;
		}
		indicateFill($(this).prop('name'), $(this).val());	
	});

	page.on('change', 'input[type=file]', function(evt) {
		var file = $(this);
		file.closest('.b-input-wrap').find('.b-button__file-name').text(file.val());
		file.closest('.b-input-wrap').find('.b-button__delete-file').addClass('b-button__delete-file_show');
		indicateFill(file.prop('name'), file.val());	
	});

	page.on('click', '.b-button__delete-file', function(evt) {
		var deleteFile = $(this);
		deleteFile.closest('.b-input-wrap').find('.b-button_input_file').replaceWith('<span class="b-button b-button_input b-button_input_file"><span class="b-button__text">Выбрать файл</span><input name="resume" type="file" class="b-button__input"></span>');
		deleteFile.closest('.b-input-wrap').find('.b-button__file-name').text('');
		deleteFile.removeClass('b-button__delete-file_show');
		indicateFill(deleteFile.closest('.b-input-wrap').find('input[type=file]').prop('name'), '');
	});

	page.on('click','.b-dropdown__button', function(evt) {
		evt.preventDefault();
		var button = $(this);
		button.closest('.b-dropdown').toggleClass('b-dropdown_opened');
	});


	page.on('click','.b-dropdown__item', function(evt, param) {
		var selected = $(this);
		var items = selected.closest('.b-dropdown__list').find('.b-dropdown__item').removeClass('selected');
		if(param && param.reset) {
			selected.closest('.b-dropdown').find('input[name=dropdown]').val('Выбрать').trigger('change');
			selected.closest('.b-dropdown').find('.b-dropdown__text').text('Выбрать');
			selected.closest('.b-dropdown').toggleClass('b-dropdown_opened', false);
			items.eq(0).addClass('selected');
		} else {
			selected.closest('.b-dropdown').find('input[name=dropdown]').val(selected.text()).trigger('change');
			selected.closest('.b-dropdown').find('.b-dropdown__text').text(selected.text());
			selected.closest('.b-dropdown').toggleClass('b-dropdown_opened', false);
			selected.addClass('selected');
		}
		
		
	});

	page.on('click', '.b-input_checkbox', function(evt, param) {
		var checkbox = $(this);
		var input = checkbox.find('.b-input__checkbox');
		if(param && param.reset) {
			input.prop('checked', '');
			input.attr('value', 0);
			checkbox.toggleClass('checked', false);
			indicateFill(input.prop('name'), 0);
		} else {
			input.prop('checked', input.is(':checked') ? '' : 'checked');
			input.attr('value', input.is(':checked') ? 1 : 0); 
			checkbox.toggleClass('checked', input.is(':checked'));
			indicateFill(input.prop('name'), input.val());
		}
		
	});

	page.on('click', '.b-button__input[type=submit]', function(evt) {
		evt.preventDefault();
	});
	
	page.on('click', '.b-button_input_submit', function(evt) {	
		form.submit();
	});

	form.on('reset', function() {
		$('.b-input_checkbox').trigger('click', {reset: true});
		$('.b-dropdown__item').trigger('click', {reset: true});
		$('.b-button__delete-file').trigger('click', {reset: true});
		indicateFill('all', '');
	});

	$('#anketa').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			agree: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Не заполнено поле «E-mail»',
				email: 'Неверный адрес электронной почты'
			},
			agree: {
				required: 'Подтвердите, пожалуйста, своё согласие на передачу анкеты с вашими персональными данными'
			}
		},
		errorPlacement: function(error, element) {
            var name = element.attr('name');
            var $sel = element.closest('.b-input-wrap').find('.b-error');
            $sel.html(error).show();
            $sel.unbind('click');
            $sel.bind('click', function(event){
                event.preventDefault();
                event.stopImmediatePropagation();
            });
        },
        highlight: function(element, errorClass) {
            $(element).closest('.b-input').addClass('b-input_error');
        },
        unhighlight: function(element, errorClass) {
            $(element).closest('.b-input').removeClass('b-input_error');
        }
		
	});

});