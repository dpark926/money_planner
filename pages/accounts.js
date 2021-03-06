import React, { useState } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Modal from "../components/Modal";
import { data } from "../data/data";
import { numWithCommas, formatMoney } from "../utils/functions";
import { Months } from "../utils/date";
import "../styles/styles.scss";

const accounts = () => {
  const [modalType, setModalType] = useState();
  const [modalOpen, setModalOpen] = useState();
  const [accnt, setAccnt] = useState();
  const [openMonths, setOpenMonths] = useState([0]);

  const toggleModal = (type, accnt) => {
    setModalType(type);
    setModalOpen(!modalOpen);
    setAccnt(accnt);
  };

  const toggleAccordion = idx => {
    if (openMonths.includes(idx)) {
      const filtered = openMonths.filter(num => {
        return num !== idx;
      });
      setOpenMonths(filtered);
    } else {
      setOpenMonths([...openMonths, idx]);
    }
  };

  return (
    <Layout>
      {modalOpen && (
        <Modal modalType={modalType} toggleModal={toggleModal} accnt={accnt} />
      )}
      {data &&
        data
          .slice(0)
          .reverse()
          .map((mo, idx) => {
            return (
              <div>
                <div onClick={() => toggleAccordion(idx)}>
                  <p>
                    <span>{Months[mo.month - 1].full}, </span>
                    <span>{mo.year}</span>
                  </p>
                </div>
                {openMonths.includes(idx) && (
                  <div className="flex">
                    <div className="bg-white border-divider rounded mr1 py3 px2 col-4">
                      <Title title="Assets" />
                      <h4
                        className="border-divider rounded bg-green hover white h5 lighter center pointer m2 py1 px2"
                        onClick={() => toggleModal("assets")}
                      >
                        Add New
                      </h4>
                      <div className="mx2">
                        {mo.assetAccounts.map((accnt, idx) => {
                          return (
                            <div className="border-divider rounded mt2">
                              <div className="flex pt1">
                                <h4 className="h5 uppercase flex-auto px2 mx0 my1 lighter">
                                  {accnt.name}:
                                </h4>
                                <h4 className="h5 pr2 mx0 my1 lighter">
                                  ${numWithCommas(formatMoney(accnt.amount))}
                                </h4>
                              </div>
                              <div className="flex mx2 my1">
                                <h4
                                  className="center h6 pointer my0 mr1 p1 col-6 lighter border-divider rounded bg-blue hover white"
                                  onClick={() => toggleModal("assets", accnt)}
                                >
                                  Edit
                                </h4>
                                <h4 className="center h6 pointer my0 ml1 p1 col-6 lighter border-divider rounded bg-gray hover white">
                                  Delete
                                </h4>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="bg-white border-divider rounded ml1 py3 px2 col-8">
                      <Title title="Credit Cards" />
                      <h4
                        className="border-divider rounded bg-green hover white h5 lighter center pointer m2 py1 px2"
                        onClick={() => toggleModal("credit")}
                      >
                        Add New
                      </h4>
                      <div className="mx2">
                        {mo.debtAccounts.map((accnt, idx) => {
                          return (
                            <div className="flex border-divider rounded p2 mb2 black">
                              <div className="col-6 mr1">
                                <h4 className="h5 mt0 mb2 lighter uppercase">
                                  {accnt.name}
                                </h4>
                                <div className="flex mb2">
                                  <h4
                                    className="center h6 pointer my0 mr1 p1 col-6 lighter border-divider rounded bg-blue hover white"
                                    onClick={() => toggleModal("credit", accnt)}
                                  >
                                    Edit
                                  </h4>
                                  <h4 className="center h6 pointer my0 ml1 p1 col-6 lighter border-divider rounded bg-gray hover white">
                                    Delete
                                  </h4>
                                </div>
                                <h4 className="flex h5 lighter m0">
                                  <span>
                                    Credit Line: ${numWithCommas(
                                      formatMoney(accnt.creditLine)
                                    )}
                                  </span>
                                </h4>
                              </div>
                              <div className="col-6 ml1">
                                <h4 className="flex h5 lighter m0">
                                  <span className="flex-auto">
                                    Previous Balance:
                                  </span>
                                  <span>
                                    ${numWithCommas(
                                      formatMoney(accnt.previousBalance)
                                    )}
                                  </span>
                                </h4>
                                <h4 className="flex h5 lighter m0">
                                  <span className="flex-auto">Payments: </span>
                                  <span>
                                    ${numWithCommas(
                                      formatMoney(accnt.payments)
                                    )}
                                  </span>
                                </h4>
                                <h4 className="flex h5 lighter m0">
                                  <span className="flex-auto">Spendings: </span>
                                  <span>
                                    ${numWithCommas(
                                      formatMoney(accnt.spendings)
                                    )}
                                  </span>
                                </h4>
                                <h4 className="flex h5 lighter m0">
                                  <span className="flex-auto">Fees: </span>
                                  <span>
                                    ${numWithCommas(formatMoney(accnt.fees))}
                                  </span>
                                </h4>
                                <h4 className="flex h5 lighter m0">
                                  <span className="flex-auto">Interest: </span>
                                  <span>
                                    ${numWithCommas(
                                      formatMoney(accnt.interest)
                                    )}
                                  </span>
                                </h4>
                                <h4 className="flex h5 lighter m0">
                                  <span className="flex-auto">
                                    New Balance:{" "}
                                  </span>
                                  <span>
                                    ${numWithCommas(
                                      formatMoney(accnt.newBalance)
                                    )}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
    </Layout>
  );
};

export default accounts;
