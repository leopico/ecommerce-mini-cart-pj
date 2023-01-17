import React from "react";

const Card = (props) => {
  // console.log(props);
  var grandTotalPrice = 0;
  const renderReduce = (product) => {
    //this data is come form props.cart => (d)
    //prevState is js keyword function
    props.setCart((prevState) =>
      prevState.map((d) => {
        if (d.qty <= 0) {
          return d;
        }
        if (d.id === product.id) {
          var updateQty = d.qty - 1;
          return { ...d, qty: updateQty };
        }
        return d;
      })
    );
  };
  const renderAdd = (product) => {
    //this data is come form props.cart => (d)
    props.setCart((prevState) =>
      prevState.map((d) => {
        if (d.id === product.id) {
          var updateQty = d.qty + 1;
          return { ...d, qty: updateQty };
        }
        return d;
      })
    );
  };
  return (
    <div className="container col-12">
      <div className="container-fluid pr-5 pl-5 mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Total Qty</th>
              <th scope="col">Total Price</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {props.cart.map((d) => {
              grandTotalPrice += d.qty * d.price;
              return (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.price} ks</td>
                  <td>{d.qty}</td>
                  <td>{d.price * d.qty}</td>
                  <td>
                    <span
                      onClick={() => renderReduce(d)}
                      className="btn btn-danger mr-2"
                    >
                      -
                    </span>
                    <span
                      onClick={() => renderAdd(d)}
                      className="btn btn-danger"
                    >
                      +
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div class="d-flex flex-row-reverse">
          {/* grand total price*/}
          <h4 class="p-2">{grandTotalPrice} ks</h4>
          <h4 class="p-2">Grand Total Price :</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
