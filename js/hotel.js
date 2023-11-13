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