import React,{PureComponent} from 'react';
import { Card } from '@liquid-design/liquid-design-react'

export class CardApp extends PureComponent {
    state = {
      isCardActive: false
    }
    toggleCardActive = () => {
      this.setState(({isCardActive}) => ({isCardActive: !isCardActive}))
    }
    render () {
      const { isCardActive } = this.state
  
      return (
        <Card
          active={isCardActive}
          onClick={this.toggleCardActive}
  
        >
        lorem ipsum dolor sit amet, consectetur adipiscing...
        </Card>
      )
    }
  }