import { useSelector } from 'react-redux';

function SummaryInfo() {
  const payer = useSelector(({ payer }) => payer);
  return (
    <>
      <h1>Информация</h1>
      <hr />
      <h3>Контактная информация:</h3>
      <ul>
        <li>Имя: {payer.firstName.trim()}</li>
        <li>Фамилия {payer.lastName.trim()}:</li>
        <li>Страна: {payer.country.trim()}</li>
        <li>Город: {payer.city.trim()}</li>
        <li>Номер телефона: {payer.phone.trim()}</li>
      </ul>
      <h3>Способ доставки:</h3>
      <ul>
        <li>{payer.deliveryMethod}</li>
      </ul>
      <h3>Оплата с помощью:</h3>
      <ul>
        <li>{payer.paymentMethod}</li>
      </ul>
    </>
  );
}

export default SummaryInfo;
