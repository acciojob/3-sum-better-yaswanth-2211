function threeSum(arr, target) {
let diff=Number.MAX_VALUE
let output=0
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
		for(k=0;k<arr.length;k++){
			if(i!=j!=k){
				let sum=arr[i]+arr[j]+arr[k];
				let c=Math.abs(sum-target);
				if(c<diff){
					output=sum;
						}
			}
		}
	}
    }
	return output;
}
module.exports = threeSum;
