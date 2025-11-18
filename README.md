##1  What are some differences between interfaces and types in TypeScript?
interface moloto Object othoba class khatry  vavohar kora shohog.extends korar khatry interface vavohar kora jai.kinto interface r mol shomosha holo union r intersection r khatry vavohar kora jai na shay khatry type vavohar kora uttom.merge r jonno interface vavohar kora jai.
##2 Provide an example of using union and intersection types in TypeScript.
type User={
name:string;
role:'user'
}
type Admin=
role:"admin";
hasCar:boolean
}
type UserWithRole1= User | Admin //UNION TYPE
type UserWithRole2= User & Admin //INTERSECTION TYPE
