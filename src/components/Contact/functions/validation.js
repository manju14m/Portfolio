// userdata validation

let emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.(com|co|in|org|edu)$/;

const validation = (userData) => {
  const errors = {};
  if (!userData.name.trim()) {
    errors.name = "Please Enter Your Name";
  }
  if (!userData.mail) {
    errors.mail = "Please Enter Your Email Id";
  } else if (!emailPattern.test(userData.mail)) {
    errors.mail = "Please Enter Valid Email Id";
  }

  if (!userData.phone_number) {
    errors.phone_number = "Please Enter Your Phone Number";
  } else if (
    userData.phone_number.length !== 10 ||
    userData.phone_number[0] === "0"
  ) {
    errors.phone_number = "Please Enter valid Phone Number";
  }

  if (!userData.message) {
    errors.message = "Please Enter some message";
  }
  return errors;
};

export default validation;
