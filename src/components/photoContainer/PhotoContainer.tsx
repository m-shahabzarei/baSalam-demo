import Container from "../layout/Container";

type T = {
    img : string
}

function PhotoContainer({img} : T) {
  return (
    <Container>
        <img src={img} className="w-full mt-8 cursor-pointer"/>
    </Container>
  )
}

export default PhotoContainer;