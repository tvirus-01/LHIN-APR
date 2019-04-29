//place date value in date field
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


document.getElementById('datePicker').value = new Date().toDateInputValue();
document.getElementById('datePicker2').value = new Date().toDateInputValue();

// display hide show

$('#caregiver').hide();
$('#ptd').change(function () {
	if ($(this).val() == 'caregiver' || $(this).val() == 'other'){
		$('#caregiver').show();
	}else{
		$('#caregiver').hide();
	}	
	});

$('#discharg').hide();
$('#type').change(function (){
	if ($(this).val() == 'discharge'){
		$('#discharg').show();	
	}else{
		$('#discharg').hide();
	}
});

$("#noGoal").hide();
$("#GoalMet").change(function (){
	if ($(this).val() == 'no') {
		$("#noGoal").show();
	} else {
		$("#noGoal").hide();
	}
});