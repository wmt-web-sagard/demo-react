import {useState} from 'react'
import './App.css';
import FormFilter from './Component/FormFilter';
import Table from './Component/Table';

function App() {

  const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

  const [search,setSeach]=useState('');
  const [isStock,setIsStock] =useState(false)

  const formatedFruit = []
  const formatedVegetable = []
  
  data.forEach((fru)=>{

    if(!fru.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())){
      return ;
    }
    if(!fru.stocked && isStock){
      return ;
    }

    if(fru.category ==='Fruits'){
      formatedFruit.push(
        <tr className={`text-${!fru.stocked?'danger':'success'}`} key={fru.name}>
          <td>{fru.name}</td>
          <td>{fru.price}</td>
        </tr>
      )
    }else if(fru.category ==='Vegetables'){
      formatedVegetable.push(
        <tr className={`text-${!fru.stocked?'danger':'success'}`} key={fru.name}>
          <td>{fru.name}</td>
          <td>{fru.price}</td>
        </tr>
      )
    }
  })

  
 

  const handleChange = (e)=>{
    const {value,checked} = e.target
    setSeach(value)
   
    
  }
  const handleCheck = (e)=>{
    const {value,checked} = e.target
    
    setIsStock(checked);
  }
 
  return (
    <div className="App">

    <FormFilter  handleChange={handleChange} handleCheck={handleCheck} search={search} isStock={isStock}  />
   
     <Table  formatedFruit={formatedFruit} formatedVegetable={formatedVegetable} />
       
    </div>
  );
}

export default App;
