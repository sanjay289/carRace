class Form{
    constructor(){
    
    }
    display(){
       var title=createElement('h2');
        title.html("CAR RACING GAME");
        title.position(200,0);
        var input=createInput("Name");
        input.position(200,180);
        var button=createButton("Play");
        button.position(220,230);
        var greetings=createElement('h3');
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount=playerCount+1;
        player.update('name');
        player.updateCount(playerCount);
        greetings.html("hello"+name);
        })
    }   
}