
  
function bubbleSort(arr){
    
    var i, j;
    var len = arr.length;
      
    var Swapped = false;
      
    for(i =0; i < len; i++){
        
      Swapped = false;
        
      for(j = 0; j < len; j++){
          if(arr[j] > arr[j + 1]){
            var temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
          }
      }
        
   
        
      if(!Swapped){
        break;
      }
    }
      
 
    console.log(arr)
  }
    
    
  var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
    
  
  bubbleSort(arr)