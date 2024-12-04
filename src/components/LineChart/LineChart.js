import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {
  const[data,setData] = useState([["data","prices"]])
  useEffect(()=>{
    let dataCopy = [["data","prices"]]
    if(historicalData.prices){
      historicalData.prices.map((item)=>{
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
      })
    }
    setData(dataCopy)
  },[historicalData])

  const options = {
  title: "Eph Crypto Chart",
  hAxis: { title: "Time in Days" },
  vAxis: { title: "Price" },
  legend: "none",
}; 
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}

export default LineChart