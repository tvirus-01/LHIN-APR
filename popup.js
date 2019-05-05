//place date value in date field
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


document.getElementById('last_visit').value = new Date().toDateInputValue();
document.getElementById('discharg_date').value = new Date().toDateInputValue();
document.getElementById('wound_assessment').value = new Date().toDateInputValue();
document.getElementById('wound_assessment_2').value = new Date().toDateInputValue();

// display hide show

$('#caregiver').hide();
$('#ptd').change(function () {
	if ($(this).val() == 'caregiver' || $(this).val() == 'other'){
		$('#caregiver').show();
	}else{
		$('#caregiver').hide();
	}	
	});

$('#discharg_nursing').hide();
$('#type_sel').change(function (){
	if ($(this).val() == 'discharge'){
		$('#discharg_nursing').show();	
	}else{
		$('#discharg_nursing').hide();
	}
});

$('#discharg_wound').hide();
$('#type_sel').change(function (){
	if ($(this).val() == 'discharge'){
		$('#discharg_wound').show();	
	}else{
		$('#discharg_wound').hide();
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

$("#pra_no").hide();
$("#pra").change(function() {
	/* Act on the event */
	if ($(this).val() == 'no') {
		$("#pra_no").show();
	}else{
		$("#pra_no").hide();
	}
});

$("#protocol_no").hide();
$("#protocol").change(function() {
	/* Act on the event */
	if ($(this).val() == 'no') {
		$("#protocol_no").show();
	}else{
		$("#protocol_no").hide();
	}
});

$("#desc_ongoing").hide();
$("#discharge_status").change(function() {
	/* Act on the event */
	if ($(this).val() == '3') {
		$("#desc_ongoing").show();
	}else{
		$("#desc_ongoing").hide();
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
		if ($('#select_lhin').val() == 1) {
		//$('#nursing_type').load('type_nursing.html');
		$('#lhin').removeClass('active');
		$('#lhin').addClass('fade');
		$('#nursing_type').removeClass('fade');
		$('#nursing_type').addClass('active');
		$('#lhin_list').removeClass('opt-active');
		$('#type_list').removeClass('opt-inactive');
		$('#lhin_list').addClass('bg-success');
		$('#type_list').addClass('opt-active');
		}
		if ($('#select_lhin').val() == 2) {
		//$('#nursing_type').load('type_nursing.html');
		$('#lhin').removeClass('active');
		$('#lhin').addClass('fade');
		$('#wound_type').removeClass('fade');
		$('#wound_type').addClass('active');
		$('#lhin_list').removeClass('opt-active');
		$('#type_list').removeClass('opt-inactive');
		$('#lhin_list').addClass('bg-success');
		$('#type_list').addClass('opt-active');
		}
	}
});

$('#btn_type_prv').click(function() {
	/* Act on the event */
	if ($('#select_lhin').val() == 1) {
	$('#lhin').removeClass('fade');
	$('#lhin').addClass('active');
	$('#nursing_type').removeClass('active');
	$('#nursing_type').addClass('fade');
	$('#lhin_list').removeClass('bg-success');
	$('#type_list').removeClass('opt-active');
	$('#lhin_list').addClass('opt-active');
	$('#type_list').addClass('opt-inactive');
	}
});

$('#btn_type_prv_wound').click(function() {
	/* Act on the event */
	if ($('#select_lhin').val() == 2) {
	$('#lhin').removeClass('fade');
	$('#lhin').addClass('active');
	$('#wound_type').removeClass('active');
	$('#wound_type').addClass('fade');
	$('#lhin_list').removeClass('bg-success');
	$('#type_list').removeClass('opt-active');
	$('#lhin_list').addClass('opt-active');
	$('#type_list').addClass('opt-inactive');
	}
});

$('#btn_type').click(function() {
	/* Act on the event */
	$('#additional_nursing').removeClass('fade');
	$('#additional_nursing').addClass('active');
	$('#nursing_type').removeClass('active');
	$('#nursing_type').addClass('fade');
	$('#type_list').removeClass('opt-active');
	$('#additional_list').removeClass('opt-inactive');
	$('#type_list').addClass('bg-success');
	$('#additional_list').addClass('opt-active');
});

$('#btn_type_wound').click(function() {
	/* Act on the event */
	var error_location_wound = '';
	var error_infection = '';
	var measurements_length_error = '';
	var measurements_width_error = '';
	var measurements_depth_error = '';
	var percentage_healing_error = '';
	var physician_notified_error = '';
	var mssg = 'This field is required';
	var mssg_2 = 'Please! fill all required field';
	if (!$("#location_wound").val()) {
		error_location_wound = mssg;
		$("#error_location_wound").text(mssg);
		$("#error_all").text(mssg_2);
	}else{
		error_location_wound = '';
		mssg_2 = '';
		$("#error_location_wound").text(error_location_wound);
		$("#error_all").text(mssg_2);		
	}

	if (!$("#infection").val()) {
		error_infection = mssg;
		$("#error_infection").text(error_infection);
		$("#error_all").text(mssg_2);
	}else{
		error_infection = '';
		mssg_2 = '';
		$("#error_infection").text(error_infection);
		$("#error_all").text(mssg_2);		
	}

	if (!$("#measurements_length").val()) {
		measurements_length_error = mssg;
		$("#measurements_length_error").text(measurements_length_error);
		$("#error_all").text(mssg_2);
	}else{
		measurements_length_error = '';
		mssg_2 = '';
		$("#measurements_length_error").text(measurements_length_error);
		$("#error_all").text(mssg_2);		
	}

	if (!$("#measurements_width").val()) {
		measurements_width_error = mssg;
		$("#measurements_width_error").text(measurements_width_error);
		$("#error_all").text(mssg_2);
	}else{
		measurements_width_error = '';
		mssg_2 = '';
		$("#measurements_width_error").text(measurements_width_error);
		$("#error_all").text(mssg_2);		
	}
	
	if (!$("#measurements_depth").val()) {
		measurements_depth_error = mssg;
		$("#measurements_depth_error").text(measurements_depth_error);
		$("#error_all").text(mssg_2);
	}else{
		measurements_depth_error = '';
		mssg_2 = '';
		$("#measurements_depth_error").text(measurements_depth_error);
		$("#error_all").text(mssg_2);		
	}
	
	if (!$("#percentage_healing").val()) {
		percentage_healing_error = mssg;
		$("#percentage_healing_error").text(percentage_healing_error);
		$("#error_all").text(mssg_2);
	}else{
		percentage_healing_error = '';
		mssg_2 = '';
		$("#percentage_healing_error").text(percentage_healing_error);
		$("#error_all").text(mssg_2);		
	}
	
	if (!$("#physician").val()) {
		physician_notified_error = mssg;
		$("#physician_notified_error").text(physician_notified_error);
		$("#error_all").text(mssg_2);
	}else{
		physician_notified_error = '';
		mssg_2 = '';
		$("#physician_notified_error").text(physician_notified_error);
		$("#error_all").text(mssg_2);		
	}

	if (error_location_wound != '' || error_infection != '' || measurements_length_error != '' || measurements_width_error != '' || measurements_depth_error != '' || percentage_healing_error != '' || physician_notified_error != '') {
		return false;
	}else{
		$('#additional_wound').removeClass('fade');
		$('#additional_wound').addClass('active');
		$('#wound_type').removeClass('active');
		$('#wound_type').addClass('fade');
		$('#type_list').removeClass('opt-active');
		$('#additional_list').removeClass('opt-inactive');
		$('#type_list').addClass('bg-success');
		$('#additional_list').addClass('opt-active');
	}
});

$('#btn_additional_prv').click(function() {
	/* Act on the event */
	$('#nursing_type').removeClass('fade');
	$('#nursing_type').addClass('active');
	$('#additional_nursing').removeClass('active');
	$('#additional_nursing').addClass('fade');
	$('#type_list').removeClass('bg-success');
	$('#additional_list').removeClass('opt-active');
	$('#type_list').addClass('opt-active');
	$('#additional_list').addClass('opt-inactive');
});

$('#btn_additional_prv_wound').click(function() {
	/* Act on the event */
	$('#wound_type').removeClass('fade');
	$('#wound_type').addClass('active');
	$('#additional_wound').removeClass('active');
	$('#additional_wound').addClass('fade');
	$('#type_list').removeClass('bg-success');
	$('#additional_list').removeClass('opt-active');
	$('#type_list').addClass('opt-active');
	$('#additional_list').addClass('opt-inactive');
});

$('#btn_additional_submit_wound').click(function() {
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

	if (error_plan != '' || error_author_nmndde != '' || error_author_phn != '' || error_nurse_nmndde != '' || error_nurse_phn != '') {
		return false;
	}else{
		var lhin_sel = $("#lhin_sel").val();
		var select_lhin = $("#select_lhin").val();	
		var type_sel = $("#type_sel").val();
		var urgency = $("#urgency").val();
		var report_name = $("#report_name").val();		
		var type_of_pathway = $("#type_of_pathway").val();		
		var interventions_discussed = $("#interventions_discussed").val();		
		var pra = $("#pra").val();		
		var pra_no = $("#pra_no").val();
		//wound 1		
		var wound_assessment = $("#wound_assessment").val();		
		var location_wound = $("#location_wound").val();		
		var pain = $("#pain").val();		
		var infection = $("#infection").val();		
		var drainage = $("#drainage").val();		
		var measurements_length = $("#measurements_length").val();		
		var measurements_width = $("#measurements_width").val();		
		var measurements_depth = $("#measurements_depth").val();		
		var percentage_healing = $("#percentage_healing").val();		
		var braden = $("#braden").val();
		// wound 2		
		var wound_assessment_2 = $("#wound_assessment_2").val();		
		var location_wound_2 = $("#location_wound_2").val();		
		var pain_2 = $("#pain_2").val();		
		var infection_2 = $("#infection_2").val();		
		var measurements_length_2 = $("#measurements_length_2").val();		
		var measurements_width_2 = $("#measurements_width_2").val();		
		var measurements_depth_2 = $("#measurements_depth_2").val();		
		var percentage_healing_2 = $("#percentage_healing_2").val();		
		var braden_2 = $("#braden_2").val();
		// discharge info		
		var protocol = $("#protocol").val();		
		var protocol_no = $("#protocol_no").val();		
		var GoalMet = $("#GoalMet").val();		
		var nogoal_desc = $("#nogoal_desc").val();		
		var discharged_to = $("#discharged_to").val();		
		var discharge_status = $("#discharge_status").val();		
		var desc_ongoing = $("#desc_ongoing").val();		
		var physician = $("#physician").val();		
		var last_visit = $("#last_visit").val();		
		var discharg_date = $("#discharg_date").val();	
		// Additonal Informations	
		var service = $("#service").val();		
		var wound_1 = $("#wound_1").val();		
		var wound_2 = $("#wound_2").val();		
		var wound_care_complete = $("#wound_care_complete").val();		
		var wound_care_sent = $("#wound_care_sent").val();		
		var patient_has_care = $("#patient_has_care").val();		
		var recommendations = $("#recommendations").val();		
		var additional_info = $("#additional_info").val();		
		var name_author = $("#name_author").val();		
		var phone_author = $("#phone_author").val();		
		var name_nurse = $("#name_nurse").val();		
		var phone_nurse = $("#phone_nurse").val();

		var service_plan = 'LHIN:<'+lhin_sel+'>Type Of Service:<'+select_lhin+'>Type:<'+type_sel+'>Urgency:<'+urgency+'>Report Name:<'+report_name+'>Type of Pathway:<'+type_of_pathway+'>Interventions Discussed:<'+interventions_discussed+'>Patient Readiness Assessment:<'+pra+'>Patient Readiness Assessment Reason:<'+pra_no+'>Wound Assessment Date:<'+wound_assessment+'>Location of Wound:<'+location_wound+'>Pain:<'+pain+'>Infection:<'+infection+'>Drainage:<'+drainage+'>Measurements: Length (cm):<'+measurements_length+'>Measurements: Width (cm):<'+measurements_width+'>Measurements: Depth (cm)::<'+measurements_depth+'>Percentage of Healing:<'+percentage_healing+'>Braden Scale:<'+braden+'>';

		if ($.trim(location_wound_2).length == 0) {
			var output_service = service_plan;
		}else{
			var wound_2 = ' Wound#2(Wound Assessment Date :<'+wound_assessment_2+'>Location of Wound :<'+location_wound_2+'>Pain :<'+pain_2+'>Infection :<'+infection_2+'>Drainage :<'+drainage_2+'>Measurements: Length (cm) :<'+measurements_length_2+'>Measurements: Width (cm) :<'+measurements_width_2+'>Measurements: Depth (cm) :<'+measurements_depth_2+'>Percentage of Healing :<'+percentage_healing_2+'>Braden Scale :<'+braden_2+'>)';

			var output_service = service_plan + wound_2;
		}

		if (GoalMet == 'yes' || GoalMet == 'no') {
			var discharg_field = 'Does Frequency Follow Wound Protocol?:<'+protocol+'>Frequency Protocol Comments:<'+protocol_no+'>Discharge Status:<'+discharge_status+'>Describe ongoing needs and recommendations:<'+desc_ongoing+'>Physician Notified of Discharge:<'+physician+'>Goals Met:<'+GoalMet+'>goal didnt met:<'+nogoal_desc+'>Discharged To:<'+discharged_to+'>Last Visit Date:<'+last_visit+'>Discharge Date:<'+discharg_date+'>';

			output_service = output_service + discharg_field;
		}		

		var additional_information = 'Name and Designation of Author:<'+name_author+'>Phone + Extension of Author:<'+phone_author+'>Name and designation of Primary Nurse:<'+name_nurse+'>Phone + Extension of Primary Nurse:<'+phone_nurse+'>Additonal Informations:<'+additional_info+'>Service:<'+service+'>Wound #1:<'+wound_1+'>Wound #2:<'+wound_2+'>Wound Care Physician Communication Form:Completed:<'+wound_care_complete+'>Wound Care Physician Communication Form:Sent:<'+wound_care_sent+'>Patient has Primary Care Physician:<'+patient_has_care+'>Recommendations:<'+recommendations+'>';

			$('#output').removeClass('fade');
			$('#output').addClass('active');
			$('#additional_wound').removeClass('active');
			$('#tab_content').removeClass('mt-5');
			$('#additional_wound').addClass('fade');
			$('#nav').addClass('fade');

			$('#service_plan').text(output_service);
			$('#additional_information').text(additional_information);
	}
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


			var additional_information = 'Name and Designation of Author:<'+name_author+'>Phone + Extension of Author:<'+phone_author+'>Name and designation of Primary Nurse:<'+name_nurse+'>Phone + Extension of Primary Nurse:<'+phone_nurse+'>Additonal Informations:<'+additional_info+'>Equipment Plans:<'+equipment+'>';

			$('#output').removeClass('fade');
			$('#output').addClass('active');
			$('#additional_nursing').removeClass('active');
			$('#tab_content').removeClass('mt-5');
			$('#additional_nursing').addClass('fade');
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

$("#copy_service").on('click', function() {
	$("#service_plan").select();
	document.execCommand("copy");
});
$("#copy_addi_info").on('click', function() {
	$("#additional_information").select();
	document.execCommand("copy");
});