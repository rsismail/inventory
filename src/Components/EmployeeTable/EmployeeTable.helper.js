export const reducer = (state, action) => {
    const { type, value } = action;
    switch (type) {
        case 'name':
        case 'email':
        case 'employeeId':
        case 'phoneNumber':
        case 'jobRole':
            return { ...state, employeeFormData: { ...state.employeeFormData, [type]: value } }
        case 'ON_SUBMIT':
            return { ...state, employeeTableData: value, employeeFormData: {} }
        case 'ON_EDIT_DRAWER_MODE':
            return { ...state, employeeFormData: value }
        case 'ON_DELETE':
            return { ...state, employeeTableData: value }
        case 'SET_TO_INITIAL':
            return { ...state, employeeFormData: value }
        default:
            return state
    }
}