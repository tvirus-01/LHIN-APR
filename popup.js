//place date value in date field
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


document.getElementById('last_visit').value = new Date().toDateInputValue();
document.getElementById('discharg_date').value = new Date().toDateInputValue();

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
$('#type_sel').change(function (){
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

//content fadeup
$('#btn_lhin').click(function(){
	var lhin_error = '';
	if ($('#select_lhin').val() == 0) {
		lhin_error = 'Please Select an option';
		$('#lhin_error').text(lhin_error);
	}else{
		lhin_error = '';
		$('#lhin_error').text(lhin_error);
	}

	if (lhin_error == '') {
		//$('#type').load('type_nursing.html');
		$('#lhin').removeClass('active');
		$('#lhin').addClass('fade');
		$('#type').removeClass('fade');
		$('#type').addClass('active');
		$('#lhin_list').removeClass('opt-active');
		$('#type_list').removeClass('opt-inactive');
		$('#lhin_list').addClass('bg-success');
		$('#type_list').addClass('opt-active');
	}
});

$('#btn_type_prv').click(function() {
	/* Act on the event */
	$('#lhin').removeClass('fade');
	$('#lhin').addClass('active');
	$('#type').removeClass('active');
	$('#type').addClass('fade');
	$('#lhin_list').removeClass('bg-success');
	$('#type_list').removeClass('opt-active');
	$('#lhin_list').addClass('opt-active');
	$('#type_list').addClass('opt-inactive');
});

$('#btn_type').click(function() {
	/* Act on the event */
	$('#additional').removeClass('fade');
	$('#additional').addClass('active');
	$('#type').removeClass('active');
	$('#type').addClass('fade');
	$('#type_list').removeClass('opt-active');
	$('#additional_list').removeClass('opt-inactive');
	$('#type_list').addClass('bg-success');
	$('#additional_list').addClass('opt-active');
});

$('#btn_additional_prv').click(function() {
	/* Act on the event */
	$('#type').removeClass('fade');
	$('#type').addClass('active');
	$('#additional').removeClass('active');
	$('#additional').addClass('fade');
	$('#type_list').removeClass('bg-success');
	$('#additional_list').removeClass('opt-active');
	$('#type_list').addClass('opt-active');
	$('#additional_list').addClass('opt-inactive');
});


$('#btn_additional_submit').click(function() {
	/* Act on the event */
	var error_author_nmndde = '';
	var error_author_phn = '';
	var error_nurse_nmndde = '';
	var error_nurse_phn = '';
	var error_plan = '';
	var mssg = 'This field is required';

	if ($.trim($('#name_author').val()).length == 0) {
		error_author_nmndde = mssg;
		$('#error_author_nmndde').text(error_author_nmndde);
	}else{
		error_author_nmndde = '';
		$('#error_author_nmndde').text(error_author_nmndde);
	}

	if ($.trim($('#phone_author').val()).length == 0) {
		error_author_phn = mssg;
		$('#error_author_phn').text(error_author_phn);
	}else{
		error_author_phn = '';
		$('#error_author_phn').text(error_author_phn);
	}
	
	if ($.trim($('#name_nurse').val()).length == 0) {
		error_nurse_nmndde = mssg;
		$('#error_nurse_nmndde').text(error_nurse_nmndde);
	}else{
		error_nurse_nmndde = '';
		$('#error_nurse_nmndde').text(error_nurse_nmndde);
	}
	
	if ($.trim($('#phone_nurse').val()).length == 0) {
		error_nurse_phn = mssg;
		$('#error_nurse_phn').text(error_nurse_phn);
	}else{
		error_nurse_phn = '';
		$('#error_nurse_phn').text(error_nurse_phn);
	}
	
	if ($('#equipment').val() == 0) {
		error_plan = mssg;
		$('#error_plan').text(error_plan);
	}else{
		error_plan = '';
		$('#error_plan').text(error_plan);
	}

	if (error_plan != '' || error_author_nmndde != '' || error_author_phn != '' || error_nurse_nmndde != '' || error_nurse_phn != '') {
		return false;
	}else{
		//event.preventDefault();
			var lhin_sel = $("#lhin_sel").val();
			var select_lhin = $("#select_lhin").val();
			var type_sel = $("#type_sel").val();
			var urgency = $("#urgency").val();
			var report_name = $("#report_name").val();
			var subcutaneous_pathway = $("#subcutaneous_pathway").val();
			var ptd = $("#ptd").val();
			var caregiver_name = $("#caregiver_name").val();
			// discharge info
			var GoalMet = $("#GoalMet").val();
			var nogoal_desc = $("#nogoal_desc").val();
			var discharged_to = $("#discharged_to").val();
			var last_visit = $("#last_visit").val();
			var discharg_date = $("#discharg_date").val();
			// additional information
			var name_author = $("#name_author").val();
			var phone_author = $("#phone_author").val();
			var name_nurse = $("#name_nurse").val();
			var phone_nurse = $("#phone_nurse").val();
			var additional_info = $("#additional_info").val();
			var equipment = $("#equipment").val();

			var service_plan = 'LHIN:<'+lhin_sel+'>Type Of Service:<'+select_lhin+'>Type:<'+type_sel+'>Urgency:<'+urgency+'>Report Name:<'+report_name+'>Subcutaneous Pathway:<'+subcutaneous_pathway+'>Plan towards discharg:<'+ptd+'>Caregiver:<'+caregiver_name+'>';
			var output_service = service_plan;

			if (GoalMet == 'yes' || GoalMet == 'no') {
				var discharg_field = 'Goals Met:<'+GoalMet+'>goal didnt met:<'+nogoal_desc+'>Discharged To:<'+discharged_to+'>Last Visit Date:<'+last_visit+'>Discharge Date:<'+discharg_date+'>';

				var output_service = service_plan + discharg_field;
			}


			var additional_information = 'Name and Designation of Author:<'+name_author+'>Phone + Extension of Author:<'+phone_author+'>Name and designation of Primary Nurse:<'+name_nurse+'>Phone + Extension of Primary Nurse:<'+phone_nurse+'>Additonal Informations:<'+additional_info+'>Equipment Plans:<'+equipment+'>'

			$('#output').removeClass('fade');
			$('#output').addClass('active');
			$('#additional').removeClass('active');
			$('#additional').addClass('fade');
			$('#nav').addClass('fade');

			$('#service_plan').text(output_service);
			$('#additional_information').text(additional_information);
	}		
});


// function SelectAll(id)
// {
//     document.getElementById(id).focus();
//     document.getElementById(id).select();
// }

$("#service_plan").on("click", function () {
   $(this).select();
});
$("#additional_information").on("click", function () {
   $(this).select();
});