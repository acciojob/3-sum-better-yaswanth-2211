function threeSum(arr, target) {
let diff=Number.MAX_VALUE
let output=0
for(i=0;i<arr.length-3;i++){
    for(j=0;j<arr.length-2;j++){
		for(k=0;k<arr.length-1;k++){
				let sum=arr[i]+arr[j]+arr[k];
				let c=Math.abs(sum-target);
				if(c<diff){
					output=sum;
						}
			}
		}
	}
	return output;
}
module.exports = threeSum;
