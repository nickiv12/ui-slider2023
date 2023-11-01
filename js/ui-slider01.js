$(document).ready(function () {
	//alert("OK");
	var elem_id; // ГП - идентификатор элемента, куда записывать текст
	// ==== ФУНКЦИЯ которая одной строкой инициализирует слайдер + можно вызвать функцию
	function slide($num, cssValue, $value, $min, $max, func){
		$( "#slider-"+$num ).slider({  // к диву вешаем slider + автоматом стили
		range: "min",
		value: $value,
		min: $min,
		max: $max,
		slide: function( event, ui ) {  // при перемещении ползунка будут:
			console.log(ui.value);
			$("#val-01").text('значение ui:' + ui.value);
			//$( "#val-"+$num ).html('<s>'+cssValue+': </s><u>'+ui.value +"</u>px");
			//$('#'+elem_id).css(cssValue,ui.value); 
			//if(func !== undefined) func();// Выполняем передаваемую функцию - Меняем информацию о WIDTH		
			} 
		}); //конец слайдера
	};

slide('01', 'padding', 1, 0, 50);	// иницализирую slider-01 PADDING
}); // КОНЕЦ $(document).ready 