import projectOne from "../assets/Blade Of Ashenfire.png";
import projectTwo from "../assets/LostInTime.png";
import projectThree from "../assets/project-3.png";

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
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;