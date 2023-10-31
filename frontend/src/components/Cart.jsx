import { useMemo, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider';
import { formattedPrice } from '../utils/helpers';

const Cart = () => {
    const { cart, setCart, toggleProduct } = useCartContext();
    const navigate = useNavigate();

    const totalCart = useMemo(() => {
        const finalValue = cart.reduce((acc, item) => {
            return item.price + acc;
        }, 0);

        return formattedPrice(finalValue);
    }, [cart]);

    const handlePay = () => {
        const confirmPay = confirm(`¿Estás seguro que quieres pagar el total de ${totalCart}?`);

        if( confirmPay ){
            alert('Pagado');
            setCart([]);
        }
    }

    return (
        <div className="container border my-5 w-50 py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto w-100">
            <h2>Carro</h2>

            <div className="d-flex flex-column">
                { cart.length ? 
                    <div>
                        { cart.map((item, i) =>
                        <Fragment key={i}>
                            <div className="row mb-3 text-start">
                                <div className="col-12 col-sm-6">
                                    <div className="d-flex gap-3">
                                        <div
                                            className="d-block rounded overflow-hidden"
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                flex: '0 0 100px',
                                            }}
                                        >
                                            <img
                                                src={`/img/menu/${item.image}`}
                                                alt={item.image}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h3 className="fs-5 mb-1">{ item.name }</h3>
                                            <div className="text-wrap" style={{ width: '80%' }}>
                                                <p className="fs-6 lh-sm m-0">{ item.ingredients.join(",") }</p>
                                            </div>
                                            <p className="mt-2">{ formattedPrice(item.price) }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 d-flex flex-column gap-2">
                                    <p>Cantidad: { item.qty }</p>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => toggleProduct(item)}
                                            className="btn btn-secondary"
                                        >
                                            Eliminar del carro
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </Fragment>
                        )}
                        <p>Total: { totalCart }</p>
                        
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handlePay}>
                                Pagar
                            </button>
                        </div>
                    </div>
                :                         
                    <h4 className='fs-5 mt-4'>Tu carrito esta vacío 😢</h4>
                }
            </div>
        </div>
    )
}

export default Cart;