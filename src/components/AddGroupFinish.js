import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const AddGroupFinish = () => {
  return (
    <>
      <h3>Group created!</h3>
      <p>
        We&apos;ve informed your friends at&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://t.me/stdy_qrp">t.me/stdy_qrp</a>
      </p>
      <Link to={'/'}>
        <Button primary>Done</Button>
      </Link>
    </>
  )
}

export default withRouter(AddGroupFinish)
