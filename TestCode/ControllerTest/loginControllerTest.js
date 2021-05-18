//setting up modeles
const loginModel = require("../../models/loginModel");
const productModel = require("../../models/productModel");

const login = async (x) =>{
    // let sess = req.session;
    // console.log(sess);
    // req.session.destroy( err=>{
    //     if(err){
    //         console.log( "there is an error");
    //     }
    // });
    return x;
}



module.exports = {
    login
}