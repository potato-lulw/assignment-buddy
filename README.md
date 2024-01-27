WebApp Link : http://65.0.14.141/

# Assignment Buddy API

The API documentation. each POST request accepts data in req.body.


## API Reference

#### Generate Assignment

```http
  POST /api/generate
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `subject` | `string` | **Required**. Assignment subject prefix (ex. bis)|
| `number` | `string` | **Required**. Assignment number (ex. 1)|
| `qs` | `array(string)` | **Required**. Assignment questions as array|
| `download` | `boolean` | Download PDF right away if true|

```http
  RESPONSE ON SUCCESS 
  { 
  success : true, 
  data : "Assignment successfully created"
  }

  RESPONSE ON ERROR
  {
  success :  false,
  data : "Internal Server Error"
  }
```

#### Download Assignment

```http
  POST /api/download
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `subject` | `string` | **Required**. Assignment subject prefix (ex. bis)|
| `number` | `string` | **Required**. Assignment number (ex. 1)|

```http
  RESPONSE ON SUCCESS 
  downloads file on success

  RESPONSE ON ERROR
  {
  success :  false,
  data : "Assignment does not exist"
  }
```


#### Get totalassignments count of a subject

```http
  POST /api/totalassignments
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `subject`      | `string` | **Required**. subject prefix (ex. bis) |

```http
  RESPONSE ON SUCCESS 
  {
  success :  true,
  data : "Total Assignments : 3",
  total : 3
  }

```


## Authors

- [@mayur_hiwale](https://www.github.com/isenseaura)

