 var numbers=[1,10,2,30,5,3]
 var animals=["cat","a","dog","bee"]
 animals.sort()
 console.log(animals)
//ascending
 numbers.sort(function(a,b){
    return a-b
 })
 console.log(numbers)
 
 //descending

 numbers.sort(function(a,b){
  return b-a;
 })
 animals.sort(function(a,b){
    if(a>b){
        return -1
    }
    if(a<b){
        return 1
    }
    return 0
 })
 console.log(numbers)
 console.log(animals)