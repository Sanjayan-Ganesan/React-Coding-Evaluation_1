import React from "react";
//import { Tasks } from "../Tasks";
import styles from "./addTask.module.css";

const AddTask = () => {
  const[query,setvalue] = React.useState("");
  const[task,settask] = React.useState([]);
  const[count,setCount]=React.useState(1)
  const[checked,setChecked]=React.useState(false)

  
  
  const handlechange = (e)=>{
    //const{value} = e.target
    setvalue(e.target.value);
    //console.log(e.target.value);
        };
  
        const handleclick = ()=>{
          const  payload = {
               title:query,
               
               id:Math.random() * (25 - 0) + 0,
       };

      

       
       
       
       
       
       let new_Task = [payload,...task];
       
       settask(new_Task);
      
       };
       console.log(task);
       
       
       const delete_to_do = (index)=>{
           var new_list = task;
           new_list.splice(index,1);
           settask([...new_list])
  
          
       }

       const handleIncrement=()=>{
         let counter_i=count+1;
         setCount(counter_i)
       }

       const handleDecrement=()=>{
         let counter_d=count-1;
         setCount(counter_d)
       }

       const handleCheck = (event) =>{
         setChecked(true)

       }
       
       
        
  
    return (
      <div className={styles.todoForm}>
        
       <div id="input_box">
  <input value={query} className={styles.input_1}  onChange={handlechange}  placeholder='Write Something'/>
  <button id={styles.input_button} onClick={handleclick}>Add</button>
       </div>
  
       
           <div id={styles.display}>
       {task.map((item,index) => {
         
   return (
      <div key={item.id}>
          <div id={styles.boxes}>
            <input type="checkbox" name={"checkbox"}  value={checked.checkbox} onChange={handleCheck} id={styles.radio}></input>
          <h3>{item.title} style{(checked.checkbox===true?'line-through':'')}</h3>
          <div>
            <button onClick={handleIncrement}>+</button>
            <input value={count} id={styles.input_3} />
            <button onClick={handleDecrement}>-</button>
          </div>
          <button id={styles.button_2} onClick={()=>delete_to_do(index)}>X</button>
          </div>
      </div>
  )
              })} 
              </div>
      
        
      </div>
    
  );

};

export default AddTask;
