import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { Api, Commonfn, FreeHandleProvider, ModalProvider } from '../../providers';


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
    public freeHandle: FreeHandleProvider,
    public modal: ModalProvider,
  ) {
    this.barlist = {
      zero: [{
        name: '币种',
      }, {
        name: '交易对'
      }],
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
          item.rate = item.change24;
          item.circulat = item.circulatingSupply; // 流通
          item.freeHandle = this.freeHandle.checkOneItem(item, '全网');
          return item;
        });
        this.listDataMarket = data;
        updataloading.dismiss();
      }
    });

    this.api.HomeCurrencyCharts().subscribe((result: any) => {
      if (result.errorNo === 0) {
        this.listDataMarket.map(item => {
          const name = item.coin.toLowerCase().replace(' ', '-');
          item.svg = this.filterDataSvg(result.data[name])
          // console.log(item, 'this is ......', result.data);
        });
        // this.listDataMarket = data;
      } else {
        this.modal.alert('错误', result.errorNo + ': 获取币chart图数据失败！');
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
        
        const data = result.data.filter((f, index) => index <= 10).map(item => {
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
          return item;
        });
        this.listDataExchange = data;
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

  public filterDataSvg(data: any) {
    data = data ? data.map(item => [item.dateV, item.marketCap]) : [];
    const temp_test = [];
    const sort_item0 = [];
    const sort_item1 = [];
    const temp = {
      bg: null,
      sm: null,
    };
    data.forEach(item => {
      sort_item0.push(item[0]);
      sort_item1.push(item[1]);
    });
    data.forEach(item => {
      const bg = item[0] / 1000 - sort_item0.sort()[0] / 1000;
      const sm = item[1] * 100 - sort_item1.sort()[1] * 100;
      temp.bg += bg;
      temp.sm += sm;
      temp_test.push([bg, sm ]);
    });
    temp.bg = temp.bg / data.length;
    temp.sm = temp.sm / data.length;
    const temp_2 = [];
    temp_test.forEach(item => {
      const bg = (item[0] / temp.bg * 10 + 2) * 3.5;
      const sm = (item[1] / temp.sm * 10 + 2) * 1.2;
      temp_2.push([bg, sm]);
    });
    return temp_2;
  }
  /**
   * 页面跳转
   * @param type 类型,哪个页面跳转
   * @param data 子页面传参
   */
  public onNavPage(type: string, data: any): void {
    console.log(type, 'openNavDetailsPage');
    switch (type) {
      case 'currency':
      this.navCtrl.push('CurrencyDetailPage', data);
      break;
      case 'exchange':
      this.navCtrl.push('ExchangeDetailPage', data);
      break;
      case 'pair':
      this.navCtrl.push('PairDetailPage', data);
      break;
      case 'freeHandle':
      this.navCtrl.push('FreeHandlePage');
      break;
    }
  }
}
