//place date value in date field
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

//char counter
$("#self_mg").on("keyup",function(event){
	cls = '.char_count';
  checkTextAreaMaxLength(this,event,cls);
});

$("#other_comments").on("keyup",function(event){
	cls = '.char_count';
  checkTextAreaMaxLength(this,event,cls);
});
$("#other_comments_pt").on("keyup",function(event){
	cls = '.char_count';
  checkTextAreaMaxLength(this,event,cls);
});


$("#result_nd_comments_canocc").on("keyup",function(event){
	cls = '.char_count2';
  checkTextAreaMaxLength(this,event,cls);
});
$("#time_up_go_comments").on("keyup",function(event){
	cls = '.char_count2';
  checkTextAreaMaxLength(this,event,cls);
});
$("#char_count2").hide();
$("#char_count22").hide();

$("#result_nd_comments_goalatt").on("keyup",function(event){
	cls = '.char_count3';
  checkTextAreaMaxLength(this,event,cls);
});
$("#goal_attain_ot_commnet").on("keyup",function(event){
	cls = '.char_count3';
  checkTextAreaMaxLength(this,event,cls);
});
$("#char_count3").hide();
$("#char_count32").hide();

$("#result_nd_comments_moncog").on("keyup",function(event){
	cls = '.char_count1';
  checkTextAreaMaxLength(this,event,cls);
});
$("#berg_balance_sc_comments").on("keyup",function(event){
	cls = '.char_count1';
  checkTextAreaMaxLength(this,event,cls);
});

$("#result_nd_comments").on("keyup",function(event){
	cls = '.char_count0';
  checkTextAreaMaxLength(this,event,cls);
});
$('#char_count1').hide();
$('#char_count12').hide();

function checkTextAreaMaxLength(textBox, e, counter) {    
    var maxLength = parseInt($(textBox).data("length")); 
    if (!checkSpecialKeys(e)) { 
        if (textBox.value.length > maxLength - 1) textBox.value = textBox.value.substring(0, maxLength); 
  	 } 
  	$(counter).html(maxLength - textBox.value.length);
    return true; 
}

function checkSpecialKeys(e) { 
    if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) 
        return false; 
    else 
        return true; 
} 

//date pasetr
document.getElementById('last_visit').value = new Date().toDateInputValue();
document.getElementById('discharg_date').value = new Date().toDateInputValue();
document.getElementById('last_visit_therapy').value = new Date().toDateInputValue();
document.getElementById('discharg_date_therapy').value = new Date().toDateInputValue();
document.getElementById('wound_assessment').value = new Date().toDateInputValue();
document.getElementById('wound_assessment_2').value = new Date().toDateInputValue();
document.getElementById('do_assessment').value = new Date().toDateInputValue();

// display hide show

$('#caregiver_name').hide();
$('#ptd').change(function () {
	if ($(this).val() == 'caregiver' || $(this).val() == 'other'){
		$('#caregiver_name').show();
	}else{
		$('#caregiver_name').hide();
	}	
	});

$('#caregiver_name_therapy').hide();
$('#ptd_teaching').change(function () {
	if ($(this).val() == 'caregiver'){
		$('#caregiver_name_therapy').show();
	}else{
		$('#caregiver_name_therapy').hide();
	}	
	});

// $('#discharg_nursing').hide();
// $('#type_sel_nu').change(function (){
// 	if ($(this).val() == 'discharge'){
// 		$('#discharg_nursing').show();	
// 	}else{
// 		$('#discharg_nursing').hide();
// 	}
// });

// $('#discharg_wound').hide();
// $('#type_sel_nw').change(function (){
// 	if ($(this).val() == 'discharge'){
// 		$('#discharg_wound').show();	
// 	}else{
// 		$('#discharg_wound').hide();
// 	}
// });

// $('#discharg_therapy').hide();
// $('#type_sel').change(function (){
// 	if ($(this).val() == 'discharge'){
// 		$('#discharg_therapy').show();	
// 	}else{
// 		$('#discharg_therapy').hide();
// 	}
// });

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

$("#is_yes").hide();
$("#is_or_was").change(function() {
	/* Act on the event */
	if ($(this).val() == 'yes'){
		$("#is_yes").show();
	}else{
		$("#is_yes").hide();
	}
});

$("#result_nd_comments_moncog").hide();
$("#mon_cog_assessment").change(function() {
	/* Act on the event */
	if ($(this).val() == 'yes'){
		$("#result_nd_comments_moncog").show();
		$("#char_count1").show();
	}else{
		$("#result_nd_comments_moncog").hide();
	}
});

$("#result_nd_comments_canocc").hide();
$("#can_occ").change(function() {
	/* Act on the event */
	if ($(this).val() == 'yes'){
		$("#result_nd_comments_canocc").show();
		$("#char_count2").show();
	}else{
		$("#result_nd_comments_canocc").hide();
	}
});

$("#result_nd_comments_goalatt").hide();
$("#goal_attain_ot").change(function() {
	/* Act on the event */
	if ($(this).val() == 'yes'){
		$("#result_nd_comments_goalatt").show();
		$("#char_count3").show();
	}else{
		$("#result_nd_comments_goalatt").hide();
	}
});

$("#is_ot").hide();
$("#modified_barthel_inter").hide();
$("#modified_barthel_disch").hide();
$("#is_this_pat").change(function() {
	/* Act on the event */
	if ($(this).val() == 'OT'){
		$("#is_ot").show();

		if ($("#type_sel").val() == 'interim' || $("#type_sel").val() == 'discharge' || $("#type_sel").val() == 'change in status') {
			$("#modified_barthel_inter").show();
		}else{
			$("#modified_barthel_inter").hide();
		}

		if ($("#type_sel").val() == 'discharge') {
			$("#modified_barthel_disch").show();			
		}else{
			$("#modified_barthel_disch").hide();
		}

	}else{
		$("#is_ot").hide();
	}
});

$("#btn_res_therapy").click(function() {
	/* Act on the event */
	if ($("#type_sel").val() == 'discharge') {
		if ($("#is_this_pat").val() == 'OT'){
			$("#modified_barthel_disch").show();
		}else{
			$("#modified_barthel_disch").hide();
		}

		if ($("#is_this_pat").val() == 'PT'){
			$("#clinical_outcome_discharge").show();
		}else{
			$("#clinical_outcome_discharge").hide();
		}
	}else{
		$("#modified_barthel_disch").hide();
		$("#clinical_outcome_discharge").hide();
	}

	if ($("#type_sel").val() == 'interim' || $("#type_sel").val() == 'discharge' || $("#type_sel").val() == 'change in status') {
		if ($("#is_this_pat").val() == 'OT'){
			$("#modified_barthel_inter").show();
		}else{
			$("#modified_barthel_inter").hide();
		}
		
		if ($("#is_this_pat").val() == 'PT'){
			$("#clinical_outcome_interim").show();
		}else{
			$("#clinical_outcome_interim").hide();
		}
	}else{
		$("#modified_barthel_inter").hide();
		$("#clinical_outcome_interim").hide();
	}
});

$("#is_pt").hide();
$("#clinical_outcome_interim").hide();
$("#clinical_outcome_discharge").hide();
$("#is_this_pat").change(function() {
	/* Act on the event */
	if ($(this).val() == 'PT'){
		$("#is_pt").show();

		if ($("#type_sel").val() == 'interim' || $("#type_sel").val() == 'discharge' || $("#type_sel").val() == 'change in status') {
			$("#clinical_outcome_interim").show();
		}else{
			$("#clinical_outcome_interim").hide();
		}

		if ($("#type_sel").val() == 'discharge') {
			$("#clinical_outcome_discharge").show();			
		}else{
			$("#clinical_outcome_discharge").hide();
		}

	}else{
		$("#is_pt").hide();
	}
});

$("#is_slp").hide();
$("#func_commu_disc").hide();
$("#func_commu_int").hide();
$("#is_this_pat").change(function() {
	/* Act on the event */
	if ($(this).val() == 'SLP'){
		$("#is_slp").show();

		if ($("#type_sel").val() == 'discharge') {
			$("#func_commu_disc").show();			
		}else{
			$("#func_commu_disc").hide();
		}

		if ($("#type_sel").val() == 'interim' || $("#type_sel").val() == 'discharge' || $("#type_sel").val() == 'change in status') {
			$("#func_commu_int").show();
		}else{
			$("#func_commu_int").hide();			
		}
	}else{
		$("#is_slp").hide();
	}
});

$("#berg_balance_sc_comments").hide();
$("#berg_balance_sc").change(function() {
	/* Act on the event */
	if ($(this).val() == 'yes'){
		$("#berg_balance_sc_comments").show();
		$("#char_count12").show();
	}else{
		$("#berg_balance_sc_comments").hide();
	}
});

$("#time_up_go_comments").hide();
$("#time_up_go").change(function() {
	/* Act on the event */
	if ($(this).val() == 'yes'){
		$("#time_up_go_comments").show();
		$("#char_count22").show();
	}else{
		$("#time_up_go_comments").hide();
	}
});

