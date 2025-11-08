export const calcAge = (dateString: string) => {
    const [day, month, year] = dateString.split("-");
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const today = new Date();    

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}