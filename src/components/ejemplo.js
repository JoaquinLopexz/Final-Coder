const arrayList = [
    { name: "jose", sex: "m" },
    { name: "ruben", sex: "m" },
    { name: "eva", sex: "f" },
    { name: "josefa", sex: "f" },
    { name: "joaco", sex: "m" },
    { name: "ana", sex: "f" },
]

// que hagas un filtrado según el sexo de la persona:



// DECLARATIVO? -> VA AL GRANO, LE IMPORTA QUE SE HAGA Y NO CÓMO SE HACE
// MAP - FILTER array.map(HAZLO)
const peopleType = "f"
const peopleList = arrayList.filter(person => person.sex === peopleType)

console.log("peopleList: ", peopleList)

// IMPERATIVO? -> 
// IF - FOR -  
