
let main = document.querySelector(".container")
let search = document.querySelector("#search")


function find(term) {
	search.value.addEventListener("click",function(){

	fetch("http://www.recipepuppy.com/api/?q=" + term)
	.then (
		function(response){
			if(response.status!== 200) {
				console.log(response.status)
				return;
			}
		response.json().then(function(data){
			data.results.map(function(info){
				let list = `
					<div class="row"> 
					<a href="${info.href}">${info.title}</a>
					<li> ${info.ingredients}</li>
					<img src=" ${info.thumbnail} ">
					</div>
				`
				main.innerHTML += list
			})

			})

		}
	)
})
}