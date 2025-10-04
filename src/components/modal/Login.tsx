/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

function Login(show ) {

  const [us, setus] = useState(false)
      setus(show)

  return (
    
    showLogin()
  )

    function showLogin(){
    if(us == true){
      return(
        <div className="fixed top-1/2 left-1/2 bg-red-300 w-96 h-96">fuck</div>
      )
    }
    else{
      <div className="hidden"></div>
    }
  }
}





export default Login