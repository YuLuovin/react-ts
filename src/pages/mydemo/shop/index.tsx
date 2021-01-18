import * as React from 'react';
import axios from 'axios';
import { saveBannerAction, saveRecommendsAction, ISaveShop} from '../../../store/shop/actionsCreator';
import { connect } from 'react-redux';
import { StoreState } from '../../../types';
import { Dispatch } from 'redux';

interface IState {
  banners: Array<object | null>;
  recommends: Array<object | null>;
  saveBanners: (data:Array<object>)=> void;
  saveRecommends: (data:Array<object>)=> void;
}
class ShopPage extends React.Component<IState> {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
      method: "GET"
    }).then(res => {
      console.log(res)
      const data = res.data.data;
      this.props.saveBanners(data.banner.list)
      this.props.saveRecommends(data.recommend.list)
    })
  }
  render() {
    return (
      <div style={{backgroundColor: '#fff'}}>
        {this.props.banners.map((item:any, index) => {
          return <img src={item.image} alt="hello" key={index}/>
        })}
        <div>
          {this.props.recommends.map((item:any, index) => {
            return <img src={item.image} alt="hello" key={index}/>
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state:StoreState) {
  return {
    banners: state.shopData.banners,
    recommends: state.shopData.recommends
  }
}

function mapDispatchToProps(dispatch:Dispatch<ISaveShop>) {
  return {
    saveBanners: (data: Array<object>)=> dispatch(saveBannerAction(data)),
    saveRecommends: (data: Array<object>)=> dispatch(saveRecommendsAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
