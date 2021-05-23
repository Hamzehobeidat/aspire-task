
function findText(arr){
  for(let i = 0; i<arr.length; i++){
//    console.log(arr[i].charAt(0))
    switch (arr[i].charAt(0)) {
      case 'A':
    document.write(arr[i],",");
    break;
        
      case 'I':
    document.write(arr[i],",");
    break;

      case 'B':
    document.write(arr[i],",");
    break;
        
      case 'O':
    document.write(arr[i],",");
    break;
        
      case 'U':
    document.write(arr[i]);
    break;

}
    
  }
}


let arr = ['Apple', 'Banana', 'Cucumber', 'Watermelon', 'Ice-cream', 'Orange', 'Eggplant',
'Egg']

findText(arr)

document.write("</br>");
document.write("</br>");
document.write("</br>");
function lingthofstring(arr){
    for(let i = 0; i< arr.length; i++) {
        if(arr[i].length > 5){
            document.write(arr[i],"</br>");
        }
    }
}

lingthofstring(arr)