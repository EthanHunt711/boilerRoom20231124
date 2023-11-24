let portionAmount= document.getElementById("portion-count").value;

const updatePortion = document.getElementById("update-portions")

updatePortion.addEventListener("click",function(){
    portionAmount= document.getElementById("portion-count").value;
    calculateMeasurement(portionAmount);
    
})


function calculateMeasurement(portions){
// const getUl = document.querySelector("ul")

// recipes[0].ingredients.forEach(element => {
//     console.log(element.baseAmount * portions)
// });

return portions

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
    
    infoBlock.recipes.forEach(function(recipe){
        if(userSelected.id == recipe.recipeName){
             renderInfo(recipe)
        }
    })
}

function renderInfo(recipe){
    const recipeContainer = document.getElementById("recipe-container")
    const ingredientsContainer = document.createElement("div")
    const ingredientsList = document.createElement("ul")

    recipeContainer.innerHTML = ""

    recipe.ingredients.forEach(function(ingredient){
        const newLi = document.createElement("li")
        newLi.textContent = `${ingredient.name}: ${ingredient.baseAmount*portionAmount} ${ingredient.unit}`
        ingredientsList.appendChild(newLi)
    })


    ingredientsContainer.appendChild(ingredientsList)
    recipeContainer.appendChild(ingredientsContainer)

    const instructionContainer = document.createElement("div")
    const instruction = document.createElement("p")
    const instructionText = document.createTextNode(recipe.instructions) 

    instruction.appendChild(instructionText)


    recipeContainer.appendChild(instructionContainer)
    ingredientsContainer.appendChild(instructionText)

}

function createBtns(){
    let btnData = getReceipeInfo()
    btnData.then((response)=>{
        response.recipes.forEach(function(recipe){
            const buttonRecipe = document.createElement('button')
            buttonRecipe.className = 'recipeButton'
            buttonRecipe.id = `${recipe.recipeName}`
            buttonRecipe.textContent = recipe.recipeName
    
    
            const buttons = document.getElementById('recipeOptions')
            buttons.appendChild(buttonRecipe)

    })
    
    })
}
createBtns()