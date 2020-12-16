console.log("is app connecting?")
 //printing date.
 const m = moment();
 //hour variable to store the current hour and to check the present past or future class.
 document.getElementById('currentDay').innerHTML = m.format("dddd MMM Do h:mm");
//to accomplish object to hold data to construct html element, with identity, hour and toaccomplishtext.
var toaccomplish = [
    {
        identity: 9,
        hour: "9AM",
        toaccomplishtext: "",
    },
    {
        identity: 10,
        hour: "10AM",
        toaccomplishtext: "",
    },
    {
        identity: 11,
        hour: "11AM",
        toaccomplishtext: "",
    },
    {
        identity: 12,
        hour: "12PM",
        toaccomplishtext: "",
    },
    {
        identity: 13,
        hour: "1PM",
        toaccomplishtext: "",
    },
    {
        identity: 14,
        hour: "2pm",
        toaccomplishtext: "",
    },
    {
        identity: 15,
        hour: "3PM",
        toaccomplishtext: "",
    },
    {
        identity: 16,
        hour: "4PM",
        toaccomplishtext: "",
    },
    {
        identity: 17,
        hour: "5PM",
        toaccomplishtext: "",
    }
];
    
//renderToAccomplish();
function renderToAccomplish(){
    //for loop to over toaccomplish array 
    for (var index = 0; index < toaccomplish.length; index++) {
        //sapn to store all the three element hourblock textarea and button
        var span = $('<section>');
        span.addClass('row');
        span.attr('data-value', toaccomplish[index].identity);
        $('.container').append(span)
        //creating hour block, adding class and value
        var hourblock = $('<div>');
        hourblock.text(toaccomplish[index].hour);
        hourblock.addClass('col-2 hour time-block');
        //creating text area giving attribute  and adding classs
        var textblock = $('<textarea>');
        textblock.text(toaccomplish[index].toaccomplishtext);
        textblock.attr("data-value", toaccomplish[index].identity);
        textblock.addClass('col-8 textarea');
        //creating button and adding class and value
        var button = $('<button>');
        button.addClass('saveBtn col-1 btn');
        button.attr('data-value', toaccomplish[index].identity);
        button.val(index)
        button.text('Add');
        //appending three item to span.
        span.append(hourblock, textblock,button);
        $('.container').append(span);
    //getting current hour from momrntjs
    var hour = moment().hours();
    console.log(hour);
    //getting data-value attribute as a hourvalue to compare with hour
    var hourvalue = $(span).attr('data-value');
    console.log(hourvalue);
    if(parseInt(hour) === parseInt(hourvalue)){
        //on the basis of greater equal or smaller seeting the claa of textarea
        textblock.addClass('present');
    }
    else if(parseInt(hour) > parseInt(hourvalue)){
        textblock.addClass('past');
    }
    else{
        textblock.addClass('future');
    }

    }
}
//
function init(){
    storedtoaccomplish = JSON.parse(localStorage.getItem('toaccomplish'))
    console.log(storetoaccomplish);
    if (storedtoaccomplish !== null) {
        toaccomplish = storedtoaccomplish;   
    }
}
//
function storetoaccomplish(){
    localStorage.setItem('toaccomplish', JSON.stringify(toaccomplish));
}
//function to get stored item and passing value to the toaccomplish array.

//assigning click function to saveBtn and to store values.
$('.container').on('click','.saveBtn', function(event){
    event.preventDefault();
    //targeting the each element
     target = $(event.target);
    console.log(target);
   var  textvalue = target.prev().val();
    console.log(textvalue);
    var targetvalue = $(event.target).val();
    console.log(targetvalue);
    toaccomplish[targetvalue].toaccomplishtext = textvalue;
    storetoaccomplish(); 
});
init();
renderToAccomplish();
