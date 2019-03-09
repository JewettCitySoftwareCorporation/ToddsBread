/***************************************************************
 *
 *   Bult By : Luke@jcsc.biz for Mr. Todd White
 * 
***************************************************************/


ZC.LICENSE = ['7b185ca19b4be2cba68fdcd369c663a9'];

var chartOneData = {
  type: 'ring',
  backgroundColor: 'transparent',
  globals: {
    fontFamily: 'Poppins',
  },
  plot: {
    slice: '80%',
    valueBox: {
      placement: 'center',
      text: '81%<br>On Time',
      fontWeight: 'normal',
      fontSize: '24px',
      fontStyle: 'normal'
    }
  },
  plotarea: {
    margin: '0px 0px 0px 0px'
  },
  series: [
    {
      values: [81],
      backgroundColor: 'var(--yellow)',
      borderWidth: 0,
      shadow: false
    },
    {
      values: [29],
      backgroundColor: 'var(--lightGray)',
      borderWidth: 0,
      shadow: false
    }
  ]
};

var sales = [
  [19.98], [9.99], [9.99], [29.97], [9.99]
];

var chartTwoData = {
  type: 'hbar',
  globals: {
    fontFamily: 'Poppins'
  },
  backgroundColor: 'transparent',
  title: {
    text: 'Orders',
    fontColor: 'var(--lightGray)',
    fontWeight: 'normal',
    align: 'left',
    padding: '16px'
  },
  tooltip: {
    visible: false
  },
  plot: {
    barWidth: 12,
    borderWidth: 0,
    barSpace: '32px'
  },
  plotarea: {
    margin: '40px 56px 16px 56px'
  },
  scaleY: {
    visible: false
  },
  scaleX: {
    labels: [],
    lineWidth: 0,
    tick: {
      visible: false
    }
  },
  scaleX2: {
    lineWidth: 0,
    values: ['$' + sales[0], '$' + sales[1], '$' + sales[2], '$' + sales[3], '$' + sales[4]],
    tick: {
      visible: false
    }
  },
  series: [
    {
      values: sales[0],
      backgroundColor: 'var(--yellow)'
    },
    {
      values: sales[1],
      backgroundColor: 'var(--yellow)'
    }, 
    {
      values: sales[2],
      backgroundColor: 'var(--yellow)'
    },
    {
      values: sales[3],
      backgroundColor: 'var(--yellow)'
    },
    {
      values: sales[4],
      backgroundColor: 'var(--yellow)'
    }
  ]
};

var income =  [500, 1000, 2500, 700, 3500, 600, 1000, 1000, 1000, 800, 3000, 4500, 5000];
var dates = ['01/07','02/07','03/07','04/07','05/07','06/07','07/07','08/07','09/07','10/07','11/07','12/07','13/07'];
var chartThreeData = {
  type: 'line',
  globals: {
    fontFamily: 'Poppins'
  },
  backgroundColor: 'transparent',
  scaleX: {
    labels: dates,
    tick: {
      visible: false
    }
  },
  scaleY: {
    lineWidth: 0,
    values: '0: 5000: 2500',
    tick: {
      visible: false
    },
    guide: {
      lineStyle: 'solid',
      lineColor: 'var(--lightGray)'
    }
  },
  series: [
    {
      values: income,
      lineColor: 'var(--yellow)',
      lineWidth: 5,
      marker: {
        backgroundColor: 'var(--lightPurple)',
        borderColor: 'var(--yellow)',
        borderWidth: 3,
        size: 8
      }
    }
  ]
}

zingchart.render({
  id: 'chartOne',
  data: chartOneData,
  height: '100%',
  width: '100%'
})

zingchart.render({
  id: 'chartTwo',
  data: chartTwoData,
  height: '100%',
  width: '100%'
})

zingchart.render({
  id: 'chartThree',
  data: chartThreeData,
  height: '100%',
  width: '100%'
})