type TCont = {
    children: React.ReactNode;
}


function Container({children}:TCont) {
  return (
    <div className="max-md:w-9/12 w-11/12 p-0 m-0 container">
        {children}
    </div>
  )
}

export default Container