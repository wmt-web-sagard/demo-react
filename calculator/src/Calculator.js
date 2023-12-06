import {useState} from 'react'
export default function Calculator() { 

    let [data,setData] = useState({num1: "", num2: "",op:"",ans:""});
    
    const handleAppend = (value)=>{
        
        setData((pre)=>{
           return{ ...pre,num1:pre.num1+value}
        })
    }

    const handleClear = ()=>{
        setData((pre)=>{
            return {...pre,num1:"",num2:"",op:"",ans:""}
        })
    }

    const handleOperator = async(value)=>{
        data.num2=await data.num1;
        data.num1="";
        setData((pre)=>{
            return{ ...pre,op:value}
         })
      
    }

    const handleAns = ()=>{
        let {num1,num2,ans}=data;
        switch(data.op){
            case "+":
                ans=Number(num1)+Number(num2);
                
            break;
            case "-":
                ans=Number(num2)-Number(num1);
            break;
            case "*":
                ans=Number(num1)*Number(num2);
            break;
            case "/":
                ans=Number(num2)/Number(num1);
            break;
        }
        setData((pre)=>{
            return {...pre,num1:String(ans),num2:"",op:""}
        })
    }

    const handleBackSpace = ()=>{
        setData((pre)=>{
            return {...pre,num1:data.num1.slice(0,-1)}
        })
    }

    const toggleState = ()=>{
        setData((pre)=>{
            return {...pre
            ,num1:(Number(data.num1)) < 0 ? data.num1:'-'+data.num1}
        })
    }


    return (
        <div className="container mt-5 text-center">
            <div className="row">
                <div className="col p-0 m-1">
                <input type='text' className='form-control bg-dark text-white text-end' value={data.num1} name='num' /> 
                </div>
            </div>
            <div className="row ">
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleClear()}}>AC</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{toggleState()}}>+/-</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleOperator("/")}}>/</div>
                <div className="col m-1 btn btn-warning" onClick={()=>{handleBackSpace()}}>{"<"} </div>
            </div>
            <div className="row">
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("7")}} >7</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("8")}} >8</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("9")}} >9</div>
                <div className="col m-1 btn btn-warning" onClick={()=>{handleOperator("*")}}>*</div>
            </div>

            <div className="row">
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("4")}} >4</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("5")}} >5</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("6")}} >6</div>
                <div className="col m-1 btn btn-warning" onClick={()=>{handleOperator("-")}}>-</div>
            </div>

            <div className="row">
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("1")}}>1</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("2")}}>2</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend("3")}}>3</div>
                <div className="col m-1 btn btn-warning" onClick={()=>{handleOperator("+")}}>+</div>
            </div>

            <div className="row ">
                <div className="col-6  m-1 btn btn-secondary" onClick={()=>{handleAppend("0")}}>0</div>
                <div className="col m-1 btn btn-secondary" onClick={()=>{handleAppend(".")}}>.</div>
                <div className="col m-1 btn btn-warning" onClick={()=>{ handleAns()}}>=</div>
            </div>
        </div>
    )
 }