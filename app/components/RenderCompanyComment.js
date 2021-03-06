import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
// import ConfirmLink from 'react-confirm-dialog'

import moment from 'moment'

export default class RenderCompanyComment extends Component {
  constructor(props) {
    super(props)
    this.state  = {
    }
    this.renderDeleteBtn = this.renderDeleteBtn.bind(this)
  }

  componentWillReceiveProps(newProps) {
    return newProps !== this.props
  }

  renderDeleteBtn(user_id, id) {
    if (this.props.user_id === user_id) {
      return (
        <div className='delete-btn'>
          <DeleteButton company_id={this.props.company_id}
                        id={id}
                        deleteAComment={this.props.deleteAComment}
                        text='Delete Comment?' />
        </div>
      )
    }
  }

  render() {
    let messages = this.props.data.length > 0 ?
     this.props.data.map((obj, i) => {
       return (
         <div key={i} className='company-comment-wrapper'>
           <div className='company-comment-created_at'>{moment(obj.created_at).format('MMMM Do, YYYY')}</div>
           <div className='company-comment-message'>{obj.message}</div>
           {this.renderDeleteBtn(obj.user_id, obj.id)}
         </div>
       )
    }) : null

    return (
      <div>
        {messages}
      </div>
    )
  }
}
