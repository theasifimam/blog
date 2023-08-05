// import { useFormik } from "formik";
// import React from "react";
// import Switch from "../../components/common/UI/Switch";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addCouponAction } from "../../redux/slice/coupon/addCouponSlice";
// import { getToken, inputDate } from "../../utils/utils";
// import { useEffect } from "react";
// import { useState } from "react";
// import { getSingleCategoryAction } from "../../redux/slice/category/getSingleCategorySlice";
// import { getOrderByIdAction } from "../../redux/slice/orders/getOrderByIdSlice";
// import { orderStatusAction } from "../../redux/slice/orders/orderStatusSlice";
// import ProductInfo from "../../components/common/UI/ProductInfo";

// // Coupon
// const UpdateOrder = () => {
//   const [redirectFlag, setRedirectFlag] = useState(false);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const {
//     getOrderById: { order },
//     orderStatus,
//   } = useSelector((state) => state);
//   const navigate = useNavigate();

//   const token = getToken();

//   useEffect(() => {
//     redirectFlag && orderStatus.success && navigate("/orders/view");
//   }, [orderStatus.success]);

//   useEffect(() => {
//     dispatch(getSingleCategoryAction({ id, token }));
//     dispatch(getOrderByIdAction({ id, token }));
//   }, []);

//   const { values, handleChange, handleSubmit } = useFormik({
//     initialValues: order,
//     enableReinitialize: true,
//     // validationSchema: couponSchema,
//     onSubmit: (values, action) => {
//       dispatch(
//         orderStatusAction({
//           values: { orderId: values.orderId, status: values.status },
//           token,
//         })
//       );
//       setRedirectFlag(true);
//     },
//   });

//   return (
//     <div className="addUserPage">
//       <div className="card">
//         <div className="top"></div>
//         <div className="bottom">
//           <h3>Update Order</h3>
//           <form onSubmit={handleSubmit}>
//             {/ status /}
//             <div className="inputField">
//               <label htmlFor="status">
//                 Order Status<span>*</span>
//               </label>
//               <select
//                 type="text"
//                 name="status"
//                 id="status"
//                 tabIndex="1"
//                 placeholder=""
//                 value={values.status}
//                 onChange={handleChange}
//               >
//                 <option>Select Status</option>
//                 <option value="1">Draft</option>
//                 <option value="2">Pending</option>
//                 <option value="3">Payment Failed</option>
//                 <option value="4">Cancel</option>
//                 <option value="5">RTO</option>
//                 <option value="6">Completed</option>
//                 <option value="7">Shipped</option>
//               </select>
//             </div>

//             {/ userEmail /}
//             <div className="inputField">
//               <label htmlFor="userEmail">userEmail</label>
//               <input
//                 type="text"
//                 placeholder="userEmail"
//                 value={values.userEmail}
//                 disabled
//               />
//             </div>

//             {/ couponCode /}
//             <div className="inputField">
//               <label htmlFor="couponCode">Coupon Code</label>
//               <input
//                 type="text"
//                 placeholder="Coupon Code"
//                 value={values.couponCode}
//                 disabled
//               />
//             </div>

//             {/ couponPrice /}
//             <div className="inputField">
//               <label htmlFor="couponPrice">Coupon Price</label>
//               <input
//                 type="text"
//                 placeholder="Coupon Code"
//                 value={values.couponPrice || 0}
//                 disabled
//               />
//             </div>

//             {/ grandTotal /}
//             <div className="inputField">
//               <label htmlFor="grandTotal">Grand Total</label>
//               <input
//                 type="text"
//                 placeholder="Grand Total"
//                 value={values.grandTotal}
//                 disabled
//               />
//             </div>

//             {/ orderId /}
//             <div className="inputField">
//               <label htmlFor="orderId">Order ID</label>
//               <input
//                 type="text"
//                 placeholder="Order ID"
//                 value={values.orderId}
//                 disabled
//               />
//             </div>

//             {/ shippingPrice /}
//             <div className="inputField">
//               <label htmlFor="shippingPrice">Shipping Price</label>
//               <input
//                 type="text"
//                 placeholder="Shipping Price"
//                 value={values.shippingPrice}
//                 disabled
//               />
//             </div>

