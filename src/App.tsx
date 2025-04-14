import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Presentation from "./Components/Presentation/Presentation";
import About from "./Components/About/About";
import CardList from "./Components/Cards/CardList";
import Projects from "./Components/Projects/Projects";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Experiences from "./Components/Experiences/Experiences";
import Footer from "./Components/Footer/Footer";
import listOfSkills from "./Data/skills.json";
import listOfProjects from "./Data/projects.json";
import listOfExperiences from "./Data/experiences.json";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar></Navbar>
							<Presentation></Presentation>
							<About></About>
							<CardList listOfSkills={listOfSkills}></CardList>
							<Projects
								listOfProjects={listOfProjects}
							></Projects>
							<Experiences
								listOfExperiences={listOfExperiences}
							></Experiences>
							<Footer></Footer>
						</>
					}
				/>
				<Route
					path="/project/:projectId"
					element={<ProjectDetails />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
