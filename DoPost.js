const token = '5954525042:AAF5FNogs9Fu3cYkTG9Qc2zdTNOobQ4vrcE';
let api_link = 'https://script.google.com/macros/s/AKfycbzA7aflkr1oKIrwV8e-Oeis0zF4jpxtEhb2fEdo8bGStpaqXSa5Nlg06AsOHnopK7bj/exec';
let arr = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

function doPost(e) {
  let contents = JSON.parse(e.postData.contents);
  let chat_id = contents.message.chat.id;
  let text = contents.message.text;
  ifer(text, chat_id);
  let time = new Date();
  let data_day = time.getDate();
  let data_month = time.getMonth();
  timer(data_day, data_month);
  const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1rlCek9xZ8Lzqd0Ft9tJu6GYFzbDIiWVAosB3kBg67Eg/edit#gid=1886049139');
  switcher(text);
  let sheet = ss.getSheetByName(`${arr[time.getDay()]}_${counter_day}${Math.trunc(data_day)}.${counter_month}${Math.trunc(time.getMonth() + 1)}.${Math.trunc(time.getFullYear() - 2000)}`);
  let range = sheet.getRange(group).getValues();
  if (time.getDay == 1) {
    dispatched = encodeURIComponent(`Ваша группа: ${range[0]}\nПервая пара:\n9:30-11:00\n${range[1]}\nВторая пара:\n11:20-13:10\n${range[2]}\nТретья пара:\n13:30-15:20\n${range[3]}\nЧетвёртая пара:\n15:30-17:00\n${range[4]}`);
  }else {
    dispatched = encodeURIComponent(`Ваша группа: ${range[0]}\nПервая пара:\n9:00-10:30\n${range[1]}\nВторая пара:\n10:50-12:40\n${range[2]}\nТретья пара:\n13:00-14:50\n${range[3]}\nЧетвёртая пара:\n15:00-16:30\n${range[4]}`);
  }
  UrlFetchApp.fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${dispatched}`);
};
