import React from "react";

const ItemListContainer = ({Saludo}) => {
    return (
        <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">
                                 {Saludo}
                        </div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer;