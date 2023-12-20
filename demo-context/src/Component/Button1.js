import { useContext } from "react"
import { Theme } from "../App"

export default function Button1(){
    return (
        <div >
            <Theme.Consumer>
                {
                    ({hello,id,name})=>{
                        console.log(hello,id,name)
                    }
                }
            </Theme.Consumer>
            
        </div>
    )
} 