import React from 'react'
import PropTypes from 'prop-types'

const Detail = ({ title, value, text, link, btn }) =>
  <li>
    <span>{title}</span>
    {link && <a href={value} target="_blank">{value}</a>}
    {btn && <a href={value} target="_blank" className="btn">Download</a>}
    {text && <span>{value}</span>}
  </li>

Detail.defaultProps = {
  text: false,
  link: false,
  btn: false,
}

export default Detail
