var data = {

	// fe : {
	// 	JerryQu: {
	// 			site: 'http://www.imququ.com/',
	// 			select: 1
	// 	}	
	// }
}

/**
 * [news 咨询频道]
 * @type {Object}
 */
data.news = {//cat1
	csdn : { //cat2
		site : 'http://news.csdn.net/',
		select : 2,
		charset : 'utf8'
	},
	pcbeta : {
		site : 'http://www.pcbeta.com/news/',
		select : 3,
		charset : 'GBK'
	}
}

data.php = {
	php100 : {
		site : 'http://www.php100.com/html/php/',
		select : 4,
		charset : 'GBK'
	}
}

/**
 * [select 每一个网站选择模版的解析方式]
 *  @param  {[string]} parent [选择器 所有数据的父元素]
 *  @param  {[string]} title [选择器 title]
 *  @param  {[string]} des [选择器 des]
 *  @param  {[string]} desPrant [选择器 des 父元素]
 * @type {Object}
 */
var select = {
	1: {   //wordpress 1
		parent: '#main',
		title: 'header h1',
		des: '.entry-content'
	},
	2: {
		parent : '.news',
		title : '.unit h1 a',
		des : 'dd',
		link : '',
		desPrant : '.unit'
	},
	3 : {
		parent : '#pt_list',
		title : 'h3 a',
		des : 'li p',
		desPrant : 'div'
	},
	4 : {
		parent : '.listsLeft ol',
		title : 'li a',
		des : 'p',
		desPrant : 'li'
	}
}

exports.myjson = {
	data: data,
	select: select
};