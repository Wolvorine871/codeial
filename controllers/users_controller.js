module.exports.profile = function(req,res){
    return res.render('profile',{
        title: "Profile"
    });
    // res.end('<h1>User Profile</h1>');
}