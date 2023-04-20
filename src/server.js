const data=("http://localhost:5000/user")
const PORT=8080;
const server=http.createServer((request,response)=>{
	response.writeHead(200,{"Content-type":"application/JSON"})
	response.end();
})
server.listen(PORT,function(){
	console.log('server started at port='+PORT);
})
