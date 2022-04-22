import React, { useEffects, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useMatch, useParams } from 'react-router-dom';

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  useEffects(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }
  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id === productId) || null;
  return product;
}
/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST
// function ProductScreen({ match }) {
//   const product = products.find((p) => p._id == match.params.id)
//   return (
//       <div>
//           {product.name}
//       </div>
//   )
// }
// function ProductScreen() {
//   const { id } = useParams();
//   const product = products.find((p) => p._id === Number(id));
//   return (
//     <div>
//       {product.name}
//     </div>
//   );
// }
/////TEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST/////TEEEEST


// function MapStateToProps(state) {
//   const { id }= useParams();
//   const productId = id;
//   const product =
//     productId && state.productListReducer.length > 0
//       ? getProductById(state.productListReducer, productId)
//       : {};
//   return {
//     product,
//     products: state.productListReducer,
//     categories: state.categoryListReducer,
//   };
// }


///////TRIAL
const withMatch = Component => props => {
  const match = useMatch("/*");
  return <Component {...props} match={match} />;
};
///////TRIAL

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////ORG
function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}
/////////ORG

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps, withMatch)(AddOrUpdateProduct);
// export default connect(mapStateToProps, mapDispatchToProps, withMatch)(AddOrUpdateProduct);

