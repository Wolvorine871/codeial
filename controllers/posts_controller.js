module.exports.posts = function(req,res){
    return res.render('posts',{
        title: "Posts"
    });
    // res.end('<h1>Posts</h1>');
}