console.log('1')

async function async1() {
  console.log('2')
}
async1()

setTimeout(function() {
  console.log('3')
}, 0)

new Promise(resolve => {
  console.log('4')
  resolve()
})
  .then(function() {
    console.log('5')
  })

console.log('6')