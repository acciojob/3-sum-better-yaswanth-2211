function threeSum(arr, target) {
let diff=target
let output=0
for(i=0;i<arr.length;i++){
    let sum=0;
    for(j=0;j<arr.length;j++){
        sum=sum+arr[j];
    }
    sum=sum-arr[i];
	let c=0;
	if(sum<0){
		c=-(target-sum);
	}
	else{
		c=target-sum;
		
	}
    if(c<diff){
        diff=c;
        output=sum;
    }
    
}
return output;
}
module.exports = threeSum;
