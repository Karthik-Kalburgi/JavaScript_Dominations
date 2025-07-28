//For in loop is used only for objects to loop their objects properties

let person = {
  name:'Karthik',
  age:24,
  city:'Bangalore'
}

for(let key in person){
  console.log(key, person[key]);
}