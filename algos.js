function intToAlpha(integer){
 let alphabet = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97)
  
 let intArr = integer.split('')
  let stringCombos = [];

  for (i=0; i<intArr.length;i++){
    for (j=i+1; j<intArr.length;j++){
      let possibleCombo = intArr[i] + intArr[j]
      if (intArr[i])
      stringCombos.push()
    }
  }
}
git
console.log(intToAlpha(123)) // ['abc','lc','ay']
console.log(intToAlpha(812)) // ['hab','hl']
console.log(intToAlpha(12212)) // ['abbab','lub','abub' 'avab','avl']

// "1a 2b 3c 4d 5e 6f 7g 8h 9i 10j 11k
//  12l 13m 14n 15o 16p 17q 18r 19s
//  20t 21u 22v 23w 24x 25y 26z"

// return all possible strings within the 
// alphabet based on the given ordered input.
// have an alphabet to compare to
// iterate over numbers
// 
// alphabet = [a..z]
// integers = [1,2,3]
// strings = ['abc','lc','ay']