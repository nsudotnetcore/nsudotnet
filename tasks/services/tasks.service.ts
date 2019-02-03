import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

private tasks: TaskData[];

constructor() {
  const task1MainDescription = new TaskMainDescription([
    // tslint:disable-next-line:max-line-length
    'Напишите программу, запрашивающую у пользователя дату и выводящую календарь на месяц, заданный этой датой. При вводе даты в неправильном формате программа должна сообщать об этом и завершаться.',
    // tslint:disable-next-line:max-line-length
    'Сверху от дней должна выводиться раскладка по дням недели. Выходные должны подсвечиваться красным цветом. Введенная пользователем дата должна подсвечиваться синим фоном. Текущая дата должна подсвечиваться серым фоном.',
    'Снизу от календаря должно выводиться число рабочих дней в заданном месяце без учета праздников.'
  ]);
  const task1Materials = new TaskMaterials([
    new LinkInfo('Цвет фона и цифр', 'https://msdn.microsoft.com/ru-ru/library/system.console.backgroundcolor.aspx'),
    new LinkInfo('DateTime.TryParse', 'https://msdn.microsoft.com/ru-ru/library/ch92fbc1.aspx'),
    new LinkInfo('Escape-последовательности', 'https://msdn.microsoft.com/ru-ru/library/h21280bw.aspx')
  ]);
  const task1 = new TaskData('Календарик', 'Динамический текстовый календарь', task1MainDescription, task1Materials, 2);

  const task2MainDescription = new TaskMainDescription([
    // tslint:disable-next-line:max-line-length
    'Напишите простую игру на угадывание пользователем задуманное программой число.',
    // tslint:disable-next-line:max-line-length
    'При старте программа должна выводить на консоль запрос на ввод имени пользователя, а после введения имени – генерировать какое-либо число от 0 до 50 и предлагать пользователю угадать его и запрашивать его вариант ответа.',
    'Программа должна сообщать меньше ли введенное число чем загаданное или больше.',
    // tslint:disable-next-line:max-line-length
    'После каждой четвертой неправильной попытки, программа должна сообщать пользователю, используя его имя, что тот молодец. Придумайте несколько подбадривающих или весёлых фраз, захардкодьте их в массиве и выбирайте произвольную.',
    'При угадывании правильного варианта, программа должна выводить пользователю:',
    '- Количество попыток угадывания, совершенное им',
    '- Всю историю угадываний с пометкой больше/меньше рядом',
    '- Время в минутах, которое пользователь затратил на весь процесс',
    'При вводе “q” вместо очередного варианта ответа программа должна извиняться и завершаться.'
  ]);
  const task2Materials = new TaskMaterials([
    new LinkInfo('DateTime', 'https://msdn.microsoft.com/ru-ru/library/system.datetime.aspx'),
    new LinkInfo('TimeSpan', 'https://msdn.microsoft.com/ru-ru/library/system.timespan.aspx'),
    new LinkInfo('Console', 'https://msdn.microsoft.com/ru-ru/library/system.console.aspx'),
    new LinkInfo('Random', 'https://msdn.microsoft.com/ru-ru/library/system.random.aspx'),
    new LinkInfo('int.Parse', 'https://msdn.microsoft.com/ru-ru/library/system.int32.parse.aspx'),
    new LinkInfo('StringBuilder', 'https://docs.microsoft.com/ru-ru/dotnet/standard/base-types/stringbuilder'),
    // new LinkInfo('string.Format', 'https://msdn.microsoft.com/ru-ru/library/system.string.format.aspx'),
    // new LinkInfo('Форматирование строк', 'https://msdn.microsoft.com/ru-ru/library/txafckwd.aspx')
  ]);
  const task2 = new TaskData('Угадайка', 'Простая задачка, помогающая понять основы C#', task2MainDescription, task2Materials, 2);

  const task3MainDescription = new TaskMainDescription([
    // tslint:disable-next-line:max-line-length
    'Command-line утилита для подсчета строк кода в проекте, отфильтровывающая пустые строки и комментарии. Опционально — сделать архитектуру плагинов, позволяющую описывать структуру комментариев для произвольного языка.',
    // tslint:disable-next-line:max-line-length
    'Программа должна принимать параметром командной строки тип учитываемых файлов (например, *.cs). После запуска она должна обходить текущую директорию и все вложенные директории, искать в них файлы заданного типа и подсчитывать в них количество осмысленных строк. Суммарное количество строк во всех учтенных файлах должно быть выведено на экран.'
  ]);
  const task3Materials = new TaskMaterials([]);
  const task3 = new TaskData('Счетчик строк'
                , 'Маленькая утилита, которая считает строки кода во всех C#-файлах в заданной директории'
                , task3MainDescription, task3Materials, 2);

  const task4MainDescription = new TaskMainDescription([
    // tslint:disable-next-line:max-line-length
    'Создать .NET Core приложение c CRUD операциями по работе с одной сущностью.',
    // tslint:disable-next-line:max-line-length
    'Можно без UI',
    'Важно: .Net Core, EF First, WebAPI'
  ]);
  const task4Materials = new TaskMaterials([]);
  const task4 = new TaskData('WebApi + EF'
                , ''
                , task4MainDescription, task4Materials, 2);

  const task5MainDescription = new TaskMainDescription([
    // tslint:disable-next-line:max-line-length
    'Работа с миграциями и Git.',
    'Сохранить все в Git.',
    '',
    'Отбранчевать отдельную ветку фичи.',
    'В ней добавить новое поле к сущности и возможность его редактирования.',
    'Создать миграцию.',
    '',
    'В основной ветке реализовать добавление другого поле и его редактирование. И добавить миграцию.',
    '',
    // tslint:disable-next-line:max-line-length
    'Студент должен быстро переключаться между ветками, откатывая до нужной миграции базу.',
    '',
    'Важно: .Net Core, EF First, WebAPI'
  ]);
  const task5Materials = new TaskMaterials([]);
  const task5 = new TaskData('Усложнение для (WebApi + EF)'
                , ''
                , task5MainDescription, task5Materials, 2);

  const task6 = new TaskData('Задача о ранце'
                , ''
                , null, null, 15);

  this.tasks = [task1, task2, task3, task4, task5, task6];
 }

public getTasks() {
  return this.tasks;
}


public getTask(id: number): TaskData {
  return this.tasks[id];
}
}

export class TaskData {
  constructor(public name: string, public shortDescription, public description: TaskMainDescription,
              public materials: TaskMaterials,
              public score: number) {}
}

export class TaskMainDescription {
  constructor(public textBlocks: string[]) {}
}

export class TaskMaterials {
  constructor(public links: LinkInfo[]) {}
}

export class LinkInfo {
  constructor(public name: string, public url: string) {}
}
