import React from 'react'
import './SalesPerformance.css'
import Graph from './../GraphWidget/Graph/Graph';
import { productSalesData } from '../../graphData';

const SalesPerformance = () => {
  return (
    <div className='salesPerformance'>
<span className='salesperformance__title'>Sales Performance</span>

<Graph data={productSalesData} dataKey="sales" grid="true"/>
        
        </div>
  )
}

export default SalesPerformance