import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from './features/apiThunkSlice';



function ApiCall() {
    const dispatch = useDispatch()
  
    
    const contents = useSelector((state) => state.content.contents)
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
  
    useEffect(() => {
        dispatch(fetchContent())
        
      }, [dispatch])

    if (isLoading) {
      return 'loading...'
    }
    console.log(contents.length);
    if (error) {
      return error
    }
  
    return (
          
      <div className='grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4'>
        {contents.map((content) => (
<div key={content.id}>
            <img
              src={`${content.thumbnailUrl}`}
              alt={`${content.title}`}
              className='w-full h-full rounded'
            />
            </div>
        ))}
      </div>
          
          
    )
  }
  
  export default ApiCall