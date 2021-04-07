import * as React from 'react';
import { useEffect, useState } from 'react';



const BMI = (props: BMIProps) => {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [bmi, setBmi] = useState(null)

    const bmiMeasure = (bmi) => {
        if (bmi == null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h5>Calculate your BMI</h5>
                            <p><small>Your results may help you understand your BMI measurement but in no way is it a replacement for professional guidance.</small></p>
                        </div>
                    </div>
                </div>
            )
        }
        else if (bmi <= 18.5) {
            return (
                <div className='container'>
                    <div className="row">
                        <div className="col-4">
                            <h5 className='font-weight-light'>BMI</h5>
                            <h5>{Number.parseInt(bmi).toFixed(2)}</h5>
                        </div>
                        <div className="col-4">
                            <h5 className='font-weight-light'>Weight Category</h5>
                            <h5>Underweight</h5>
                        </div>
                    </div>
                </div>

            )
        } else if (bmi == 19 || bmi < 24.9) {
            return (
                <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <h5 className='font-weight-light'>BMI</h5>
                        <h5>{Number.parseInt(bmi).toFixed(2)}</h5>
                    </div>
                    <div className="col-4">
                        <h5 className='font-weight-light'>Weight Category</h5>
                        <h5>Healthy Weight</h5>
                    </div>
                </div>
            </div>
            )
        } else if (bmi == 25 || bmi <= 29.5 || bmi == null) {
            return (
                <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <h5 className='font-weight-light'>BMI</h5>
                        <h5>{Number.parseInt(bmi).toFixed(2)}</h5>
                    </div>
                    <div className="col-4">
                        <h5 className='font-weight-light'>Weight Category</h5>
                        <h5>Overweight</h5>
                    </div>
                </div>
            </div>
            )
        } else if (bmi > 30) {
            return (
                <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <h5 className='font-weight-light'>BMI</h5>
                        <h5>{Number.parseInt(bmi).toFixed(2)}</h5>
                    </div>
                    <div className="col-4">
                        <h5 className='font-weight-light'>Weight Category</h5>
                        <h5>Obesity</h5>
                    </div>
                </div>
            </div>
            )
        }
    }

    const handleBmi = (e) => {
        e.preventDefault()
        setHeight(height)
        setWeight(weight)
        setBmi((weight / ((height * 12) ** 2) * 703))
        bmiMeasure(bmi)
    }

    return (
        <React.Fragment>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Understanding BMI</h1>
                        <p className="col-lg-10 fs-4">
                            Body mass index (BMI) is an estimate of body fat based on height and weight.
                            It doesn’t measure body fat directly, but instead uses an equation to make an approximation.
                            BMI can help determine whether a person is at an unhealthy or healthy weight.
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-5">
                        <form className="p-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <label htmlFor="floatingInput" >Height</label>
                                <input type="number" className="form-control" id="floatingInput" placeholder="Enter Height" onChange={(e) => setHeight(e.target.value)} />

                            </div>
                            <div className="form-floating mb-3">
                                <label htmlFor="floatingPassword">Weight</label>
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Enter Weight" onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            <i className="bi bi-calculator"></i>
                            <button className="w-100 btn btn-lg btn-danger" type="submit" onClick={handleBmi}>Calculate Your BMI</button>
                            <hr className="my-4" />
                            {bmiMeasure(bmi)}
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}

interface BMIProps { };

export default BMI;