//             {/ taxPrice /}
//             <div className="inputField">
//               <label htmlFor="taxPrice">Tax Price</label>
//               <input
//                 type="text"
//                 placeholder="Tax Price"
//                 value={values.taxPrice}
//                 disabled
//               />
//             </div>

//             {/ totalPayedPrice /}
//             <div className="inputField">
//               <label htmlFor="Total Paid Price">Total Paid Price</label>
//               <input
//                 type="text"
//                 placeholder="Total Paid Price"
//                 value={values.totalPayedPrice}
//                 disabled
//               />
//             </div>

//             {/ updatedAt /}
//             <div className="inputField">
//               <label htmlFor="updatedAt">Updated At</label>
//               <input
//                 type="text"
//                 placeholder="Updated At"
//                 value={inputDate(values.updatedAt)}
//                 disabled
//               />
//             </div>

//             {values?.skm_product_order_details?.map((product, index) => {
//               return (
//                 <>
//                   <h4
//                     className="fullInputField"
//                     style={{
//                       marginTop: "3rem",
//                       borderBottom: "2px solid #58BD43",
//                     }}
//                   >
//                     {product.productName}
//                   </h4>
//                   <ProductInfo {...product} index={index} />
//                 </>
//               );
//             })}

//             <div className="btns">
//               <button type="submit" className="submit">
//                 Submit
//               </button>
//               <Link to="/orders/view">
//                 <button type="button" className="back">
//                   Back
//                 </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateOrder;

import { useFormik, useFormikContext } from "formik";
import React from "react";
import Switch from "../../components/common/UI/Switch";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCouponAction } from "../../redux/slice/coupon/addCouponSlice";
import { getToken, inputDate } from "../../utils/utils";
import { useEffect } from "react";
import { useState } from "react";
import { getSingleCategoryAction } from "../../redux/slice/category/getSingleCategorySlice";
import { getOrderByIdAction } from "../../redux/slice/orders/getOrderByIdSlice";
import { orderStatusAction } from "../../redux/slice/orders/orderStatusSlice";
import ProductInfo from "../../components/common/UI/ProductInfo";
import { orderProductStatusAction } from "../../redux/slice/orders/orderProductStatusSlice";

