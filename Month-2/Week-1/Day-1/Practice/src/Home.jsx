function Home(props){
    return (
        <div>
            THis is the Home page
            <br />
            Name :{props.name}
            <br />

            isPassed :{props.isPassed + ""}
        </div>
    )
}

export default Home;