import React from 'react'
import { Table } from 'antd'
import { Helmet } from 'react-helmet'
import CoinCard from 'components/CleanUIComponents/CoinCard'
import Authorize from 'components/LayoutComponents/Authorize'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import Legend from "chartist-plugin-legend";

import { tableData } from './data.json'

class DashboardAlpha extends React.Component {
  render() {
    const tableColumns = [
      {
        title: 'Coins',
        dataIndex: 'coins',
        key: 'coins',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: 'Changes',
        dataIndex: 'changes',
        key: 'changes',
        render: changes => (
          <span>
            {changes.value}%
            {changes.status === "up" ? <i className="fa fa-long-arrow-up up"></i> : <i className="fa fa-long-arrow-down down"></i>}
          </span>
        ),
      }
    ]

    const overlappingBarData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      series: [ 
         { "name": "Marine Coin", "data": [12, 9, 7, 8, 5] },
      { "name": "TUSD", "data": [2, 1, 3.5, 7, 3] },
      { "name": "Ripple", "data": [1, 3, 4, 5, 6] } ],
    }

    const overlappingBarOptions = {
      seriesBarDistance: 10,
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false }), Legend()],
    }
    
    const overlappingResponsiveOptions = [
      [
        '',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc(value) {
              return value[0]
            },
          },
        },
      ],
    ]

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha wallet" />
        <div className="row">
          <div className="col-xl-3">
            <CoinCard
              title="Marine Coin"
              icon="fa fa-dollar"
              totalCoins="5800 MC"
              rate="50%"
              bgColor="#2C89DF"
            />
          </div>
          <div className="col-xl-3">
            <CoinCard
              title="Bit Coin"
              icon="fa fa-bitcoin"
              totalCoins="10.67 BTC"
              rate="20%"
              bgColor="#EF6044"
            />
          </div>
          <div className="col-xl-3">
            <CoinCard
              title="Ethereum"
              icon="fa fa-cny"
              totalCoins="30.546 ETH"
              rate="10%"
              bgColor="#8458C1"
            />
          </div>
          <div className="col-xl-3">
            <CoinCard
              title="Ripple"
              icon="fa fa-krw"
              totalCoins="5096 XRP"
              rate="20%"
              bgColor="#F8BE45"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Market Cap</strong>
                </div>
              </div>
              <div className="card-body">
                <Table
                  className="market-table"
                  scroll={{ x: '100%' }}
                  columns={tableColumns}
                  dataSource={tableData}
                  pagination={false}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 booking-status">
          <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Booking Status</strong>
                </div>
              </div>
              <div className="card-body">
              <ChartistGraph
                className="height-300"
                data={overlappingBarData}
                options={overlappingBarOptions}
                responsive-options={overlappingResponsiveOptions}
                type="Bar"
              />
              </div>
            </div>
          </div>
        </div>
      </Authorize>
    )
  }
}

export default DashboardAlpha
