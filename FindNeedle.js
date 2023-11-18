// can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"



// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 



function findNeedle(haystack) {

    haystack.forEach((i,index)=>{
      if(i==="needle"){
        console.log("found the needle at position ", index);
      }
    })
    
    
  }
  const arr=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
  findNeedle(arr)
