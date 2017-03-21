require('babel-core/register')({
    presets: ['es2015', 'react']
});

let express 		= require('express');
let app 			= express();
let React 			= require('react');
let ReactDOMServer 	= require('react-dom/server');
let components 		= require('./public/components.js');

let path 			= require('path');

// var HelloMessage = React.createFactory(components.HelloMessage);


let createComponent = function(key){
  return React.createFactory(components[key]);
};

let renderComponent = function(res, url, name, props){
	let component = createComponent(name);

	return res.render(url, {
		react: ReactDOMServer.renderToString(component(props))
	});
};

// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	renderComponent(res, 'index', 'HelloMessage', {name: 'Server'});
});

app.get('/name', function(req, res){
  res.send("Paul, " + new Date().toString())
});

app.listen(8001, function() {
  console.log('Listening on port 8001...');
});
