export default (req,res)=>{
  const {cookies} = req
  const token = cookies.token

  // console.log(token,"token from server");
  
  res.status(200).json({message:"suc"})

}