import ajax from 'axios';
export default{
  get(urlDta) {
    let url = 'https://jdapi.zjdandaotech.com/'+urlDta
    return new Promise((resolve, reject) => {
      ajax({
        url: url,
        method: 'get',
      })
        .then((res) => {
          resolve(res.data);
          // console.log(res);
        })
        .catch(function (error) {
          reject(error);
          // console.log(error);
        });
    });
  },
  gets(urlDta,token) {
    let url = 'https://jdapi.zjdandaotech.com/'+urlDta
    return new Promise((resolve, reject) => {
      ajax({
        url: url,
        method: 'get',
        headers : {
          'authorization': token
        },
      })
        .then((res) => {
          resolve(res.data);
          // console.log(res);
        })
        .catch(function (error) {
          reject(error);
          // console.log(error);
        });
    });
  },
  post(urlData,data,token) {
    let url = 'https://jdapi.zjdandaotech.com/'+urlData
    return new Promise((resolve, reject) => {
      ajax({
        url: url,
        method: 'post',
        headers : {
          'authorization': token,
          'Content-Type': 'application/json'
        },
        data: data
      })
        .then((res) => {
          resolve(res.data);
          // console.log(res);
        })
        .catch(function (error) {
          reject(error);
          // console.log(error);
        });
    });
  }
}
