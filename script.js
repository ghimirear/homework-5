console.log("is app connecting?")
 //printing date.
 const m = moment();
 //hour variable to store the current hour and to check the present past or future class.
 var hour = moment().hours();
 document.getElementById('currentDay').innerHTML = m.format("dddd MMM Do h:mm");

pporf();
function pporf(){
    $('textarea').each (function(){
        //grabbing the value of id
        var textareaValue = $(this).attr('id');
        var textareahour = parseInt(textareaValue);
        if (textareahour === hour) {
            $(this).addClass('present');
            
        }
        else if(textareahour<hour){
            $(this).addClass('past');
        }
        else{
            $(this).addClass('future');
        }

    })
    gettoaccomplish();
}
 var toaccomplishstore = [];
 
 function setitem (){
    localStorage.setItem('toaccomplishtext', JSON.stringify(toaccomplishstore));
 }
$('.saveBtn').on('click', function () {
    var toaccomplishtext = $(this).siblings('.textarea').val();
var toaccomplishid = $(this).siblings('.textarea').attr('id');
console.log(toaccomplishid)
console.log(toaccomplishtext); 
var storage = {
    text : toaccomplishtext,
    id :toaccomplishid,
}
toaccomplishstore.push(storage);
setitem();

    
});
function gettoaccomplish(){
    $('.textarea').each(function(){
        var storedid = $(this).attr('id');
      var toaccomplishtext= JSON.parse(localStorage.getItem('toacconpmishtext'));
      console.log(toaccomplishtext);
      //var text= toaccomplishtext.text;
     // $(this).siblings('.textarea').val(text);

        //$(this).siblings('.textarea').val()= storedvalue.text + storedvalue.id;
        //$(this).siblings('textarea').attr
       // console.log(storedvalue);

        console.log(storedid);  
    });
    
}
