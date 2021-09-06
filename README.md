# Adonis Message Validation Generator

Adonis for message validation generator. This package is made to shorten repetitive code, 
just like Laravel message validation is generated automatically

## Limit Rules Validation 
- required
- email
- exists
- url
- confirmed
- integer
- date
- boolean
- string
- unique
- number
- alpha

## Before using this package, it is mandatory to install it first 
- **Validator** - [Validator](https://legacy.adonisjs.com/docs/4.1/validator)
- **Internationalization** - [Internationalization](https://legacy.adonisjs.com/docs/4.1/internationalization) 

## How To Use
Installation
```bash
npm i adonis-message-validation-generator --save
```

Use Validator
```javascript
const validatorMessage = require('adonis-message-validation-generator')

validatorMessage(rules)
```

Stored inside the resources/locales directory
```bash
└── resources
  └── locales
      ├── en
      │ ├── ...
      │ └── validation.json
      └── fr
```

Example validation.json
```json
{
  "required": "The { attribute } field is required.",
  "email": "The { attribute } must be a valid email address.",
  "exists": "The selected { attribute } is unavailable.",
  "url": "The { attribute } format is invalid.",
  "confirmed": "The { attribute } confirmation does not match.",
  "integer": "The { attribute } must be an integer.",
  "date": "The { attribute } is not a valid date.",
  "boolean": "The { attribute } field must be true or false.",
  "string": "The { attribute } must be a string.",
  "unique": "The { attribute } has already been taken.",
  "number": "The { attribute } must be a number.",
  "alpha": "The { attribute } may only contain letters."
}
```

#### Before
```javascript
const { formatMessage } = use('Antl')

get messages () {
  return {
    'username.required': formatMessage('validation.required', { attribute: 'username' }),
    'username.exists': formatMessage('validation.exists', { attribute: 'username' }),
    'password.required': formatMessage('validation.required', { attribute: 'password' })
  }
}
```
#### After
```javascript
const validatorMessage = require('adonis-message-validation-generator')

// can be combined with other messages
get messages () {
  return validatorMessage(this.rules)
}
```

#### Before
```javascript
const { validateAll } = use('Validator')
const { formatMessage } = use('Antl')

const rules = {
  username: 'required|exists:users,email',
  password: 'required'
}

const messages = {
  'username.required': formatMessage('validation.required', { attribute: 'username' }),
  'username.exists': formatMessage('validation.exists', { attribute: 'username' }),
  'password.required': formatMessage('validation.required', { attribute: 'password' })
}

const validation = await validateAll(request.all(), rules, messages)

if (validation.fails()) {
  return validation.messages()
}
```
#### After
```javascript
const validatorMessage = require('adonis-message-validation-generator')

const { validateAll } = use('Validator')

const rules = {
  username: 'required|exists:users,email',
  password: 'required'
}

const validation = await validateAll(request.all(), rules, validatorMessage(rules))

if (validation.fails()) {
  return validation.messages()
}
```

## License
Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.