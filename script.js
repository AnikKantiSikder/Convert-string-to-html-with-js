
// const container = document.querySelector('.container');



// let stringOne = '<p>This is a <a href="#">string</a> with HTML</p>';

let ourString = '<button> <a href="#"> About us </a> </button>';

let ConvertStringToHTML = function (str) {
	let parser = new DOMParser();
	let doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

console.log(ConvertStringToHTML(ourString));



// const htmlStr = '<p>This is a <a href="#">string</a> with HTML</p>';

// const parser = new DOMParser();
// const doc = parser.parseFromString(htmlStr, "text/html");

// container.appendChild(doc.documentElement);

// console.log(doc);