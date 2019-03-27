
// Deli Counter Lab

// 1-3 
function takeANumber(ppline){
  
   var res = [1];
  
   res.push(ppline) 
  
  var res = ("Welcome, you're number" + ppline.length + 1)
  
  
  return res;
} 


// nowServing function
function nowServing(names) {
  
    if (!names.length) 
          {
      return "There is nobody waiting to be served!";
          }
  
    else {
        var output = "Currently serving " + names.shift() + ".";
        
        // var e = names.shift();
        // console.log(names);
        // return "Currently serving " + e + ".";
      return output;
    }
}




// currentLine
function currentLine(names) {
  
  if (!names.length) 
  //if (names.length === 0)
          {
      return "The line is currently empty.";
          }
  
    else {
      var sentence = "The line is currently: ";
        
        for (var i = 0; i < names.length -1; i++)
                
                {
                sentence += `${i + 1}. ${names[i]}, `
                      
                }
           
            }
          sentence += `${names.length}. ` + names[names.length - 1];
       return sentence
}    


//  const numbersAndNames = []
// for (let i = 0, l = names.length; i < l; i++) {
//     numbersAndNames.push(`${i + 1}. ${line[i]}`)
//   }

//   return `The line is currently: ${numbersAndNames.join(', ')}`
// };

