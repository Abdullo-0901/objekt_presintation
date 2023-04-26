# objekt_presintation
> Дар JavaScript, объект як объекти мустақил буда, дорои хосиятҳо ва навъи . Масалан, онро бо коса муқоиса кунед. Коса ашёест, ки дорои хосиятҳост. Коса дорои ранг, тарҳ, вазн, маводе, ки аз он сохта шудааст ва ғайра. Ҳамин тариқ, объектҳои JavaScript метавонанд хосиятҳое дошта бошанд, ки хусусиятҳои онҳоро муайян мекунанд
 > <h1>Create object</h1>

 ![](./img/Screenshot_1.png)

 > <h1>Methods object</h1>
 объект 3 метод дора ки онхо  <br>
1 .Object. keys() <br>
2.Object.entries() <br>
3.Object. values()<br>
> <h1>Objekt enteries()</h1>
Object.entries() массиверо бар мегардонад ма property-ҳо дарун будаашроҳам дар даруни масив гирифта мебарорад
Object.entries()массиверо бар мегардонад, ки унсурҳои он массивҳои мувофиқ ба ҷуфтҳои калиди-арзиши дорои сатри калидӣ буда, мустақиман дар object. Ин ба такрор кардан бо ҳалқа монанд аст for...in, ба истиснои он ки for...in ҳалқа хосиятҳоро дар занҷири прототип низ номбар мекунад. Тартиби массиве, ки аз ҷониби баргардонида мешавад, Object.entries()ҳамон тавре аст, ки for...in давра пешниҳод мекунад.

![](./img/Screenshot_2.png)

> objekt.keys()
Object.keys()массиверо бар мегардонад, ки унсурҳои он сатрҳои мувофиқи номҳои моликияти рақамии сатри калидӣ буда, мустақиман дар object.
![](./img/Screenshot_3.png)
><h1> OBJEKT VALUES()</h1> <br>
Object.values() returns an array whose elements are values of enumerable string-keyed properties found directly upon object.
![](./img/Screenshot_4.png)

> <h1>Spread</h1>
Деструктуризатсия барои сохтани тағирёбандаҳо аз ҷузъҳои массив ё хосиятҳои объект истифода мешавад. Синтаксиси паҳншуда барои кушодани такроршавандаҳо ба монанди массивҳо, объектҳо ва зангҳои функсия истифода мешавад . Синтаксиси параметри истироҳат массивро аз шумораи номуайяни арзишҳо эҷод мекунад.
> <h1>Destructuring</h1>
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

![](./img/Screenshot_5.png)

> <h1> Spread </h1>
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.
![](./img/Screenshot_6.png)

> <h1> How the this keyword works</h1> <br>
Калимаи калидии "ин" ба объекте дахл дорад, ки порчаи ҷории кодро иҷро мекунад. Он ба объекте ишора мекунад, ки вазифаи ҷориро иҷро мекунад . Агар функсияи истинодшаванда вазифаи муқаррарӣ бошад, "ин" ба объекти глобалӣ ишора мекунад.
![](./img/Screenshot_7.png)

> <h1> newDate </h1>
Объектҳои JavaScript Dateяк лаҳзаи ягонаи вақтро дар формати мустақили платформа муаррифӣ мекунанд. DateОбъектҳо адади интегралиро фаро мегиранд, ки миллисонияҳоро аз нисфи шаби аввали 1 январи соли 1970, UTC (давр ) ифода мекунад.

> Creating Date Objekt <br>
Theare are four ways to create a date objekt <br>
1) New Date()<br>
2) New Date(milliseconds)<br>
3) New Date(Date string)<br>
4) New Date(year,month,day,hours,hours,minutes,seconds,milliseconds)<br>

> new Date() <br>
![](./img/Screenshot_8.png)

> milliseconds <br>
![](./img/Screenshot_9.png)

new Date() <br>
new Date(value)<br>
new Date(dateString)<br>
new Date(dateObject)<br>
new Date(year, monthIndex)<br>
new Date(year, monthIndex, day)<br>
new Date(year, monthIndex, day, hours)<br>
new Date(year, monthIndex, day, hours, minutes)<br>
new Date(year, monthIndex, day, hours, minutes, seconds)<br>
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)<br>
![](./img/Screenshot_10.png)
