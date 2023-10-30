import React from "react";
import { useCartContext } from '../context/CartProvider';
import { formattedPrice } from '../utils/helpers';
import { BsBagPlus } from 'react-icons/bs'; 

const ProductImage = ({ image, name }) => {
  return (
    <figure className="m-0" style={{ height: "260px" }}>
      <img
        src={`/img/menu/${image}`}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </figure>
  );
};

export const ProductCard = (props) => {
  const { id, name, price, quantity, ingredients, image } = props;
  const elementId = `modal__${id}`;

  const { checkProduct, toggleProduct } = useCartContext();

  return (
    <>
        <div>
            <div
                data-bs-toggle="modal"
                data-bs-target={`#${elementId}`}
                className="cpointer"
            >
                <ProductImage {...{ image, name }} className="card-img-top" />
            </div>
            <div className="card-body">
                <h3 className="fs-5">{name}</h3>
                <div className="card-footer d-flex justify-content-between bg-white">
                    <p className="card-text m-0">{formattedPrice(price)}</p>

                    <button className="border-0 bg-white d-flex align-items-center gap-1" onClick={() => toggleProduct(props)}>
                        <BsBagPlus className="fs-4" />
                        { !checkProduct(name) ? 'Agregar' : 'Eliminar' }
                    </button>
                </div>
            </div>
        </div>

      <div
        className="modal fade"
        id={elementId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <ProductImage {...{ image, name }} />
              <p className="mt-3">{ingredients.join(",")}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button className="border-0 bg-white d-flex align-items-center gap-1" onClick={() => toggleProduct(props)}>
                  <BsBagPlus className="fs-4" />
                  { !checkProduct(name) ? 'Agregar' : 'Eliminar' }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
