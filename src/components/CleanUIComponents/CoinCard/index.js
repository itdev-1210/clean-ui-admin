import React from 'react'
import styles from './style.module.scss'

class CoinCard extends React.Component {
  state = {
    icon: '',
    title: '',
    totalCoins: '',
    rate: '',
    bgColor: 'red',
  }


  componentWillMount() {
    this.getParams()
  }

  getParams = () => {
    const params = this.props
    this.setState({
      ...params,
    })
  }




  render() {
    const { icon, title, totalCoins, rate, bgColor } = this.state

    return (
      <div style={{ background: bgColor }}>
        <div className={`card card--withShadow ${styles.coin}`}>
          {icon && (
            <div className={styles.icon}>
              <i className={icon} />
            </div>
          )}
          {title && <span className={styles.title}>{title}</span>}
          {totalCoins && <span className={styles.totalCoins}>{totalCoins}</span>}
          {rate && <span className={styles.rate}>Brought Rate {rate}</span>}
        </div>
      </div >
    )
  }
}

export default CoinCard
