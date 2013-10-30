var m = require('./config/mod.js').mod;
var rock = require('./rock/rock.js').rock;
exports.resview = function(app){
		app.get( /\w+/ ,  function (req,res){ 
			var htmls = '';
		//	res.render("head",{"title":"test","layout":"main"});  		
			m.fs.readFile('./views/head.ejs','utf8',function(err,html){
				htmls += html;
				
				m.fs.readFile('./views/tpl/'+ req.url.replace('/','')+'.ejs','utf8',function(err,html){
					htmls += html;
					m.fs.readFile('./views/foot.ejs','utf8',function(err,html){
						htmls += html;
						htmls = m.ejs.render(htmls,{
							"title":"testddd"
						})
					    res.send (htmls); 
					})
				})
				
			})
		})

	}

