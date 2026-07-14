var data=[{
    name:"Celestin",
    age:20,
    city:"Paris",
    country:"France"
},{
    name:"John",
    age:30,
    city:"New York",
    country:"USA"
},{
    name:"Maria",
    age:25,
    city:"Madrid",
    country:"Spain"
}];

// const getData = () => {
//     return data;
// }
// console.log(getData());
data.forEach((item) => {
    console.log(item.name);
    console.log(item.age);
    console.log(item.city);
    console.log(item.country);
});
const data1=document.getElementById("mydata");
document.write("<h1>Data from the array:</h1>");
data.forEach((item) => {
    document.write("<p>Name: " + item.name + "</p>");
    document.write("<p>Age: " + item.age + "</p>");
    document.write("<p>City: " + item.city + "</p>");
    document.write("<p>Country: " + item.country + "</p>");
});
