export const validateDebitCard=({CardDetails,cvv})=>{
console.log(CardDetails)
    const isDebitCardValid=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(CardDetails);
    const isCVVValid=/^\d{3,4}$/.test(cvv);
    if(!isDebitCardValid) return "Debit card is not valid";
    if(isCVVValid) return "CVV is not valid";

    return null;

}