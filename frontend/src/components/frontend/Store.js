import React from 'react'
import Navbar from '../../layouts/frontend/Navbar';
import '../frontend/styles/Store.css';



function Store() {
    return (
        <div>
            <Navbar />
            <div class="row px-5 pt-5">
                <div class="col-md-4 mt-4 mt-sm-0 card-container">
                    <div class="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                        <img class="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-glasses.jpg" alt="Pilot Aviator Glasses Gear Image"/>
                        <div class ="card-body p-4 py-0 h-xs-440p">
                        <h5 class ="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">Tierra</h5>
                        <p class ="price">$45.00</p>
                        </div>
                        <p class ="btn w-100 px-4 mx-auto">
                        <input type ="submit" class ="btn btn-success btn-lg w-100" name="add-button" value="Comprar"/>
                        </p>
                    </div>
                </div>

                <div class="col-md-4 mt-4 mt-sm-0 card-container">
                    <div class="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                        <img class="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-hat.jpg" alt="Command Hats Gear Image"/>
                        <div class ="card-body p-4 py-0 h-xs-440p">
                        <h5 class ="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">Flores</h5>
                        <p class ="price">$15.00</p>
                        </div>
                        <p class ="btn w-100 px-4 text-center mx-auto">
                        <input type ="submit" class ="btn btn-success btn-lg w-100" name="add-button" value="Comprar"/></p>
                    </div>
                </div>

                <div class="col-md-4 mt-4 mt-sm-0 card-container">
                    <div class="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                        <img class="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-tshirt.jpg" alt="Mission T-Shirts Gear Image"/>
                        <div class ="card-body p-4 py-0 h-xs-440p">
                        <h5 class ="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">Hortalizas</h5>
                        <p class ="price">$25.00</p>
                        </div>
                        <p class ="btn w-100 px-4 mx-auto">
                        <input type ="submit" class ="btn btn-success btn-lg w-100" name="add-button" value="Comprar"/></p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Store
