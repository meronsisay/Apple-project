import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../commonresource/css/bootstrap.css";

export default function Iphone() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/select")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(() => console.log("unable to fetch"));
  }, []);
  //console.log(product);
  return (
    <>
      <section className="container">
        <div className="row">
          <h1 className="mx-auto font-weight-bold mt-5 pt-3">iPhones</h1>
          {product?.map((singleProduct, i) => {
            return (
              <div key={singleProduct.product_id} className="d-md-flex mt-5">
                <div
                  className={`text-center col-sm-12 col-md-6 order-${
                    i % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <img src={singleProduct.product_img} alt="products" />
                </div>
                <div
                  className={`text-center col-sm-12 col-md-6 order-${
                    i % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="font-weight-bold">
                    {singleProduct.product_name}
                  </div>
                  <div>{singleProduct.product_brief_description}</div>
                  <div>{singleProduct.product_description}</div>
                  <div>`Starting Price ${singleProduct.starting_price}`</div>
                  <div>{singleProduct.price_range}</div>
                  <div>
                    <ul className="list-unstyled">
                      <li className="font-weight-bold">
                        <Link to={`/iphone/${singleProduct.product_url}`}>
                          Learn More
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
