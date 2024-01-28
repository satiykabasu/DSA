let getSubArr = (arr) => {
    //Empty array to store subarrays
    let arr1 = [];
    for(let i=0;i<arr.length;i++) {
        //Empty array to store one subarray
        let subArr = [];
        for(let j=i;j<arr.length;j++) {
            //To get elements to the right of selected i th element till j 
            subArr.push(arr.slice(i,j+1));
        }
        //Storing individual subarrays into main array
        arr1.push(subArr);
    }
    //Return the array of subarrays
    return arr1;
}