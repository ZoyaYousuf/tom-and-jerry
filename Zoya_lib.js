function collition(a, b){
    var minCriteriaByWidth = a.width/2 + b.width/2;


if(b.x-a.x<=minCriteriaByWidth
&& a.x-b.x<=minCriteriaByWidth){
   return true;
} else {
    return false;
}
}
