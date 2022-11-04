import App from './App';

function Pokemon({name, image, type}) {
  return (
    
   <tr>
  <td>
    <p>{name}</p>
  </td>
  <td>
    <p><img src={image} /></p>
  </td>
  <td>
    <p>{type}</p>
  </td>
</tr>
  );
};

export default Pokemon;