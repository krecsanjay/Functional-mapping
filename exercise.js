const countries = ['India', 'Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Egypt'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0
const foreach1 = numbers.forEach(element  => {
    console.log(element)
})
const numbers1 = []
const numbers2 = []
const numbers3 = []
for(const number of numbers){
    numbers1.push(number)
    numbers2.push(number)
    numbers3.push(number)
}

console.log('Sum by foreach is ', foreach1)
const map1 = numbers1.map(element => {
return element+1
})

console.log('Sum by map is ', map1)

console.log('Numbers2 is ', numbers2)
const filter1 = numbers2.filter(element => element%2==0)
console.log('Using filter1 is ', filter1)

const reduce1 = numbers3.reduce((accumulator, current )=> accumulator + current)
console.log('Reduce1 is ', reduce1)

countries.forEach(element => console.log('Country ',element))

names.forEach(element => console.log('Name ',element))

numbers.forEach(element => console.log('Number ',element))

const names1 = ['sanjay', 'sharanya', 'shwetha', 'mangalam', 'krishnan', 'jayaraman']
names1.map(element => console.log('Names ',element.toUpperCase()))

const capitalCountries = countries.map(element => element.toUpperCase())
console.log('Capital countries ',capitalCountries)
console.log('Countries ',countries)

const squareNumbers = numbers.map(element => element * element)
console.log('Square numbers ', squareNumbers)
console.log('Numbers ', numbers)

const filterCountries = countries.filter(element => (element.match(/land/ig)))
console.log('Countries which contain land ', filterCountries)

const filterSix = countries.filter(element => element.length == 6)
console.log('Countries with 6 characters ', filterSix)

const filterSixMore = countries.filter(element => element.length>=6)
console.log('Countries with greater than or equal to 6 characters ', filterSixMore)

const filterE = countries.filter(element => element[0] == 'E')
console.log('Countries starting with E are ', filterE)

const num = [1,2,3,4,5,6,7,8,9,10]

console.log(num.map(element => element+1).filter(element => element%2 == 0))

const comb = num.map(element => element+1).filter(element => element%2 == 0).reduce((attribute, value) => (attribute + value) * 5)
console.log('Combining array iterators', comb)

mixArray =[1,2,3,'mangalam',true, 'krishnan', 5,6,7,'sanjay',false, 'shwetha', null]
const getStringLists = mixArray.filter(element => (typeof(element)=='string'))
console.log('Array with only strings ', getStringLists)

const sumArray = num.reduce((accumulator, value) => accumulator + value) 
console.log('Sum of Array ', sumArray)
let len = countries.length-1
let reduceCountries = countries.reduce((initial,value) => initial + ', ' + value)
console.log(reduceCountries)
console.log(reduceCountries.lastIndexOf(','))
let newCountries = reduceCountries.substr(0,57) + ' and ' + reduceCountries.substring(59)
console.log(newCountries , 'are north European countries')

const someSeven =names.some(element => element.length >=7)
if(someSeven == true) {
    console.log('There are names with more than 7 characters')
}
else {
    console.log('All names are less than 7 characters')
}

const everyCountries = countries.every(element => element.match(/land/ig))
if(everyCountries == true) {
    console.log('All countries have land in it')
}
else {
    console.log('Not all the countries have land in it')
}

const findNames = names.find(name => name.length > 3)
console.log('Name with more than 3 characters using find is ', findNames)

const findIndexNames = names.findIndex(name => name.length > 3)
console.log('Index of the name with more than 3 characters using findIndex is ', findIndexNames)

const findCountry = countries.find(country => country.length == 6)
console.log('First country with 6 characters is ', findCountry)

const findIndexCountry = countries.findIndex(country => country.length == 6)
console.log('Index of first country with 6 characters is ', findIndexCountry)

const findNorway = countries.findIndex(country => country == 'Norway')
if(findNorway == -1) {
    console.log('Norway doesnot exist in the countries list')

}
else {
    console.log('Index of Norway is ',findNorway)
}

const findRussia = countries.findIndex(country => country == 'Russia')
if(findRussia == -1) {
    console.log('Russia doesnot exist in the countries list')

}
else {
    console.log('Index of Russia is ',findRussia)
}
