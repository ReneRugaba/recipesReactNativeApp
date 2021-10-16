import { TOGGLE_TASK, ADD_TASK, DELETE_TASK } from './../action/index';



const initSate =[{id:1,title:"première tâche",isCompleted:false}]

export const tasksList = (state=initSate,action)=>{
    switch(action.type){
        // do something
        case ADD_TASK:
            return [
                ...state,
                {
                    id:state.length + 1,
                    title:action.payload.title,
                    isCompleted:false
                }
            ]
        case TOGGLE_TASK:
            return state.map(t=>{
                if(t.id===action.payload.id){
                    t.isCompleted=!t.isCompleted
                }
                return t
            })
        case DELETE_TASK:
            return state.filter(t=>t.id!==action.payload.id)
            
        default:
            return state
    }
}