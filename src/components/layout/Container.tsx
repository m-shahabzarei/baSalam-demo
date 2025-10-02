type TCont = {
    children: React.ReactNode;
}


function Container({children}:TCont) {
  return (
    <div className="w-11/12 p-0 m-0 container">
        {children}
    </div>
  )
}

export default Container