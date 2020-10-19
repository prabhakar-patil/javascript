console.log('Promise Demo 1: Wrapping old style callbacks in Promises: setTimeout');

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function doSomething(msg) {
	console.log(msg);
}

function failureCallback() {
	console.log('failureCallback')
}

wait(5*1000).then(() => doSomething('5 sec delay')).catch(failureCallback);
