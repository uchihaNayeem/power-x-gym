import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col } from "reactstrap";
import Info from "./Info";
import MembershipDone from "./MembershipDone";
import Payment from "./Payment";

export default function MembershipForm() {
  const [nextNo, setNextNo] = useState(0);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const onSubmit = (data) => {
    if (nextNo === 0) {
      localStorage.setItem("formData", JSON.stringify(data));
    }
    if (nextNo !== 2) {
      setNextNo(nextNo + 1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container-fluid py-3">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={9}>
          <PathToMemberShip nextNo={nextNo} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={9} className="d-flex justify-content-center">
          {["Personal Details", "Bank Payment", "Membership Created"].map(
            (item) => {
              return (
                <span className="text-center py-3" style={{ width: "150px" }}>
                  {item}
                </span>
              );
            }
          )}
        </Col>
      </Row>
      {nextNo === 0 && (
        <Row className="p-0 m-0">
          <Info register={register} errors={errors} />
        </Row>
      )}
      {nextNo === 1 && (
        <Row className="p-0 m-0 justify-content-center">
          <Payment />
        </Row>
      )}
      {nextNo === 2 && (
        <Row className="p-0 m-0 justify-content-center my-3">
          <MembershipDone />
        </Row>
      )}

      <Row className="p-0 m-0">
        <Col xs={11} md={11} className="clearfix p-0 m-0">
          {nextNo !== 2 && (
            <input
              type="submit"
              className="btn mt-3 float-right font-weight-bolder px-3"
              style={{ backgroundColor: "#fcd842" }}
              onClick={handleSubmit}
              value="next"
            />
          )}
        </Col>
      </Row>
    </form>
  );
}

function PathToMemberShip({ nextNo }) {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      {[1, 2, 3].map((item) => {
        return (
          <>
            <div key={item} className="d-flex  align-items-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: item <= nextNo + 1 ? "#fcd842" : "#c0c0c0",
                }}
              >
                <span className="text-white font-weight-bolder">{item}</span>
              </div>

              {item !== 3 && (
                <div
                  style={{ width: "100px", border: "2px dashed #c0c0c0" }}
                ></div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}
