const User = require("../models/user");

module.exports.profile = function(req,res){
    return res.render('profile',{
        title: "Profile"
    });
}

//render the post page
module.exports.posts = function(req,res){
    return res.render('posts',{
        title: "Posts"
    });
}


//render the signup page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

//render the signin page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}

//  //get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('errpr in finding user in signing up'); return}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('errpr in creating user in signing up'); return}
                return res.redirect('/users/sign-in')
            })
        }
        else{
            return res.redirect('back');
        }
    });
}
//  //get the sign in and create a session for user 
// module.exports.create-session = function(req,res){
//     //TODO later
// } 