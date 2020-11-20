/* Select a random element from values array. */
import uuid from "uuid"

function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

function formatPlayingCard(data){
  return { id: uuid(), image: data.cards[0].image }
}

function formatPokemon(data) {
  const formattedObj = {
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name
    }))
  }
  return formattedObj
}

export { choice, formatPokemon, formatPlayingCard };