$("#goal_attain_ot_commnet").hide();
$("#goal_attain_pt").change(function() {
	/* Act on the event */
	if ($(this).val() == 'yes'){
		$("#goal_attain_ot_commnet").show();
		$("#char_count32").show();
	}else{
		$("#goal_attain_ot_commnet").hide();
	}
});

$("#res_model").hide();
$("#str_pathway").hide();
$("#dischhh").hide();
$("#wound1_modal").hide();
$("#wound2_modal").hide();

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
		if ($('#select_lhin').val() == 3) {
		//$('#nursing_type').load('type_nursing.html');
		$("#res_model").show();
		$("#str_pathway").show();
		$("#res_list").text('3');
		$("#str_list").text('4');
		$("#additional_list").text('5');

		$('#lhin').removeClass('active');
		$('#lhin').addClass('fade');
		$('#therapy_type').removeClass('fade');
		$('#therapy_type').addClass('active');
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

$('#btn_type_prv_therapy').click(function() {
	/* Act on the event */
	$("#res_model").hide();
	$("#str_pathway").hide();
	$("#res_list").text('');
	$("#str_list").text('');
	$("#additional_list").text('3');

	if ($('#select_lhin').val() == 3) {
	$('#lhin').removeClass('fade');
	$('#lhin').addClass('active');
	$('#therapy_type').removeClass('active');
	$('#therapy_type').addClass('fade');
	$('#lhin_list').removeClass('bg-success');
	$('#type_list').removeClass('opt-active');
	$('#lhin_list').addClass('opt-active');
	$('#type_list').addClass('opt-inactive');
	}
});

$('#btn_type').click(function() {
	/* Act on the event */

	var type_sel_nu_error = '';
	var urgency_error = '';
	var subcutaneous_pathway_error = '';
	var ptd_error = '';
	var caregiver_name_error = '';
	var mssg = 'This field is required';

	if($("#type_sel_nu").val() == 0) {
		type_sel_nu_error = mssg;
		$("#type_sel_nu_error").text(type_sel_nu_error);
	}else{
		type_sel_nu_error = '';
		$("#type_sel_nu_error").text(type_sel_nu_error);
	}

	if($("#urgency").val() == 0) {
		urgency_error = mssg;
		$("#urgency_error").text(urgency_error);
	}else{
		urgency_error = '';
		$("#urgency_error").text(urgency_error);
	}

	if($("#subcutaneous_pathway").val() == 0) {
		subcutaneous_pathway_error = mssg;
		$("#subcutaneous_pathway_error").text(subcutaneous_pathway_error);
	}else{
		subcutaneous_pathway_error = '';
		$("#subcutaneous_pathway_error").text(subcutaneous_pathway_error);
	}

	if($("#ptd").val() == 0) {
		ptd_error = mssg;
		$("#ptd_error").text(ptd_error);
	}else{
		ptd_error = '';
		$("#ptd_error").text(ptd_error);
	}

	if ($("#ptd").val() == 'caregiver' || $("#ptd").val() == 'other'){
		if(!$("#caregiver_name").val()) {
			caregiver_name_error = mssg;
			$("#caregiver_name_error").text(caregiver_name_error);
		}else{
			caregiver_name_error = '';
			$("#caregiver_name_error").text(caregiver_name_error);
		}
	}

	if (type_sel_nu_error != '' || urgency_error != '' || subcutaneous_pathway_error != '' || ptd_error != '' || caregiver_name_error != '') {
		return false;
	}else{
		if ($("#type_sel_nu").val() == 'discharge') {
			$('#discharg_nursing').removeClass('fade');
			$('#discharg_nursing').addClass('active');
			$('#nursing_type').removeClass('active');
			$('#nursing_type').addClass('fade');
		}else{
			$('#additional_nursing').removeClass('fade');
			$('#additional_nursing').addClass('active');
			$('#nursing_type').removeClass('active');
			$('#nursing_type').addClass('fade');
			$('#type_list').removeClass('opt-active');
			$('#additional_list').removeClass('opt-inactive');
			$('#type_list').addClass('bg-success');
			$('#additional_list').addClass('opt-active');
		}
	}
});

$('#btn_dis_prv_nursing').click(function() {
	$('#nursing_type').removeClass('fade');
	$('#nursing_type').addClass('active');
	$('#discharg_nursing').removeClass('active');
	$('#discharg_nursing').addClass('fade');
});

$('#btn_dis_nursing').click(function() {
		$('#additional_nursing').removeClass('fade');
		$('#additional_nursing').addClass('active');
		$('#discharg_nursing').removeClass('active');
		$('#discharg_nursing').addClass('fade');
		$('#type_list').removeClass('opt-active');
		$('#additional_list').removeClass('opt-inactive');
		$('#type_list').addClass('bg-success');
		$('#additional_list').addClass('opt-active');
});

$('#btn_type_therapy').click(function() {
	/* Act on the event */

	var type_sel_error = '';
	var urgency_therapy_error = '';
	var type_of_pathway_therapy_error = '';
	var ptd_teaching_error = '';
	var ptd_received_error = '';
	var mssg = 'this field is required';

	if ($("#type_sel").val() == 0) {
		type_sel_error = mssg;
		$("#type_sel_error").text(type_sel_error);
	}else{
		type_sel_error = '';
		$("#type_sel_error").text(type_sel_error);
	}

	if ($("#urgency_therapy").val() == 0) {
		urgency_therapy_error = mssg;
		$("#urgency_therapy_error").text(urgency_therapy_error);
	}else{
		urgency_therapy_error = '';
		$("#urgency_therapy_error").text(urgency_therapy_error);
	}

	if ($("#type_of_pathway_therapy").val() == 0) {
		type_of_pathway_therapy_error = mssg;
		$("#type_of_pathway_therapy_error").text(type_of_pathway_therapy_error);
	}else{
		type_of_pathway_therapy_error = '';
		$("#type_of_pathway_therapy_error").text(type_of_pathway_therapy_error);
	}

	if ($("#ptd_teaching").val() == 0) {
		ptd_teaching_error = mssg;
		$("#ptd_teaching_error").text(ptd_teaching_error);
	}else{
		ptd_teaching_error = '';
		$("#ptd_teaching_error").text(ptd_teaching_error);
	}

	if ($("#ptd_received").val() == 0) {
		ptd_received_error = mssg;
		$("#ptd_received_error").text(ptd_received_error);
	}else{
		ptd_received_error = '';
		$("#ptd_received_error").text(ptd_received_error);
	}

	if (type_sel_error != '' || urgency_therapy_error != '' || type_of_pathway_therapy_error != '' || ptd_teaching_error != '' || ptd_received_error != '') {
		return false;
	}else{
		if ($("#type_sel").val() == 'discharge') {
			$('#discharg_therapy').removeClass('fade');
			$('#discharg_therapy').addClass('active');
			$('#therapy_type').removeClass('active');
			$('#therapy_type').addClass('fade');
			$('#dischhh').show();
			$('#type_list').removeClass('opt-active');
			$('#dis_list').removeClass('opt-inactive');
			$('#type_list').addClass('bg-success');
			$('#dis_list').addClass('opt-active');
			$('#res_list').text('4');
			$('#dis_list').text('3');
			$('#str_list').text('5');
			$('#additional_list').text('6');

		}else{
			$('#therapy_restorative').removeClass('fade');
			$('#therapy_restorative').addClass('active');
			$('#therapy_type').removeClass('active');
			$('#therapy_type').addClass('fade');
			$('#type_list').removeClass('opt-active');
			$('#res_list').removeClass('opt-inactive');
			$('#type_list').addClass('bg-success');
			$('#res_list').addClass('opt-active');
		}
	}
});

$('#btn_dis_therapy').click(function() {
	var GoalMet_therapy_error = '';
	var discharged_to_error = '';
	var total_number_visits_error = '';
	var mssg = 'This field is required';

	if ($("#GoalMet_therapy").val() == 0) {
		GoalMet_therapy_error = mssg;
		$("#GoalMet_therapy_error").text(GoalMet_therapy_error);
	}else{
		GoalMet_therapy_error = '';
		$("#GoalMet_therapy_error").text(GoalMet_therapy_error);
	}

	if ($("#discharged_to").val() == 0) {
		discharged_to_error = mssg;
		$("#discharged_to_error").text(discharged_to_error);
	}else{
		discharged_to_error = '';
		$("#discharged_to_error").text(discharged_to_error);
	}

	if (!$("#total_number_visits").val()) {
		total_number_visits_error = mssg;
		$("#total_number_visits_error").text(total_number_visits_error);
	}else{
		total_number_visits_error = '';
		$("#total_number_visits_error").text(total_number_visits_error);
	}

	if (GoalMet_therapy_error != '' || discharged_to_error != '' || total_number_visits_error != '') {
		return false;
	}else{
		$('#therapy_restorative').removeClass('fade');
		$('#therapy_restorative').addClass('active');
		$('#discharg_therapy').removeClass('active');
		$('#discharg_therapy').addClass('fade');
		$('#dis_list').removeClass('opt-active');
		$('#res_list').removeClass('opt-inactive');
		$('#dis_list').addClass('bg-success');
		$('#res_list').addClass('opt-active');
	}	
});

$('#btn_dis_prv_therapy').click(function() {
	$('#therapy_type').removeClass('fade');
	$('#therapy_type').addClass('active');
	$('#discharg_therapy').removeClass('active');
	$('#discharg_therapy').addClass('fade');
	$('#dischhh').hide();
	$('#type_list').removeClass('bg-success');
	$('#dis_list').removeClass('opt-active');
	$('#type_list').addClass('opt-active');
	$('#dis_list').addClass('opt-inactive');
	$('#res_list').text('3');
	$('#str_list').text('4');
	$('#additional_list').text('5');	
});

$('#btn_res_therapy').click(function() {
	/* Act on the event */
	$('#therapy_stroke').removeClass('fade');
	$('#therapy_stroke').addClass('active');
	$('#therapy_restorative').removeClass('active');
	$('#therapy_restorative').addClass('fade');
	$('#res_list').removeClass('opt-active');
	$('#str_list').removeClass('opt-inactive');
	$('#res_list').addClass('bg-success');
	$('#str_list').addClass('opt-active');
});

$('#btn_str_prv_therapy').click(function() {
	/* Act on the event */
	$('#therapy_stroke').removeClass('active');
	$('#therapy_stroke').addClass('fade');
	$('#therapy_restorative').removeClass('fade');
	$('#therapy_restorative').addClass('active');
	$('#res_list').removeClass('bg-success');
	$('#str_list').removeClass('opt-active');
	$('#res_list').addClass('opt-active');
	$('#str_list').addClass('opt-inactive');
});

$('#btn_res_prv_therapy').click(function() {
	/* Act on the event */
	if ($("#type_sel").val() == 'discharge') {
		$('#discharg_therapy').removeClass('fade');
		$('#discharg_therapy').addClass('active');
		$('#therapy_restorative').removeClass('active');
		$('#therapy_restorative').addClass('fade');
		$('#dis_list').removeClass('bg-success');
		$('#res_list').removeClass('opt-active');
		$('#dis_list').addClass('opt-active');
		$('#res_list').addClass('opt-inactive');
	}else{
		$('#therapy_restorative').removeClass('active');
		$('#therapy_restorative').addClass('fade');
		$('#therapy_type').removeClass('fade');
		$('#therapy_type').addClass('active');
		$('#type_list').removeClass('bg-success');
		$('#res_list').removeClass('opt-active');
		$('#type_list').addClass('opt-active');
		$('#res_list').addClass('opt-inactive');
	}
});

$('#btn_str_therapy').click(function() {
	/* Act on the event */
	var is_this_pat_error = '';

	var modified_barthel_initial_error = '';
	var modified_barthel_interim_error = '';
	var modified_barthel_dischrage_error = '';
	var mon_cog_assessment_error = '';
	var can_occ_error = '';
	var goal_attain_ot_error = '';

	var clinical_outcome_init_error = '';
	var clinical_outcome_inter_error = '';
	var clinical_outcome_disch_error = '';
	var berg_balance_sc_error = '';
	var time_up_go_error = '';
	var goal_attain_pt_error = '';
	var mssg = 'This field is required';
	var mssgn = 'Numbers between 13-99';

	if ($("#is_this_pat").val() == 0) {
		is_this_pat_error = mssg;
		$("#is_this_pat_error").text(is_this_pat_error);
	}else{
		is_this_pat_error = '';
		$("#is_this_pat_error").text(is_this_pat_error);
	}

	// OT Section
	if ($("#mon_cog_assessment").val() == 0) {
		mon_cog_assessment_error = mssg;
		$("#mon_cog_assessment_error").text(mon_cog_assessment_error);
	}else{
		mon_cog_assessment_error = '';
		$("#mon_cog_assessment_error").text(mon_cog_assessment_error);
	}

	if ($("#can_occ").val() == 0) {
		can_occ_error = mssg;
		$("#can_occ_error").text(can_occ_error);
	}else{
		can_occ_error = '';
		$("#can_occ_error").text(can_occ_error);
	}

	if ($("#goal_attain_ot").val() == 0) {
		goal_attain_ot_error = mssg;
		$("#goal_attain_ot_error").text(goal_attain_ot_error);
	}else{
		goal_attain_ot_error = '';
		$("#goal_attain_ot_error").text(goal_attain_ot_error);
	}

	if (!$("#modified_barthel_initial").val()) {
		modified_barthel_initial_error = mssg;
		$("#modified_barthel_initial_error").text(modified_barthel_initial_error);
	}else{
		modified_barthel_initial_error = '';
		$("#modified_barthel_initial_error").text(modified_barthel_initial_error);
	}

	if (!$("#modified_barthel_interim").val()) {
		modified_barthel_interim_error = mssg;
		$("#modified_barthel_interim_error").text(modified_barthel_interim_error);
	}else{
		modified_barthel_interim_error = '';
		$("#modified_barthel_interim_error").text(modified_barthel_interim_error);
	}

	if (!$("#modified_barthel_dischrage").val()) {
		modified_barthel_dischrage_error = mssg;
		$("#modified_barthel_dischrage_error").text(modified_barthel_dischrage_error);
	}else{
		modified_barthel_dischrage_error = '';
		$("#modified_barthel_dischrage_error").text(modified_barthel_dischrage_error);
	}

	//PT section

	if ($("#clinical_outcome_init").val() > 99 || $("#clinical_outcome_init").val() < 13) {
		clinical_outcome_init_error = mssgn;
		$("#clinical_outcome_init_error").text(clinical_outcome_init_error);
	}else{
		clinical_outcome_init_error = '';
		$("#clinical_outcome_init_error").text(clinical_outcome_init_error);
	}

	if ($("#clinical_outcome_inter").val() > 99 || $("#clinical_outcome_inter").val() < 13) {
		clinical_outcome_inter_error = mssgn;
		$("#clinical_outcome_inter_error").text(clinical_outcome_inter_error);
	}else{
		clinical_outcome_inter_error = '';
		$("#clinical_outcome_inter_error").text(clinical_outcome_inter_error);
	}

	if ($("#clinical_outcome_disch").val() > 99 || $("#clinical_outcome_disch").val() < 13) {
		clinical_outcome_disch_error = mssgn;
		$("#clinical_outcome_disch_error").text(clinical_outcome_disch_error);
	}else{
		clinical_outcome_disch_error = '';
		$("#clinical_outcome_disch_error").text(clinical_outcome_disch_error);
	}

	if ($("#berg_balance_sc").val() == 0) {
		berg_balance_sc_error = mssg;
		$("#berg_balance_sc_error").text(berg_balance_sc_error);
	}else{
		berg_balance_sc_error = '';
		$("#berg_balance_sc_error").text(berg_balance_sc_error);
	}

	if ($("#time_up_go").val() == 0) {
		time_up_go_error = mssg;
		$("#time_up_go_error").text(time_up_go_error);
	}else{
		time_up_go_error = '';
		$("#time_up_go_error").text(time_up_go_error);
	}

	if ($("#goal_attain_pt").val() == 0) {
		goal_attain_pt_error = mssg;
		$("#goal_attain_pt_error").text(goal_attain_pt_error);
	}else{
		goal_attain_pt_error = '';
		$("#goal_attain_pt_error").text(goal_attain_pt_error);
	}

	if (is_this_pat_error != '') {
		return false;
	}else{
		var str_thrapppy = $("#type_sel").val();

		//OT validation
			if ($("#is_this_pat").val() == 'OT') {
			if(str_thrapppy == 'interim' || str_thrapppy == 'discharge' || str_thrapppy == 'change in status'){
				if (str_thrapppy == 'discharge') {
					if (modified_barthel_dischrage_error != '' || modified_barthel_interim_error != '' || modified_barthel_initial_error != '' || goal_attain_ot_error != '' || can_occ_error != '' || mon_cog_assessment_error != '') {
						return false;
					}
					else{					
						$('#therapy_stroke').removeClass('active');
						$('#therapy_stroke').addClass('fade');
						$('#additional_therapy').removeClass('fade');
						$('#additional_therapy').addClass('active');
						$('#str_list').removeClass('opt-active');
						$('#additional_list').removeClass('opt-inactive');
						$('#str_list').addClass('bg-success');
						$('#additional_list').addClass('opt-active');
					}
				}
				else{
					if (modified_barthel_interim_error != '' || modified_barthel_initial_error != '' || goal_attain_ot_error != '' || can_occ_error != '' || mon_cog_assessment_error != '') {
						return false;
					}
					else{					
						$('#therapy_stroke').removeClass('active');
						$('#therapy_stroke').addClass('fade');
						$('#additional_therapy').removeClass('fade');
						$('#additional_therapy').addClass('active');
						$('#str_list').removeClass('opt-active');
						$('#additional_list').removeClass('opt-inactive');
						$('#str_list').addClass('bg-success');
						$('#additional_list').addClass('opt-active');
					}
				}
			}
			else{
				if (modified_barthel_initial_error != '' || goal_attain_ot_error != '' || can_occ_error != '' || mon_cog_assessment_error != '') {
					return false;
				}
				else{					
					$('#therapy_stroke').removeClass('active');
					$('#therapy_stroke').addClass('fade');
					$('#additional_therapy').removeClass('fade');
					$('#additional_therapy').addClass('active');
					$('#str_list').removeClass('opt-active');
					$('#additional_list').removeClass('opt-inactive');
					$('#str_list').addClass('bg-success');
					$('#additional_list').addClass('opt-active');
				}
			}
		}

		// PT validation
			if ($("#is_this_pat").val() == 'PT') {
			if(str_thrapppy == 'interim' || str_thrapppy == 'discharge' || str_thrapppy == 'change in status'){
				if (str_thrapppy == 'discharge') {
					if (clinical_outcome_disch_error != '' || clinical_outcome_inter_error != '' || clinical_outcome_init_error != '' || goal_attain_pt_error != '' || time_up_go_error != '' || berg_balance_sc_error != '') {
						return false;
					}
					else{					
						$('#therapy_stroke').removeClass('active');
						$('#therapy_stroke').addClass('fade');
						$('#additional_therapy').removeClass('fade');
						$('#additional_therapy').addClass('active');
						$('#str_list').removeClass('opt-active');
						$('#additional_list').removeClass('opt-inactive');
						$('#str_list').addClass('bg-success');
						$('#additional_list').addClass('opt-active');
					}
				}
				else{
					if (clinical_outcome_inter_error != '' || clinical_outcome_init_error != '' || goal_attain_pt_error != '' || time_up_go_error != '' || berg_balance_sc_error != '') {
						return false;
					}
					else{					
						$('#therapy_stroke').removeClass('active');
						$('#therapy_stroke').addClass('fade');
						$('#additional_therapy').removeClass('fade');
						$('#additional_therapy').addClass('active');
						$('#str_list').removeClass('opt-active');
						$('#additional_list').removeClass('opt-inactive');
						$('#str_list').addClass('bg-success');
						$('#additional_list').addClass('opt-active');
					}
				}
			}
			else{
				if (clinical_outcome_init_error != '' || goal_attain_pt_error != '' || time_up_go_error != '' || berg_balance_sc_error != '') {
					return false;
				}
				else{					
					$('#therapy_stroke').removeClass('active');
					$('#therapy_stroke').addClass('fade');
					$('#additional_therapy').removeClass('fade');
					$('#additional_therapy').addClass('active');
					$('#str_list').removeClass('opt-active');
					$('#additional_list').removeClass('opt-inactive');
					$('#str_list').addClass('bg-success');
					$('#additional_list').addClass('opt-active');
				}
			}
		}
	}
});

$('#btn_type_wound').click(function() {
	/* Act on the event */
	// var error_location_wound = '';
	// var error_infection = '';
	// var measurements_length_error = '';
	// var measurements_width_error = '';
	// var measurements_depth_error = '';
	// var percentage_healing_error = '';
	// var physician_notified_error = '';
	// var mssg = 'This field is required';
	// var mssg_2 = 'Please! fill all required field';
	// if (!$("#location_wound").val()) {
	// 	error_location_wound = mssg;
	// 	$("#error_location_wound").text(mssg);
	// 	$("#error_all").text(mssg_2);
	// }else{
	// 	error_location_wound = '';
	// 	mssg_2 = '';
	// 	$("#error_location_wound").text(error_location_wound);
	// 	$("#error_all").text(mssg_2);		
	// }

	// if (!$("#infection").val()) {
	// 	error_infection = mssg;
	// 	$("#error_infection").text(error_infection);
	// 	$("#error_all").text(mssg_2);
	// }else{
	// 	error_infection = '';
	// 	mssg_2 = '';
	// 	$("#error_infection").text(error_infection);
	// 	$("#error_all").text(mssg_2);		
	// }

	// if (!$("#measurements_length").val()) {
	// 	measurements_length_error = mssg;
	// 	$("#measurements_length_error").text(measurements_length_error);
	// 	$("#error_all").text(mssg_2);
	// }else{
	// 	measurements_length_error = '';
	// 	mssg_2 = '';
	// 	$("#measurements_length_error").text(measurements_length_error);
	// 	$("#error_all").text(mssg_2);		
	// }

	// if (!$("#measurements_width").val()) {
	// 	measurements_width_error = mssg;
	// 	$("#measurements_width_error").text(measurements_width_error);
	// 	$("#error_all").text(mssg_2);
	// }else{
	// 	measurements_width_error = '';
	// 	mssg_2 = '';
	// 	$("#measurements_width_error").text(measurements_width_error);
	// 	$("#error_all").text(mssg_2);		
	// }
	
	// if (!$("#measurements_depth").val()) {
	// 	measurements_depth_error = mssg;
	// 	$("#measurements_depth_error").text(measurements_depth_error);
	// 	$("#error_all").text(mssg_2);
	// }else{
	// 	measurements_depth_error = '';
	// 	mssg_2 = '';
	// 	$("#measurements_depth_error").text(measurements_depth_error);
	// 	$("#error_all").text(mssg_2);		
	// }
	
	// if (!$("#percentage_healing").val()) {
	// 	percentage_healing_error = mssg;
	// 	$("#percentage_healing_error").text(percentage_healing_error);
	// 	$("#error_all").text(mssg_2);
	// }else{
	// 	percentage_healing_error = '';
	// 	mssg_2 = '';
	// 	$("#percentage_healing_error").text(percentage_healing_error);
	// 	$("#error_all").text(mssg_2);		
	// }
	
	// if (!$("#physician").val()) {
	// 	physician_notified_error = mssg;
	// 	$("#physician_notified_error").text(physician_notified_error);
	// 	$("#error_all").text(mssg_2);
	// }else{
	// 	physician_notified_error = '';
	// 	mssg_2 = '';
	// 	$("#physician_notified_error").text(physician_notified_error);
	// 	$("#error_all").text(mssg_2);		
	// }

	// if (error_location_wound != '' || error_infection != '' || measurements_length_error != '' || measurements_width_error != '' || measurements_depth_error != '' || percentage_healing_error != '') {
	// 	return false;
	// }else{
		// if ($("#type_sel_nw").val() == 'discharge') {
		// 	$('#discharg_wound').removeClass('fade');
		// 	$('#discharg_wound').addClass('active');
		// 	$('#wound_type').removeClass('active');
		// 	$('#wound_type').addClass('fade');

		// }else{

	var type_sel_nw_error = '';		
	var urgency_wound_error = '';		
	var type_of_pathway_error = '';		
	var pra_error = '';
	var mssg = 'This field is required';		

	if ($("#type_sel_nw").val() == 0) {
		type_sel_nw_error = mssg;
		$('#type_sel_nw_error').text(type_sel_nw_error);
	}else{
		type_sel_nw_error = '';
		$("#type_sel_nw_error").text(type_sel_nw_error);
	}		

	if ($("#urgency_wound").val() == 0) {
		urgency_wound_error = mssg;
		$('#urgency_wound_error').text(urgency_wound_error);
	}else{
		urgency_wound_error = '';
		$("#urgency_wound_error").text(urgency_wound_error);
	}		

	if ($("#type_of_pathway").val() == 0) {
		type_of_pathway_error = mssg;
		$('#type_of_pathway_error').text(type_of_pathway_error);
	}else{
		type_of_pathway_error = '';
		$("#type_of_pathway_error").text(type_of_pathway_error);
	}		

	if ($("#pra").val() == 0) {
		pra_error = mssg;
		$('#pra_error').text(pra_error);
	}else{
		pra_error = '';
		$("#pra_error").text(pra_error);
	}	

	if (pra_error != '' || type_of_pathway_error != '' || type_sel_nw_error != '' || urgency_wound_error != '') {
		
		return false;
	}else{
		$('#wound_1_screen').removeClass('fade');
		$('#wound_1_screen').addClass('active');
		$('#wound_type').removeClass('active');
		$('#wound_type').addClass('fade');
		$('#type_list').removeClass('opt-active');
		$('#wound1_list').removeClass('opt-inactive');
		$('#type_list').addClass('bg-success');
		$('#wound1_list').addClass('opt-active');
		$('#wound1_modal').show();
		$('#wound1_list').text('3');
		$('#additional_list').text('4');
	}
		//}
	//}
});


$('#btn_wound1_prv_wound').click(function() {

	$('#wound_type').removeClass('fade');
	$('#wound_type').addClass('active');
	$('#wound_1_screen').removeClass('active');
	$('#wound_1_screen').addClass('fade');
	$('#wound1_list').removeClass('opt-active');
	$('#type_list').removeClass('bg-success');
	$('#wound1_list').addClass('opt-inactive');
	$('#type_list').addClass('opt-active');
	$('#wound1_modal').hide();
	$('#wound1_list').text('3');
	$('#additional_list').text('3');
});


$('#btn_wound2_prv_wound').click(function() {

	$('#wound_1_screen').removeClass('fade');
	$('#wound_1_screen').addClass('active');
	$('#wound_2_screen').removeClass('active');
	$('#wound_2_screen').addClass('fade');
	$('#wound2_list').removeClass('opt-active');
	$('#wound1_list').removeClass('bg-success');
	$('#wound2_list').addClass('opt-inactive');
	$('#wound1_list').addClass('opt-active');
	$('#wound2_modal').hide();
	$('#wound1_list').text('3');
	$('#additional_list').text('4');
});


$('#btn_wound1_wound').click(function() {
	var error_location_wound = '';
	var error_infection = '';
	var measurements_length_error = '';
	var measurements_width_error = '';
	var measurements_depth_error = '';
	var percentage_healing_error = '';
	var pain_error = '';
	var drainage_error = '';
	var braden_error = '';
	var is_wound2_rec_error = '';
	var mssg = 'This field is required';
	var mssg_2 = '';

	if ($("#braden").val() == 0) {
		braden_error = mssg;
		$("#braden_error").text(braden_error);
	}else{
		braden_error = '';
		$("#braden_error").text(braden_error);
	}

	if ($("#pain").val() == 0) {
		pain_error = mssg;
		$("#pain_error").text(pain_error);
	}else{
		pain_error = '';
		$("#pain_error").text(pain_error);
	}

	if ($("#is_wound2_rec").val() == 0) {
		is_wound2_rec_error = mssg;
		$("#is_wound2_rec_error").text(is_wound2_rec_error);
	}else{
		is_wound2_rec_error = '';
		$("#is_wound2_rec_error").text(is_wound2_rec_error);
	}

	if ($("#drainage").val() == 0) {
		drainage_error = mssg;
		$("#drainage_error").text(drainage_error);
	}else{
		drainage_error = '';
		$("#drainage_error").text(drainage_error);
	}

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
		if (!$.isNumeric($("#measurements_length").val())) {
			measurements_length_error = 'Only Numeric Value';
			$("#measurements_length_error").text(measurements_length_error);
		}else{		
			measurements_length_error = '';
			mssg_2 = '';
			$("#measurements_length_error").text(measurements_length_error);
			$("#error_all").text(mssg_2);	
		}	
	}

	if (!$("#measurements_width").val()) {
		measurements_width_error = mssg;
		$("#measurements_width_error").text(measurements_width_error);
		$("#error_all").text(mssg_2);
	}else{		
		if (!$.isNumeric($("#measurements_width").val())) {
			measurements_width_error = 'Only Numeric Value';
			$("#measurements_width_error").text(measurements_width_error);
		}else{
			measurements_width_error = '';
			mssg_2 = '';
			$("#measurements_width_error").text(measurements_width_error);
			$("#error_all").text(mssg_2);		
		}
	}
	
	if (!$("#measurements_depth").val()) {
		measurements_depth_error = mssg;
		$("#measurements_depth_error").text(measurements_depth_error);
		$("#error_all").text(mssg_2);
	}else{
		if (!$.isNumeric($("#measurements_depth").val())) {
			measurements_depth_error = 'Only Numeric Value';
			$("#measurements_depth_error").text(measurements_depth_error);			
		}else{
			measurements_depth_error = '';
			mssg_2 = '';
			$("#measurements_depth_error").text(measurements_depth_error);
			$("#error_all").text(mssg_2);
		}		
	}
	
	if (!$("#percentage_healing").val()) {
		percentage_healing_error = mssg;
		$("#percentage_healing_error").text(percentage_healing_error);
		$("#error_all").text(mssg_2);
	}else{
		if (!$.isNumeric($("#percentage_healing").val())) {
			percentage_healing_error = 'Only Numeric Value';
			$("#percentage_healing_error").text(percentage_healing_error);			
		}else{
			percentage_healing_error = '';
			mssg_2 = '';
			$("#percentage_healing_error").text(percentage_healing_error);
			$("#error_all").text(mssg_2);	
		}	
	}
	

	if (error_location_wound != '' || error_infection != '' || measurements_length_error != '' || measurements_width_error != '' || measurements_depth_error != '' || percentage_healing_error != '' || braden_error != '' || drainage_error != '' || pain_error != '' || is_wound2_rec_error != '') {
		return false;
	}else{
		if ($("#is_wound2_rec").val() == 'required') {
			$('#wound_2_screen').removeClass('fade');
			$('#wound_2_screen').addClass('active');
			$('#wound_1_screen').removeClass('active');
			$('#wound_1_screen').addClass('fade');
			$('#wound1_list').removeClass('opt-active');
			$('#wound2_list').removeClass('opt-inactive');
			$('#wound1_list').addClass('bg-success');
			$('#wound2_list').addClass('opt-active');
			$('#wound1_modal').show();
			$('#wound2_modal').show();
			$('#wound1_list').text('3');
			$('#wound2_list').text('4');
			$('#additional_list').text('5');
		}else{
			if ($("#type_sel_nw").val() == 'discharge') {
					$('#discharg_wound').removeClass('fade');
					$('#discharg_wound').addClass('active');
					$('#wound_1_screen').removeClass('active');
					$('#wound_1_screen').addClass('fade');
					$('#wound1_list').removeClass('opt-active');
					$('#dis_list').removeClass('opt-inactive');
					$('#wound1_list').addClass('bg-success');
					$('#dis_list').addClass('opt-active');
					$('#dischhh').show();
					$('#wound1_list').text('3');
					$('#dis_list').text('4');
					$('#additional_list').text('5');
			}else{
					$('#additional_wound').removeClass('fade');
					$('#additional_wound').addClass('active');
					$('#wound_1_screen').removeClass('active');
					$('#wound_1_screen').addClass('fade');
					$('#wound1_list').removeClass('opt-active');
					$('#additional_list').removeClass('opt-inactive');
					$('#wound1_list').addClass('bg-success');
					$('#additional_list').addClass('opt-active');
					$('#wound1_list').text('3');
					$('#additional_list').text('4');

			}
		}
	}
});


