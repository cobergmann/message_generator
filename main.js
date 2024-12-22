// Randomly return elements from a given array
const randomReturn = array => {
  return array[Math.floor(Math.random() * array.length)];
}

// Define parts of the sentences
spacePart = ['The weather', 'The time', 'The group', 'The house']
timePart = ['was', 'is', 'will be']
mood = ['good', 'bad', 'delightful']

// Generate messages
console.log(`${randomReturn(spacePart)} ${randomReturn(timePart)} ${randomReturn(mood)}`)
