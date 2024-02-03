export const checkValidData=(email,password,name)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
   const isNameValid= name ?/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name):true
   
  
    if(!isEmailValid) return "Email Is Not Valid";
    if(!isPasswordValid) return "Password Is Not Valid";
    if(!isNameValid) return "Name Is Not Valid"
   
    return null;

}