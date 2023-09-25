//your JS code here. If required.

const output = document.getElementById("output");

function delayedHello() {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve("Hello, world!");
                }, 1000);
            });
        }

delayedHello().then((data) => {
const para = document.createElement("p");
para.innerText = data

output.appendChild(para);
    
})
