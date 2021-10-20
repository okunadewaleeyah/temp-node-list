const http = require('http')

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.end('Welcome to our home page')
	}
	if(req.url === '/about') {
		res.end('Here is our short history')
	}
	// const data = "page not available"
	// res.writeHead(200, {'Content-Type': 'text/html', 'Content-Lenght': data.length});
	// res.write(data);
	res.write(`
	<h1>Oops!</h1>
	<p>page not available</p>
	<a href="/">back home</a>`);
	res.end()
})

server.listen(4000)