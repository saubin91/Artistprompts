var prompts =[
    "Make a pixlated version of your fridge right now",
    "Create an animal only using the sound they make. I.E: 'moo' for a cow or 'woof' for a dog",
    "Socks",
    "Times square",
    "Design a poster not using any adobe software",
    "Only use watercolour",
    "Self portrait with oil pastels",
    "What's at the end of the rainbow",
    "Deisgn national forest day poster",
    "Typographical poster using paint",
    "Draw a fictional character using 3 colours",
    "Design a new poster for your favourite movie",
    "Create an album cover for a new song released in the past 2 months",
    "Create a colouring page/pages for kids",
    "Re-create a art work of your choice but put a different spin on it.",
    "Create a poster for an event in the area",
    "If harry potter never found out he was a wizard; draw his life",
    "Make a design of the literal definition of compression",
    "Make a design of the literal definition of falling",
    "Make a design of the literal definition of anxiety",
    "Make a design of the literal definition of love",
    "Make a design of the literal definition of explosion",
    "Paint with your non dominant hand",
    "Orange",
    "Look to your left and draw the first thing you see",
    "An abstract design of a cheeto",
    "Design a poster for the end of the world",
    "Dinosaur, Purple, Tree",
    "Text someone asking for three random words and incorporate what they say into a design",
    "Create a logo for a toy company names 'tottstoys'",
    "Sexy harry potter",
    "Ocean eyes",
    "Right Brain, Left Brain",
    "Winter Wonderland",
    "Google logo for 'International womens day'",
    "Ocad University spiritware",
    "New Hockey jersey design for a team of your choosing",
    "What is the weather today",
    "Breast cancer awareness",
    "The office inspired design",
    "Naked",
    "Vintage",
    "Underwater",
    "Sunset",
    "Vacation time!",
    "Minimalistic StarWars",
    "Repurpose trash and junk mail as project material to make a sculpture or collage",
    "Pick a color or material you normally avoid and use it in excess",
    "Create something memorable from your childhood",
    "Have someone draw a random shape then complete the drawing",
    "Continuous line drawing",
    "Create a piece using a distorted grid",
    "Try to recreate a work by your favorite artist. Then make it your own",
    "Illustrate a scene or character from your favorite book",
    "Photograph 10 random things in your area and use one or more in a design",
    "Create a 8x10 poster design inspired by your favorite song, including your favorite line from the song as typogrpahy in the design",
    "Abstract drawing of a cheeto",
    "Zombie apocolypse",
    "Design a 3$ bill",
    "Design a poster for your friends favorite movie",
    "A crayon crying",
    "Album cover for the 27th song in your playlist",
    "Album cover or the 4th song in your que",
    "Wallpaper for An apple iphone"
]

 function newPrompte() {   
    var randomNumber = Math.floor(Math.random() * (prompts.length));
    document.getElementById('quoteDisplay').innerHTML = prompts[randomNumber];

 }






















// var prompt = ;
// var number;

// // document.querySelector("#button").onclick = function(){
// //     console.log("button pressed");
// // }


// document.querySelector("#button").onclick = click

// // console.log(click); // this passes the function declaration


// function click(){
//     var number = document.querySelector("input").value;
//     // console.log(typeof(number));
//     var subTotal = Number(number)*cost;
//     var total = applyTax(subTotal);
//     var message = "your total is $"+total;
//     console.log(message);

//     document.querySelector("#paragraph").innerHTML = message;
//     // console.log(number)
//     // console.log("button has been pressed");
// }


// function applyTax(st){
//     var tax = 1.13;
//     var result = st*tax
//     return result.toFixed(2)
// }