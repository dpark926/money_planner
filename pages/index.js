import React, { Component, Fragment } from "react";
import Layout from "../components/Layout";
import Debt from "../components/Debt";
import NetWorth from "../components/NetWorth";
import Summary from "../components/Summary";
import { data } from "../data/data";

class index extends Component {
  constructor() {
    super();
    this.state = {
      interestSummaryTab: "1M"
    };
  }

  toggleMonth = type => {
    this.setState({ interestSummaryTab: type });
  };

  render() {
    const { interestSummaryTab } = this.state;
    const currentMonth = data && data[data.length - 1];
    const currentBalances = [];
    let totalCreditLine = 0;
    let totalBalance = 0;
    let totalInterest = 0;

    const previousMonth = data && data[data.length - 2];
    let previousBalance = 0;

    let totalAsset = 0;

    for (let i = 0; i < currentMonth.debtAccounts.length; i++) {
      currentBalances.push({
        account: currentMonth.debtAccounts[i].name,
        currentBalance: currentMonth.debtAccounts[i].newBalance,
        previousBalance: currentMonth.debtAccounts[i].previousBalance,
        interest: currentMonth.debtAccounts[i].interest,
        creditLine: currentMonth.debtAccounts[i].creditLine
      });
      totalCreditLine += currentMonth.debtAccounts[i].creditLine;
      totalBalance += currentMonth.debtAccounts[i].newBalance;
      totalInterest += currentMonth.debtAccounts[i].interest;
    }

    for (let i = 0; i < previousMonth.debtAccounts.length; i++) {
      previousBalance += previousMonth.debtAccounts[i].newBalance;
    }

    for (let i = 0; i < currentMonth.assetAccounts.length; i++) {
      totalAsset += currentMonth.assetAccounts[i].amount;
    }

    return (
      <Layout>
        <div className="flex">
          <div className="col-8">
            <NetWorth
              totalBalance={totalBalance}
              totalCreditLine={totalCreditLine}
              previousBalance={previousBalance}
              totalAsset={totalAsset}
            />
            <Debt data={data} />
          </div>
          <div className="col-4">
            <Summary
              data={data}
              currentBalances={currentBalances}
              totalBalance={totalBalance}
              previousBalance={previousBalance}
              totalCreditLine={totalCreditLine}
              totalInterest={totalInterest}
              interestSummaryTab={interestSummaryTab}
              toggleMonth={this.toggleMonth}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;
