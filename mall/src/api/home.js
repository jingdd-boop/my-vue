import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {SUCC_CODE,TIMEOUT} from './config';

//获取幻灯片数据--ajax

export const getHomeSlider = () => {
 return axios.get('http://www.imooc.com/api/home/slider',{
   timeout: TIMEOUT
 }).then(res => {
  //console.log(res);
  if(res.data.code === SUCC_CODE){
    return res.data.slider;
  }

  throw new Error('没有成功');
 }).catch(err =>{
   if(err) {
     console.log(err);
   }

   return [
     {
       linkUrl: 'https://www.imooc.com',
       picUrl: require('assets/img/404.png')
     }
   ];
 }).then(data => {
   return new Promise(resolve => {
     setTimeout(()=>{
       resolve(data);
     },1000);
   });
 })
};

//获取页面热门推荐数据 --jsonp

export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId:''
  };
  return jsonp(url,params,{
    param: 'callback'
  }).then(res => {
    console.log(res);
    
  });

}