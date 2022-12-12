const reverseWord = (str) => {
    let strArray = [...str];
    let i = 0 ,j = strArray.length-1
    while(i< j){
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
        i++;
        j--;
        
    }
    return strArray.join("")
}