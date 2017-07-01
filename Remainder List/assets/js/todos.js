//check off specific todos by clicking
$("ul").on("click", "li", function(){
	//once created a class in css we can add/remove it to the li clicked with toggleClass! GREATNESS OF JQUERY
	$(this).toggleClass("completed");
});

//click on X to delite todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		//after the clicked li is fadeOut() it removes it!
		$(this).remove();
	});
	//jQuery method to stop propagation of an event to other elements
	//it stop the bubbling up on other elements
	event.stopPropagation();
});

//add an event on input field after clicking ENTER
$("#todo_addNewToDo").keypress(function(event){
	if(event.which === 13) {
		//grabbing text from input in a var
		var todoText = $(this).val();
		//...clean up the input module after clicking ENTER key
		$(this).val("");
		//create a new li and add to the ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
	}
});

//a click on plus sign open/close the input field with fadeToggle
$(".fa-plus").on("click", function(){
	$("#todo_addNewToDo").fadeToggle(200);
});
