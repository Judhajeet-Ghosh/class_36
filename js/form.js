class Form{
    constructor(){

    }

    display(){
        var title= createElement("h1");
        title.html("CAR RACING GAME")
        title.position(130,0)

        var input= createInput("NAME")
        var button= createButton("ENTER")

        var greeting= createElement("h3")
        

        input.position(130,160)
        button.position(180,200)

        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name = input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("Welcome "+ name)
            greeting.position(200,150)
        })
    }
}