
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




async function getReceipeInfo(){
    let responseInfo = await fetch('./data/receipt.json')

    if(responseInfo.ok){
        const response = await responseInfo.json()
        return response





    } else {
        console.log(responseInfo.status)
    }
}

const userSelection = document.getElementById('recipeOptions')

userSelection.addEventListener('click', function(event){
    let data = getReceipeInfo();
    data.then((result) => {recipeSelector(result,event.target)}) 
    

    

})

function recipeSelector(infoBlock,userSelected){
    console.log(infoBlock)
    console.log(userSelected)

}

function renderInfo(recipe){
    const recipeContainer = document.getElementById("recipe-container")




}
