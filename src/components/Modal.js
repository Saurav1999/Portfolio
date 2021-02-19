import React,{PureComponent} from 'react';
import { Modal } from '@liquid-design/liquid-design-react'
export class ModalApp extends PureComponent {
    state = {
      open: false,
    }
    openModal = () => {
      this.setState({ open: true })
    }
    closeModal = () => {
      this.setState({ open: false })
    }
    render() {
      return (
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            label='Header Label'
            open={this.state.open}
            onClose={this.closeModal}
          >
            <div>some modal content</div>
          </Modal>
        </div>
      )
    }
  }