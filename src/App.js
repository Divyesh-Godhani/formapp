import './App.css';
import Color from './Color';

function App() {
  return(
    <>
    <div className="container">
      <h1>React Form</h1>
      <form action="">
        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" id="fname" required />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" id="lname" />
        <br />
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" id="email" required />
        <br />
        <label htmlFor="email">Password :</label>
        <input type="password" name="password" id="password" />
        <br />
        <label htmlFor="Gender">Gender :</label>
        <input type="radio" name="gender" id="male" /> Male
        <input type="radio" name="gender" id="female" />Female
        <br />
        <label htmlFor="Hobby">Hobby :</label>
        <input type="checkbox" name="cricket" id="cricket" /> cricket
        <input type="checkbox" name="football" id="football" /> football
        <input type="checkbox" name="other" id="other" /> other
        <br />
        <label htmlFor="date">Date :</label>
        <input type="date" name="date" id="date" />
        <br />
        <label htmlFor="Color">Color :</label>
        <Color />
        <br />
        <label htmlFor="url">website Url :</label>
        <input type="url" name="url" id="url" />
        <br />
        <input type="file" name="file" id="file" />
        <br />
        <input type="submit" className='btn btn-primary' value="Submit" />
        <input type="submit" className='btn btn-danger' value="Reset" />
      </form>
    </div>
    </>
  );
}

export default App;
