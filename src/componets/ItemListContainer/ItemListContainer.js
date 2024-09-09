
import './ItemListContainer.css'; 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../AsyncMock.js'; 
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (id) {
                    
                    const products = await getProductsByCategory(id);
                    setProducts(products);
                } else {
                    
                    const products = await getProducts();
                    setProducts(products);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [id]);

    return (
        <div className="ItemListContainer">
            <h1>Catálogo</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;








