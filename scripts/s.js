/*jslint indent: 4 */
(function(){
var app = angular.module('tango', [ ]);
    
app.controller('TangoController', function(){
    this.website = "Tango.GG";
    });
    
app.controller('HeroController', function(){
    this.heroes = heroes;
    });

var heroes = [
        {
        name: "Abaddon",
        icon: "icons/80px-Abaddon.png"
        },
        {
        name: "Axe",
        icon: "icons/80px-Axe.png"
        },
        {
        name: "Alchemist",
        icon: "icons/80px-Alchemist.png"
        },
        {
        name: "Ancient Apparition",
        icon: "icons/80px-Ancient_Apparition.png"
        },
        {
        name: "Anti-Mage",
        icon: "icons/80px-Anti-Mage.png"
        },
        {
        name: "Batrider",
        icon: "icons/80px-Batrider.png"
        },
        {
        name: "Beastmaster",
        icon: "icons/80px-Beastmaster.png"
        },
        {
        name: "Bloodseeker",
        icon: "icons/80px-Bloodseeker.png"
        },
        {
        name: "Bounty Hunter",
        icon: "icons/80px-Bounty_Hunter.png"
        },
        {
        name: "Brewmaster",
        icon: "icons/80px-Brewmaster.png"
        },
        {
        name: "Bristleback",
        icon: "icons/80px-Bristleback.png"
        },
        {
        name: "Broodmother",
        icon: "icons/80px-Broodmother.png"
        },
        {
        name: "Centaur Warrunner",
        icon: "icons/80px-Centaur_Warrunner.png"
        },
        {
        name: "Chaos Knight",
        icon: "icons/80px-Chaos_Knight.png"
        },
        {
        name: "Chen",
        icon: "icons/80px-Chen.png"
        },
        {
        name: "Clinkz",
        icon: "icons/80px-Clinkz.png"
        },
        {
        name: "Clockwerk",
        icon: "icons/80px-Clockwerk.png"
        },
        {
        name: "Crystal Maiden",
        icon: "icons/80px-Crystal_Maiden.png"
        },
        {
        name: "Dark Seer",
        icon: "icons/80px-Dark_Seer.png"
        },
        {
        name: "Dazzle",
        icon: "icons/80px-Dazzle.png"
        }
    ];
})();
/* <li class="hero"><img id="abbadon" src="icons/80px-Abaddon.png"></li>
        
        <li class="hero"><img id="" src="icons/80px-Broodmother.png"></li>
        <li class="hero"><img id="" src="icons/80px-Centaur_Warrunner.png"></li>
        <li class="hero"><img id="" src="icons/80px-Chaos_Knight.png"></li>
        <li class="hero"><img id="" src="icons/80px-Chen.png"></li>
        <li class="hero"><img id="" src="icons/80px-Clinkz.png"></li>
        <li class="hero"><img id="" src="icons/80px-Clockwerk.png"></li>
        <li class="hero"><img id="" src="icons/80px-Crystal_Maiden.png"></li>
        <li class="hero"><img id="" src="icons/80px-Dark_Seer.png"></li>
        <li class="hero"><img id="" src="icons/80px-Dazzle.png"></li>
*/
$(document).ready(function() {
    document.oncontextmenu = function() {return false;};
    $("#heroes").on("click", "li", function(){
        var teamSize = $("#team > li").length;
        if (teamSize !== 5) $(this).remove().appendTo("#team");
        //todo remove jquery logic?
    });
    
    $("#team").on("click", "li", function(){
        $(this).remove().appendTo("#heroes");
    });
});

