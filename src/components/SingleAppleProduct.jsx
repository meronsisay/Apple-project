import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Four04 from "./Four04";
import "../commonresource/css/bootstrap.css";

export default function SingleAppleProduct() {
  const { productID } = useParams();
  console.log(useParams());
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/select")
      .then((res) => res.json())
      .then((data) => {
        let single = data.products.filter(
          (singleData) => singleData.product_url === productID
        );
        setProduct(() => single);
      })
      .catch(() => console.log("Error: unable to fetch"));
  }, [productID]);
  console.log(product);
  if (product.length) {
    return (
      <>
        <div>
          {product?.map((singleProduct) => {
            return (
              <div
                key={singleProduct.product_id}
                className="d-md-flex mt-5 pt-3"
              >
                <div className="col-sm-12 col-md-6">
                  <img
                    src={singleProduct.product_img}
                    alt="products"
                    className="w-75"
                  />
                </div>
                <div className="col-sm-12 com-md-6 dic">
                  <div className="font-weight-bold">
                    {singleProduct.product_name}
                  </div>
                  <div>{singleProduct.product_brief_description}</div>
                  <div className="w-50">
                    {singleProduct.product_description}
                  </div>
                  <div>{`Starting Price $${singleProduct.starting_price}`}</div>
                  <div>{singleProduct.price_range}</div>
                  <div>
                    <ul className="list-unstyled">
                      <li>
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
      </>
    );
  } else {
    return <Four04 />;
  }
}
