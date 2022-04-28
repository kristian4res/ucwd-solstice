import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ children, price }) => {
    /** CONTEXTS */

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JWgEEJjN0yDuzRsfyDHc1Pc8ZcLcAPq0C02dQWVzFoCpo6dMELyPcOtfNGjV2aTDlhjvMaXpSQARUlKsefKr0D100PMBOLEYo';

    const onToken = (token) => {
        alert('Booking and payment successful')
    }

    return (
        <StripeCheckout
            label="Checkout"
            name="Solstice Ltd."
            image="../solstice-logo-light.svg"
            currency="GBP"
            locale="en"
            billingAddress
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel="Confirm payment"
            token={onToken}
            stripeKey={publishableKey}
        >
            {children}
        </StripeCheckout>
    )
};

export default StripeCheckoutButton;