import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "Ae2BaESoXodFcCOuIy_2FTZqV4LZJ8nBaTMJoETTmMBC-_licT3C2pY9-e5nIrvDYBMCTH5XC81mf5EG",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount.toString(), currency_code: "USD" } }],
          });
        }}
        onApprove={(data, actions) =>{
            return actions.order.capture().then(onSuccess)
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
// sb-crb3h32844677_api1.business.example.com
// E3Q4DCRJ67KDNWC3
