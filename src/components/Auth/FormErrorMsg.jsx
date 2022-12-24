export const registerOptions = {
  fullName: {
    required: "Full name required",
    pattern: {
      value: /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
      message:
        "Write full name and first name and last name must be 3 characters or more",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please enter a valid email",
    },
  },
  phone: {
    required: "Phone number is required",
    pattern: {
      value: /^[0-9+-]+$/,
      message: "This is not a valid phone number."
    }, 
    minLength: {
      value: 6,
      message: "This number is too short, minimum length 6, try again"
    }, 
    maxLength: {
      value: 14,
      message: "This number is too long, maximum length 14, try again"
    }
  },
  password: {
    required: "Password is required",
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:",
    },
  },

  confirmPassword: {
    required: "Confirm password is required",
  },

  agreeTerm: {
    required: "Agree T & C is required",
  },
};
