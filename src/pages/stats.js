import React, {useState, useEffect} from 'react';
import Styles from "../styles/home.module.scss";
import Layout from '../components/layout';
import Chart from 'react-apexcharts';


export default function Stats(props) {


  const [chartDetails, setChartDetails] = useState({
      options: {
        chart: {
          id: 'statsChart',
          stroke: "curve",
          type: "area",
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "solid",
          colors: ["transparent"],
        },
        grid: {
          show: true,
          strokeDashArray: 5,
          borderColor: '#333',
          position: 'back',
        },
        xaxis: {
          categories: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"]
        },
        responsive: [
          {
            breakpoint: 700,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }]
    });

  
  return (
    <>
       <Layout>
          <div className={`${Styles.mainSection} ${Styles.bgfix}`}>
            <div className={Styles.content}>
              <div className={Styles.chart}>
                <Chart options={chartDetails.options} series={chartDetails.series} type="area" width={500} height={320} />
              </div>
            </div>

            <div className={Styles.aside}>
              
            </div>
          </div>
       </Layout>
    </>
  )
}
