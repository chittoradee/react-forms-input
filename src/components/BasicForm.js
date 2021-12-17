import useInput from "../hooks/user-input";

const BasicForm = (props) => {

  const {
	value: enteredName,
	isValid: nameIsValid,
	hasError: nameInputHasError,
	valueChangeHandler : nameChangeHandler,
	inputBlurHandler: nameBlurHandler,
	reset:resetNameInput
  } = useInput((value)=> value.trim() !== '');

  const {
	value: enteredLastName,
	isValid: lastNameIsValid,
	hasError: lastNameInputHasError,
	valueChangeHandler : lastNameChangeHandler,
	inputBlurHandler: lastNameBlurHandler,
	reset:resetLastNameInput
  } = useInput((value)=> value.trim() !== '');

  const {
	value: enteredEmail,
	isValid: emailIsValid,
	hasError: emailInputHasError,
	valueChangeHandler : emailChangeHandler,
	inputBlurHandler: emailBlurHandler,
	reset:resetEmailInput
  } = useInput((value)=> value.includes('@'));

  let formIsValid = false;
  if(nameIsValid && lastNameIsValid && emailIsValid){
	formIsValid =true;
  }

  const formSubmissionHandler = (event) => {
	event.preventDefault();
	if(!formIsValid){
		return;
	}
	resetNameInput();	
	resetLastNameInput();	
	resetEmailInput();	
  };

  const nameInputClasses  = nameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses  = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses  = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
		  	type='text' 
			id='name' 
		  	onChange={nameChangeHandler}	
		  	onBlur={nameBlurHandler}
		  	value={enteredName}
		  />
		  {nameInputHasError && <p className="error-text">First Name must not be empty</p> }
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
		  	type='text' 
			id='lastname' 
		  	onChange={lastNameChangeHandler}	
		  	onBlur={lastNameBlurHandler}
		  	value={enteredLastName}
		  />
		  {lastNameInputHasError && <p className="error-text">Last Name must not be empty</p> }
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
		  	type='text' 
			id='email' 
		  	onChange={emailChangeHandler}	
		  	onBlur={emailBlurHandler}
		  	value={enteredEmail}
		  />
		  {emailInputHasError && <p className="error-text">Enter valid email</p> }
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
