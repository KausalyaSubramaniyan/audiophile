export const inputCriteria = {
  name: {
    minLength: 3,
  },
  email: {
    pattern: /\S+@\S+\.\S+/,
  },
  phoneNum: {
    len: 10,
  },
  address: {
    minLength: 3,
  },
  zipCode: {
    minLength: 5,
    maxLength: 6,
  },
  city: {
    minLength: 2,
  },
  country: {
    minLength: 2,
  },
  eNum: {
    len: 9,
  },
  ePin: {
    len: 4,
  },
};
