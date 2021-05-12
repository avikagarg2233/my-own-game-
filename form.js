class Form {
    constructor(){}


    hide(){
        this.form.hide();
      }

    display(){
    var title = createElement("h1");
    title.html("woojo");
    title.position(650,10)

    var input = createInput("Enter Name");
    input.position(610,150);

    var input2 = createInput("choose HERO or VAMP");
    input2.position(610,430);

    fill(230,179,207)
    rect(600,200,200,200);

    fill("black")
    textSize(20)
    text("<-- Choose character",606,300)


    var arrowImg,arrow
    arrowImg = loadImage("images/arrow coding.png");
    arrow = createSprite(710,530,10,10);
    arrow.addImage(arrowImg);
    arrow.scale = 0.6

    ///////////////////////////////////////////////////////////

    var leftbarImg, leftbar
    leftbarImg = loadImage("images/left bar coding.png")
    leftbar = createSprite(490,200,20,20);
    leftbar.addImage(leftbarImg);
    leftbar.scale = 0.5

    var leftbarImg2, leftbar2
    leftbarImg2= loadImage("images/left bar coding.png")
    leftbar2 = createSprite(490,285,20,20);
    leftbar2.addImage(leftbarImg);
    leftbar2.scale = 0.5

    var leftbarImg3, leftbar3
    leftbarImg3 = loadImage("images/left bar coding.png")
    leftbar3 = createSprite(490,370,20,20);
    leftbar3.addImage(leftbarImg);
    leftbar3.scale = 0.5

    //fill(232,3,252) 
    //rect(450,20,500,600);

   ///////////////////////////////////////////////////// ..

    var button1 = createButton("Start");
    button1.position(675,520)

    //this.button1.mousePressed(()=>{
     //   this.form.hide();
      //});

    var button2 = createButton("Dress Up");
    button2.position(445,210)

    var button3 = createButton("Character");
    button3.position(445,295)

    var button4 = createButton("Background");
    button4.position(445,380)


    var dressUpImg,dressUp
    dressUpImg = loadImage("images/dressUp.svg")
    dressUp = createSprite(480,187,20,20);
    dressUp.addImage(dressUpImg);
    dressUp.scale = 0.3

    var characterImg,character
    characterImg = loadImage("images/character.svg")
    character = createSprite(480,275,20,20);
    character.addImage(characterImg);
    character.scale = 0.3

    var backgroundImg,background
    backgroundImg = loadImage("images/background.png")
    background = createSprite(480,355,20,20);
    background.addImage(backgroundImg);
    background.scale = 0.3

    fill("yellow")
    rect(445,90,150,40);

    fill("red")
    text("score: ",450,115)

    }
}

