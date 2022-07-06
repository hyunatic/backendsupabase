const express = require('express')
const fetch = require('node-fetch');
var cors = require('cors');


const app = express()
app.use(express.json())
app.use(cors())
const port = 5000

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvaWN1eXR6bXprcWpnYnZpbXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5ODY4NzEsImV4cCI6MTk3MjU2Mjg3MX0.wVbU5X11yASTyhMDanepP54xS4jKkzNjfNmjvovueCk"
const bearer = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvaWN1eXR6bXprcWpnYnZpbXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5ODY4NzEsImV4cCI6MTk3MjU2Mjg3MX0.wVbU5X11yASTyhMDanepP54xS4jKkzNjfNmjvovueCk"

app.get('/getData', (req, res) => {
	fetch('https://goicuytzmzkqjgbvimsd.supabase.co/rest/v1/profile?select=*', {
		method: 'GET',
		headers: {
			apikey: apiKey,
			Bearer: bearer
		}
	}).then(res => res.json())
		.then(data => {
			res.send(data)
		})
})

app.post('/deleteData', (req, res) => {
	fetch(`https://goicuytzmzkqjgbvimsd.supabase.co/rest/v1/profile?id=eq.${req.body.id}`, {
		method: 'DELETE',
		headers: {
			apikey: apiKey,
			Bearer: bearer
		}
	}).then(data => {
		console.log(req.body)
		res.send('{ Result : "Deleted Successfully" }')
	})
})

app.post('/createData', (req, res) => {
	fetch(`https://goicuytzmzkqjgbvimsd.supabase.co/rest/v1/profile`, {
		method: 'POST',
		headers: {
			apikey: apiKey,
			Bearer: bearer,
			"Content-Type": 'application/json'
		},
		body: JSON.stringify(req.body)
	})
	res.send('{ Result : "Added Successfully" }')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})