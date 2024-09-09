

import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProductsByid } from '../AsyncMock'; 
import ItemDetail from '../ItemDetail/ItemDetail'; 
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        getProductsByid(id)
            .then(response => setProduct(response))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;





