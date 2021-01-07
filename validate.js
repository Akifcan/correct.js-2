const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function validate(fields) {
    const errors = []
    fields.forEach(field => {
        const text = field.text.toString().trim()
        field.check.forEach((item, index) => {
            if (item == 'required') {
                if (text.length == 0) {
                    errors.push(field.messages[index])
                }
            }
            if (item == 'email') {
                if (!emailRegex.test(text)) {
                    errors.push(field.messages[index])
                }
            }
            if (item.includes('minLength')) {
                const minLength = parseInt(item.split(':')[1])
                if (text.length < minLength) {
                    errors.push(field.messages[index])
                }
            }
            if (item.includes('maxLength')) {
                const maxLength = parseInt(item.split(':')[1])
                if (text.length > maxLength) {
                    errors.push(field.messages[index])
                }
            }
            if (item.includes('startsWith')) {
                const starts = item.split(':')[1]
                if (!text.startsWith(starts)) {
                    errors.push(field.messages[index])
                }
            }
            if (item.includes('endsWith')) {
                const ends = item.split(':')[1]
                if (!text.endsWith(ends)) {
                    errors.push(field.messages[index])
                }
            }
            if (item.includes('regex')) {
                const testRegex = new RegExp(item.split(':')[1], 'g')
                if (!testRegex.test(text)) {
                    errors.push(field.messages[index])
                }
            }
            if (item == 'number') {
                if (isNaN(text)) {
                    errors.push(field.messages[index])
                }
            }
            if (item == 'string') {
                if (typeof field.text != 'string') {
                    errors.push(field.messages[index])
                }
            }
        })
    })
    return errors.length ? errors : true
}

const userName = 'akifcan'
const email = 'akif@test.com'
const phoneNumber = '(555)-555-22-22'
const postalCode = 35000

const result = validate(
    [
        {
            text: userName,
            check: ['required', 'maxLength:50', 'minLength:5', 'string'],
            messages: ['kullanıcı adını lütfen girin', 'isim en fazla 50 karakter olabilir', 'isim en az 5 karakter içermeli', 'isim j harfi ile başlamalı', 'isim sadece karakterlerden oluşmalı']
        },
        {
            text: email,
            check: ['required', 'email', 'endsWith:test.com'],
            messages: ['e-posta adresinizi lütfen girin', 'e-posta formatını hatalı girdiniz', 'e-posta adresi test.com ile bitmeli']
        },
        {
            text: phoneNumber,
            check: ['required', 'maxLength:15', 'minLength:15', 'regex:(\\([0-9]{3})\\)[-]([0-9]{3})[-]([0-9]{2}[-]([0-9]{2}))'],
            messages: ['lütfen telefon numaranızı girin', 'telefon numaranızı fazla girdiniz', 'telefon numaranızı fazla girdiniz', 'telefon numarası formatını hatalı girdiniz']
        },
        {
            text: postalCode,
            check: ['required', 'number'],
            messages: ['posta kodunu lütfen girin', 'posta kodu rakam içermelidir']
        }
    ]
)

console.log(result);