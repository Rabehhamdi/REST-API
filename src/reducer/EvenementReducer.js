let tab = [
    { 
        nom: "nomeeeeeeeeeee 1",
        description: "description 1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsiS-iWRJZWGA36CLJg7Q6ePV10D5qXQORgll-9DHqkGI2JoP"
    },
    {
        nom: "nombgbbbbhhh 2",
        description: "description 2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsiS-iWRJZWGA36CLJg7Q6ePV10D5qXQORgll-9DHqkGI2JoP"
    },
    {  
        nom: "nomjjjjjjjjiikik 3",
        description: "description 3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsiS-iWRJZWGA36CLJg7Q6ePV10D5qXQORgll-9DHqkGI2JoP"
    }
]

const EvenementReducer=(state=tab,action)=>{
    switch(action.type){
        case "AFFICHAGE":
            return  {state:action.tab}
        case "AJOUTE": 
            return state.concat(action.el) 
        case "MODIFICATION":  
            return state.map((el,index)=>{
                if(el.id === action.element.id){
                    return action.el
                }
                return el
            })
        case "SUPPRIMER" :
            return ( state.filter((el,index)=>{return (el.id == action.id)} )) 
        case 'UPDATE':
        return (
            tab=action.update
            
        )    
        default :
            return state
    }
}
export default EvenementReducer;