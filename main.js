var n = parseInt(prompt("enter number"));

for (var i=2;i<=n;i++){
	
	for(var b=2;b<i;b++){
		if(i%b==0){

		break;
    	}
	}
    if (i==b){
	   document.write(i+"<br>");
    }
  }
