//your JS code here. If required.

const btn = document.getElementById("btn").value;

btn.addEventListener('click',async()=>{
const delay = document.getElementById("delay").value;
const txt = document.getElementById("text");
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