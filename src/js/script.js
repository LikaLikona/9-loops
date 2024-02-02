//1)შექმენით ერთ განზომილებიანი მსაივი საიდანაც for ციკლის მეშვებოთ დაბეჭდავთ მასივში არსებულ ყველა ელემენტს
var colors = ["black, white, blue, red"]
console.log(colors.length)

// for (var i = 0; i < colors.length; i++) {
//     document.write(colors[i] + "</br")
// }

for (var index in colors) {
    document.write(colors [index])
}
// 2)შექმენით ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის პარამეტრად და if
// else მეშვეობით დაბეჭდეთ რამე ინფორმაცია 

function display(x, shefaseba) {
    const message = shefaseba(x)
    document.write(message)
}
function shefaseba(price) {
    if(price > 50){
        return "ძვირია"
    } else if (price >20 || price < 50) {
        return "საშუალო ფასი"
    } else {
        return "იაფია"
    }
}
display(55, shefaseba)

//3) მოცემული მასივიდან [ 15,53,22,198,10,28,16,70,33,951 ] დაბეჭდეთ ყველაზე დიდი რიცხვი

function largest(arr) { 
    let i; 
    let max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    return max; 

}
let arr = [ 15,53,22,198,10,28,16,70,33,951 ];
    document.write("ყველაზე დიდი რიცხვი არის " + largest(arr))