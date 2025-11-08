export const currencyConvert = (amount:number) => {
    const formatterUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatterUSD.format(amount);
}