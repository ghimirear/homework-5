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
}
