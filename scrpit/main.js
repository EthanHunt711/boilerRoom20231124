
const recipes = [
    {
    recipeName: "Chokladkaka",
    portions: 1,
    ingredients: [
        { name: "Mjöl", baseAmount: 1, unit: "kopp" },
        { name: "Socker", baseAmount: 0.5, unit: "kopp" },
        { name: "Kakao", baseAmount: 2, unit: "msk" }
    ],
    instructions: "Blanda alla ingredienser och grädda i 175 grader i 20 minuter."
},
{
    recipeName: "Vaniljkakor",
    portions: 1,
    ingredients: [
        // Ingrediensdata för Vaniljkakor...
    ],
    instructions: "..."
}
// Lägg till fler receptobjekt här
];

const updatePortion = document.getElementById("update-portions")

updatePortion.addEventListener("click",function(){
    let portionAmount= document.getElementById("portion-count").value;
    calculateMeasurement(portionAmount);
    
})


function calculateMeasurement(portions){

recipes[0].ingredients.forEach(element => {
    console.log(element.baseAmount * portions)
});

}
