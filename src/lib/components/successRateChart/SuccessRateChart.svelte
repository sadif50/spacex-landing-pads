<script>
  import { Chart } from 'flowbite-svelte';
  import { getContext } from 'svelte';

  const landpads = getContext('landpads');
  const successRate = $landpads.map(landpad => {
    if(!isNaN((landpad.successful_landings / landpad.attempted_landings) * 100)){
      return Math.round((landpad.successful_landings / landpad.attempted_landings) * 100);
    }else return 0;
  })
  const labels = $landpads.map(landpad => landpad.full_name);
  const options = {
    series: [...successRate],
    colors: ['#1C64F2', '#16BDCA', '#FDBA8C', '#E74694'],
    chart: {
      height: 222,
      width: '100%',
      type: 'donut'
    },
    stroke: {
      colors: ['transparent'],
      lineCap: ''
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Landing Pads',
              fontFamily: 'Inter, sans-serif',
              formatter: function (w) {
                return w.globals.seriesTotals.length;
              }
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
            }
          },
          size: '80%'
        }
      }
    },
    grid: {
      padding: {
        top: -2
      }
    },
    labels: [...labels],
    dataLabels: {
      enabled: false
    },
    legend: false,
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + '%';
        }
      }
    },
  };
</script>

<div class="rounded-lg drop-shadow bg-white">
  <h2 class="px-4 py-[15px] font-semibold border-b-[1px] border-gray-100">
    Success Rate Chart
  </h2>
  <div class="w-full h-[301px]">
    <Chart {options} class="py-6" />
  </div>
</div>