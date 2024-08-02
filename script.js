//your JS code here. If required.

const btn = document.getElementById("btn");

btn.addEventListener('click',async()=>{
const delay = parseInt(document.getElementById("delay").value);
const txt = document.getElementById("text").value
	await delayFunc(delay);
	document.getElementById("output").innerText=txt;
})

function delayFunc(delay) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve();
		},delay)
	})
}