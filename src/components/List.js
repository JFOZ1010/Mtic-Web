//Aca podemos crear un par de componentes para poder mostrar la info que tenemos más arriba. 

import ListItem from "./ListItem";
//importando la librería de listItem lo que estoy logrando es que mi codigo sea cada vez más modular. 

const List = ({list}) => {
    return (
      <ul>
        {list.map(item => (
  
          <ListItem item={item}/>
  
        ))}
      </ul>
    )
  }

export default List;   