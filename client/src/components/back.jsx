import Router from 'next/router'

const BackButton = () => (
   <i style={{marginLeft: "10px",marginTop: "30px"}} class="fa-solid fa-arrow-left fa-lg" onClick={() => Router.back()}> </i>
)

export default BackButton; 