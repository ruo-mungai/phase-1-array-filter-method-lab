// Code your solution here

const findMatching=(array, name)=>{
    const nameMatch = array.filter(function(matching){
        return matching.toUpperCase() === name.toUpperCase()
    })
    return nameMatch;
}

const fuzzyMatch=(array, firstLetter)=>{
    return array.filter(function(getFirstLetter){
        return getFirstLetter.startsWith(firstLetter) 
    })
}


function matchName(array, name){
    function matching(nameList){
        return nameList.name === name;
    };
    return array.filter(matching);
}