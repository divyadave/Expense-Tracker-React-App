import './Chart.css'
import  ChartBar from './ChartBar'
function Chart (props) {
     const dataPointsValues = props.dataPoints.map((element) => element.value)
     const totalMaximum = Math.max(...dataPointsValues)
     console.log(totalMaximum)
    return (
        <div className="chart">
            {
                props.dataPoints.map((datapoint) => { 
                   return <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label} ></ChartBar>
                })

            }

        </div>

    );


}
export default Chart;