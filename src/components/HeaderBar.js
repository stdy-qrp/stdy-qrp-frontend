import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const HeaderBar = () => {
    return(
        <Header as='h2'>
          <Icon name='handshake'/>
          <Header.Content>
            QRP
            <Header.Subheader>Study Together</Header.Subheader>
          </Header.Content>
        </Header>
    )
}

export default HeaderBar