import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Api, ModalProvider } from '../../providers';
import { getImage } from '../../mocks/function';

import * as Highcharts from 'highcharts';
import { StockChart } from 'angular-highcharts';

@IonicPage()
@Component({
  selector: 'page-currency-detail',
  templateUrl: 'currency-detail.html',
})
export class CurrencyDetailPage implements OnInit {
  /**
   * 币id or 币名称
   */
  public id: string;
  /**
   * 详情信息
   */
  public detailInfo: any;
  public chartOption: any;
  public releation: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: Api,
    public loading: LoadingController,
    private modal: ModalProvider,
  ) {
    this.id = navParams.get('id');
  }

  ngOnInit() {
    this.getCurrencyInfo();
    this.getCurrencyCharts();
    this.getCurrencyReleation();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencyDetailPage');
  }
  /**
   * 币详情信息
   */
  public getCurrencyInfo(): void {
    const updataloading = this.loading.create({
      content: '请等待...'
    });
    updataloading.present();
    this.api.currecnyDetailInfo({ coinname: this.id }).subscribe((result: any) => {
      if (result.errorNo === 0) {
        this.detailInfo = this.checkDetaiInfoData(result.data);
      } else {
        this.modal.alert('错误', '获取详细信息错误');
      }
      updataloading.dismiss();
    });
  }
  /**
   * 处理币详细信息结果：币图
   * @param data
   */
  public checkDetaiInfoData(data: any) {
    const temp_data = data;
    temp_data.coinImage = getImage(temp_data.coin) + '.png';
    return temp_data;
  }

  public getCurrencyCharts(): void {
    this.api.currencyDetailChart({ coinname: this.id }).subscribe((result: any) => {
      if (result.errorNo === 0) {
        this.renderHChart(result.data);
      } else {
        this.modal.alert('错误', '获取币chart图信息失败');
      }
    });
  }

  public renderHChart(data: any): void {
    const keys = ['supply', 'price_usd', 'price_btc', 'volume_usd'];
    const getIndex = (key) => {
      const b = {
        supply: 0,
        volume_usd: 1,
        price_usd: 2,
        price_btc: 3
      };
      return b[key];
    };
    const series = (item) => {
      if ((<string>this.id).toLowerCase() !== 'bitcoin') {
        return keys.map((key, index) => {
          return {
            name: key,
            type: 'line',
            data: data[key],
            yAxis: getIndex(key)
          };
        });
      } else {
        const a = keys.filter(f => f !== 'price_btc').map((key, index) => {
          return {
            name: key,
            type: 'line',
            data: data[key],
            yAxis: getIndex(key)
          };
        });
        return a;
      }
    };

    const yAxis = () => {
      const y = [{
        title: {
          text: '市值',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: false,
        offset: 0,
        height: '80%',
        labels: {
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        visible: false,
      }, {
        opposite: false,
        height: '20%',
        top: '80%',
        offset: 0,
        lineWidth: 1,
        title: {
          text: '24小时交易量',
        },
        visible: false,
      }, {
        title: {
          text: '价格（美元）',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        labels: {
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        height: '80%',
        offset: 0,
        visible: false,
      }];
      if ((<string>this.id).toLowerCase() !== 'bitcoin') {
        y.push({
          title: {
            text: '价格（BTC）',
            style: {
              color: Highcharts.getOptions().colors[2]
            }
          },
          labels: {
            style: {
              color: Highcharts.getOptions().colors[2]
            }
          },
          height: '80%',
          offset: 0,
          visible: false,
        });
      }
      return y;
    };
    const options = {
      rangeSelector: {
        enabled: false
      },
      legend: {
        enabled: true,
        align: 'center',
      },
      yAxis: yAxis(),
      tooltip: {
        split: false,
        shared: true,
        xDateFormat: '%A, %Y年%m月%d日, %H:%M:%S UTC',
      },
      series: series(data)
    };
    this.chartOption = new StockChart(options);
  }
  /**
   * 获取币相关交易所信息方法
   */
  public getCurrencyReleation(): void {
    this.api.currecnyDetailRelation({ coinname: this.id }).subscribe((result: any) => {
      if (result.errorNo === 0) {
        this.releation = result.data.filter((f, index) => index <= 10).map(item => item);
      } else {
        this.modal.alert('错误', '获取相关交易所失败');
      }
      console.log(this.releation);
    });
  }

}
