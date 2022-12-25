import React from 'react'
import './GraphWidget.css'
import Graph from './Graph/Graph';
import  {data} from '../../graphData'


const GraphWidget = () => {
  return (
    <div className='graphwidget'>


       
        <div className='Graph'>
           <Graph data={data}  title="User Analytics" dataKey="activeuser"  grid={"true"} />
        </div>
    </div>
  )
}

export default GraphWidget