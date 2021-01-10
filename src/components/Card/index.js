import React from 'react'
import { CardContainer } from "styled-components/Container"
import { CardHeading, CardDescription } from "styled-components/Title"
import './index.css'

const Card = ({img, title, description, labels}) => {
  return (
    <CardContainer>
      <img
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        alt=""
        style={{ width: "100%" }}
      />
      <div className="card-labels">
        {labels.map(label => (
          <div className="label" style={{ background: label.colour }}>
            {label.title}
          </div>
        ))}
      </div>
      <div className="card-content">
        <CardHeading>{title}</CardHeading>
        <CardDescription>{description}</CardDescription>
      </div>
      <br />
    </CardContainer>
  )
}

export default Card
