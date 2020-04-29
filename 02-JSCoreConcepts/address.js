var title = "dr";
var name = "Mateusz";
var surname = 'Kubicki';
var street = 'Długa 15';
var city = 'Kraków';
var zip = '30-781';
var country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
console.log(title + ' ' + name + ' ' + surname + '\n' + 'ul. '+ street + '\n' + zip + ' ' + city + '\n' + country.toUpperCase());

var str = `${title} ${name} ${surname} 
ul. ${street} 
${zip} ${country}`;

console.log(str);

console.log(`${title} ${name} ${surname}
ul. ${street} 
${zip} ${city}
${country}`);