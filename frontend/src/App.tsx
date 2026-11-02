import './App.css'
import {useState, useEffect} from 'react'

type Course = {id: number, code: string, name: string}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('/courses').then((response) => {
      return response.json();
    }).then((data) => {
      setIsLoading(false);
      setCourses(data);
    });
  }, [])
  return (
    <div>
          <h1>Student Productivity Platform</h1>
          <p>
            A platform to help students stay organized and productive. Created by me, Alan Damy.
          </p>
          {isLoading && <p>Loading...</p>}
            <ul>
              {courses.map((course) => (
                <li key={course.id}>{course.code} - {course.name}</li>
              ))}
            </ul>
    </div>
  )
}

export default App
