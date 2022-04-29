 //con este ya hacemos un componente un poco más completo que puede mostrar todos los datos o elemenos de la variable
  //'Profesores' y ya con eso podemos dar por concluido que los datos si puedan mostrarse. 
  const ListItem = ({item}) => {
    return (
      <ol>
     <div>{item.name}</div>
      <div>{item.phone}</div>    
      <div>{item.adress}</div>
      <hr/>
      </ol>
    )
  }

export default ListItem;   