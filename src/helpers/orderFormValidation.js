export default function validate(values) {
    let errors = {};
    if (!values.number) {
      errors.number = "Order Number is required";
    }else if (values.number.length !== 10 ) {
        errors.number = "Order Number should be of length 10";
    } else if (!/^\d{10}$/.test(values.number)) {
      errors.number = "Order Number is invalid";
    }
    if (!values.dueDate) {
        errors.dueDate = "Order Due Date is required";
    }
    if (!values.custmName) {
        errors.custmName = "Customer Name is required";
    }
    if (!values.custmAdd) {
        errors.custmAdd = "Customer Address is required";
    }

    if (!values.custmPhn) {
        errors.custmPhn = "Customer Phone is required";
      }else if (values.custmPhn.length !== 10 ) {
          errors.custmPhn = "Customer Phone should be of length 10";
      } else if (!/^\d{10}$/.test(values.custmPhn)) {
        errors.custmPhn = "Customer Phone is invalid";
      }

      if (!values.orderTotal) {
        errors.orderTotal = "Order Total is required";
      }else if (!/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/.test(values.orderTotal)) {
        errors.orderTotal = "Order Total is invalid";
      }
   
    return errors;
  }
  