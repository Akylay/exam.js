// task1

const task1 = (str) => {
    return str.split(" ").reverse().join(" ")

}
console.log(task1("добрый день"))


// task2

const task2 = (str) => {
    const arr = str.length
  if (arr % 2 === 0){
      return str.charAt(0)
  }else {
      return str.charAt(arr -1)
  }
}

console.log(task2("ahgflmddf"))



// task 3

const task3 = (str) => {
    const arr = str.length
    const a = arr / 2
    if (arr % 2 === 1){
        return str.charAt(Math.floor(a))
    }else if (arr % 2 === 0) {
        const letter1 = str.charAt(a)
        const letter2 = str.charAt(a - 1)
        const result = letter2 + letter1
        return result
    }
}

console.log(task3("Akylay"))


