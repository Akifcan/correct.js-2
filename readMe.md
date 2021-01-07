### Example

### Watch [here](link)

```
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
```