const hours=document.querySelector("#Hours");
const minutes=document.querySelector("#Minutes");
const seconds=document.querySelector("#Seconds");

var arr=document.querySelectorAll('.numbers');

for( var i=0;i<arr.length; i++)
   { 
   	  arr[i].children[0].style.transform="rotate("+(-(i*30))+"deg)";
      arr[i].style.transform="rotate("+(i*30)+"deg)";
   }

function clock()
{
	var date= new Date();

	let hr=date.getHours();
	let min=date.getMinutes();
	let sec=date.getSeconds();

	let hrposition=(hr*360/12)+((min*360/60)/12);
	let minposition=(min*360/60)+((sec*360/60)/60);
	let secposition=sec*360/60;
     
     hours.style.transform="rotate("+hrposition+"deg)";
     minutes.style.transform="rotate("+minposition+"deg)";
     seconds.style.transform="rotate("+secposition+"deg)";

     if(hr>12)
     { 
        debugger;
       hr=hr-12;
     } 
    if(hr<10 && min<10)
          {
           document.querySelector("#digital").innerHTML="0"+ hr+" : "+"0"+min+" : "+sec;
          }
    if(hr>9 && min<10)
         {
          document.querySelector("#digital").innerHTML= hr+" : "+"0"+min+" : "+sec;
         }
    if (hr<10 && min>9)
        {
         document.querySelector("#digital").innerHTML="0"+ hr+" : "+min+" : "+sec;
        }
    else
        {
         document.querySelector("#digital").innerHTML= hr+" : "+min+" : "+sec;
        }
    
     // {
     //  document.querySelector("#digital").innerHTML= hr+" : "+ min +" : "+sec;
     // }
     // if(hr<10 && min<10)
     // {
     //  document.querySelector("#digital").innerHTML="0"+ hr+" : "+"0"+min+" : "+sec;
     // }
     // if(hr<10 && min>10)
     // {
     //  document.querySelector("#digital").innerHTML= "0"+hr+" : "+ min +" : "+sec;
     // }
   }
var start=setInterval(clock,1000);