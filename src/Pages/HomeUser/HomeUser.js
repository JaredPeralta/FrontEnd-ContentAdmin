import React from 'react'
import NavBar from '../../Components/Nav/NavBar';
import { useState } from 'react'
import './HomeUser.css'
//import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardsHome  from '../../Components/Cards/CardsHome/CardsHome';


const HomeUser = (props) => {

  // const [file, setFile] = useState(null)

  // const selectedHandler = e => {
  //   setFile(e.target.files[0])
  // }

  // const sendHandler = () => {
  //   if(!file){
  //     alert('Seleccona una imagen')
  //     return
  //   }
  // }
  
//   const children = imagenes.map((val) => (
//     React.createElement("img", {id: val["id"], src: val["url"]}),
//     React.createElement("button", {id: val["id"], onClick: () => {console.log(val["id"])}}, "Click")
// ));


return (
  <>
  <div className='home'>
    <NavBar />
    <div>
      <h1 className='title'>Home</h1>
      <p className='text'>
      lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <CardsHome loading={props.loading} data={props.data}/>
    </div>
  </div>
  </>
)

















//   return (
//     <>
//     {/* <div className='home'>
//       <NavBar />
//       <div>
//         <h1 className='title'>Home</h1> */}
//         {/* <div className="container mt-5for">
//           <div className="card p-3">
//           <div className="row">
//               <div className="col-10">
//                 <input id="fileinput"  className="form-control" type="file"/>
//               </div>
//               <div className="col-2">
//                 <button  type="button" className="btn btn-primary col-12">Subir</button>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-10">
//                 <input id="fileinput" onChange={selectedHandler} className="form-control" type="file"/>
//               </div>
//               <div className="col-2">
//                 <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Subir</button>
//               </div>
//             </div>
//           </div>
//         </div>   */}

//         <br/>

//       <Row xs={1} md={3} className="g-4">
//         {Array.from({ length: 3 }).map((_, idx) => (
//           <Col>
//             <Card>
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a longer card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>


        
//         {/* { imagenes.map((val) => (
//             <>
//             <div className="container mt-5for">
//               <div className="card p-3">
//                 <div className="row">
//                   <div className="col-10">
//                     <img id={val["id"]} src={val["url"]} className="img-fluid" alt="Responsive image" />
//                   </div>
//                   <div className="col-2">
//                     <button id={val["id"]} onClick={() => {console.log(val["id"])}} type="button" className="btn btn-primary col-12">Borrar</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </>
//         ))} */}
//       {/* </div>
//     </div> */}
// </>
//   )
}

export default HomeUser;