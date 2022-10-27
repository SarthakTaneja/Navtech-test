import React from "react";
import validate from "../../helpers/orderFormValidation";
import useForm from "../../hooks/useForm";

const AddEditOrder = ({ addOrderCallback, order, setAddFormVisibility }) => {

    const {number, dueDate, custmName, custmAdd, custmPhn, orderTotal} = order || {};

    const inputValues={number, dueDate, custmName, custmAdd, custmPhn, orderTotal};

    const { values, errors, handleChange, handleSubmit } = useForm(
        modOrder,
        validate,
        inputValues
    );

    function modOrder() {
        addOrderCallback(values);
    }

    return (
        <div className="position-fixed w-100 h-100 top-0" style={{backgroundColor:'rgba(0,0,0,0.5)'}} onClick={()=>{
            setAddFormVisibility(false);
        }}>
        <div className="p-3 mb-2 bg-white h-75 overflow-auto d-flex flex-column align-items-center" style={{margin:'10%'}} onClick={(event)=>event.stopPropagation()}>
            <h5>{order? 'Edit Order': 'Add Order'}</h5>
            <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                    <label className="label">Order Number</label>
                    <div className="control">
                        <input
                            autoComplete="off"
                            className={`input ${errors.number && "is-danger"}`}
                            type="text"
                            name="number"
                            onChange={handleChange}
                            value={values.number || ""}
                            maxLength="10"
                            required
                            disabled={!!order}
                        />
                        {errors.number && (
                            <p className="help is-danger text-danger">{errors.number}</p>
                        )}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Order Due Date</label>
                    <div className="control">
                        <input
                            autoComplete="off"
                            className={`input ${errors.dueDate && "is-danger"}`}
                            type="date"
                            name="dueDate"
                            onChange={handleChange}
                            value={values.dueDate || ""}
                            required
                        />
                        {errors.dueDate && (
                            <p className="help is-danger text-danger">{errors.dueDate}</p>
                        )}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Customer Name</label>
                    <div className="control">
                        <input
                            autoComplete="off"
                            className={`input ${errors.custmName && "is-danger"}`}
                            type="text"
                            name="custmName"
                            onChange={handleChange}
                            value={values.custmName || ""}
                            required
                        />
                        {errors.custmName && (
                            <p className="help is-danger text-danger">{errors.custmName}</p>
                        )}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Customer Address</label>
                    <div className="control">
                        <input
                            autoComplete="off"
                            className={`input ${errors.custmAdd && "is-danger"}`}
                            type="text"
                            name="custmAdd"
                            onChange={handleChange}
                            value={values.custmAdd || ""}
                            required
                        />
                        {errors.custmAdd && (
                            <p className="help is-danger text-danger">{errors.custmAdd}</p>
                        )}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Customer Phone</label>
                    <div className="control">
                        <input
                            autoComplete="off"
                            className={`input ${errors.custmPhn && "is-danger"}`}
                            type="text"
                            name="custmPhn"
                            onChange={handleChange}
                            value={values.custmPhn || ""}
                            required
                            maxLength="10"
                        />
                        {errors.custmPhn && (
                            <p className="help is-danger text-danger">{errors.custmPhn}</p>
                        )}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Order Total</label>
                    <div className="control">
                        <input
                            autoComplete="off"
                            className={`input ${errors.orderTotal && "is-danger"}`}
                            type="text"
                            name="orderTotal"
                            onChange={handleChange}
                            value={values.orderTotal || ""}
                            required
                        />
                        {errors.orderTotal && (
                            <p className="help is-danger text-danger">{errors.orderTotal}</p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="button is-block is-info is-fullwidth btn btn-primary"
                >
                    Add/Edit
                </button>
            </form>
        </div>
        </div>
    );
}

export default AddEditOrder;
