import axios from 'axios';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import Router from 'next/router';

const SECRET_KEY = process.env.JWT_KEY;

/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */
export function verifyToken(jwtToken) {
  try {
    return jwt.verify(jwtToken, SECRET_KEY);
  } catch (e) {
    console.log('e:', e);
    return null;
  }
}

/*
 * @params {request} extracted from request response
 * @return {object} object of parse jwt cookie decode object
 */
export function getAppCookies(req) {
  const parsedItems = {};
  if (req.headers.cookie) {
    const cookiesItems = req.headers.cookie.split('; ');
    cookiesItems.forEach(cookies => {
      const parsedItem = cookies.split('=');
      parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
    });
  }
  return parsedItems;
}

/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */
export function absoluteUrl(req, setLocalhost) {
  var protocol = 'https:';
  var host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host;
  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = 'http:';
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
    url: req,
  };
}

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

//YYYY-MM-DD
export function formatDateWithoutTime(date) {
  var dateString =
    date.getUTCFullYear() + "-" +
    ("0" + (date.getUTCMonth() + 1)).slice(-2) + "-" +
    ("0" + date.getUTCDate()).slice(-2) + " "
  return dateString;
}
// const api = process.env.PUBLIC_URL

export const apiInstance = () => {
  // const authorization = store.getState().userState.token ? store.getState().userState.token : null

  // const headers = {
  // 	'x-api-token': authorization ? authorization : '',
  // }

  return axios.create({
    baseURL: '/api',
    // headers,
  })
}

export const checkIsLogin = () => {
  // console.log("checkIsLogin")
  var token = Cookies.get('token') // => 'value'

  if (!token) {
    Router.push('/login');
    return;
  }
  // console.log(parseJwt(token))
  return parseJwt(token)

}

export function parseJwt(token) {

  var isExpired = false;
  // const token = localStorage.getItem('id_token');



  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  var _jsonPayload = JSON.parse(jsonPayload)
  var dateNow = new Date();
  // console.log(parseInt(_jsonPayload.exp))
  // console.log(parseInt((dateNow.getTime()).toString().substring(0,10)))
  if (parseInt(_jsonPayload.exp) < parseInt((dateNow.getTime()).toString().substring(0, 10))) {
    console.log("true")

    isExpired = true;
  }

  if (isExpired) {
    Router.push('/login');
    return "";
  }
  return _jsonPayload;
};


export function convertDateDBtoDatePickerNoTime(date) {
  try {
    var dateSplit = date.toString().split("T");
    return dateSplit[0];
  } catch (error) {
    return "";
  }

}

export function convertDateDBtoDatePickerWithTime(date) {
  try {
    //:07.000Z
    //SampleText.replace("Developer", "App Builder");
    var dateSplit = date.toString().split("T");
    return dateSplit[0] + " " + dateSplit[1].replace(".000Z", "");
  } catch (error) {
    return "";
  }

}

export function convertDatetoThaiDate(date) {
  var _date = convertDateDBtoDatePickerNoTime(date)
  var dateSplit = _date.toString().split("-");
  // 2021-09-16
  return dateSplit[2] + " " + convertMonthtoThaiMonth(dateSplit[1]) + " " + convertYeartoThaiYear(dateSplit[0])
}

export function convertYeartoThaiYear(year) {
  return parseInt(year) + 543
}

export function convertMonthtoThaiMonth(month) {
  switch (month) {
    case "01":
      return "มกราคม"
    case "02":
      return "กุมภาพันธ์"
    case "03":
      return "มีนาคม"
    case "04":
      return "เมษายน"
    case "05":
      return "พฤษภาคม"
    case "06":
      return "มิถุนายน"
    case "07":
      return "กรกฎาคม"
    case "08":
      return "สิงหาคม"
    case "09":
      return "กันยายน"
    case "10":
      return "ตุลาคม"
    case "11":
      return "พฤศจิกายน"
    case "12":
      return "ธันวาคม"
    default:
      return "NAN"
  }
}

export function convertDatetoAddDB(date) {
  var dateSplit = date.split(" ");
  return dateSplit[0] + "T" + dateSplit[1] + "+00:00";
}

export async function getIPAddress() {
  const res = await axios.get('https://geolocation-db.com/json/')
  // console.log(res.data);
  // return res.data
  return "country_code:" + res.data.country_code + ",country_name:" + res.data.country_name + ",city:" + res.data.city + ",postal:" + res.data.postal
    + ",latitude:" + res.data.latitude + ",longitude:" + res.data.longitude + ",IPv4:" + res.data.IPv4 + ",state:" + res.data.state
  // setIP(res.data.IPv4)
  // return
}
export function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}


export function bytesToMB(bytes) {
  return Number.parseFloat(bytes / (1024 * 1024)).toFixed(2);
}


export async function getDatediff(startDate) {

  const timeEnd = moment();
  const newStartDate = new Date(startDate);
  const newEndDate = new Date(timeEnd);
  const one_day = 1000 * 60 * 60 * 24;
  let result
  result = Math.ceil((newStartDate.getTime() - newEndDate.getTime()) / (one_day))
  console.log('date Converter result', result)


  return result - 1;
}


export function getCurrentDate(separator = '') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}