const UpdateOrder = () => {
  const [redirectFlag, setRedirectFlag] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    getOrderById: { order },
    orderStatus,
  } = useSelector((state) => state);
  const navigate = useNavigate();

  const token = getToken();

  useEffect(() => {
    redirectFlag && orderStatus.success && navigate("/orders/view");
  }, [orderStatus.success]);

  useEffect(() => {
    dispatch(getSingleCategoryAction({ id, token }));
    dispatch(getOrderByIdAction({ id, token }));
  }, []);

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: order,
    enableReinitialize: true,
    // validationSchema: couponSchema,
    onSubmit: (values, action) => {
      console.log(values);
      dispatch(
        orderStatusAction({
          values: { orderId: values.orderId, status: values.status },
          token,
        })
      );
      const updatedProducts = values.skm_product_order_details.map(
        (product) => ({
          orderId: product.id,
          status: product.status,
        })
      );

      console.log(updatedProducts);

      dispatch(
        orderProductStatusAction({
          values: { updatedProducts },
          token,
        })
      );
      setRedirectFlag(true);
    },
  });

  // const handleOrderStatus=(id, status)=>{
  //   console.log(id, status);
  // }

  console.log(order);
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>Update Order</h3>
          <form onSubmit={handleSubmit}>
            {/ status /}
            <div className="inputField">
              <label htmlFor="status">
                Order Status<span>*</span>
              </label>
              <select
                type="text"
                name="status"
                id="status"
                tabIndex="1"
                placeholder=""
                value={values.status}
                onChange={handleChange}
              >
                <option>Select Status</option>
                <option value="1">Draft</option>
                <option value="2">Pending</option>
                <option value="3">Payment Failed</option>
                <option value="4">Cancel</option>
                <option value="5">RTO</option>
                <option value="6">Completed</option>
                <option value="7">Shipped</option>
              </select>
            </div>

            {/ userEmail /}
            <div className="inputField">
              <label htmlFor="userEmail">userEmail</label>
              <input
                type="text"
                placeholder="userEmail"
                value={values.userEmail}
                disabled
              />
            </div>

            {/ couponCode /}
            <div className="inputField">
              <label htmlFor="couponCode">Coupon Code</label>
              <input
                type="text"
                placeholder="Coupon Code"
                value={values.couponCode}
                disabled
              />
            </div>

            {/ couponPrice /}
            <div className="inputField">
              <label htmlFor="couponPrice">Coupon Price</label>
              <input
                type="text"
                placeholder="Coupon Code"
                value={values.couponPrice || 0}
                disabled
              />
            </div>

            {/ grandTotal /}
            <div className="inputField">
              <label htmlFor="grandTotal">Grand Total</label>
              <input
                type="text"
                placeholder="Grand Total"
                value={values.grandTotal}
                disabled
              />
            </div>

            {/ orderId /}
            <div className="inputField">
              <label htmlFor="orderId">Order ID</label>
              <input
                type="text"
                placeholder="Order ID"
                value={values.orderId}
                disabled
              />
            </div>

            {/ shippingPrice /}
            <div className="inputField">
              <label htmlFor="shippingPrice">Shipping Price</label>
              <input
                type="text"
                placeholder="Shipping Price"
                value={values.shippingPrice}
                disabled
              />
            </div>

            {/ taxPrice /}
            <div className="inputField">
              <label htmlFor="taxPrice">Tax Price</label>
              <input
                type="text"
                placeholder="Tax Price"
                value={values.taxPrice}
                disabled
              />
            </div>

            {/ totalPayedPrice /}
            <div className="inputField">
              <label htmlFor="Total Paid Price">Total Paid Price</label>
              <input
                type="text"
                placeholder="Total Paid Price"
                value={values.totalPayedPrice}
                disabled
              />
            </div>

            {/ updatedAt /}
            <div className="inputField">
              <label htmlFor="updatedAt">Updated At</label>
              <input
                type="text"
                placeholder="Updated At"
                value={inputDate(values.updatedAt)}
                disabled
              />
            </div>

            {values?.skm_product_order_details?.map((product, index) => {
              return (
                <>
                  <h4
                    className="fullInputField"
                    style={{
                      marginTop: "3rem",
                      borderBottom: "2px solid #58BD43",
                    }}
                  >
                    {product.productName}
                  </h4>
                  {/* {/ <ProductInfo {...product} index={index} handleChange={handleChange} /> /} */}
                  <>
                    <div className="inputField">
                      <label htmlFor="productName">Product Name</label>
                      <input
                        type="text"
                        placeholder="Product Name"
                        value={product.productName}
                      />
                    </div>

                    <div className="inputField">
                      <label htmlFor="productName">Product Quantity</label>
                      <input
                        type="text"
                        placeholder="Product Name"
                        value={product.productQty}
                      />
                    </div>

                    {/ productImage /}
                    <div className="inputField">
                      <label htmlFor="productImage">Product Image</label>
                      <div className="img">
                        {product.productImage && (
                          <div className="imgPreviewRect">
                            <img
                              src={product.productImage}
                              alt="profile"
                              width="100"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="inputField">
                      <label htmlFor="status">Product Status</label>
                      <select
                        type="text"
                        name={`skm_product_order_details[${index}].status`}
                        value={values.skm_product_order_details[index].status}
                        onChange={handleChange}
                      >
                        <option>Select Status</option>
                        <option value="1">Draft</option>
                        <option value="2">Pending</option>
                        <option value="3">Payment Failed</option>
                        <option value="4">Cancel</option>
                        <option value="5">RTO</option>
                        <option value="6">Completed</option>
                        <option value="7">Shipped</option>
                      </select>
                    </div>
                  </>
                </>
              );
            })}

            <div className="btns">
              <button type="submit" className="submit">
                Submit
              </button>
              <Link to="/orders/view">
                <button type="button" className="back">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;
