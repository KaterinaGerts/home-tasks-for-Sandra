console.log(123);

//***TO BOOLEAN ***/

// любое строчное значение К БУЛЮ
let value = 'Bla Bla Bla';

// 1й способ
let toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);

// любое строчное число К БУЛЮ
value = '123';

// 1й способ
toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);


// строка с пробелом К БУЛЮ
value = ' ';

// 1й способ
toBoolean = Boolean(value);
console.log(`строка с пробелом $(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных строка с пробелом $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`строка с пробелом $(value), через !!: `, toBoolean);
console.log(`тип данных строка с пробелом $(value), через !!: `, typeof toBoolean);

// число К БУЛЮ
value = 0;

// 1й способ
toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);

// число К БУЛЮ
value = 1;

// 1й способ
toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);

// NaN К БУЛЮ
value = NaN;

// 1й способ
toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);

// Infinity К БУЛЮ
value = Infinity;

// 1й способ
toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);

//************//

//UNDEFINED к числу

value = undefined;

// 1й способ
toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);

//************//

//NULL к числу

value = null;

// 1й способ
toBoolean = Boolean(value);
console.log(`$(value), через конструктор Boolean: `, toBoolean);
console.log(`тип данных $(value), через конструктор Boolean: `, typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`$(value), через !!: `, toBoolean);
console.log(`тип данных $(value), через !!: `, typeof toBoolean);