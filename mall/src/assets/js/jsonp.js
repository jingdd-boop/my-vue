import jsonp from 'jsonp';


// {
//   page: 1,
//   psize: 20,
// }

// page=1&psize=20
const parseParam = param => {
  let params = [];

  for (const key in param){
    params.push([key,param[key]]);
  }
  //[[page,1],[psize,20]]

  return params.map(value => value.join('=')).join('&');
  //[[page=1],[psize=20]]

  //[page=1,psize=20]

  //[page=1&psize=20]
}


export default (url, data,Options) => {
 url += (url.index('?') < 0 ? '?' : '&') + parseParam(data);

 return new Promise((resolve,reject) => {
   jsonp(url,options,(err,data) => {
      if(err){
        reject(err);
      } else{
        resolve(data);
      }
   });
 });
};