import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { Api, Commonfn } from '../../providers';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  public tabs: string = 'one';
  public barlist: any;
  public listDataMarket: Array<any>;
  public listDataExchange: Array<any>;
  public listDataTrading: Array<any>;
  public barIndex: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public api: Api,
    public fn: Commonfn,
    public loading: LoadingController,
  ) {
    this.barlist = {
      one: [{
        name: '行情',
        theader: [
          {
            name: '名称/市值',
            type: 'search'
          },
          {
            name: '价格/涨幅',
            type: 'sort'
          },
          {
            name: '流通/成交额',
            type: 'sort'
          }
        ],
      }, {
        name: '自选',
        theader: [
          {
            name: '名称/市值',
            type: 'search'
          },
          {
            name: '价格/涨幅',
            type: 'sort'
          },
          {
            name: '流通/成交额',
            type: 'sort'
          }
        ],
      },],
      two: [{
        name: '交易所列表',
        theader: [
          {
            name: '名称/国家',
            type: 'search'
          },
          {
            name: '成交额(24H)/占比',
            type: 'sort'
          },
          {
            name: '交易对/类型',
            type: 'sort'
          }
        ],
      }],
      three: [{
        name: '交易所列表',
        theader: [
          {
            name: '名称/国家',
            type: 'search'
          },
          {
            name: '成交额(24H)/占比',
            type: 'sort'
          },
          {
            name: '交易对/类型',
            type: 'sort'
          }
        ],
      }]
    };

    this.listDataMarket = [];
    this.listDataExchange = [];
    this.listDataTrading = [];

    this.barIndex = 0;
  }

  ngOnInit() {
    this.getLsit();
  }
  
  tabChange(e) {
    this.barlist[this.tabs][0].index = 0;
    this.BarChange(this.barlist[this.tabs][0]);
  }

  ionViewDidLoad() {
  }

  openMenu() {
    this.menuCtrl.open();
  }

  showSharch() {
    this.navCtrl.push('SearchPage', {

    })
  }
/**
 * getLsit 币种行情接口
 */
  public getLsit() {
    const updataloading = this.loading.create({
      content: '请等待...'
    });
    updataloading.present();
    this.api.HomeMarketList().subscribe((result: any) => {
      console.log(result);
      if (result.success) {
        const data = result.data.filter((f, index) => index <= 10).map(item => {
          item.iconImg = this.api.imgiconUrl + '/' + item.coin.toLowerCase().split(' ').join('') + '.png';
          item.isnegative = item.change24 < 0;
          for (const i in item) {
            if (item[i] && typeof item[i] === 'number') {
              item[i] = this.fn.getunit(item[i]);
            }
          }
          item.name = item.name;
          item.fupbname = item.symbol;
          item.fdpdname = '$' + item.marketCap;
          item.supbname = '$' + item.price;
          item.sdpsname = item.change24 + '%';
          item.tupbname = item.circulatingSupply;
          item.tdpsname = '$' + item.volume;
          return item;
        });
        this.listDataMarket = data;
        updataloading.dismiss();
      }
    });
  }
  /**
   * gettage 换取标签
   */
  public gettage(data: string): string {
    if (!data) {
      return '--';
    }
    const json = JSON.parse(data);
    let str: string = '';
    json.tag.map(result => {
      switch (result) {
        case 'xianhuo':
          str += ' 现货 '
          break;
        case 'qihuo':
          str += ' 期货 '
          break;
        case 'otc':
          str += ' 法币 '
          break;
      }
    });
    return str ? str : '--';
  }

  /**
   * getlistExchange 交易所行情获取
   */
  public getlistExchange() {
    const updataloading = this.loading.create({
      content: '请等待...'
    });
    updataloading.present();
    this.api.HomeExchangeList().subscribe((result: any) => {
      if (result.success) {
        result.data.forEach(item => {
          item.iconImg = this.api.imgmarketUrl + '/' + item.market.toLowerCase().split(' ').join('') + '.png';
          item.isnegative = false;
          item.sdpsname = this.fn.getratio(item.volumerate);
          for (const i in item) {
            if (item[i] && typeof item[i] === 'number') {
              item[i] = this.fn.getunit(item[i]);
            }
          }
          item.name = item.market;
          item.fupbname = null;
          item.fdpdname = item.country;
          item.supbname = item.volume24h;
          item.tupbname = item.pairs;
          item.tdpsname = this.gettage(item.extendInfo);
        });
        this.listDataExchange = result.data;
        updataloading.dismiss();
      }
    });
  }

  public BarAdd() {
    this.navCtrl.push('SearchPage');
  }

  public BarChange(item){
    this.barIndex = item.index;
    switch (item.name) {
      case '自选':
        this.listDataMarket = [];
        break;
      case '行情':
        this.getLsit();
      break;
      case '交易所列表':
        this.getlistExchange();
      break;
    }
  }
}
