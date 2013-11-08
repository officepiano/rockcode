var data = {

	fe : {
		JerryQu: {
				site: 'http://www.imququ.com/',
				select: 1
		}	
	}
}
var select = {
	1: {   //wordpress 1
		parent: '#main',
		title: 'header h1',
		des: '.entry-content'
	}
}

exports.myjson = {
	data: data,
	select: select
};