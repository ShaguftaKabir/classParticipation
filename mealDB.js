function show(){
    var searchTerm= document.getElementById("searchBox").value;

    var url= `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`;

    fetch(url)
    .then(res => res.json())
    .then(data => display(data))

}
function display(data){
    var allMeals= data.meals;
    var oldContent = document.getElementById("content");
    oldContent.textContent = "";
    // console.log(allMeals)
    for(var i=0; i<allMeals.length; i++){
        var newDiv= document.createElement("div");
        newDiv.innerHTML= `<br>Meal ID: ${allMeals[i].idMeal} <br>
                           Meal Name: ${allMeals[i].strMeal} <br>  
                           <img src="${allMeals[i].strMealThumb}">
                           Instructions to prepare meal: <p><spam class="instruction"> ${allMeals[i].strInstructions}</spam></p> 
                           <a href= "${allMeals[i].strYoutube}"> Watch Video: </a> <br> 
    `
        newDiv.classList.add("styling");
        oldContent.appendChild(newDiv);
}
}
