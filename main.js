const fn = () => {
  return 'hello world'
}

class Person {
  a = 1
  constructor () {
    this.age = 1
  }
}

const p = new Person()
console.log(p.a)

document.write(fn())