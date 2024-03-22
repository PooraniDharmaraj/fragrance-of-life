function valid()
{
 v1=document.getElementById("bx1");
 e1=document.getElementById("er1");
 exp1=/^[a-z A-Z]{3,20}$/;
 
 if(v1.value=="")
 {
	 e1.innerHTML="Please Enter your Correct Name";
	 v1.focus();
	 return false;
 }
 else if(exp1.test(v1.value)==false)
    {
        e1.innerHTML="Please Enter your Correct Name";
        v1.focus();
        return false;
    }
    else
    {
        e1.innerHTML=" ";
    }
	
	//phone number
	
	 v2=document.getElementById("bx2");
    e2=document.getElementById("er2");
    exp2=/^[6-9]{1}[0-9]{9}$/;
    if(v2.value=="")
    {
        e2.innerText="Please Enter Your Mobile Number";
        v2.focus();
        return false;
    }
    else if(exp2.test(v2.value)==false)
    {
        e2.innerText="Invalid Mobile Number";
        v2.focus();
        return false;
    }
    else
    {
        e2.innerText="";
    }
	
	
	//email
	v3=document.getElementById("bx3");
    e3=document.getElementById("er3");
	exp3 =/^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+([a-z]{2,4})$/;
	if (exp3.test(v3.value)==true) {
       
        e3.innerText = '';
       
		
      } else {
       
        e3.innerText = 'Invalid email address';
		 v3.focus();
		 return false;
      }
}

i=0;
setInterval (next,1500);
function next(){
 p=document.getElementById("pic");
 a=["images/scale1.jpg","images/scale2.png","images/scale3.jpg"];
 
 p.src=a[i];
 i++;
 if(i==a.length)
 {
 i=0;
 }
}