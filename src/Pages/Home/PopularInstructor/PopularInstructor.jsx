import { useContext } from "react";
import CardsViewT from "../../../Components/CardsView/CardsViewT";
import Headings from "../../../Components/Headings/Headings";
import useInstructors from "../../../Hooks/useInstructors";
import { ThemeContext } from "../Home/Home";


const PopularInstructor = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [instructors] = useInstructors();

    const popularIns = instructors.filter(inst => inst.numStudents > 50)
    return (
        <div>
            <Headings
                subHeading={"here is our"}
                heading={"Top instructors"}></Headings>
            <div className="grid md:grid-cols-3 gap-4 justify-items-center">
                {
                    popularIns.map(instructor => <CardsViewT key={instructor.id}
                        name={instructor.name}
                        email={instructor.email}
                        image={instructor.image}
                        numClassesTaken={instructor.numClassesTaken}
                        classesTaken={instructor.classesTaken}
                        numStudents={instructor.numStudents}
                        instructorQuotes={instructor.instructorQuotes}
                    ></CardsViewT>)
                }
            </div>

        </div>
    );
};

export default PopularInstructor;