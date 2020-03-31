import React from 'react'
import { Button } from 'antd'
import { FormattedMessage } from 'react-intl'
import HomeMenu from './HomeMenu'
// import ProjectManagement from './ProjectManagement'
// import IssuesHistory from './IssuesHistory'
// import LiveSearch from './LiveSearch'
// import BitcoinPrice from './BitcoinPrice'
import ProfileMenu from './ProfileMenu'
// import LanguageSelector from './LanguageSelector'
import styles from './style.module.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className="m-auto">
          <a
            href="https://themeforest.net/item/clean-ui-admin-template-react-redux-ant-design-fully-responsive-freebies/21938700"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 d-none d-sm-inline"
          >
            <Button type="primary">
              <FormattedMessage id="topBar.buy" />
            </Button>
          </a>
          <a
            href="https://themeforest.net/item/clean-ui-admin-template-react-redux-ant-design-fully-responsive-freebies/21938700"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 d-none d-sm-inline"
          >
            <Button type="primary">
              <FormattedMessage id="topBar.withdraw" />
            </Button>
          </a>
          <a
            href="https://themeforest.net/item/clean-ui-admin-template-react-redux-ant-design-fully-responsive-freebies/21938700"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 d-none d-sm-inline"
          >
            <Button type="primary">
              <FormattedMessage id="topBar.exchange" />
            </Button>
          </a>
        </div>
        <div className="mr-4">
          <HomeMenu />
        </div>
        <ProfileMenu />
      </div>
    )
  }
}

export default TopBar
