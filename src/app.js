/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  randomWebsite();
};

let characters = ["Meliodas", "Inuyasha", "Vegeta", "Yugi", "Eren"];

let adjectives = ["Wrathful", "Halfblood", "Restless", "Legendary", "Valient"];

let noun = ["Captain", "Demon", "Prince", "Pharaoh", "Titan"];

var lastItem = characters.length - 1;

var selected = Math.floor(Math.random() * lastItem);
var chosen = Math.floor(Math.random() * lastItem);
var highlighted = Math.floor(Math.random() * lastItem);

function randomWebsite() {
  let website =
    characters[selected] + adjectives[chosen] + noun[highlighted] + ".com";
  document.querySelector("#website").innerHTML = website;
}
