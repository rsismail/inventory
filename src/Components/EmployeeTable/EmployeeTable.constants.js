export const INITIAL_STATE = {
    employeeTableData: [
      {
        email: 'johndoe@gmail.com',
        name: 'John Doe',
        employeeId: '1',
        phoneNumber: '9890483985',
        jobRole: 'Director of Engineering' 
      },
      {
        email: 'emily@gmial.com',
        name: 'Emily',
        employeeId: '2',
        phoneNumber: '938449285',
        jobRole: 'CEO'
      },
      {
        email: 'kate@gmail.com',
        name: 'Kate',
        employeeId: '3',
        phoneNumber: '828473784',
        jobRole: 'Chief Architect'
      },
],
    employeeFormData: {
        email: '',
        name: '',
        employeeId: '',
        phoneNumber: '',
        jobRole: 'null'
    },
};
export const options = [
  {
      value: "CEO",
      label: "CEO"
  },
  {
      value: "CTO",
      label: "CTO"
  },
  {
      value: "CIO",
      label: "CIO"
  },
  {
      value: "VP of Product Management",
      label: "VP of Product Management"
  },
  {
      value: "Product Manager",
      label: "Product Manager"
  },
  {
      value: "VP of Marketing",
      label: "VP of Marketing"
  },
  {
      value: "Director of Engineering",
      label: "Director of Engineering"
  },
  {
      value: "Chief Architect",
      label: "Chief Architect"
  },
  {
      value: "Software Architect",
      label: "Software Architect"
  },
  {
      value: "Engineering Manager",
      label: "Engineering Manager"
  },
  {
      value: "Technical Lead/Team Lead",
      label: "Technical Lead/Team Lead"
  },
  {
      value: "Principal Software Engineer",
      label: "Principal Software Engineer"
  },
  {
      value: "Senior Software Engineer",
      label: "Senior Software Engineer"
  },
  {
      value: "Software Engineer",
      label: "Software Engineer"
  },
  {
      value: "Software Developer",
      label: "Software Developer"
  },
  {
      value: "Junior Software Developer",
      label: "Junior Software Developer"
  },
  {
      value: "Intern Software Developer",
      label: "Intern Software Developer"
  }
];