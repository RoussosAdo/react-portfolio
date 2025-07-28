import projectOne from "../assets/Blade Of Ashenfire.png";
import projectTwo from "../assets/LostInTime.png";
import projectThree from "../assets/TheCityOfArkada.png";

const projects = {
  1: {
    title: "Blades Of Ashenfire",
    image: projectOne,
    description: (
      <>
        <p>
          Blades of Ashenfire is an intense 2D action-adventure game developed in Unity 2D. Set in a medieval fantasy world, it features fast-paced combat, elemental abilities, skill combos, and rich storytelling. Players journey with Aelara, a swordsmith warrior, battling dark forces and exploring beautifully crafted pixel-art environments filled with magic and danger.
        </p>
      </>
    ),
    github: "https://github.com/RoussosAdo/RPG-GAME-",
    demo: "https://ohestisgames.itch.io/blades-of-ashenfire-demo",
  },
  2: {
    title: "Lost In Time",
    image: projectTwo,
    description: (
      <>
        <p>
          LostInTime is a team-developed 3D zombie survival shooter built in Unity. In this open-world wave-based game, players scavenge weapons and supplies while fighting off relentless undead hordes. I was responsible for designing and implementing the zombies, AI behavior, physics, NavMesh pathfinding, environment setup, shooting system, and particle effects. The project showcases intense FPS gameplay, strategic survival mechanics, and a dynamic world brought to life through collaborative effort and focused technical design.
        </p>
      </>
    ),
    github: "https://github.com/ApolloEs/GameDev2025",
    demo: "https://ohestisgames.itch.io/lostintime",
  },
  3: {
    title: "The City Of Arkada",
    image: projectThree,
    description: (
      <>
        <p>
          The City of Arkada is a dark fantasy 2D game I developed using Unity. As my first-ever project, it was a valuable learning experience in game design, pixel art, and Unity development. I focused on building a mysterious medieval world with a distinct atmosphere. Since it was my initial attempt at game creation, I didn’t upload it to GitHub, but it remains a proud milestone in my development journey.
        </p>
      </>
    ),
    github: "",
    demo: "https://ohestisgames.itch.io/the-city-of-arkada",
  },
};

export default projects;