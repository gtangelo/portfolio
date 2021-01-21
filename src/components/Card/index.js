import { Link } from 'gatsby';
import React from 'react'
import { CardContainer } from "styled-components/Container"
import { CardHeading, CardDescription } from "styled-components/Title"
import './index.css'

const Card = ({ img, title, description, labels, link }) => {
  return (
    <Link to={link} className="card-link">
      <CardContainer>
        <img src={img} alt="" style={{ width: "100%" }} />
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
    </Link>
  )
}

export default Card
