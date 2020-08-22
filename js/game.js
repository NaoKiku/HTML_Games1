/* A Basic game Object */

var game = {
    // Start initializing objects, preloading assets and display start screen
    init: function(){
        //Get handler for game canvas and content
        game.canvas = document.getElementById("gamecanvas");
        game.context = game.canvas.getContext("2d");

        // Hide all game layers and display the start screen
        game.hideScreens();
        game.showScreen("gamestartscreen");
    }, // the end of init function()

    // Hide some screens 
    hideScreens: function(){
        var screens = document.getElementsByClassName("gamelayer");
        
        // Iterate(繰り返す) through the game layers and set their display to none
        for (let i = screens.length -1; i >= 0; i--){
            var screen = screens[i];

            screen.style.display = "none";
            }
    },

    // Hide single screen by id
    hideScreen: function(id){
        var screen = document.getElementById(id);

        screen.style.display = "none";

    },

    // Show screen by specifying(指定する) id
    showScreen: function(id){
        var screen = document.getElementById(id);

        screen.style.display = "block";
    },

}; // The end of Game Object Declaration
// Initialize game once page has fully loaded
window.addEventListener("load", function(){
    game.init();
});

/* Simple levels Object with Level Data and Functions */
var levels = {

    // Level Data Array
    data:[{ // First Level
        foreground: "desert-foreground",
        background: "clouds-background",
        entities: []
        }, { // Secound Level
        foreground: "desert-foreground",
        background: "clouds-background",
        entities: []
        }],

    // Initialize level selection screen
    init: function(){
        var levelSelectScreen = document.getElementById("levelselectscreen");

        // An event handler to call
        var buttonClickHandler = function(){
            game.hideScreen("levelselectscreen");

            // Level label values are 1, 2. Levels are 0, 1.
            levels.load(this.value - 1);
        };

        // レベルボタンの生成
        for (let i = 0; i < levels.data.length; i++){
            var button = document.createElement("input");
            button.type = "button";
            button.value = (i + 1)l // Level label are 1, 2
            // ボタンが押されたときの処理をセット
            button.addEventListener("click" buttonClickHandler);

            // 上記設定でボタンをフォームに追加
            levelSelectScreen.appendChild(button);
        }
    }, // The end of init() function


