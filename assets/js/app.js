//check off specific todos by clicking
// $("li").click(function(){
// alert("clicked")
// });



// $("li").on("click", function(){
// $(this).css("color", "gray");
// $(this).css("text-decoration", "line-through");
// });



// $("li").on("click", function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 	//turn it black
// 	$(this).css({
// 	color:"black",                                      //better to define an object
// 	textDecoration :"none"
// });	
// 	}
// 	//else
// 	else{
// 	// turn it gray
// 	$(this).css({
// 	color:"gray",                                      //better to define an object
// 	textDecoration :  "line-through"
// });
// 	}
// });


									                          //or simply do this
// $("li").on("click", function(){
// 	$(this).toggleClass("completed");
// });
// //click on x to delete a todo
// $("span").on("click" , function(event){
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove();                    //to remove whole li 
// 	});                                 
// event.stopPropagation();    //will stop propogation to li,s
// });
// //make a new todo on input
// $("input[type='text']").keypress(function(event){
// if(event.which===13){
// 	//grabbing new todo text from input
// 	var todoText = $(this).val();
// 	$(this).val("");
// 	//create new li and add to ul
// 	$("ul").append("<li> <span>x </span> "  + todoText + "</li>");
// }
// });

								//but do this



	$("ul").on("click","li", function(){          //to account for elements that are not present yet
	$(this).toggleClass("completed");
});
//click on x to delete a todo
$("ul").on("click" ,"span", function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();                    //to remove whole li 
	});                                 
		event.stopPropagation();    //will stop propogation to li,s
});
//make a new todo on input
$("input[type='text']").keypress(function(event){
	if(event.which===13){
	//grabbing new todo text from input
	var todoText = $(this).val();
	//create new li and add to ul
	$("ul").append("<li> <span># </span> "  + todoText + " </li>");
	//clear text in input
	$(this).val("");
}
});