$("#dialog-confirm").hide()
$("#dialog").hide()
const total = {
  price : 5000,
  count : 0,
  getTotal(){
    return this.price * this.count;
  }
}

$( document ).tooltip();

$("#tabs").tabs({
  activate: function( event, ui ) {
    $(".params").hide(100)
    $(".params").show(100)
    total.price = ui.newTab[0].dataset.price;
    $("#total").text(total.getTotal())
    console.log(ui.newTab[0].dataset.price  )
  }
});

$("#from").selectmenu();

$("#to").selectmenu();

var handle = $("#custom-handle");
$("#slider").slider({
  create: function () {
    handle.text($(this).slider("value"));
  },
  slide: function (event, ui) {
    handle.text(ui.value);
    total.count = ui.value;
    $("#total").text(total.getTotal())
  }
});

$(document).ready(function(){
  $("#boxes input[type='checkbox']").click(function(){
    var tot=0;
    $("#boxes input[type='checkbox']:checked").each(function(){
          tot += parseInt($(this).data("exval"));		
    });
    $("#result").text(tot);
  });
});

$("#btn-reset").click(() => {
  $( "#dialog-confirm" ).dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Да, сохранить!": function() {
        $( this ).dialog( "close" );
        $( "#dialog" ).dialog();
      },
      "Отмена": function() {
        $( this ).dialog( "close" );
      }
    }
  });
});

$( "#datepicker" ).datepicker({
	dateFormat : "dd.mm.yy",
	minDate: new Date($('#hiddendelivdate').val()),
	monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
});

$(document).ready(function(){
  
	$("#validform").validate({
		rules: {
			emailaddress: {
				required: true,
				email: true
			}

		},
		messages: {
			email: "Please enter a valid email address"
		}

	});
  
  $("#emailaddress").on("blur", function(){
    if($("#validform").valid())
   {
       $("#btn-reset").removeAttr("disabled");
   }
 }); 
});

$('#input-phone').mask('+0 (000) 000 00 00', {placeholder: "+_ (___) ___ __ __"});

	