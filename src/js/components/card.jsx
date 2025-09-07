import React from "react";

const Card = () => {
    return (
        <div className="col">
            <div className="card">
                <img src="https://inflame.co.jp/wp-content/uploads/2021/12/image_500x300.gif" className="card-img-top rounded-top" alt="placeholder" />
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer text-muted text-center">
                    <a href="#" className="btn btn-primary">Find Out More</a>
                </div>
            </div>
        </div>)
}

export default Card;