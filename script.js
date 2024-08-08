// 'use strict';

// 1.  Створіть параграф в html і додайте в нього тест-рибу. Виведіть в консоль тільки сам текст.
// let text = document.querySelector('#p1');
// console.log(text.textContent);

// 2. Створити функцію, яка приймає як аргумент назву тега і повертає інформацію (у вигляді об'єкта) про
//   тип вузла, про ім'я вузла і про кількість дочірніх вузлів (якщо дітей немає - 0). Для цього вузол має
//    бути в html.
// nodeInfo('ul')

// const nodeInfo = tag => {
// 	const element = document.querySelector(tag);
// 	return {
// 		type: element.nodeType,
// 		nodeName: element.nodeName,
// 		count: element.childNodes,
// 	};
// };
// console.log(nodeInfo('.info'));

// 3. Напишіть функцію, яка приймає селектор, по якому можна знайти список ul, та повертає текстовий вмісту
//  посилань усередині списку у вигляді масиву: getTextFromUl('.list') ---> ["Link1", "Link2", "Link3"]

// let getTextFromUl = selector => {
// 	let elem = document.querySelector(selector);
// 	let links = elem.querySelectorAll('a');
// 	let linksText = [];

// 	links.forEach(link => {
// 		linksText.push(link.textContent);
// 	});
// 	return linksText;
// };
// console.log(getTextFromUl('.list'));

// 4. Створіть кнопку за допомогою JavaScript і задайте їй атрибут data-color зі значенням "red". Виведіть
// її першим елементом в body. Потім виведіть значення цього атрибута в консоль.

// let button = document.createElement('button');
// button.setAttribute('data-color', 'red');
// document.body.prepend(button);
// console.log(button.dataset.color);

// 5. Створіть список <ul> з трьома елементами <li>. Встановіть для кожного елемента атрибут data-index з
//  відповідними значеннями 1, 2, 3. Потім виведіть значення атрибута data-index для кожного елемента списку
//   в консоль.

// let tagUl = document.createElement('ul');
// document.body.prepend(tagUl);
// for (let i = 1; i <= 3; i++) {
// 	let tagLi = document.createElement('li');
// 	tagLi.setAttribute('data-index', i);
// 	tagLi.textContent = i;
// 	tagUl.append(tagLi);
// 	console.log(tagLi.dataset.index);
// }

// 6. Створіть список <ul> з елементами <li>. За допомогою властивості hidden зробіть другий елемент списку
//  невидимим.

// let tagUl = document.createElement('ul');
// for (let i = 1; i <= 3; i++) {
// 	let tagLi = document.createElement('li');
// 	tagLi.textContent = `пункт ${i}`;
// 	tagUl.append(tagLi);
// }
// document.body.append(tagUl);
// let tagLi = tagUl.querySelectorAll('li');
// if (tagLi.length > 1) {
// 	tagLi[1].hidden = true;
// }

// 7. Створіть зображення <img> із початковим атрибутом src. Через 3 секунди змініть значення властивості
//  src на інше зображення і переконайтеся, що зображення оновлюється на сторінці.

// let img = document.createElement('img');
// img.setAttribute(
// 	'src',
// 	'https://habrastorage.org/webt/nt/sn/p0/ntsnp0tdw5g9f-dowf8toer5smc.png'
// );
// img.setAttribute('style', 'width:300px; height: 200px');
// document.body.append(img);
// setTimeout(() => {
// 	img.setAttribute(
// 		'src',
// 		'https://training.by/static/news/255/self-study_03375353.png'
// 	);
// }, 3000);

// 8. Створіть посилання <a> з атрибутом. Змініть значення властивості target на _blank і переконайтеся,
// що посилання відкривається в новій вкладці.

// let link = document.createElement('a');
// link.setAttribute('href', 'https://uk.javascript.info/modifying-document');
// link.textContent = 'Змініть значення властивості target на _blank';
// link.setAttribute('target', '_blank');
// document.body.append(link);

// 9. Всі завдання зі статті https://uk.javascript.info/dom-attributes-and-properties
//9.1. Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа та прочитати його значення.
// let div = document.querySelector('div');
// console.log(div.dataset.widgetName);

// 9.2. Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style. Посилання є зовнішнім, якщо:
// В його href є ://
// Але не починається з http://internal.com.

// let links = document.querySelectorAll('a');
// links.forEach(link => {
// 	let href = link.getAttribute('href');
// 	if (href && href.includes('://') && !href.startsWith('http://internal.com')) {
// 		link.style.color = 'orange';
// 	}
// });

// 10. Створіть свій кастомний alert зі стилями, які подобаються. Html використовувати не можна. Alert
// має з'явитись через 3 секунди після оновлення сторінки і почати плавно моргати кожну секунду.
// showNotification({
//   top: 10, // 10px від верха вікна (усталено має бути 0px)
//   right: 10, // 10px від правого краю вікна (усталено — 0px)
//   html: 'Hello!', // HTML-код сповіщення
//   className: 'welcome' // додатковий клас для елемента div (необов'язково)
// });

// let showNotification = ({ top = 0, right = 0, html = '', className = '' }) => {
// 	let div = document.createElement('div');
// 	div.style.cssText = `
//   width: 150px;
//   height: 50px;
//   position: absolute;
//   background-color:yellow;
//   padding:10px;
//   border-radius:10px;
//   text-align:center`;
// 	div.style.top = top + 'px';
// 	div.style.right = right + 'px';
// 	div.innerHTML = html;
// 	div.className = className;
// 	document.body.prepend(div);
// 	setInterval(() => {
// 		div.style.opacity = div.style.opacity === '1' ? '0' : '1';
// 	}, 1000);
// };

// setTimeout(() => {
// 	showNotification({
// 		top: 10,
// 		right: 10,
// 		html: 'Hello!',
// 		className: 'welcome',
// 	});
// }, 3000);
