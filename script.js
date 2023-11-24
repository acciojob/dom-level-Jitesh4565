//your JS code here. If required.
function finder(){
  let element=document.getElementById("level");
  let level=0;
  while(element.parentElement)
	  {
		  level++;
		  element=element.parentElement;
	  }
	return level;
}
const ans=finder();
console.log(`The level of the element is:${ans}`);
