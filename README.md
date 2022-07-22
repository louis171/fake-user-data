
# Fake User Data API

This REST API is a simple fake user data generator designed for use when developing front end applications.

The returned data is localsied to the UK.


## Features

- ID / UUID
- User details
- Address/Location
- Login details
- Phone numbers
- Images


## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference

#### Get user

```http
  POST /api/get-user/${gender}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gender`      | `string` | **Optional**. Gender of the user |




## Tech Stack

Node, Express

[@faker-js/faker](https://github.com/faker-js/faker) is used to generate domain names.

[LoremFlickr](https://loremflickr.com/) is used for images.
## License

[MIT](https://github.com/louis171/keepsake-api/blob/main/LICENSE)

