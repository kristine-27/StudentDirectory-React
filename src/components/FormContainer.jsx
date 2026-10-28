const FormComponents = () =>{
    return (
    <>
       <section id="formContainer">
             <form id="studentForm">
                <div>
                    <label htmlFor="name">Student Name</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className="input-field">
                    <label htmlFor="program">Program</label>
                    <input type="text" name="program" id="program"/>
                </div>
                 <div className="input-field">
                    <button>Add Student</button>
                 </div>
             </form>
        </section>
    </>
    )
}

export default FormComponents;