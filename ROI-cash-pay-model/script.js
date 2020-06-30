var isNotEnter = false
$("#run_roi_clc").click(function() {
  //$('.input_container').hide();
  var hearingAW = $("#hearingAW").val()
  var hearingAAC = $("#hearingAAC").val()
  var incrementalRFPCA = $("#incrementalRFPCA").val()

  var cheeckCAW1 = $("#cheeckCAW1").val()
  var checkCleanAAC = $("#checkCleanAAC").val()
  var incrementalRFPCA2 = $("#incrementalRFPCA2").val()
  if(isEmpty(hearingAW) || isEmpty(hearingAAC) || isEmpty(incrementalRFPCA) || isEmpty(cheeckCAW1)|| isEmpty(checkCleanAAC) || isEmpty(incrementalRFPCA2)){
    alert('Please enter valid inputs')
  }else{
    if(!isNotEnter){
      if (confirm('Do you wish to continue with default inputs?')) {
        isNotEnter = true
        $('.output_container').show();
        $("#collapse_btn").show()
        $('.output_container').show();
        $("#collapse_btn").attr("src","minus_icon.png");
        isCollapse = false
        calculateRoi()
      } else {
        
      }
    }else{
      $('.output_container').show();
      $("#collapse_btn").show()
      $('.output_container').show();
      $("#collapse_btn").attr("src","minus_icon.png");
      isCollapse = false
      calculateRoi()
    }
    
  }

  


  
  
  return false;
});



$("#back_button").click(function() {
  $('.input_container').show();
  $('.output_container').hide();
  $("#collapse_btn").hide()

  return false;
});
var isCollapse = false
$("#collapse_btn").click(function() {
  if(isCollapse){
    $('.output_container').show();
    $("#collapse_btn").attr("src","minus_icon.png");
    isCollapse = false
  }else{
    $('.output_container').hide();
    $("#collapse_btn").attr("src","plus_icon.png");
    isCollapse = true
  }
  return false;
});

function calculateRoi(){
  
  var hearingAW = $("#hearingAW").val()
  var hearingAAC = $("#hearingAAC").val()
  var incrementalRFPCA = $("#incrementalRFPCA").val()

  var cheeckCAW1 = $("#cheeckCAW1").val()
  var checkCleanAAC = $("#checkCleanAAC").val()
  var incrementalRFPCA2 = $("#incrementalRFPCA2").val()


  $('#row_1_1').text(hearingAW)
  $('#row_1_2').text(hearingAAC+"%")
  $('#row_1_4').text("$"+incrementalRFPCA)
  var cognivueAW = hearingAW*hearingAAC/100
  $( "#row_1_3" ).text(cognivueAW)

  var total1=cognivueAW*incrementalRFPCA
  $( "#row_1_5" ).text("$"+Math.round(total1))





  $('#row_2_1').text(cheeckCAW1)
  $('#row_2_2').text(checkCleanAAC+"%")
  $('#row_2_4').text("$"+incrementalRFPCA2)

  var caw = cheeckCAW1*checkCleanAAC/100
  $( "#row_2_3" ).text(caw)
  var total2 = caw*incrementalRFPCA2

  $( "#row_2_5" ).text("$"+Math.round(total2))


  var roiircw = total1+total2
  $("#row_3_1").text("$"+Math.round(roiircw))
  var incrementRYear= roiircw*48
  $("#row_3_2").text("$"+Math.round(incrementRYear))

  var monthlySFC = 375
  var annualSubScription= monthlySFC*12

  $("#row_3_4").text("$"+Math.round(annualSubScription))
  var annualProfit= incrementRYear-annualSubScription

  $("#row_3_5").text("$"+Math.round(annualProfit))

  $("#roi_total").text(Math.round(annualProfit/annualSubScription*100)+"%")



 $("#row_1_4").digits();
  $("#row_1_5").digits();

  $("#row_2_4").digits();
  $("#row_2_5").digits();
  $("#row_3_1").digits();
  $("#row_3_2").digits();
  $("#row_3_3").digits();
  $("#row_3_4").digits();
  $("#row_3_5").digits();

}

$.fn.digits = function(){ 
  return this.each(function(){ 
      $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
  })
}

$( "#hearingAW" ).keyup(function() {
  $(this).removeClass("gray-color");
  $(this).addClass("black-color");

  isNotEnter=true
});
$( "#hearingAAC" ).keyup(function() {
  $(this).removeClass("gray-color");
  $(this).addClass("black-color");
  $("#percentage1").removeClass("gray-color");
  $("#percentage1").addClass("black-color");
  isNotEnter=true
});
$( "#incrementalRFPCA" ).keyup(function() {
  $(this).removeClass("gray-color");
  $(this).addClass("black-color");
  $("#dollor1").removeClass("gray-color");
  $("#dollor1").addClass("black-color");
  isNotEnter=true
});


$( "#cheeckCAW1" ).keyup(function() {
  $(this).removeClass("gray-color");
  $(this).addClass("black-color");
  isNotEnter=true
});
$( "#checkCleanAAC" ).keyup(function() {
  $(this).removeClass("gray-color");
  $(this).addClass("black-color");
  $("#percentage2").removeClass("gray-color");
  $("#percentage2").addClass("black-color");
  isNotEnter=true
});
$( "#incrementalRFPCA2" ).keyup(function() {
  $(this).removeClass("gray-color");
  $(this).addClass("black-color");
  $("#dollor2").removeClass("gray-color");
  $("#dollor2").addClass("black-color");
  isNotEnter=true
});
function isEmpty(property) {
  return (property === null || property === "" || typeof property === "undefined");
}
