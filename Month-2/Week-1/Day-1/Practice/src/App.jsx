import "./App.css";
import Card from "./Card";
import Home from "./Home";
import Service from "./Service";

function App() {
  return (
    <>
      Hello
      {/* component calling */}
      <Home name={"subhankar"} isPassed={true} />
      <Service obj={{ email: "hello@gmail.com", password: "hello@123" }}>
        <h1>Hello this is H1 tag</h1>
        <b>this is the bold tag</b>
      </Service>
      <div className="w-[1200px] p-2 m-auto grid grid-cols-3">
        <Card cardData={{img:"https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",title:"Cat Card",desc:"this is a beautifull cat"}}/>
        <Card cardData={{img:"https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",title:"Cat Card",desc:"this is a beautifull cat"}}/>
        <Card cardData={{img:"https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",title:"Cat Card",desc:"this is a beautifull cat"}}/>
        <Card cardData={{img:"https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",title:"Cat Card",desc:"this is a beautifull cat"}}/>
        <Card cardData={{img:"https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",title:"Cat Card",desc:"this is a beautifull cat"}}/>
      </div>
    </>
  );
}

export default App;
