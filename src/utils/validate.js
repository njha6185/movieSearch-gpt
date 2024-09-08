export const validationCheck = ({email, password}) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
      email
    );
    const ispasswordvalid = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
    if (!isEmailValid) return "Invalid Email!!!";
    if (!ispasswordvalid) return "Invalid Password!!!";
    return null;
  };
  
  export const validateName = (name) => {
      if(name.length===0) return "Name is required";
      if(name.length<3) return "Name should be atleast 3 characters long";
      return null;
  }
  