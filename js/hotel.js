//hotel reg
var test = {
    hotelname: "Marriot",
    room: 450,
    booked:120,
    display: function(){
        return this.hotelname;
    }
};
//access properties/ chang property
console.log(test.hotelname);
console.log(test.booked);

test.booked = 155;

console.log(test.booked);

//start hotel res
var grouplist = [];
function reservation(){
    //get vals and put in object
    var guest = {
        name: $('#name').val(),
        gnumber: $('#num').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        roomtype: $('#room').val()
    };
    grouplist.push(guest);
    console.log(guest);
}

function displayL(){
    $('#guestlist').html("");
    $('#guestlist').append("<table>");
    for (var i in grouplist){
        $("#guestlist").append("<tr><td>"+grouplist[i].name+"</td>");
        $("#guestlist").append("<td>"+grouplist[i].gnumber+"</td>");
        $("#guestlist").append("<td>"+grouplist[i].checkin+"</td>");
        $("#guestlist").append("<td>"+grouplist[i].checkout+"</td>");
        $("#guestlist").append("<td>"+grouplist[i].roomtype+"</td></tr>");
    };
    $("#guestlist").append("</table>");
}

//list handler
$('#list').click(displayL);

//register event handler
$('#submit').click(reservation);