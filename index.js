const humanType = ["HUMAN", "RED", "BNW"];
const GENDER = ["MALE", "FEMALE"];
const special = [
  "SMOKE",
  "FOX FIRE",
  "FIRE",
  "WATER",
  "EARTH",
  "LIGHTNING",
  "NO EFFECTS",
];
const clothing = [
  "BLACK CAT T-SHIRT",
  "WHITE CAT T-SHIRT",
  "RED LETTERMAN JACKETS WITH GRAY SHIRT",
  "BLACK LETTERMAN JACKETS WITH GRAY SHIRT",
  "BLACK YUKATA",
  "ARCHER",
  "BLACK SWEATSHIRT",
  "WHITE HOODIE",
  "BLACK HOODIE",
  "LONG SLEEVE RED CHECKERED",
  "NEWSLETTER BOY OUTFIT",
  "BLACK T-SHIRT",
  "WHITE T-SHIRT",
  "WHITE STRIPE T-SHIRT",
  "BLACK SUITE",
  "GRAY SUITE",
];
const weapons = [
  "KATANA",
  "EARTH",
  "WATER",
  "FIRE",
  "SMOKE",
  "LIGHTNING",
  "MONKEY KING STAFF",
  "SPIKE BAT",
  "COFFEE",
];
const hair = [
  "BUZZCUT",
  "BLACK SAMURAI",
  "SILVER PIXIE",
  "BLACK FADED HAIR",
  "SILVER FADED HAIR",
  "RED FADED HAIR",
];
const headgear = ["BERET", "AXIOS CAP", "BACKWARDS CAP", "SANDOGASA"];
const face = [
  "BANDAID",
  "KRATOS RED PAINT",
  "BLACK MASK",
  "EYE PATCH",
  "BLACK GLASSESS",
  "NERD GLASSESS",
  "BLACK EYEBAND",
];
const neck = ["DRAGON TATOO", "NO ACCESSORIES", "MAROON SCARF"];
const eye = [
  "FIRE",
  "WHITE",
  "RED",
  "LIGHTNING",
  "PENSIVE",
  "BLACK DEMON EYE",
  "GLOWING",
];
const mouth = ["SMIRK", "NOT BAD", "SMOKING", "SMILE", "GRASS", "ONE FANG"];
const gender = GENDER[Math.floor(Math.random() * GENDER.length)];
const humans = humanType[Math.floor(Math.random() * humanType.length)];
const specialPowers = special[Math.floor(Math.random() * special.length)];
const clothingType = clothing[Math.floor(Math.random() * clothing.length)];
const weaponsType = weapons[Math.floor(Math.random() * weapons.length)];
const hairType = hair[Math.floor(Math.random() * hair.length)];
const headgearType = headgear[Math.floor(Math.random() * headgear.length)];
const faceType = face[Math.floor(Math.random() * face.length)];
const neckType = neck[Math.floor(Math.random() * neck.length)];
const eyeType = eye[Math.floor(Math.random() * eye.length)];
const mouthType = mouth[Math.floor(Math.random() * mouth.length)];
console.log("GENDER :", gender);
console.log("TYPE :", humans);
console.log("SPECIAL :", specialPowers);
console.log("CLOTHING :", clothingType);
console.log("WEAPON :", weaponsType);
console.log("HAIR :", hairType);
console.log("HEADGEAR :", headgearType);
console.log("FACE :", faceType);
console.log("NECK :", neckType);
console.log("EYE :", eyeType);
console.log("MOUTH :", mouthType);
function generateNumber(n) {
  const max = 9 * Math.pow(10, n - 1);
  const min = Math.pow(10, n - 1);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateNumber(4));

document.getElementById("root").innerHTML = `
  <span>GENDER : <p>${gender}</p></span> <br />
  <span>TYPE : <p>${humans}</p></span><br />
  <span>SPECIAL : <p>${specialPowers}</p></span><br />
  <span>CLOTHING : <p>${clothingType}</p></span><br />
  <span>WEAPON : <p>${weaponsType}</p></span><br />
  <span>HAIR : <p>${hairType}</p></span><br />
  <span>HEADGEAR : <p>${headgearType}</p></span><br />
  <span>FACE : <p>${faceType}</p></span><br />
  <span>NECK : <p>${neckType}</p></span><br />
  <span>EYE : <p>${eyeType}</p></span><br />
  <span>MOUTH : <p>${mouthType}</p></span><br />
  <span>CHARACTER NUMBER NAME: <p>no.${generateNumber(4)}</p></span>
`;
