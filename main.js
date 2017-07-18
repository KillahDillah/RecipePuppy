
let main = document.querySelector(".container")
let search = document.querySelector("#search")
let form = document.querySelector('#button')

form.addEventListener("click", function(e){
	e.preventDefault()

	var term = search.value

	find(term)
})


function find(term) {
	//search.value.addEventListener("click",function(){
	//document.getElementById("button").addEventListener("click", myFunction);
	console.log(term)
	fetch("http://www.recipepuppy.com/api/?q=" + term)
	.then (
		function(response){
			if(response.status!== 200) {
				console.log(response.status)
				return;
			}
			response.json().then(function(data){
				let list = ''
				data.results.map(function(info){
					
					if (!info.thumbnail){
						info.thumbnail = "http://via.placeholder.com/200x200"
					}
					list += `
						<div class="row"> 
						<a href="${info.href}"><img src=" ${info.thumbnail}"/></a>
						<h4>${info.title}</h4>
						<li> ${info.ingredients}</li>
						</div>
					`	
				})

	
				main.innerHTML = list

			})

		}
	)
}
