Необходимо самому написать на React + Redux следующее приложение:

**Демо:** https://...app/

Простая форма создания заказа (не суть важно чего). Необходимо сохранить значения из всех шагов в Redux и вывести в итоговом результате всю информацию.
При нажатии на "**Оплатить**", необходимо отправлять запрос на сервер и сохранять заказ.
**Главная задача** - сделать точно такой же функционал, как в демо. Вёрстка на усмотрение.
Для того, чтобы использовать такую же стилизацию, как в этой демке, используйте библиотеку Material UI.

Первые два пункта обязательны для выполнения, третий - по желанию.

### 1. Отправлять запрос через Redux

Недостаточно просто создать внутри компонента функцию, которая будет будет отправлять запрос в Mockapi. Необходимо отправлять action в редакс, который будет асинхронно отправлять запрос на сервер на сохранение этого заказа.
Для отправки асинхронных экшенов, нужно использовать библиотеку `redux-thunk`.
Отправляемый JSON должен быть следующие вида:
formData: {
firstName: '',
lastName: '',
city: '',
country: '',
phone: '',
deliveryMethod: '',
paymentMethod: '',
}

### 2. Разбить экшен и редюсер

Для более грамотного структурирования проекта, создайте папку `redux` и поместите туда, как минимум, два файла: `actions.js` и `reducer.js`
`reducer.js` - в этом файле должен храниться только сам редюсер и `inistalState`.
`actions.js` - в нём будут храниться все экшены, которые потом можно переиспользовать. И вместо того, чтобы каждый раз помещать в `dispatch` новый объект, просто используйте функции, которые создает экшн-объект.

### 3. Подключить валидацию для форм (опционально)

Для этого можно использовать библиотеку react-hook-form или Formik.
