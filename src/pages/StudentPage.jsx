import HeaderContainer from "../components/HeaderContainer";
import FormContainer from "../components/FormContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () =>{
    const students = [
        {id: 1, srcode: "24-14072", name: "Kristine Lasheras", program: "BSIT"},
        {id: 2, srcode: "24-14563", name: "Thelma Lasheras", program: "BSIT"},
        {id: 3, srcode: "24-14072", name: "Teresa Lasheras", program: "BSIT"},
    ];

    return(
        <>
     <HeaderContainer />
     <FormContainer />
     <ListContainer data={students}/> 
    </>
    )
}

export default StudentPage;

