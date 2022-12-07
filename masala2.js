

 function arr2(arr2) {
    let empty=[]
    empty=arr2[0]
  
   arr2[0]=arr2[arr2.length-1]

    arr2[arr2.length-1]=empty

    return arr2
}
export {arr2}

