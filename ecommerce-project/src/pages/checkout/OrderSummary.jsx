import dayjs from "dayjs";
import formatMoney from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";
import axios from "axios";

function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );
          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };
          const updateCartItem = async () => {
            // 1. प्रयोगकर्तासँग नयाँ परिमाण माग्ने पपअप देखाउने
            const newQuantityInput = prompt(
              "Enter new quantity:",
              cartItem.quantity,
            );

            // यदि क्यान्सिल थिच्यो वा खाली छोड्यो भने फसन रोक्ने
            if (newQuantityInput === null || newQuantityInput === "") return;

            const newQuantity = Number(newQuantityInput);

            // भ्यालिडेसन: यदि नम्बर गल्ती छ वा ० भन्दा कम छ भने रोक्ने
            if (isNaN(newQuantity) || newQuantity <= 0) {
              alert("Please enter a valid number greater than 0");
              return;
            }

            // 2. FIXED: अब नयाँ परिमाण (newQuantity) ब्याकइन्डमा पठाउने
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
              quantity: newQuantity,
            });

            // 3. कार्ट र पेमेन्ट समरी रिफ्रेस गर्ने
            await loadCart();
          };
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span
                      className="update-quantity-link link-primary"
                      onClick={updateCartItem}
                    >
                      Update
                    </span>
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default OrderSummary;
