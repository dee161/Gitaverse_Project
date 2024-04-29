const validateName = (name) => {
  if (name.trim() === '') {
    return 'Name is required';
  }
  if (!/^[A-Za-z\s]+$/.test(name)) {
    return 'Name must contain only letters and spaces';
  }
  if (name.length < 3 || name.length > 50) {
    return 'Name must be between 3 and 50 characters';
  }
  return '';
};

const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber.trim() === '') {
    return 'Phone number is required';
  }
  if (!/^[6-9][0-9]{9}$/.test(phoneNumber)) {
    return 'Phone number must be 10 digits and valid';
  }
  return '';
};

const validateEmail = (email) => {
  if (email.trim() === '') {
    return 'Email is required';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Invalid email address';
  }
  return '';
};

const validatePassword = (password) => {
  if (password.trim() === '') {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }
  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one digit';
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return 'Password must contain at least one special character';
  }
  return '';
};

const validateConfirmPassword = (password, cpassword) => {
  if (cpassword !== password) {
    return 'Passwords do not match';
  }
  return '';
};

const validateAge = (age) => {
  if (age.trim() === '') {
    return 'Age is required';
  }
  if (age <= 0) {
    return 'Age must be a positive number';
  }
  return '';
};

const validateGender = (gender) => {
  if (gender === '') {
    return 'Gender is required';
  }
  return '';
};

const validatePinCode = (pinCode) => {
  if (pinCode.trim() === '') {
    return 'Pin code is required';
  }
  if (!/^[0-9]{6}$/.test(pinCode)) {
    return 'Pin code must be 6 digits';
  }
  return '';
};

const validateCurrentStatus = (currentStatus) => {
  if (currentStatus === '') {
    return 'Current status is required';
  }
  return '';
};

const validateReferralSource = (referralSource) => {
  if (referralSource === '') {
    return 'Referral source is required';
  }
  return '';
};

const validateCourse = (course) => {
  if (course === '') {
    return 'Course is required';
  }
  return '';
};

export {
  validateName,
  validatePhoneNumber,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateAge,
  validateGender,
  validatePinCode,
  validateCurrentStatus,
  validateReferralSource,
  validateCourse,
};
