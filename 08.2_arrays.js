const hero1 = ["Hero1", "hero2", "hero3"]
const hero2 = ["Superman", "flasj", "batman"]

// hero1.push(hero2)
// ["Hero1", "hero2", "hero3", ["Superman", "flasj", "batman"]]


const hero = hero1.concat(hero2)
console.log(hero);
// ["Hero1", "hero2", "hero3", "Superman", "flasj", "batman"]


const all_hero = [...hero1, ...hero2]
console.log(all_hero)


const hero3 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [5, 6]]]
const another_array = hero3.flat(Infinity)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 5, 6]



console.log(Array.isArray("Shubh"))
console.log(Array.from("Shubh"))

console.log(Array.from({ name: "Shubh" })) //it will not conver object in array direct \

let score1 = 100
let score2 = 50
let score3 = 1050

console.log(Array.of(score1, score2, score3));

