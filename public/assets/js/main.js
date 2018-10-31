console.log("Main.js has loaded")


$(document).ready(function(){




    $(".eatBurger").on("click",function(){
        console.log("Eat a burger has been pressed")
        var id = $(this).data("burgerid");

        console.log("Your id is: " + id);
        $.ajax("/burgers/"+id,{
            type: "PUT",
            data: id
        }).then(function(){

            location.reload();
        })
    });


    $("#addBurger").on("submit",function(event){
        event.preventDefault();

        var newBurger = {
            Burger: $("#addBurger [name='burger']").val().trim()
          };
         
        $.ajax("/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){

            location.reload();

        })
    })
})


