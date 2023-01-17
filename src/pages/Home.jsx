import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { products } from "../data";

const Home = (props) => {
  // console.log(props);
  const [loader, setLoader] = useState(true);
  // console.log(products);

  useEffect(() => {
    setLoader(false);
  }, []);

  const renderCart = (product) => {
    // alert(product.title);

    var findProduct = props.cart.find((d) => {
      return d.id === product.id;
    });
    // console.log(findProduct);
    if (findProduct) {
      findProduct.qty += 1;
    } else {
      product.qty = 1;
      props.setCart([...props.cart, product]); //this method is pushing to card
    }
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="container-fluid pr-5 pl-5 mt-3 ">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {products.map((d) => {
                  return (
                    <div key={d.id} className="col-3 mb-2">
                      <div className="card">
                        <img src={d.url} className="card-img-top" alt="..." />
                        <div className="card-body bg-white">
                          <h4>{d.title}</h4>
                          <div>
                            Price:
                            <span className="badge badge-danger">
                              {d.price} ks
                            </span>
                            <button
                              onClick={() => {
                                renderCart(d);
                              }}
                              className="btn btn-danger float-right"
                            >
                              <i className="fas fa-shopping-cart "></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
