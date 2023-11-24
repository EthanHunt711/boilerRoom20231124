

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

function createBtns(){
    let btnData = getReceipeInfo()
    btnData.then((response)=>{
        response.recipes.forEach(function(recipe){
            const buttonRecipe = document.createElement('button')
            buttonRecipe.className = 'recipeButton'
            buttonRecipe.id = `${recipe.recipeName}-btn`
            buttonRecipe.textContent = recipe.recipeName
    
    
            const buttons = document.getElementById('recipeOptions')
            buttons.appendChild(buttonRecipe)

    })
    
    })
}
createBtns()