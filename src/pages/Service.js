import "../style/global.css";

function Service() {
  return (
    <div className="wrapper_1">
      <div className="container">
      <h1>С чего начать?</h1>
      <div className="row">
        <div className="col-6">
          <div>
            <h2>1</h2>
            <p>Скачайте наше приложение из Play Market</p>
          </div>
          <div>
            <h2>2</h2>
            <p>Зарегистрируйтесь в приложении или войдите в ваш аккаунт</p>
          </div>
          <div>
            <h2>3</h2>
            <p>
              Привяжите дебетовую карту на экране профиля (пока поезди
              бесплатны)
            </p>
          </div>

          <div>
            <h2>4</h2>
            <p>Отсканируйте QR-код на руле велосипеда чтобы открыть замок</p>
          </div>
        </div>
        <div className="col-6">
          <div>
            <h2>5</h2>
            <p>После того как замок откроется можно начинать поездку\</p>
          </div>
          <div>
            <h2>6</h2>
            <p>Для окончания аренды закройте блокиратор потянув ручку вниз</p>
          </div>
          <div>
            <h2>7</h2>
            <p>В приложении отобразится информация о вашей поездке</p>
          </div>
          <div>
            <h2>8</h2>
            <p>Оплата поездки будет произведена автоматически</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Service;
