const rand = (lowest, highest) => {
  const adjustedHigh = highest - lowest + 1
  return Math.floor(Math.random() * adjustedHigh) + parseFloat(lowest)
}
const randChain = (lowest, highest, howLong) => {
  const chain = []
  for (let i = 0; i < howLong; i += 1) {
    chain.push(rand(lowest, highest))
  }
  return chain.join('')
}

export const random = {
  rand,
  randChain,
}

export default random
