import React,{useState} from "react"

//step 1- kya represent krna hai woh kro , app k return mein
//step -2 - jo represent krna hai usse ek functional component mein daalo
// special note => each elm pr loop krna hoga toh aapko usko const todo={'',''} dena hoga 
// step 3 - bt server se aane waali cheez json format mein rehti , usse kaise banaye 

//step  4 => checkbox add krna hai , bt bro yaha (checked-unchecked) waali condition rahegi na , mtlb state change hoo rahi
//             usestate , ka use krna hoga    

//2->functional component wali approach
/* const Todo=()=>{
    return(
    < div className="Bokya">
    <h1>Breakfast</h1>
    <h1>Brunch</h1>
    <h1>Lunch</h1>
    <h1>Dinner</h1>  
    </div>
    )
    
}


//special note
const todolist =["Breakfast",'Brunch','Lunch','Snack','Dinner'];
//want to represent this in form of list toh kaise krna bro

*/

//assume kr its fetch from server
/*const list=[
    { "id": 1, "task": "Breakfast" },
    { "id": 2, "task": "Brunch" },
    { "id": 3, "task": "Lunch" },
    { "id": 4, "task": "Dinner" }
]
*/

const NavBar = () => {
    return (
      <nav style={navStyle}>
        <div className="nav-container" style={containerStyle}>
          <h1 className="nav-title">kshitij TODO</h1>
      
        </div>
      </nav>
    );
  };
  
  const navStyle = {
    background: '#f44',
    color: '#fff',
    padding: '10px 0',
  };
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 20px',
  };
  

const App=()=>{
    //react state
    const [list,setList]=useState([
        { id: 1, task: "Breakfast", checked: true },
        { id: 2, task: "Brunch", checked: false },
        { id: 3, task: "Lunch", checked: false },
        { id: 4, task: "Dinner", checked: false }
    ])

   //after clicking kya hona chahiye
    const handleClick=(id)=>{
        //  new array banao  with updated checked status
        const updatedList = list.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });

        // Update the state , prev waale ko update with checked state
        setList(updatedList);

    }
        
    return(
        
         <div>
     {/*<Todo/>;
             <ul>
            {todolist.map((item,key)=>(
                <li key={key}>{item}</li>
            ))}
            </ul>
 */}     

    {/* current hum soch rahe ki , checked/unchecked hona chahiye but elm , pr click kr k
     , but note that css dena hoga nhi toh pta nhi chalega , aur agr hume elm ki jgah button 
     chahiye toh button create kr k uspr , waha se handleclick call krna hoga  */}  

             <NavBar/>   
             <h1>TODO_LIST</h1>
             
             
             <ol>
                {list.map((item,id)=>(
                    <li id={item.id}>

                        <div style={{
                        color: item.checked ? "green" : "blue"                                                         
                         } } 
                         >{/* yaha tha humara onclick pehle */}
                             {item.task}
                        </div>
                        <button onClick={()=>handleClick(item.id)}>Check</button>
                        
                    </li>
                ))}
             </ol>
         </div>
      
         
       
        
       
    );
}

export default App;