function setWebhook() {
  let resp = UrlFetchApp.fetch(`https://api.telegram.org/bot${token}/setWebhook?url=${api_link}`);
  Logger.log(resp);
}

function deletWebhook() {
  let resp = UrlFetchApp.fetch(`https://api.telegram.org/bot${token}/deleteWebhook?url=${api_link}`);
  Logger.log(resp);
}

function sendText(chat_id, text, keyboard) {
  let payload = {
    'method': 'sendMessage',
    'chat_id': String(chat_id),
    'text': text,
    'parse_mode': 'HTML',
    reply_markup : JSON.stringify(keyboard)
  }
  let options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : JSON.stringify(payload),
    muteHttpExceptions: true,
  };
  let url = `https://api.telegram.org/bot${token}/`;
  UrlFetchApp.fetch(url, options)
};

function timer(data_day, data_month) {
  counter_day = 0;
  counter_month = 0;
  if (data_day >= 10) {
    counter_day = '';
  } else if ((data_month + 1) >= 10) {
    counter_month = '';
  };
}

function ifer(text, chat_id) {
  if (text === '/start') {
    sendText(chat_id, 'Привет студент КИГМ23!\nВыбери свой курс и свою группу, бот выдаст тебе твоё рассписание на сегодня!', key_hello);
  }else if (text === 'Первый курс') {
      sendText(chat_id, 'Выбери свою группу', key_first);
  }else if (text === 'Второй курс') {
      sendText(chat_id, 'Выбери свою группу', key_second);
  }else if (text === 'Третий курс') {
      sendText(chat_id, 'Выбери свою группу', key_third);
  }else if (text === 'Четвёртый курс') {
      sendText(chat_id, 'Выбери свою группу', key_four);
  }else if (text === 'Назад') {
    sendText(chat_id, "Можешь выбрать другой курс и другую группу", key_hello);
  }else if (text === 'del') {
    sendText(chat_id, 'delete', key_delete);
  }
};

let key_hello =
  {
    "keyboard": [
        [{text: "Первый курс"}, {text: "Второй курс"}],
        [{text: "Третий курс"}, {text: "Четвёртый курс"}],
    ],
    resize_keyboard: true,
};

let key_delete = {
  "remove_keyboard": true,
};

let key_first = 
  {
    "keyboard": [
      [{text: 'Назад'}],  
      [{text: '11ГД'}, {text: '11ИС'}, {text: '11КЛ'}, {text: '11П'}],
      [{text: '11РМ'}, {text: '11СХ'}, {text: '12ГДк'},
      {text: '12ИСк'}], 
    ],
  resize_keyboard: true,
};

let key_second = 
  {
    "keyboard": [
      [{text: 'Назад'}], 
      [{text: '22ГД'}, {text: '21ГД'}, {text: '23ГД'}],
      [{text: '21СХ'}, {text: '21ИС'}, {text: '22ИС'}], 
      [{text: '21РМ'}, {text: '21КЛ'}, {text: '21П'}],
    ],
  resize_keyboard: true,
};

let key_third = 
  {
    "keyboard": [
      [{text: 'Назад'}],  
      [{text: '31ГД'}, {text: '32ГД'}, {text: '31УМД'}],
      [{text: '31СХ'}, {text: '31РМ'}, {text: '31ММР'}],
      [{text: '32ИС'}, {text: '32РМ'},  {text: '31КЛ'}], 
      [{text: '31П'}, {text: '31ИС'}],
    ],
  resize_keyboard: true,
};

let key_four = 
  {
    "keyboard": [
      [{text: 'Назад'}], 
      [{text: '42ГД'}, {text: '41КСК'}], [{text: '42ИС'},
      {text: '41М'}],
    ],
  resize_keyboard: true,
};

function switcher(text) {
  if (text === '11ГД') {
    group = 'C2:C6';
  }else if (text === '11ИС') {
    group = 'D2:D6';
  }else if (text === '11КЛ') {
    group = 'E2:E6';
  }else if (text === '11П') {
    group = 'F2:F6';
  }else if (text === '11РМ') {
    group = 'G2:G6';
  }else if (text === '11СХ') {
    group = 'H2:H6';
  }else if (text === '12ГДк') {
    group = 'I2:I6';
  }else if (text === '12ИСк') {
    group = 'J2:J6';
  }else if (text === '22ГД') {
    group = 'K2:K6';
  }else if (text === '21ГД') {
    group = 'L2:L6';
  }else if (text === '23ГД') {
    group = 'M2:M6';
  }else if (text === '21СХ') {
    group = 'N2:N6'
  }else if (text === '21ИС') {
    group = 'O2:O6';
  }else if (text === '22ИС') {
    group = 'P2:P6';
  }else if (text === '21РМ') {
    group = 'Q2:Q6';
  }else if (text === '21КЛ') {
    group = 'R2:R6';
  }else if (text === '21П') {
    group = 'S2:S6';
  }else if (text === '31ГД') {
    group = 'T2:T6';
  }else if (text === '32ГД') {
    group = 'U2:U6';
  }else if (text === '31УМД') {
    group = 'V2:V6';
  }else if (text === '31СХ') {
    group = 'W2:W6';
  }else if (text === '31РМ') {
    group = 'X2:X6';
  }else if (text === '31ММР') {
    group = 'C8:C12';
  }else if (text === '32ИС') {
    group = 'D8:D12';
  }else if (text === '31ИС') {
    group = 'E8:E12';
  }else if (text === '32РМ') {
    group = 'F8:F12';
  }else if (text === '31КЛ') {
    group = 'G8:G12';
  }else if (text === '31П') {
    group = 'H8:H12';
  }else if (text === '42ГД') {
    group = 'I8:I12';
  }else if (text === '41КСК') {
    group = 'J8:J12';
  }else if (text === '42ИС') {
    group = 'K8:K12';
  }else if (text === '41М') {
    group = 'L8:L12';
  }
};

