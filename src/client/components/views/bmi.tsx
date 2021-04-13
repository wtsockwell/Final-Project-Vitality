import * as React from "react";
import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";

const BMI: React.FC<BMIProps> = (props: BMIProps) => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);

  const bmiMeasure = (bmi) => {
    let compareAvg = ((bmi - 24.9) / 24.9) * 100;
    if (bmi == null) {
      return (
        <div className="container">
          <div className="row d-flex justify-content-start">
            <div>
              <i
                className="bi bi-heart-fill text-danger"
                style={{ fontSize: `3em` }}
              ></i>
            </div>
          </div>
        </div>
      );
    } else if (bmi <= 18.5) {
      return (
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div>
              <i
                className="bi bi-heart-fill text-warning"
                style={{ fontSize: `3em` }}
              ></i>
            </div>
            <div>
              <p className="font-weight-light">BMI</p>
              <p>{Number.parseInt(bmi)}</p>
            </div>
            <div>
              <p className="font-weight-light">Weight Category</p>
              <p>Underweight</p>
            </div>
            <div>
              <p className="font-weight-light">Below Average</p>
              <p>
                {compareAvg.toPrecision(3)}
                <i className="bi bi-percent"></i>
              </p>
            </div>
          </div>
        </div>
      );
    } else if (bmi == 19 || bmi < 24.9) {
      return (
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div >
              <i
                className="bi bi-heart-fill text-danger"
                style={{ fontSize: `3em` }}
              ></i>
            </div>
            <div >
              <p className="font-weight-light">BMI</p>
              <p>{Number.parseInt(bmi)}</p>
            </div>
            <div>
              <p className="font-weight-light">Weight Category</p>
              <p>Healthy Weight</p>
            </div>
            <div>
              <p className="font-weight-light">Average</p>
              <p>
                {compareAvg.toPrecision(3)}
                <i className="bi bi-percent"></i>
              </p>
            </div>
          </div>
        </div>
      );
    } else if (bmi == 25 || bmi <= 29.5 || bmi == null) {
      return (
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div >
              <i
                className="bi bi-heart-fill text-warning"
                style={{ fontSize: `3em` }}
              ></i>
            </div>
            <div>
              <p className="font-weight-light">BMI</p>
              <p>{Number.parseInt(bmi)}</p>
            </div>
            <div>
              <p className="font-weight-light">Weight Category</p>
              <p>Overweight</p>
            </div>
            <div>
              <p className="font-weight-light">Above Average</p>
              <p>
                {compareAvg.toPrecision(3)}
                <i className="bi bi-percent"></i>
              </p>
            </div>
          </div>
        </div>
      );
    } else if (bmi > 30) {
      return (
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div>
              <i
                className="bi bi-heart-fill text-dark"
                style={{ fontSize: `3em` }}
              ></i>
            </div>
            <div>
              <p className="font-weight-light">BMI</p>
              <p>{Number.parseInt(bmi)}</p>
            </div>
            <div>
              <p className="font-weight-light">Weight Category</p>
              <p>Obese</p>
            </div>
            <div>
              <p className="font-weight-light">Well Above Average</p>
              <p>
                {compareAvg.toPrecision(3)}
                <i className="bi bi-percent"></i>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleBmi = (e) => {
    e.preventDefault();
    setHeight(height);
    setWeight(weight);
    setBmi((weight / (height * 12) ** 2) * 703);
    bmiMeasure(bmi);
    setHeight("");
    setWeight("");
  };

  return (
    <React.Fragment>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Understanding BMI</h1>
            <p className="col-lg-10 fs-4">
              <span className="text-danger">
                {" "}
                <i
                  className="bi bi-heart-fill text-danger"
                  style={{ fontSize: `1em` }}
                ></i>
                Body mass index (BMI)
              </span>{" "}
              is an estimate of body fat based on height and weight. It doesn’t
              measure body fat directly, but instead uses an equation to make an
              approximation. BMI can help determine whether a person is at an
              unhealthy or healthy weight.
            </p>
          </div>

          <div className="col-10 mx-auto col-lg-5">
            <form className="p-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <label htmlFor="floatingInput">Height</label>
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  value={`${height}`}
                  placeholder="Enter Height"
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <div className="form-floating mb-3">
                <label htmlFor="floatingPassword">Weight</label>
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  value={`${weight}`}
                  placeholder="Enter Weight"
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <button
                className="w-100 btn btn-lg btn-danger "
                type="submit"
                onClick={handleBmi}
              >
                Click Here
              </button>
              <p>
                <small>
                  Your results may help you understand your BMI measurement but
                  in no way does this replace professional health advice.
                </small>
              </p>
              <hr className="my-4" />
              {bmiMeasure(bmi)}
            </form>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

interface BMIProps { }

export default BMI;