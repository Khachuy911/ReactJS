// memo used to remember a component and decision "Do need re-render a children component ?"
// it will dependence in props to decision 
// if parent component re-render and children component use memo. if the props at children not affect => children not re-render

export function Content (){
    return (
        <div>
            <h1>Hello Family</h1>        
        </div>
    )
}

// export default memo(ContentNew);


function ContentNew({person}){
    return (
        <div>
            <h1>Hello Family {person}</h1>
        </div>
    )
}

// export default memo(ContentNew);

export function App(){
    const [person, setPerson] = useState(5);

    const handleOnclickBtn = () =>{
        setPerson(pre => pre + 1);
    }
    return (
        <div>
            // if App component re-render it not re-render
            <Content/>

            // if App component re-render it re-render, because person state changes
            <ContentNew person={person}/>
            
            <button onClick={handleOnclickBtn}>Click here !</button>
        </div>
    )
}