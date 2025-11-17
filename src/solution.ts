
 
const formatValue=<T>(value:T):string|number|boolean|{message:string}=>{
    if(typeof value==='string'){
        return value.toUpperCase()

    }
    else if(typeof value ==='number'){
        return value*10
    }
    else if(typeof value ==='boolean') {
        return value?false:true
    }
    else{
        return {message:'wrong input '}
    }

}


const getLength=<T>(value:T):number|{message:string}=>{
        if(typeof value === 'string'){
            return value.length
        }
        else if(Array.isArray(value)){
            return value.length
        }
        else{
        return {message:'wrong input '}
    }
}








class Person {
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    
    }
    getDetails(){
        return `Name:${this['name']}, age:${this['age']}`
    }
}





type Books={
    title:string
    rating:number
}

const books :Books[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

const filterByRating=<T extends Books>(value:T[]):T[]|undefined=>{
    const filteredValue=value.filter(book=>book.rating>4)
    return filteredValue
    
    }

    

type User={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}
const users:User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const  filterActiveUsers=<T extends User>(value:T[])=>{
    const findActiveUser= value.filter(user=>user.isActive === true)
    return findActiveUser
}






interface Book {
    title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean,

}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
   publishedYear: 1925,
  isAvailable: false,
};
const  printBookDetails=<T extends Book>(obj:T  )=>{
    
    
console.log(`Title: ${obj['title']}, Author:${obj['author']}, Published: ${obj['publishedYear']}, Available:${obj['isAvailable']?'Yes':'No'}`);
}
printBookDetails(myBook)













 
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const getUniqueValues =<X,Y>(arr1:X[],arr2:Y[])=>{
    let array=[...arr1,...arr2]
    let emptyArray:any[]=[]
        for (let i = 0; i < array.length; i++) {
             let duplicate=false
            for (let j = 0; j < emptyArray.length; j++) {
            
                if(array[i] === emptyArray[j]){
                    duplicate=true
                    break
                }
                
            }
           if(duplicate===false) {
                emptyArray[emptyArray.length]=array[i]
           }
        }
        return emptyArray

}

const arr=getUniqueValues(array1, array2);
 






type Products={
 name:string
 price:number
 quantity:number
 discount?:number
}
const products = [
   { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const calculateTotalPrice=<T extends Products>(products:T[])=>{
    if(products.length===0){
        return 0
    }
        
      return  products.reduce((totalPrice,product)=>{
            const {price,quantity,discount} = product
            // console.log((discount?/100 )as number);
            
            if(discount){
                totalPrice+=price*quantity-price*quantity*(discount*0.01)
            }else{
                totalPrice+=price*quantity
            }
            return totalPrice
        },0)
}

const price=calculateTotalPrice(products)
  
