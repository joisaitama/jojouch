console.log('Funciona!');
import {Developer, Game, Tag, Publisher, User, Profile, Language, Specs, Review, Community, Badge, Inventory, Item} from './models.js';

const d1 = new Developer('joijoi');
d1.addSkills('JS');
console.log(`Developer: ${d1.nome}; skills: ${d1.skills}`);

const pub1 = new Publisher('Ubisoft');
console.log(`Publisher: ${pub1.nome}`);

const g1 = new Game('AC Odyssey');
g1.addAchievement('Primeira conquista');
console.log(`Game: ${g1.nome}; conquistas: ${g1.achievement}`);

const tag1 = new Tag('RPG');
g1.addTag(tag1);
console.log(`Tags: ${g1.tags.map(t => t.nome)}`);

const lang1 = new Language('Português');
console.log(`Language: ${lang1.nome}`);

const spec1 = new Specs('Single-player');
console.log(`Specs: ${spec1.nome}`);

const user1 = new User('maria');
console.log(`User: ${user1.username}`);

const profile1 = new Profile('MariaPro');
console.log(`Profile: ${profile1.nickname}`);

const review1 = new Review('Jogo incrível!');
console.log(`Review: ${review1.comentario}`);

const comm1 = new Community('Fãs de AC');
console.log(`Community: ${comm1.nome}`);

const badge1 = new Badge('Veterano');
console.log(`Badge: ${badge1.nome}`);

const inv1 = new Inventory();
inv1.addItem(new Item('Carta rara'));
console.log(`Inventory items: ${inv1.items.map(i => i.nome)}`);

const item1 = new Item('Emoticon');
console.log(`Item: ${item1.nome}`);