$('#btn_wound2_wound').click(function() {
	var error_location_wound_2 = '';
	var error_infection_2 = '';
	var measurements_length_2_error = '';
	var measurements_width_2_error = '';
	var measurements_depth_2_error = '';
	var percentage_healing_2_error = '';
	var pain_2_error = '';
	var drainage_2_error = '';
	var braden_2_error = '';
	var mssg = 'This field is required';
	var mssg_2 = '';

	if ($("#braden_2").val() == 0) {
		braden_2_error = mssg;
		$("#braden_2_error").text(braden_2_error);
	}else{
		braden_2_error = '';
		$("#braden_2_error").text(braden_2_error);
	}

	if ($("#pain_2").val() == 0) {
		pain_2_error = mssg;
		$("#pain_2_error").text(pain_2_error);
	}else{
		pain_2_error = '';
		$("#pain_2_error").text(pain_2_error);
	}

	if ($("#drainage_2").val() == 0) {
		drainage_2_error = mssg;
		$("#drainage_2_error").text(drainage_2_error);
	}else{
		drainage_2_error = '';
		$("#drainage_2_error").text(drainage_2_error);
	}

	if (!$("#location_wound_2").val()) {
		error_location_wound_2 = mssg;
		$("#error_location_wound_2").text(mssg);
		$("#error_all").text(mssg_2);
	}else{
		error_location_wound_2 = '';
		mssg_2 = '';
		$("#error_location_wound_2").text(error_location_wound_2);
		$("#error_all").text(mssg_2);		
	}

	if (!$("#infection_2").val()) {
		error_infection_2 = mssg;
		$("#error_infection_2").text(error_infection_2);
		$("#error_all").text(mssg_2);
	}else{
		error_infection_2 = '';
		mssg_2 = '';
		$("#error_infection_2").text(error_infection_2);
		$("#error_all").text(mssg_2);		
	}

	if (!$("#measurements_length_2").val()) {
		measurements_length_2_error = mssg;
		$("#measurements_length_2_error").text(measurements_length_2_error);
		$("#error_all").text(mssg_2);
	}else{		
		if (!$.isNumeric($("#measurements_length_2").val())) {
			measurements_length_2_error = 'Only Numeric Value';
			$("#measurements_length_2_error").text(measurements_length_2_error);
		}else{		
			measurements_length_2_error = '';
			mssg_2 = '';
			$("#measurements_length_2_error").text(measurements_length_2_error);
			$("#error_all").text(mssg_2);	
		}	
	}

	if (!$("#measurements_width_2").val()) {
		measurements_width_2_error = mssg;
		$("#measurements_width_2_error").text(measurements_width_2_error);
		$("#error_all").text(mssg_2);
	}else{		
		if (!$.isNumeric($("#measurements_width_2").val())) {
			measurements_width_2_error = 'Only Numeric Value';
			$("#measurements_width_2_error").text(measurements_width_2_error);
		}else{
			measurements_width_2_error = '';
			mssg_2 = '';
			$("#measurements_width_2_error").text(measurements_width_2_error);
			$("#error_all").text(mssg_2);		
		}
	}
	
	if (!$("#measurements_depth_2").val()) {
		measurements_depth_2_error = mssg;
		$("#measurements_depth_2_error").text(measurements_depth_2_error);
		$("#error_all").text(mssg_2);
	}else{
		if (!$.isNumeric($("#measurements_depth_2").val())) {
			measurements_depth_2_error = 'Only Numeric Value';
			$("#measurements_depth_2_error").text(measurements_depth_2_error);			
		}else{
			measurements_depth_2_error = '';
			mssg_2 = '';
			$("#measurements_depth_2_error").text(measurements_depth_2_error);
			$("#error_all").text(mssg_2);
		}		
	}
	
	if (!$("#percentage_healing_2").val()) {
		percentage_healing_2_error = mssg;
		$("#percentage_healing_2_error").text(percentage_healing_2_error);
		$("#error_all").text(mssg_2);
	}else{
		if (!$.isNumeric($("#percentage_healing_2").val())) {
			percentage_healing_2_error = 'Only Numeric Value';
			$("#percentage_healing_2_error").text(percentage_healing_2_error);			
		}else{
			percentage_healing_2_error = '';
			mssg_2 = '';
			$("#percentage_healing_2_error").text(percentage_healing_2_error);
			$("#error_all").text(mssg_2);	
		}	
	}

	if (error_location_wound_2 != '' || error_infection_2 != '' || measurements_length_2_error != '' || measurements_width_2_error != '' || measurements_depth_2_error != '' || percentage_healing_2_error != '' || braden_2_error != '' || drainage_2_error != '' || pain_2_error != '') {
		return false;
	}else{
			if ($("#type_sel_nw").val() == 'discharge') {
					$('#discharg_wound').removeClass('fade');
					$('#discharg_wound').addClass('active');
					$('#wound_2_screen').removeClass('active');
					$('#wound_2_screen').addClass('fade');
					$('#wound2_list').removeClass('opt-active');
					$('#dis_list').removeClass('opt-inactive');
					$('#wound2_list').addClass('bg-success');
					$('#dis_list').addClass('opt-active');
					$('#dischhh').show();
					$('#wound2_list').text('4');
					$('#dis_list').text('5');
					$('#additional_list').text('6');
			}else{
					$('#additional_wound').removeClass('fade');
					$('#additional_wound').addClass('active');
					$('#wound_2_screen').removeClass('active');
					$('#wound_2_screen').addClass('fade');
					$('#wound2_list').removeClass('opt-active');
					$('#additional_list').removeClass('opt-inactive');
					$('#wound2_list').addClass('bg-success');
					$('#additional_list').addClass('opt-active');
					$('#wound2_list').text('4');
					$('#additional_list').text('5');
			}
	}
});


