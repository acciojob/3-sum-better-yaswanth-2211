function threeSum(arr, target) {
let initialdiff=Number.MAX_VALUE;
let ans=-1;
for(i=0;i<arr.length-3;i++){
    for(j=;i+1j<arr.length-2;j++){
		for(k=j+1;k<arr.length-1;k++){
				let sum=arr[i]+arr[j]+arr[k];
				let c=Math.abs(sum-target);
				if(initialdiff){
					ans=sum;
						}
			}
		}
	}
	return output;
}
module.exports = threeSum;
