const Sequelize = require('sequelize');
const { sequelize, Student, Subject, Group } = require('./models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

//Student m:1 Group
//Student m:n  Subject

(async () => {
  try {
    //await sequelize.sync({force:true});

    //C INSERT - create
    //R SELECT - findAll, findByPk, findOne
    //U UPDATE - update (INSERT or UPDATE - upsert)
    //D DELETE - destroy

    /*const studentForInsert = {
      firstName: `Test999`,
      lastName: `Testovich999`,
      email: `test999@test.test`,
      passwordHash: bcrypt.hashSync(`999`, 10),
      birthday: new Date(`${999 % 10 + 1995}/${999 % 12 + 1}/${999 % 28 + 1}`),
      gender: 999 % 2 == 0 ? 'male' : 'female',
      groupId: 999 % 3 + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };*
    const createdStudent = await Student.create(studentForInsert);
    console.log('createdStudent :>> ', createdStudent);*/
    // SELECT * FROM "Students";
    //const foundStudents3 = await Student.findAll();

    //Пагинация
    //SELECT "id", "firstName", "lastName", "email", "passwordHash", "birthday", "gender", "groupId", "createdAt", "updatedAt" 
    //FROM "Students" AS "Student" LIMIT 10 OFFSET 10;

    //const foundStudents1 = await Student.findAll({ raw: true, limit: 10, offset: 10 });
    //const foundStudents2 = await Student.findAll({ attributes:{exclude:['firstName', 'lastName']},raw: true, limit: 10, offset: 10 });

    //Фильтрация
    // AND
    // const foundStudents4 = await Student.findAll({
    //   raw: true,
    //   where: {
    //     firstName: 'Test9', lastName: 'Testovich9'
    //   }
    // })
    //OR
    //SELECT "id", "firstName", "lastName", "email", "passwordHash", "birthday", "gender", "groupId", "createdAt", "updatedAt" 
    //FROM "Students" AS "Student"
    //WHERE("Student"."firstName" = 'Test10' OR "Student"."lastName" = 'Testovich66');
    // const foundStudents5 = await Student.findAll({
    //   raw: true,
    //   where: {
    //     [Op.or]: [{ firstName: 'Test10' }, { lastName: 'Testovich66' }]
    //   }
    // }
    // )

    //Найти студентов с id>10
    // const foundStudents6 = await Student.findAll({
    //   raw: true,
    //   where: {
    //     id: { [Op.gte]: 97 },
    //   },
    // });

    //Найти студентов с id=10 or id<=2
    // const foundStudents7 = await Student.findAll({
    //   raw: true,
    //   where: {
    //     [Op.or]: [{ id: { [Op.eq]: 10 } }, { id: { [Op.lte]: 2 } }]
    //   }
    // }
    // )
    // console.log('foundStudents', foundStudents7);

    // const foundStudent = await Student.findByPk(1, { raw: true });
    //console.log('foundStudent :>> ', foundStudent);

    // const updatedStudent = await Student.update({
    //   lastName: 'Ivanov'
    // }, {
    //   where: { id: 1 }
    // });
    //console.log('updatedStudent :>> ', updatedStudent);

    // const deletedStudent = await Student.destroy({ where: { firstName: 'Test999' } })
    //console.log('deletedStudent :>> ', deletedStudent);

    // Обновить всех студентов с id от 10 до 20: установить groupId = 1
    // const updatedStudents = await Student.update({ groupId: 1 }, { where: { id: { [Op.between]: [10, 20] } } })
    //console.log('updatedStudents :>> ', updatedStudents);

    // Удалить студентов с id 1, 5, 9
    // const deletedStudents = await Student.destroy({
    //   where: { id: { [Op.in]: [1, 5, 9] } },
    // });
    //console.log('deletedStudents :>> ', deletedStudents);

    // Associations & Magic Methods
     const stud2 = await Student.findByPk(2);
    //console.log('stud2.getGroup() :>> ', await stud2.getGroup());

    // Перевести 3го студента во 2 группу
    // const student3 = await Student.findByPk(3);
    // const gr2 = await Group.findByPk(2);
    //console.log('student3 =>', await student3.setGroup(gr2));

    // Найти студентов из 2 группы
    // console.log('gr2.getStudents() :>> ', await gr2.getStudents({raw:true, where: {id:{[Op.between]:[20,30]}}}));
    // Вывести, сколько во 2 группе студентов
    // const group2 = await Group.findByPk(2);
    // console.log(
    //   'Number of students in group 2 =>',
    //   await group2.countStudents(group2)
    // );

    
    const subjOfStud = await stud2.getSubjects({raw:true, attributes:['id', 'caption']});
    //console.log('subjOfStud :>> ', subjOfStud);

    // удалить инфо о том, что 1й студент прослушал 2-й предмет
    const student1 = await Student.findByPk(1);
    const subject2 = await Subject.findByPk(1);
    console.log('result =>', await student1.removeSubject(subject2));

  }
  catch (err) {
    console.log('err  :>> ', err);
  }
})()
