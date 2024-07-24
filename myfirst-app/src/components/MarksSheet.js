import React, { useRef } from "react";


function MarksSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let hindiInputRef = useRef();
  let engInputRef = useRef();
  let mathsInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();

  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let telResultRef = useRef();
  let hindiResultRef = useRef();
  let engResultRef = useRef();
  let mathsResultRef = useRef();
  let sciResultRef = useRef();
  let socResultRef = useRef();
  let paraRef=useRef();

  let calculate=()=>{
    // let firstName=firstNameInputRef.current.value;    
    // let lastName=firstNameInputRef.current.value;   
    let telMarks=Number(telInputRef.current.value);
    let hindiMarks=Number(hindiInputRef.current.value);
    let engMarks=Number(engInputRef.current.value);
    let mathsMarks=Number(mathsInputRef.current.value);
    let sciMarks=Number(sciInputRef.current.value);
    let socMarks=Number(socInputRef.current.value);
  
    let totalMarks=(telMarks+hindiMarks+engMarks+mathsMarks+sciMarks+socMarks);

    let result;
    let passMarks=35;
    if(telMarks<passMarks || hindiMarks<passMarks|| engMarks<passMarks|| mathsMarks<passMarks|| sciMarks<passMarks|| socMarks<passMarks){
result="Failed"
    }else{
result="Passed"
    }


    alert(`${firstNameInputRef.current.value} ${lastNameInputRef.current.value} got total marks are ${totalMarks}`);
    paraRef.current.innerHTML=`${firstNameInputRef.current.value} ${lastNameInputRef.current.value} ${result} and got total marks are ${totalMarks}`;
  }

  let inputonFocus=(inputRef)=>{
    inputRef.current.style.backgroundColor = "green";
  }

  let inputonBlur=(inputRef)=>{
    inputRef.current.style.backgroundColor = "";
  }

  let inputonChange=(inputRef,resultRef)=>{
    inputRef.current.style.backgroundColor = "pink";
    inputRef.current.style.color = "black";
    if (
      inputRef.current.value >= 0 &&
      inputRef.current.value <= 100
    ) {
      if (inputRef.current.value >= 35) {
        resultRef.current.innerHTML = "Pass";
        resultRef.current.style.color = "green";
      } else {
        resultRef.current.innerHTML = "Fail";
        resultRef.current.style.color = "red";
      }
    } else {
      resultRef.current.innerHTML = "invalid";
      resultRef.current.style.color = "blue";
    }
  }

  let firstNameonChange=()=>{
    firstNameInputRef.current.style.backgroundColor = "pink";
    firstNameInputRef.current.style.color = "black";
  }



  let lastNameonChange=()=>{
    lastNameInputRef.current.style.backgroundColor = "pink";
    lastNameInputRef.current.style.color = "black";
  }


  return (
    <div>
      <form className="form">
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            ref={firstNameInputRef}
            onFocus={() => inputonFocus(firstNameInputRef)}
            onChange={() => firstNameonChange()}
            onBlur={() => inputonBlur(firstNameInputRef)}
          />
          <span ref={firstNameResultRef} className="span"></span>
        </div>
        <div>
          <label className="label">Last Name</label>
          <input
            type="text"
            ref={lastNameInputRef}
            onFocus={() => inputonFocus(lastNameInputRef)}
            onChange={() => lastNameonChange()}
            onBlur={() => inputonBlur(lastNameInputRef)}
          />
          <span ref={lastNameResultRef} className="span"></span>
        </div>
        <div>
          <label className="label">Telugu</label>
          <input
            type="number"
            ref={telInputRef}
            onFocus={() => inputonFocus(telInputRef)}
            onChange={() => inputonChange(telInputRef, telResultRef)}
            onBlur={() => inputonBlur(telInputRef)}
          />
          <span ref={telResultRef} className="span"></span>
        </div>
        <div>
          <label className="label">Hindi</label>
          <input
            type="number"
            ref={hindiInputRef}
            onFocus={() => inputonFocus(hindiInputRef)}
            onChange={() => inputonChange(hindiInputRef, hindiResultRef)}
            onBlur={() => inputonBlur(hindiInputRef)}
          />
          <span ref={hindiResultRef} className="span"></span>
        </div>
        <div>
          <label className="label">English</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => inputonFocus(engInputRef)}
            onChange={() => inputonChange(engInputRef, engResultRef)}
            onBlur={() => inputonBlur(engInputRef)}
          />
          <span ref={engResultRef} className="span"></span>
        </div>
        <div>
          <label className="label">Maths</label>
          <input
            type="number"
            ref={mathsInputRef}
            onFocus={() => inputonFocus(mathsInputRef)}
            onChange={() => inputonChange(mathsInputRef, mathsResultRef)}
            onBlur={() => inputonBlur(mathsInputRef)}
          />
          <span ref={mathsResultRef} className="span"></span>
        </div>
        <div>
          <label className="label">Science</label>
          <input
            type="number"
            ref={sciInputRef}
            onFocus={() => inputonFocus(sciInputRef)}
            onChange={() => inputonChange(sciInputRef, sciResultRef)}
            onBlur={() => inputonBlur(sciInputRef)}
          />
          <span ref={sciResultRef} className="span"></span>
        </div>
        <div>
          <label className="label">Social</label>
          <input
            type="number"
            ref={socInputRef}
            onFocus={() => inputonFocus(socInputRef)}
            onChange={() => inputonChange(socInputRef, socResultRef)}
            onBlur={() => inputonBlur(socInputRef)}
          />
          <span ref={socResultRef} className="span"></span>
        </div>

        <button type="button" onClick={() => calculate()}>
          Calculate
        </button>
        <p ref={paraRef}></p>
      </form>
    </div>
  );
}




export default MarksSheet;
