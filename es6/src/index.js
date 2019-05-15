
window.onload = function () {
	let bar = { a: 1, b: 2 };
	let baz = { ...bar }; // { a: 1, b: 2 }
	console.log('baz', baz)

	var copy = Object.assign({}, baz);
	console.log('assign', copy)


	let p = () => new Promise(function (resolve, reject) {
		//做一些异步操作
		setTimeout(function () {
			console.log('Promise');
			resolve('随便什么数据');
		}, 2000);
	});

	p();


	let zy = () => {
		console.log('箭头函数')
	}


	let ads = [1, 2, 3, 4]

	ads.forEach(item => {
		console.log('forEach', item)
	})
}
