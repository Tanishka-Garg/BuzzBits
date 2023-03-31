import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageurl, newsurl, date} = this.props
    return (
      <div>
            <div className="card">
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{description}..</p>
            <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read news</a>
            <p className="card-text my-2"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
          </div>
          
            </div>
      </div>
    )
  }
}

export default Newsitem
