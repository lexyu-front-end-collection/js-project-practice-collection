import Chart from 'chart.js/auto';

// import {
//   Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend,
//   PointElement, LineElement, LineController, ArcElement, PieController
// } from 'chart.js';

// Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend,
//   PointElement, LineElement, LineController, ArcElement, PieController
// );

const progressCtx = document.getElementById('learningProgress') as HTMLCanvasElement;

new Chart(progressCtx, {
  type: 'bar',
  data: {
    labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
    datasets: [
      {
        label: '新卡片',
        data: [30, 45, 25, 50, 35, 40],
        backgroundColor: '#8884d8'
      },
      {
        label: '複習卡片',
        data: [120, 180, 200, 250, 280, 300],
        backgroundColor: '#82ca9d'
      }
    ]
  }, options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '月度學習進度'
      }
    }
  }
})

const retentionCtx = document.getElementById('retentionCurve') as HTMLCanvasElement;
new Chart(retentionCtx, {
  type: 'line',
  data: {
    labels: ['1小時', '24小時', '48小時', '72小時', '1週', '2週'],
    datasets: [{
      label: '記憶保留率(%)',
      data: [100, 70, 50, 40, 30, 25],
      borderColor: '#8884d8',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '記憶保留曲線'
      }
    }
  }
});

const categoryCtx = document.getElementById('categoryDistribution') as HTMLCanvasElement;
new Chart(categoryCtx, {
  type: 'pie',
  data: {
    labels: ['單字', '片語', '句型', '語法', '閱讀'],
    datasets: [{
      data: [400, 200, 150, 100, 50],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '卡片類型分布'
      }
    }
  }
});

async function fetchData(): Promise<{ year: number; count: number }[]> {
  // 模擬 API 回傳資料
  return [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
}

async function initChart() {
  try {

    const data = await fetchData();

    const acquisitions = document.getElementById('acquisitions') as HTMLCanvasElement;

    new Chart(acquisitions, {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count),
          },
        ],
      },
    });
  } catch (error) {
    console.error('Error initializing chart:', error);
  }
}

initChart()