$('#btn_dis_prv_wound').click(function() {
	if ($("#is_wound2_rec").val() == 'required') {
		$('#wound_2_screen').removeClass('fade');
		$('#wound_2_screen').addClass('active');
		$('#discharg_wound').removeClass('active');
		$('#discharg_wound').addClass('fade');
		$('#wound2_list').removeClass('bg-success');
		$('#dis_list').removeClass('opt-active');
		$('#wound2_list').addClass('opt-active');
		$('#dis_list').addClass('opt-inactive');
	}else{
		$('#wound_1_screen').removeClass('fade');
		$('#wound_1_screen').addClass('active');
		$('#discharg_wound').removeClass('active');
		$('#discharg_wound').addClass('fade');
		$('#wound1_list').removeClass('bg-success');
		$('#dis_list').removeClass('opt-active');
		$('#wound1_list').addClass('opt-active');
		$('#dis_list').addClass('opt-inactive');
	}	
});

$('#btn_dis_wound').click(function() {
	var physician_notified_error = '';
	var mssg = 'This field is required';

	if (!$("#physician").val()) {
		physician_notified_error = mssg;
		$("#physician_notified_error").text(physician_notified_error);
	}else{
		physician_notified_error = '';
		$("#physician_notified_error").text(physician_notified_error);		
	}
	
	if ($("#protocol").val() == 0) {
		protocol_error = mssg;
		$("#protocol_error").text(protocol_error);
	}else{
		protocol_error = '';
		$("#protocol_error").text(protocol_error);		
	}
	
	if ($("#GoalMet_wound").val() == 0) {
		GoalMet_error = mssg;
		$("#GoalMet_error").text(GoalMet_error);
	}else{
		GoalMet_error = '';
		$("#GoalMet_error").text(GoalMet_error);		
	}
	
	if ($("#discharged_to").val() == 0) {
		discharged_to_error = mssg;
		$("#discharged_to_error").text(discharged_to_error);
	}else{
		discharged_to_error = '';
		$("#discharged_to_error").text(discharged_to_error);		
	}

	if (physician_notified_error != '' || protocol_error != '' || GoalMet_error != '' || discharged_to_error != '') {
		return false;
	}else{
		$('#additional_wound').removeClass('fade');
		$('#additional_wound').addClass('active');
		$('#discharg_wound').removeClass('active');
		$('#discharg_wound').addClass('fade');
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

$('#btn_additional_1st').click(function() {
	/* Act on the event */
	$('#lhin').removeClass('fade');
	$('#lhin').addClass('active');
	$('#additional_nursing').removeClass('active');
	$('#additional_nursing').addClass('fade');
	$('#type_list').removeClass('bg-success');
	$('#lhin_list').removeClass('bg-success');
	$('#additional_list').removeClass('opt-active');
	$('#lhin_list').addClass('opt-active');
	$('#type_list').addClass('opt-inactive');
	$('#additional_list').addClass('opt-inactive');
});

$('#btn_additional_prv_wound').click(function() {
	/* Act on the event */
	if ($("#type_sel_nw").val() == 'discharge') {
		$('#discharg_wound').removeClass('fade');
		$('#discharg_wound').addClass('active');
		$('#additional_wound').removeClass('active');
		$('#additional_wound').addClass('fade');
		$('#dis_list').removeClass('bg-success');
		$('#additional_list').removeClass('opt-active');
		$('#dis_list').addClass('opt-active');
		$('#additional_list').addClass('opt-inactive');
	}else{
		if ($("#is_wound2_rec").val() == 'required') {
			$('#wound_2_screen').removeClass('fade');
			$('#wound_2_screen').addClass('active');
			$('#additional_wound').removeClass('active');
			$('#additional_wound').addClass('fade');
			$('#wound2_list').removeClass('bg-success');
			$('#additional_list').removeClass('opt-active');
			$('#wound2_list').addClass('opt-active');
			$('#additional_list').addClass('opt-inactive');			
		}else{
			$('#wound_1_screen').removeClass('fade');
			$('#wound_1_screen').addClass('active');
			$('#additional_wound').removeClass('active');
			$('#additional_wound').addClass('fade');
			$('#wound1_list').removeClass('bg-success');
			$('#additional_list').removeClass('opt-active');
			$('#wound1_list').addClass('opt-active');
			$('#additional_list').addClass('opt-inactive');				
		}
	}
});

$('#btn_additional_1st_wound').click(function() {
	/* Act on the event */
	$('#lhin').removeClass('fade');
	$('#lhin').addClass('active');
	$('#additional_wound').removeClass('active');
	$('#additional_wound').addClass('fade');
	$('#type_list').removeClass('bg-success');
	$('#lhin_list').removeClass('bg-success');
	$('#additional_list').removeClass('opt-active');
	$('#lhin_list').addClass('opt-active');
	$('#type_list').addClass('opt-inactive');
	$('#additional_list').addClass('opt-inactive');
});

$('#btn_additional_prv_therapy').click(function() {
	/* Act on the event */
	$('#therapy_stroke').removeClass('fade');
	$('#therapy_stroke').addClass('active');
	$('#additional_therapy').removeClass('active');
	$('#additional_therapy').addClass('fade');
	$('#str_list').removeClass('bg-success');
	$('#additional_list').removeClass('opt-active');
	$('#str_list').addClass('opt-active');
	$('#additional_list').addClass('opt-inactive');
});

$('#btn_additional_1st_therapy').click(function() {
	/* Act on the event */
	$('#lhin').removeClass('fade');
	$('#lhin').addClass('active');
	$('#additional_therapy').removeClass('active');
	$('#additional_therapy').addClass('fade');
	$('#type_list').removeClass('bg-success');
	$('#lhin_list').removeClass('bg-success');
	$('#str_list').removeClass('bg-success');
	$('#res_list').removeClass('bg-success');
	$('#additional_list').removeClass('opt-active');
	$('#lhin_list').addClass('opt-active');
	$('#type_list').addClass('opt-inactive');
	$('#str_list').addClass('opt-inactive');
	$('#res_list').addClass('opt-inactive');
	$('#additional_list').addClass('opt-inactive');
});

$('#btn_additional_submit_therapy').click(function() {
	var error_additional_info = '';
	var error_name_author = '';
	var error_phone_author = '';
	var mssg = 'This field is required';

	if (!$("#additional_info").val()) {
		error_additional_info = mssg;
		$("#error_additional_info").text(error_additional_info);
	}else{
		error_additional_info = '';
	}

	if (!$("#name_author").val()) {
		error_name_author = mssg;
		$("#error_name_author").text(error_name_author);
	}else{
		error_name_author = '';
	}

	if (!$("#phone_author").val()) {
		error_phone_author = mssg;
		$("#error_phone_author").text(error_phone_author);
	}else{
		error_phone_author = '';
	}

	if (error_additional_info != '' || error_name_author != '' || error_phone_author != '') {
		return false;
	}else{
		//type
		var lhin_sel = $("#lhin_sel").val();
		var select_lhin = $("#select_lhin").val();	
		var type_sel = $("#type_sel").val();
		var urgency = $("#urgency").val();
		var report_name = $("#report_name").val();		
		var type_of_pathway = $("#type_of_pathway").val();
		var ptd_teaching = $("#ptd_teaching").val();
		var caregiver_name = $("#caregiver_name_therapy").val();
		var ptd_received = $("#ptd_received").val();

		//discharge
		var GoalMet = $("#GoalMet").val();
		var nogoal_desc = $("#nogoal_desc").val();
		var discharged_to = $("#discharged_to").val();
		var last_visit = $("#last_visit").val();
		var total_number_visits = $("#total_number_visits").val();
		var discharg_date = $("#discharg_date").val();

		//Restorative Model
		var is_or_was = $("#is_or_was").val();//if yes accept
		var gait_tug = $("#gait_tug").val();
		var gait_dynamic = $("#gait_dynamic").val();
		var pain_vas = $("#pain_vas").val();
		var balance_berg = $("#balance_berg").val();
		var balance_gait = $("#balance_gait").val();
		var strength_mmt = $("#strength_mmt").val();
		var other_ems = $("#other_ems").val();
		var other_dash = $("#other_dash").val();
		var self_mg = $("#self_mg").val();
		var rationale_restorative = $("#rationale_restorative").val();

		//Stroke Pathway
		//ot
		var is_this_pat = $("#is_this_pat").val();
		var do_assessment = $("#do_assessment").val();
		var modified_barthel_initial = $("#modified_barthel_initial").val();
		var modified_barthel_interim = $("#modified_barthel_interim").val();
		var modified_barthel_dischrage = $("#modified_barthel_dischrage").val();
		var result_nd_comments = $("#result_nd_comments").val();
		var mon_cog_assessment = $("#mon_cog_assessment").val();
		var result_nd_comments_moncog = $("#result_nd_comments_moncog").val();
		var can_occ = $("#can_occ").val();
		var result_nd_comments_canocc = $("#result_nd_comments_canocc").val();
		var goal_attain_ot = $("#goal_attain_ot").val();
		var result_nd_comments_goalatt = $("#result_nd_comments_goalatt").val();
		var other_comments = $("#other_comments").val();
		//pt
		var clinical_outcome_init = $("#clinical_outcome_init").val();
		var clinical_outcome_inter = $("#clinical_outcome_inter").val();
		var clinical_outcome_disch = $("#clinical_outcome_disch").val();
		var pt_comments = $("#pt_comments").val();
		var berg_balance_sc = $("#berg_balance_sc").val();
		var berg_balance_sc_comments = $("#berg_balance_sc_comments").val();
		var time_up_go = $("#time_up_go").val();
		var time_up_go_comments = $("#time_up_go_comments").val();
		var goal_attain_pt = $("#goal_attain_pt").val();
		var goal_attain_ot_commnet = $("#goal_attain_ot_commnet").val();
		var other_comments = $("#other_comments").val();
		//slp
		var func_commu_attention_ins = $("#func_commu_attention_ins").val();
		var func_commu_memory_ins = $("#func_commu_memory_ins").val();
		var func_commu_motor_sp_ins = $("#func_commu_motor_sp_ins").val();
		var func_commu_read_ins = $("#func_commu_read_ins").val();
		var func_commu_splc_ins = $("#func_commu_splc_ins").val();
		var func_commu_sple_ins = $("#func_commu_sple_ins").val();
		var func_commu_swall_ins = $("#func_commu_swall_ins").val();
		var func_commu_write_ins = $("#func_commu_write_ins").val();
		var func_commu_attention_gps = $("#func_commu_attention_gps").val();
		var func_commu_memory_gps = $("#func_commu_memory_gps").val();
		var func_commu_motor_sp_gps = $("#func_commu_motor_sp_gps").val();
		var func_commu_read_gps = $("#func_commu_read_gps").val();
		var func_commu_splc_gps = $("#func_commu_splc_gps").val();
		var func_commu_sple_gps = $("#func_commu_sple_gps").val();
		var func_commu_swall_gps = $("#func_commu_swall_gps").val();
		var func_commu_write_gps = $("#func_commu_write_gps").val();
		var func_commu_attention_int = $("#func_commu_attention_int").val();
		var func_commu_memory_int = $("#func_commu_memory_int").val();
		var func_commu_motor_sp_int = $("#func_commu_motor_sp_int").val();
		var func_commu_read_int = $("#func_commu_read_int").val();
		var func_commu_splc_int = $("#func_commu_splc_int").val();
		var func_commu_sple_int = $("#func_commu_sple_int").val();
		var func_commu_swall_int = $("#func_commu_swall_int").val();
		var func_commu_write_int = $("#func_commu_write_int").val();
		var func_commu_attention_disc = $("#func_commu_attention_disc").val();
		var func_commu_memory_disc = $("#func_commu_memory_disc").val();
		var func_commu_motor_sp_disc = $("#func_commu_motor_sp_disc").val();
		var func_commu_read_disc = $("#func_commu_read_disc").val();
		var func_commu_splc_disc = $("#func_commu_splc_disc").val();
		var func_commu_sple_disc = $("#func_commu_sple_disc").val();
		var func_commu_swall_disc = $("#func_commu_swall_disc").val();
		var func_commu_write_disc = $("#func_commu_write_disc").val();
		var other_comments = $("#other_comments").val();

		//additional info
		var additional_info = $("#additional_info").val();
		var name_author = $("#name_author").val();
		var phone_author = $("#phone_author").val();


		var service_plan = 'LHIN:<'+lhin_sel+'>Type Of Service:<'+select_lhin+'>Type:<'+type_sel+'>Urgency:<'+urgency+'>Report Name:<'+report_name+'>Type of Pathway:<'+type_of_pathway+'>Plan towards discharge (teaching plan discussed with):<'+ptd_teaching+'>Caregiver Name:<'+caregiver_name+'>Plan towards discharge (received info on Risks/Benefits/Options):<'+ptd_received+'>';

		if ($("#type_sel").val() == 'discharge') {
			var discharge = 'Goals Met:<'+GoalMet+'>Why Goal dosent met:<'+nogoal_desc+'>Discharged To:<'+discharged_to+'>Last Visit Date:<'+last_visit+'>Total Number of Visits Completed:<'+total_number_visits+'>Discharge Date:<'+discharg_date+'>';

			service_plan = service_plan + discharge;
		}

		if ($("#is_or_was").val() == 'no') {
			var restorative = 'Is or was (if discharge report) this patient appropriate for the Restorative Model of Physiotherapy?:<'+is_or_was+'>';
		}else{
			var restorative = 'Is or was (if discharge report) this patient appropriate for the Restorative Model of Physiotherapy?:<'+is_or_was+'>Gait - TUG:<'+gait_tug+'>Gait - Dynamic Gait:<'+gait_dynamic+'>Pain - Visual Analog Scale (VAS):<'+pain_vas+'>Balance - Berg:<'+balance_berg+'>Balance - Tinetti/Gait:<'+balance_gait+'>Strength - Manual Muscle Testing (MMT):<'+strength_mmt+'>Other - Elderly Mobility Scale:<'+other_ems+'>Other - Disabilities of the Arm, Shoulder and Hand (DASH):<'+other_dash+'>Self -Management Goal (Patients own goal):<'+self_mg+'>Rationale for Restorative:<'+rationale_restorative+'>';
		}

		service_plan = service_plan + restorative;

		if ($("#is_this_pat").val() == 'Not applicable') {
			var stroke = '';
		}else{
			if ($("#is_this_pat").val() == 'OT') {
				var stroke = 'Date of this assessment:<'+do_assessment+'>Modified Barthel Index: Initial Score:<'+modified_barthel_initial+'>Modified Barthel Index: Interim Score:<'+modified_barthel_interim+'>Modified Barthel Index: Discharge Score:<'+modified_barthel_dischrage+'>Result and Comments:<'+result_nd_comments+'>Montreal Cognitive Assessment:<'+mon_cog_assessment+'>Comments:<'+result_nd_comments_moncog+'>Canadian Occupational Performance Measure:<'+can_occ+'>Comments:<'+result_nd_comments_canocc+'>Goal Attainment Scale:<'+goal_attain_ot+'>Comments:<'+result_nd_comments_goalatt+'>Other/comments:<'+other_comments+'>';
			}

			if ($("#is_this_pat").val() == 'PT') {
				var stroke = 'Clinical Outcome Variables Scale (COVS): Initial Score:<'+clinical_outcome_init+'>Clinical Outcome Variables Scale (COVS): Interim Score:<'+clinical_outcome_inter+'>Clinical Outcome Variables Scale (COVS): Discharge Score:<'+clinical_outcome_disch+'>Comments:<'+pt_comments+'>Berg Balance Scale (0-56):<'+berg_balance_sc+'>if_yes:<'+berg_balance_sc_comments+'>Timed Up and Go:<'+time_up_go+'>comments:<'+time_up_go_comments+'>Goal Attainment Scale:<'+goal_attain_pt+'>Comments:<'+goal_attain_ot_commnet+'>Other/comments:<'+other_comments+'>';
			}

			if ($("#is_this_pat").val() == 'SLP') {
				var stroke = 'Functional Communication Measures, Initial Score:<Attention:<'+func_commu_attention_ins+'>Memory:<'+func_commu_memory_ins+'>Motor Speech:<'+func_commu_motor_sp_ins+'>Reading:<'+func_commu_read_ins+'>Spoken Language Comprehension:<'+func_commu_splc_ins+'>Spoken Language Expression:<'+func_commu_sple_ins+'>Swallowing:<'+func_commu_swall_ins+'>Writing:<'+func_commu_write_ins+'>>Functional Communication Measures, Goal Predicted Score:<Attention:<'+func_commu_attention_gps+'>Memory:<'+func_commu_memory_gps+'>Motor Speech:<'+func_commu_motor_sp_gps+'>Reading:<'+func_commu_read_gps+'>Spoken Language Comprehension:<'+func_commu_splc_gps+'>Spoken Language Expression:<'+func_commu_sple_gps+'>Swallowing:<'+func_commu_swall_gps+'>Writing:<'+func_commu_write_gps+'>>';

				if ($("#type_sel").val() == 'discharge') {
					var funccomm_dich = 'Functional Communication Measures, Discharge Score:<'+func_commu_attention_disc+'>Memory:<'+func_commu_memory_disc+'>Motor Speech:<'+func_commu_motor_sp_disc+'>Reading:<'+func_commu_read_disc+'>Spoken Language Comprehension:<'+func_commu_splc_disc+'>Spoken Language Expression:<'+func_commu_sple_disc+'>Swallowing:<'+func_commu_swall_disc+'>Writing:<'+func_commu_write_disc+'>>';

					stroke = stroke + funccomm_dich;
				}

				if ($("#type_sel").val() == 'interim' || $("#type_sel").val() == 'discharge' || $("#type_sel").val() == 'change in status') {
					var funccomm_intdc = 'Functional Communication Measures, Interim Score:<'+func_commu_attention_int+'>Memory:<'+func_commu_memory_int+'>Motor Speech:<'+func_commu_motor_sp_int+'>Reading:<'+func_commu_read_int+'>Spoken Language Comprehension:<'+func_commu_splc_int+'>Spoken Language Expression:<'+func_commu_sple_int+'>Swallowing:<'+func_commu_swall_int+'>Writing:<'+func_commu_write_int+'>>';

					stroke = stroke + funccomm_intdc;
				}
			}
		}

		output_service = service_plan + stroke;

		var additional_information = 'Additional Information:<'+additional_info+'>Name and Designation of Author:<'+name_author+'>Phone + Extension of Author:<'+phone_author+'>';

		$('#output').removeClass('fade');
		$('#output').addClass('active');
		$('#additional_therapy').removeClass('active');
		$('#tab_content').removeClass('mt-5');
		$('#additional_therapy').addClass('fade');
		$('#nav').addClass('fade');

		$('#service_plan').text(output_service);
		$('#additional_information').text(additional_information);
	}
});

$('#btn_additional_submit_wound').click(function() {
	var error_author_nmndde = '';
	var error_author_phn = '';
	var error_nurse_nmndde = '';
	var error_nurse_phn = '';
	var error_plan = '';
	var mssg = 'This field is required';

	if ($.trim($('#name_author_nw').val()).length == 0) {
		error_author_nmndde = mssg;
		$('#error_author_nmndde_nw').text(error_author_nmndde);
	}else{
		error_author_nmndde = '';
		$('#error_author_nmndde_nw').text(error_author_nmndde);
	}

	if ($.trim($('#phone_author_nw').val()).length == 0) {
		error_author_phn = mssg;
		$('#error_author_phn_nw').text(error_author_phn);
	}else{
		error_author_phn = '';
		$('#error_author_phn_nw').text(error_author_phn);
	}
	
	if ($.trim($('#name_nurse_nw').val()).length == 0) {
		error_nurse_nmndde = mssg;
		$('#error_nurse_nmndde_nw').text(error_nurse_nmndde);
	}else{
		error_nurse_nmndde = '';
		$('#error_nurse_nmndde_nw').text(error_nurse_nmndde);
	}
	
	if ($.trim($('#phone_nurse_nw').val()).length == 0) {
		error_nurse_phn = mssg;
		$('#error_nurse_phn_nw').text(error_nurse_phn);
	}else{
		error_nurse_phn = '';
		$('#error_nurse_phn_nw').text(error_nurse_phn);
	}

	if (error_plan != '' || error_author_nmndde != '' || error_author_phn != '' || error_nurse_nmndde != '' || error_nurse_phn != '') {
		return false;
	}else{
		var lhin_sel = $("#lhin_sel").val();
		var select_lhin = $("#select_lhin").val();	
		var type_sel = $("#type_sel_nw").val();
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
			var discharg_field = 'Does Frequency Follow Wound Protocol?:<'+protocol+'>Frequency Protocol Comments:<'+protocol_no+'>Discharge Status:<'+discharge_status+'>Describe ongoing needs and recommendations:<'+desc_ongoing+'>Physician Notified of Discharge:<'+physician+'>Goals Met:<'+GoalMet+'>Goals Comments:<'+nogoal_desc+'>Discharged To:<'+discharged_to+'>Last Visit Date:<'+last_visit+'>Discharge Date:<'+discharg_date+'>';

			output_service = output_service + discharg_field;
		}		

		var additional_information = 'Name and Designation of Author:<'+name_author+'>Phone + Extension of Author:<'+phone_author+'>Name and Designation of Primary Nurse:<'+name_nurse+'>Phone + Extension of Primary Nurse:<'+phone_nurse+'>Additonal Informations:<'+additional_info+'>Service:<'+service+'>Wound #1:<'+wound_1+'>Wound #2:<'+wound_2+'>Wound Care Physician Communication Form:Completed:<'+wound_care_complete+'>Wound Care Physician Communication Form:Sent:<'+wound_care_sent+'>Patient has Primary Care Physician:<'+patient_has_care+'>Recommendations:<'+recommendations+'>';

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

	if (!$("#name_author_nu").val()) {
		error_author_nmndde = mssg;
		$('#error_author_nmndde_nu').text(error_author_nmndde);
	}else{
		error_author_nmndde = '';
		$('#error_author_nmndde_nu').text(error_author_nmndde);
	}

	if ($.trim($('#phone_author_nu').val()).length == 0) {
		error_author_phn = mssg;
		$('#error_author_phn_nu').text(error_author_phn);
	}else{
		error_author_phn = '';
		$('#error_author_phn_nu').text(error_author_phn);
	}
	
	if ($.trim($('#name_nurse_nu').val()).length == 0) {
		error_nurse_nmndde = mssg;
		$('#error_nurse_nmndde_nu').text(error_nurse_nmndde);
	}else{
		error_nurse_nmndde = '';
		$('#error_nurse_nmndde_nu').text(error_nurse_nmndde);
	}
	
	if ($.trim($('#phone_nurse_nu').val()).length == 0) {
		error_nurse_phn = mssg;
		$('#error_nurse_phn_nu').text(error_nurse_phn);
	}else{
		error_nurse_phn = '';
		$('#error_nurse_phn_nu').text(error_nurse_phn);
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
			var type_sel_nu = $("#type_sel").val();
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

			var service_plan = 'LHIN:<'+lhin_sel+'>Type Of Service:<'+select_lhin+'>Type:<'+type_sel+'>Urgency:<'+urgency+'>Report Name:<'+report_name+'>Subcutaneous Pathway:<'+subcutaneous_pathway+'>Plan towards discharge (teaching plan discussed with):<'+ptd+'>Caregiver Name or Other Details:<'+caregiver_name+'>';
			var output_service = service_plan;

			if (GoalMet == 'yes' || GoalMet == 'no') {
				var discharg_field = 'Goals Met:<'+GoalMet+'>Goals Comments:<'+nogoal_desc+'>Discharged To:<'+discharged_to+'>Last Visit Date:<'+last_visit+'>Discharge Date:<'+discharg_date+'>';

				var output_service = service_plan + discharg_field;
			}


			var additional_information = 'Name and Designation of Author:<'+name_author+'>Phone + Extension of Author:<'+phone_author+'>Name and Designation of Primary Nurse:<'+name_nurse+'>Phone + Extension of Primary Nurse:<'+phone_nurse+'>Additonal Informations:<'+additional_info+'>Equipment Plans:<'+equipment+'>';

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