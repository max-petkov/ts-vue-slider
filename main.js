function sliderGenesis() {
  new Vue({
    el: "#sliderGenesis",
    data: {
      slides: [
        {
          img: "./img/genesis-card--gold.png",
          cardDescription:
            "Genesis Skins Edition NFTs unlocking special features and utilities for holders in-game as well as ticket for free Airdrops of game items, new collection Heroes and many more.",
        },
        {
          img: "./img/genesis-card--light-blue.png",
          cardDescription:
            "Genesis Skins Edition NFTs unlocking special features and utilities for holders in-game as well as ticket for free Airdrops of game items, new collection Heroes and many more.",
        },
        {
          img: "./img/genesis-card--gold.png",
          cardDescription:
            "Genesis Skins Edition NFTs unlocking special features and utilities for holders in-game as well as ticket for free Airdrops of game items, new collection Heroes and many more.",
        },
      ],
    },
    components: {
      "carousel-3d": window["carousel-3d"].Carousel3d,
      slide: window["carousel-3d"].Slide,
    },
  });
}

function sliderDnaShuffle() {
  new Vue({
    el: "#sliderDnaShuffle",
    data: {
      slides: [
        {
          img: "./img/dna-shuffle.jpg",
          cardDescription:
            'By combining heroes from the same type the player will "breed" and create a new one with superpowers.',
        },
        {
          img: "./img/dna-shuffle.jpg",
          cardDescription:
            'By combining heroes from the same type the player will "breed" and create a new one with superpowers.',
        },
        {
          img: "./img/dna-shuffle.jpg",
          cardDescription:
            'By combining heroes from the same type the player will "breed" and create a new one with superpowers.',
        },
      ],
    },
    components: {
      "carousel-3d": window["carousel-3d"].Carousel3d,
      slide: window["carousel-3d"].Slide,
    },
  });
}

function sliderItems() {
  new Vue({
    el: "#sliderItems",
    data: {
      slides: [
        {
          img: "./img/generic-character.png",
          cardName: "Hero",
          cardDescription:
            "Heroes can be two types: Special Heroes (historical figures who left a mark in the evolution of the world - dominant) or Free to Play Heroes (which everyone can receive when he enters the game at no cost).",
          imgClass: "img__generic-hero",
        },
        {
          img: "./img/hero-camps.png",
          cardName: "Hero Camps",
          cardDescription:
            "Each Player in Time Shuffle needs a Camp in order to participate in missions and battles. One Base is given to each Player upon registration, but Players can win or purchase additional Bases. Each Base gives a variety of Perks and Bonuses to the Player’s stats and fighting team.",
          imgClass: "img__hero-camps",
        },
        {
          img: "./img/mystery-nft.png",
          cardName: "Marie Curie",
          cardDescription:
            "Players will be able to collect or win different game items, which will help them progress through a specific battle or in general in the evolution in the game.",
          imgClass: "img__myster-nft",
        },
      ],
    },
    components: {
      "carousel-3d": window["carousel-3d"].Carousel3d,
      slide: window["carousel-3d"].Slide,
    },
  });
}

function sliderHeroes() {
  new Vue({
    el: "#sliderHeroes",
    data: {
      slides: [
        {
          imgCharacter: "./img/einstein.png",
          imgCharacterVariant: "./img/einstein-musician.png",
          cardName: "Hero",
          cardDescription: "The holder of “relativism”",
        },
        {
          imgCharacter: "./img/marie-curie.png",
          imgCharacterVariant: "./img/marie-curie-lady.png",
          cardName: "Hero Camps",
          cardDescription: "Every molecule can make a bomb",
        },
        {
          imgCharacter: "./img/dali.png",
          imgCharacterVariant: "./img/dali-medic.png",
          cardName: "Marie Curie",
          cardDescription: "Art will win!",
        },
      ],
    },
    components: {
      "carousel-3d": window["carousel-3d"].Carousel3d,
      slide: window["carousel-3d"].Slide,
    },
  });
}

window.addEventListener("DOMContentLoaded", function () {
  sliderGenesis();
  sliderDnaShuffle();
  sliderItems();
  sliderHeroes();
});
