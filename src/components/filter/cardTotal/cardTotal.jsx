import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./cardTotal.scss"
import { Card } from '@mui/material';

const CardTotal = ({info}) => {
  return (
    <Card className='card'>
        <div className='card-header'>
            <label >Total de ventas de {info.infoDate}</label>
            <InfoIcon/>
        </div>
        <div className='card-body'>
            <label className='card-body-total'>{`$${info.total}`}</label>
            <label className='card-body-date'>{info.date}</label>
        </div>
    </Card>
  )
}
CardTotal.defaultProps = {
  info: {
    infoDate: "hoy",
    total: "1.800.000",
    date: "septiembre, 2021"
  },

};
export default CardTotal;