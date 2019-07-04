exports.getPosts=(req,res,next)=>{
	res.status(200).json({darshit:[{"car name":"creta car","car image":"https://car.jpg","description":"the car is good and i work on it"},{"car name":"Fortuner car","car image":"https://car.jpg","description":"the car is awesome"},{"car name":"scorpio car","car image":"https://car.jpg","description":"the car is pretty decent"},{"car name":"honda car","car image":"https://car.jpg","description":"the car is not good"}]});
}
exports.createPosts=(req,res,next)=>{
	let title=req.body.title;
	let content=req.body.content;
	//201 is better code as given response
	console.log("title",title,"content",content);
	res.status(201).json({
		message:"post created successfully",
		post:{title:title,content:content}
	});
};
