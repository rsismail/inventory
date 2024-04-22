export const isFormValid = (state) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { email, name, employeeId, phoneNumber, jobRole } = state.employeeFormData;
    const validationArray = [email, name, employeeId, phoneNumber, jobRole];
    const isValid = validationArray.every(e => e);
    const isEmailValid = String(email).toLowerCase().match(regex);
    if(isValid && isEmailValid !== null){
        return true
    }
    return false
}