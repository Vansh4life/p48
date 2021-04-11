class Form{
    constructor(){
        this.play = createButton('Play');
    }
    display(){
        this.play.position(displayWidth/2, displayHeight/2);
        this.play.mousePressed(()=>{
            gameState = "level1"
            this.play.hide();
        })
    }
}