Arduino(ESP8266) <--MQTT--> RPI  And to get Json 
===========================

**사용된 부품:**

RasberiPi4 (라즈베리파이)

Wemose D1 R2 ver 2.10 (ESP8266 내장 보드)<br>
DHT22 (온습도 센서)


>**Arduino**

https://github.com/Haiol/Ino_DHT_MQTT/tree/main

>**RPI**

Mosquitto
https://mosquitto.org/ 설치 <br>

설치방법:

```
  1)wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key
  2)sudo apt-key add mosquitto-repo.gpg.key
```
```
  3)cd /etc/apt/sources.list.d/
  4-1)sudo wget http://repo.mosquitto.org/debian/mosquitto-jessie.list
  4-2)sudo wget http://repo.mosquitto.org/debian/mosquitto-stretch.list
  4-3)sudo wget http://repo.mosquitto.org/debian/mosquitto-buster.list
```
  라즈베리파이 이미지로 만들었다면 buster 이다.<br>
<a href='https://www.raspberrypi.com/documentation/computers/getting-started.html'>라즈베리파이 이미지</a>
```
  5)apt-get update
  6)apt-ache search mosquitto
  7)apt-get install mosquitto
```

MariaDb 
https://mariadb.org/<br>
설치방법:
```
  sudo apt-get install mariadb-server mariadb-client
```
  root패스워드 반드시 지정해주세요
```
  sudo mariadb -u root -p
```
```mysql
  CREATE DATABASE `mydb`;
  connect mydb;
```
```mysql
  CREATE TABLE `tbl_messages` (
  `clientID` varchar(30) DEFAULT NULL,
  `topic` varchar(30) DEFAULT NULL,
  `message` varchar(30) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8  max_rows=1000000000000;
```
```mysql
  CREATE TABLE `tbl_userID` (
  `user_code` int(10) NOT NULL AUTO_INCREMENT,
  `clinet_id` varchar(20) DEFAULT NULL,
  `client_code` varchar(11) DEFAULT NULL,
  primary key(`user_code`,`clinet_id`,`client_code`)
  ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;
```
이제 ~$ 에서 파일 받아주시면됩니다.
```
git clone https://github.com/Haiol/searchMyMqtt.git
```

>실행방법


```
  forever start -c "npm start" ./
```

**JSON값 얻는방법**
/getData/[clientID]
/getData/[clientID]/limit/[숫자] #갯 수 제한
/getData/[clientID]/topic/[topic] #부모 토픽으로부터 검색
/getData/[clientID]/topic/[topic]/limit/[숫자]

