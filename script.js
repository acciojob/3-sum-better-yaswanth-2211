function threeSum(arr, target) {
let diff=Number.MAX_VALUE
let output=0
for(i=0;i<arr.length;i++){
    let sum=0;
    for(j=0;j<arr.length;j++){
        sum=sum+arr[j];
    }
    sum=sum-arr[i];
	let c=Math.abs(sum-target);
	if(c>diff){
		output=sum;
	}
}
return output;
}
module.exports = threeSum;
