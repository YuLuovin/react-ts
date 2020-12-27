import * as React from 'react';
import axios from 'axios';
import store from '../../store'
import { saveBannerAction } from '../../store/shop/actionsCreator';
interface IState {
  banners: Array<object>
}
export default class ShopPage extends React.Component<IState> {
  state = {
    banners: []
  }
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
      method: "GET"
    }).then(res => {
      console.log(res)
      if (res.data.data.banner && res.data.data.banner.list && res.data.data.banner.list.length) {
        store.dispatch(saveBannerAction(res.data.data.banner.list))
        setTimeout(() => {
          console.log(store.getState().shopData.banners)
          console.log(this.state)
        }, 5000);
      }
    })

    store.subscribe(() => {
      this.setState({
        banners: store.getState().shopData.banners
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.banners.map((item:any, index) => {
          return <img src={item.image} alt="hello" key={index}/>
        })}
      </div>
    );
  }
}