import logo from "./logo.svg";
// import "./App.css";
// import "./component/food.css";
import "./component/Home.css";
import Home from "./component/Home";
// import "../node_modules/src/iconv-lite"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import Food from "./component/Food";
import "bootstrap/dist/css/bootstrap.min.css";
import Propse from "./component/Propse";
import PropsCdmi from "./PropsCdmi";
import Imagemul from "./component/Imagemul";
// import File from "./component/File";
// import Mui from "./component/Mui";
const name =
  [
    {"img":"slider1.jpg","name":"Multimedia Course","dec":"This is a very best"},
    {"img":"slider2.jpg","name":"UI/UX Design","dec":"This is a very best"},
    {"img":"slider3.jpg","name":"Programming IT","dec":"This is a very best"},
    
  ]


function App() {
  // const names = ["Swati", "Vaishali", "Rutvik", "Jay", "Khushi", "Nemisha"];
  // const rno = ["10", "20", "30", "40", "50", "60"];
  // const data =
  // [
  //   {"name":"swati","lastname":"jogani","email":"swatijogani2002@gmail.com","age":20},
  //   {"name":"vaishali","lastname":"pansuriya","email":"vaishupansuriya2002@gmail.com","age":25},
  //   {"name":"khusi","lastname":"Bhimani","email":"khushibhimani2002@gmail.com","age":23},
  //   {"name":"dimple","lastname":"panchal","email":"dimpu2002@gmail.com","age":19},
  //   {"name":"nemisha","lastname":"Antala","email":"nemishaantala2002@gmail.com","age":22},
  //   {"name":"amisha","lastname":"Kalathiya","email":"amuKalathiya2002@gmail.com","age":21},

  // ]
  // const img ="./img/bg_1.jpg";
  
  return (
    <>
      {/* <File/> */}
      {/* <Food/> */}
      {/* <Mui/> */}
      {/* <PropsCdmi/> */}
      {/* constactor website */}
      {/* <Home/> */}
      {/* <Propse name="swati" email="swatijogani2002@gmail.com" /> */}
      {/* <ul>
        {names.map((name, i) => {
          return (
            <li>
              {i} - {name}
            </li>
          );
        })}
        {rno.map((r, i) => {
          return (
            <li>
              {i} - {r}
            </li>
          );
        })}
      </ul>
      {data.map((item) => 
      {
        return(
        <Propse name={item.name} lastname={item.lastname} email={item.email} age={item.age} />
        )
      })} */}
      {name.map((item) =>
      {
        return(
        <PropsCdmi img={item.img} name={item.name} dec={item.dec}/> )
      }
      )}
      {/* <Imagemul list_arr = {list_arr} /> */}
    </>
  );
}

export default App;
