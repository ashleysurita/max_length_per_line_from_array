function justify(words, maxLength) {
    let res = []
    
    let index = 0
    while(index < words.length - 1){
        let lineLength = words[index].length
        let next = index + 1
        
        // iterate until we've found the segment we want
        while(words[next] && lineLength + words[next].length + 1 < maxLength){
            lineLength = lineLength + words[next].length + 1                
            next++                                
        }
        
        // take the segment with words that fit
        let seg = words.slice(index, next)

        // check if we need to add extra spaces
        if(lineLength < maxLength){
            let extraSpaces = maxLength - lineLength      // extra spaces we need
            
            let i = 0    // start index on our seg
            while(extraSpaces > 0){
                // append a space to the string while we have extra spaces
                seg[i] = `${seg[i]} `
                // subtract the extra space we added
                extraSpaces--
                
                // if we reached the end and  we have more spaces, set i back to 
                // beginning, otherwise increment
                i === seg.length - 2 ? i = 0 : i++   
                console.log('i', i)
            }  
        }
        
        // after we've handed out all extra spaces, join with the min space
        res.push(seg.join(' '))

        // after adding our new segment, move our index to the next word, and 
        // change all following vars
        index = next
        next = index + 1
        
        // if we're at the end of the array, we don't reset lineLength
        if(words[index]) {
            lineLength = words[index].length
        }
    }
    
    return res
}


const a1 = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

console.log(justify(a1, 16), 'expect [ "the  quick brown", "fox  jumps  over", "the   lazy   dog" ]')
