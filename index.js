'use strict'

const { formatMessage } = use('Antl')

const limitValidation = [
  'required',
  'email',
  'exists',
  'url',
  'confirmed',
  'integer',
  'date',
  'boolean',
  'string',
  'unique',
  'number',
  'alpha'
]

const validatorMessage = (rules) => {
  let messages = {}

  for (const property in rules) {
    messages = validatorMapping(rules[property].split('|'), property, messages)
  }
  return messages
}

const validatorMapping = (rules, property, messages) => {
  for (const rule of rules) {
    const key = rule.split(':')[0]
    if (limitValidation.includes(key)) {
      messages[`${property}.${key}`] = formatMessage(`validation.${key}`, { attribute: property })
    }
  }
  return messages
}